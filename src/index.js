import list from "./list.js";
import start from "./start.js";
import image from "./image.js";
import reticule from "./reticule.js";
import dropdown from "./dropdown.js";

const app = (() => {
    const app = document.querySelector("#app");

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

                            Array.from(list.childNodes[1].childNodes).some((li) => {
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

    start.childNodes[1].addEventListener("click", () => {
        document.querySelector("#app").append(list, image);
        start.remove();
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

        Array.from(list.childNodes[1].childNodes).every((li) => {
            if (!li.classList.contains("crossout")) {
                allCharsFound = false;
            }
            
            return allCharsFound;
        });

        if (allCharsFound) {
            alert("Congradulations! You found them all!");
            alert("Thanks for playing!");
            
            Array.from(image.childNodes).forEach((node) => {
                if (node.classList.contains("charMarker")) {
                    node.remove();
                }

                // if (reticule) {
                //     reticule.remove();
                // }

                // if (dropdown) {
                //     dropdown.remove();
                // }
            });

            Array.from(list.childNodes[1].childNodes).forEach((li) => {
                li.classList.remove("crossout");
            });

            list.remove();
            image.remove();

            app.appendChild(start);
        }
    }
})();