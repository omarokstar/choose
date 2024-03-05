const b = document.querySelector("img.iphone");
const d = document.querySelector("img.bread");
b.addEventListener("mouseover", moveHover);
d.addEventListener("click", trans);
function moveHover() {

    var i = Math.floor(Math.random() * 100) + 1;
    var j = Math.floor(Math.random() * 100) + 1;
var randomChoice = Math.random() < 0.5 ? "left" : "right";

    b.style.left = randomChoice === "left" ? i + "px" : "";
    b.style.right = randomChoice === "right" ? j + "px" : "";
    var randomChoice2 = Math.random() < 0.5 ? "top" : "bottom";
    b.style.top = randomChoice2 === "top" ? i + "px" : "";
    b.style.bottom = randomChoice2 === "bottom" ? i + "px" : "";
    document.querySelector('img.a').src="oks.jpeg"

}
function trans(){

        window.location.href = 'card.html';

}





