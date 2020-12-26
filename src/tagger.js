const tagger = (() => {
    const container = document.createElement("div"),
          reticle = document.createElement("div"),
          charSelect = document.createElement("select"),
          defaultOption = document.createElement("option");
    
    container.id = "tagger";
    defaultOption.innerText = "Select a character";
    charSelect.appendChild(defaultOption);

    for (let i = 0; i < 3; i++) {
        const option = document.createElement("option");
        option.innerText = "Character " + (i + 1);
        charSelect.appendChild(option);
    }
    
    container.append(reticle, charSelect);

    return container;
})();

export default tagger;