// CHANGE THESE
const correctUsername = "hemakarthika";
const correctPassword = "ipurpleyou";

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {

        window.location.href = "vault.html";

    } else {

        document.getElementById("error").innerText = "You did it wrong 💔";

    }

}
window.addEventListener("load", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.5;

    music.play().catch(() => {
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    });

});
function logout() {

    window.location.href = "index.html";

}
function explore() {

    window.location.href = "explore.html";

}

function logout() {

    window.location.href = "index.html";

}
function openVideo() {

    document.getElementById("videoModal").style.display = "flex";

}

function closeVideo() {

    document.getElementById("videoModal").style.display = "none";

}
function goSurprisePage() {

    window.location.href = "surprisec.html";

}
