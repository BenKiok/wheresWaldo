const list = (() => {
    const container = document.createElement("div"),
          ul = document.createElement("ul"),
          h2 = document.createElement("h2"),
          li0 = document.createElement("li"),
          li1 = document.createElement("li"),
          li2 = document.createElement("li");
    
    container.id = "list";
    h2.innerText = "List of Characters";
    li0.innerText = "Char 1";
    li1.innerText = "Char 2";
    li2.innerText = "Char 3";

    ul.append(li0, li1, li2);
    container.append(h2, ul);

    return container;
})();

export default list;