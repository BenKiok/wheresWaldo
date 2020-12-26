const start = (() => {
    const container = document.createElement("div"),
          h1 = document.createElement("h1"),
          start = document.createElement("button");
    
    container.id = "start";
    h1.innerText = "Where's Waldo?";
    start.innerText = "Start!";
    
    container.append(h1, start);

    return container;
})();

export default start;