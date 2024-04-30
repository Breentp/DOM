const divOne = document.getElementById("div1");
console.log(divOne);

const divCollec = document.getElementsByTagName("div");
console.log(divCollec);

const p = document.getElementById("p-element");
const userNumberInputs = document.getElementsByName("userNumber");
const userNumberInput = userNumberInputs[0];

console.log(p, userNumberInput);

// Events
userNumberInput.addEventListener("input", (event) => {
    console.log(event.target.value);
    p.innerText = event.target.value;
});
