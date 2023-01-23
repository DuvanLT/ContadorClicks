
var clicks = document.getElementById("count-clicks"), button = document.querySelector("button").addEventListener("click", contar);
var firstAch = document.getElementById("first-achievement"), secondAch = document.getElementById("second-achievement"), thirdAch = document.getElementById("third-achievement"), fourthAch = document.getElementById("fourth-achievement"), fifthAch = document.getElementById("fifth-achievement"); 
var achievement = [firstAch,secondAch,thirdAch,fourthAch,fifthAch];
var clickContent = 0;

function contar() {
    clickContent = clickContent + 1;
    clicks.innerText = clickContent;

    if (clickContent == 1) {
        showachievement(0);
    } else if (clickContent == 100) {
        showachievement(1);
    } else if (clickContent == 1000) {
        showachievement(2);
    } else if (clickContent == 5000) {
        showachievement(3)
    } else if (clickContent == 10000) {
        showachievement(4);
        }
}

function showachievement(logro) {  
         achievement[logro].classList.add("showAch");
        setTimeout(function(){
        achievement[logro].classList.remove("showAch");
        }, 1800);
}