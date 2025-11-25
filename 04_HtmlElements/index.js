// Elements
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
const btnCalc = document.getElementById("btnCalc");
const lblRes = document.getElementById("lblRes");
const output = document.getElementById("output");

// Validate input (number only)
function validateInput(input) {
    if (!isNaN(input.value) && input.value.trim() !== "") {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Print to textarea with append mode
function print(msg, append = false) {
    if (append) output.value += (output.value ? "\n" : "") + msg;
    else output.value = msg;
}

// Convert operation value to symbol
function opSymbol(op) {
    switch (op) {
        case "add": return "+";
        case "sub": return "−";
        case "mul": return "×";
        case "div": return "÷";
    }
}

// Calculate button click
btnCalc.addEventListener("click", () => {
    if (!validateInput(txt1) || !validateInput(txt2)) {
        alert("Please enter valid numbers!");
        return;
    }

    const num1 = parseFloat(txt1.value);
    const num2 = parseFloat(txt2.value);
    const op = document.getElementById("operation").value;
    let res;

    switch (op) {
        case "add": res = num1 + num2; break;
        case "sub": res = num1 - num2; break;
        case "mul": res = num1 * num2; break;
        case "div":
            if (num2 === 0) { alert("Cannot divide by zero!"); return; }
            res = num1 / num2; break;
    }

    lblRes.innerText = res;
    print(`${num1} ${opSymbol(op)} ${num2} = ${res}`, true);
});
