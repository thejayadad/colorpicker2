
let color = document.getElementById("color")
let hex = document.getElementById("hex")

color.addEventListener("input", () => {
    let input = color.value;
    hex.value = input;

})