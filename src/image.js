const image = (() => {
    const container = document.createElement("div"),
          img = document.createElement("img");

    container.id = "image";
    img.src = "../src/images/Waldo_placeholder.png";
    container.appendChild(img);

    return container;
})();

export default image;