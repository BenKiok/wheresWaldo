const dropdown = (() => {
    const charSelect = document.createElement("select"),
          defaultOption = document.createElement("option");
    
    charSelect.id = "dropdown";
    
    defaultOption.innerText = "Select a character";
    charSelect.appendChild(defaultOption);

    for (let i = 0; i < 3; i++) {
        const option = document.createElement("option");
        option.innerText = "Character " + (i + 1);
        charSelect.appendChild(option);
    }

    return charSelect;
})();

export default dropdown;