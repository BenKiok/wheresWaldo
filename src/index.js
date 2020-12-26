import list from "./list.js";
import start from "./start.js";
import image from "./image.js";
import tagger from "./tagger.js";

const app = (() => {
    const app = document.querySelector("#app");
    app.appendChild(start);

    start.childNodes[1].addEventListener("click", () => {
        image.appendChild(tagger);
        app.append(list, image);
        start.remove();
    });
    
})();