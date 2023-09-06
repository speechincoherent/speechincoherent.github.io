var number = 3
window.onload = numberChecker()

function numberChecker() {
    var a = document.getElementById("input").value;
    if (number = 3 || number == "three") {
        window.location.href = "https://speechincoherent.github.io/puzzle/eerht.html";
        localStorage.setItem('level3', "done")
    }
    else {
        document.getElementById("output").innerHTML = "try again";
    }
}