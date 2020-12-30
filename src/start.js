const start = (() => {
    const container = document.createElement("div"),
          h1 = document.createElement("h1"),
          checkDiv = document.createElement("div"),
          checkboxLabel = document.createElement("label"),
          checkbox = document.createElement("input"),
          textbox = document.createElement("input"),
          start = document.createElement("button");
    
    container.id = "start";
    h1.innerText = "Where's Waldo?";
    start.innerText = "Start!";
    checkDiv.id = "checkboxContainer";
    checkboxLabel.innerText = "Time My Game:";
    checkboxLabel.for = "checkbox";
    checkbox.id = "checkbox";
    checkbox.type = "checkbox";
    textbox.placeholder = "Your name here";
    textbox.id = "text";
    textbox.type = "text";
    textbox.classList.add("noDisplay");

    checkDiv.append(checkboxLabel, checkbox);
    container.append(h1, checkDiv, textbox, start);

    return container;
})();

export default start;