let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
    // You may move this JS to another file if you wish

// Start your code here
// You may move this JS to another file if you wish
errorBtns[0].onclick = () => {
    console.log("Console Log Demo");
}

errorBtns[1].onclick = () => {
    console.error("Console Error Demo");
}

errorBtns[2].onclick = () => {
    console.count("Count Button");
}

errorBtns[3].onclick = () => {
    console.warn("Console Warn Button");
}

errorBtns[4].onclick = () => {
    console.assert(false);
}

errorBtns[5].onclick = () => {
    console.clear();
}

errorBtns[6].onclick = () => {
    console.dir(errorBtns[6]);
}

errorBtns[7].onclick = () => {
    console.dirxml(errorBtns[7]);
}

errorBtns[8].onclick = () => {
    console.group();
}

errorBtns[9].onclick = () => {
    console.groupEnd();
}

errorBtns[10].onclick = () => {
    console.table(["Console", "Table", "Button"]);
}

errorBtns[11].onclick = () => {
    console.time("Timing")
}

errorBtns[12].onclick = () => {
    console.timeEnd("Timing")
}

errorBtns[13].onclick = () => {
    console.trace();
}


class GetElemError extends Error {
    constructor(message) {
        super(message);
        this.name = "GetElemError";
    }
}

errorBtns[14].onclick = () => {
    const changeElemHTML = (name, text) => {

        const elem = document.getElementById(name);

        if (elem == null) {
            throw new GetElemError(`Element with name '${name}' does not exist!`);
        }
        elem.innerHTML = text;
    }

    try {
        changeElemHTML("nonexistent", "Hello");
    } catch (err) {
        if (err instanceof GetElemError) {
            console.log("WEE WOO ERROR ERROR");
            console.error(`${err.name}: ${err.message}`);
        } else {
            throw err;
        }
    }
}