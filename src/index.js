import list from "./list.js";
import start from "./start.js";
import image from "./image.js";
import reticule from "./reticule.js";
import dropdown from "./dropdown.js";

const app = (() => {
    const app = document.querySelector("#app");
    app.appendChild(start);

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
        app.append(list, image);
        start.remove();
    });
    
})();