import list from "./list.js";
import start from "./start.js";
import image from "./image.js";
import reticule from "./reticule.js";
import dropdown from "./dropdown.js";

const app = (() => {
    const app = document.querySelector("#app");
    let score = 0, id, playerName;

    // *** Event listeners ***
    dropdown.addEventListener("input", () => {
        let charX,
            charY,
            userX = reticule.offsetLeft,
            userY = reticule.offsetTop;

        if (dropdown.value != "Select a character") {
            database.once("value")
                .then((promise) =>  {
                    charX = promise.val()["X"];
                    charY = promise.val()["Y"];
                    
                    if (charX - 31 <= userX && charX +  31 >= userX) {
                        if (charY - 31 <= userY && charY + 31 >= userY) {
                            alert("Yay! You found Waldo!");

                            const marker = foundCharacter();
                            image.appendChild(marker);
                            marker.style.top = (charY) + "px";
                            marker.style.left = (charX) + "px";

                            Array.from(list.querySelector("ul").childNodes).some((li) => {
                                if (li.innerText = "Waldo") {
                                    li.classList.add("crossout");
                                    return true;
                                }
                                
                                return false;
                            });

                            verifyWin();
                            return;
                        }
                    }

                    alert("Whoops! Wrong character!");
                    dropdown.value = "Select a character";
                    reticule.remove();
                    dropdown.remove();
                });
        }
    });

    image.addEventListener("click", (event) => {
        if (reticule || dropdown) {
            reticule.remove();
            dropdown.remove();
        }
    
        image.append(reticule, dropdown);

        if (event.offsetY < 62 && event.offsetX < 62) {
            reticule.remove();
            dropdown.remove();
        } else {
            reticule.style.top = (event.offsetY - 31) + "px";
            reticule.style.left = (event.offsetX - 31) + "px";

            dropdown.style.top = (event.offsetY + 31) + "px";
            dropdown.style.left = (event.offsetX - 31) + "px";
        }
    });

    start.querySelector("#checkbox").addEventListener("input", (event) => {
        const input = start.querySelector("#text");
        input.classList.toggle("noDisplay");

        if (input.classList.contains("noDisplay")) {
            input.value = "";
        }
    });

    start.querySelector("button").addEventListener("click", () => {
        if (start.querySelector("#checkbox").checked) {
            if (start.querySelector("#text").value) {
                playerName = start.querySelector("#text").value;
                start.querySelector("#text").value = "";
            } else {
                alert("Must type a player name to time your game.");

                return;
            }
        }

        document.querySelector("#app").append(list, image);
        start.remove();

        id = startTimer();
    });

    // *** Starts application ***
    app.appendChild(start);
    
    // *** Main functions ***
    function foundCharacter () {
        const marker = document.createElement("div");
        marker.classList.add("charMarker");
    
        return marker;
    }

    function verifyWin () {
        let allCharsFound = true;

        Array.from(list.querySelector("ul").childNodes).every((li) => {
            if (!li.classList.contains("crossout")) {
                allCharsFound = false;
            }
            
            return allCharsFound;
        });

        if (allCharsFound) {
            stopTimer();
            
            alert("Congradulations" + (playerName ? (" " + playerName) : "") + "! You found them all!");
            alert((score ? "Your time was " + (score/1000) + " seconds. " : "") + "Thanks for playing!");
            
            Array.from(image.childNodes).forEach((node) => {
                if (node.classList.contains("charMarker")) {
                    node.remove();
                }
            });

            Array.from(list.querySelector("ul").childNodes).forEach((li) => {
                li.classList.remove("crossout");
            });

            list.remove();
            image.remove();

            app.appendChild(start);

            score = 0;
            playerName = null;
        }
    }

    function startTimer () {
        return setInterval(() => {
            score += 10;
        }, 10);
    }

    function stopTimer (id) {
        clearInterval(id);
    }
})();