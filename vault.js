function explore() {
    window.location.href = "explore.html";
}

function logout() {
    window.location.href = "login.html";
}

/* AUTOPLAY MUSIC */

window.addEventListener("load", function () {

    const music = document.getElementById("bgMusic");

    music.play().then(() => {

        setTimeout(() => {

            music.muted = false;

        }, 1200);

    }).catch(err => {

        console.log("Autoplay blocked");

    });

});