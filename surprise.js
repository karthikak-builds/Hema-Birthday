const envelope = document.getElementById("envelope")
const letter = document.getElementById("letter")
const music = document.getElementById("music")
const text = document.querySelector(".paper")

let message = text.innerText
text.innerText = ""

envelope.addEventListener("click", () => {

    envelope.classList.add("open")

    music.play()

    setTimeout(() => {

        envelope.style.display = "none"

        letter.classList.add("show")

        startTypewriter()

        createConfetti()

        shootingStars()

    }, 1200)

})

function startTypewriter() {

    let i = 0

    function type() {

        if (i < message.length) {

            text.innerHTML += message.charAt(i)

            i++

            setTimeout(type, 40)

        }

        else {

            autoScroll()

        }

    }

    type()

}

function autoScroll() {

    let speed = 0.2

    function scroll() {

        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {

            window.scrollBy(0, speed)

            requestAnimationFrame(scroll)

        }

    }

    scroll()

}

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div")

        confetti.className = "confetti"

        confetti.style.left = Math.random() * 100 + "vw"

        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"

        document.body.appendChild(confetti)

        setTimeout(() => confetti.remove(), 5000)

    }

}

function shootingStars() {

    setInterval(() => {

        const star = document.createElement("div")

        star.className = "shooting-star"

        star.style.left = Math.random() * 100 + "vw"

        star.style.top = Math.random() * 50 + "vh"

        document.body.appendChild(star)

        setTimeout(() => star.remove(), 2000)

    }, 2000)

}