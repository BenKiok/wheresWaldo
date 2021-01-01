const scoreboard = (() => {
    const container = document.createElement("div"),
          h1 = document.createElement("h1"),
          list = document.createElement("ul"),
          button = document.createElement("button");

    container.id = "score";
    h1.innerText = "Scoreboard";
    button.innerText = "Return to Start";

    database.child("Scores").once("value")
    .then((snapshot) => {
        const scoreboard = snapshot.val();
        let arr = [], minArr = [], arrLength;
        
        for (const scurr in scoreboard) {
            arr.push(scoreboard[scurr]);
        }

        arrLength = arr.length;

        for (let i = 0; i < arrLength; i++) {
            let min = arr[0];

            for (let j = 0; j < arr.length; j++) {
                if (min > arr[j]) {
                    min = arr[j];
                }
            }

            arr.splice(arr.indexOf(min), 1);
            minArr.push(min);
        }

        for (let k = 0; k < minArr.length; k++) {
            const li = document.createElement("li");
            let name;

            for (const scurr in scoreboard) {
                if (minArr[k] == scoreboard[scurr]) {
                    name = scurr;
                    break;
                }
            }

            li.innerText = (k + 1) + ". " + name + ": " + (minArr[k] / 1000) + " seconds";
            list.appendChild(li);
        }

        container.append(h1, list, button);
    });

    return container;
})();

export default scoreboard;