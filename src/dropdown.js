const dropdown = (() => {
    const charSelect = document.createElement("select"),
          defaultOption = document.createElement("option"),
          waldoOption = document.createElement("option");
    
    charSelect.id = "dropdown";
    
    defaultOption.innerText = "Select a character";
    waldoOption.innerText = "Waldo";
    charSelect.append(defaultOption, waldoOption);

    return charSelect;
})();

export default dropdown;