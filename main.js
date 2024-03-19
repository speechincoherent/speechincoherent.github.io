


/*game level two*/
var levelTwoNumber = 3
window.onload = numberChecker()

function numberChecker() {
    var a = document.getElementById("input").value;
    if (levelTwoNumber = 3) {
        window.location.href = "https://speechincoherent.github.io/puzzle/eerht.html";
    }
    else {
        document.getElementById("output").innerHTML = "try again";
    }
}

/*redirect*/
function redirectLinks() {
    window.location.href = "https://speechincoherent.github.io/links"
}
function redirectContact() {
    window.location.href = "https://speechincoherent.github.io/contact"
}
function redirectGame() {
    window.location.href = "https://speechincoherent.github.io/puzzle/start"
}
function redirectBlog() {
    window.location.href = "https://speechincoherent.github.io/blog"
}
function redirectHome() {
    window.location.href = "https://speechincoherent.github.io"
}
function delayedredirect(delay) {
    setTimeout(redirect(),(delay));
};