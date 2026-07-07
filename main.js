// const display = document.getElementById("display");

// function append(value) {
//     display.value += value;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function deleteLast() {
//     display.value = display.value.slice(0, -1);
// }

// function calculate() {

//     try {

//         let expression = display.value.replace(/%/g, "/100");

//         display.value = eval(expression);

//     } catch {

//         display.value = "Error";

//         setTimeout(() => {
//             display.value = "";
//         }, 1000);
//     }

// }

// // Keyboard Support

// document.addEventListener("keydown", (e) => {

//     const key = e.key;

//     if (
//         (key >= "0" && key <= "9") ||
//         key === "." ||
//         key === "+" ||
//         key === "-" ||
//         key === "*" ||
//         key === "/" ||
//         key === "%"
//     ) {
//         append(key);
//     }

//     if (key === "Enter") {
//         calculate();
//     }

//     if (key === "Backspace") {
//         deleteLast();
//     }

//     if (key === "Escape") {
//         clearDisplay();
//     }
// });