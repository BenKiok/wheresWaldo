const list = (() => {
    const container = document.createElement("div"),
          ul = document.createElement("ul"),
          h2 = document.createElement("h2"),
          li0 = document.createElement("li");
    
    container.id = "list";
    h2.innerText = "List of Characters";
    li0.innerText = "Waldo";

    ul.appendChild(li0);
    container.append(h2, ul);

    return container;
})();

export default list;