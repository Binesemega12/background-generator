var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var direction = document.getElementById("direction");
var body = document.getElementById("gradient");

function setGradient() {
        var dir = direction.value;
        if (dir === "radial") {
                body.style.background =
                        "radial-gradient(circle, " +
                        color1.value + ", " +
                        color2.value + ", " +
                        color3.value + ")";
        } else {
                body.style.background =
                        "linear-gradient(" + dir + ", " +
                        color1.value + ", " +
                        color2.value + ", " +
                        color3.value + ")";
        }

        css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
direction.addEventListener("input", setGradient);

setGradient();
