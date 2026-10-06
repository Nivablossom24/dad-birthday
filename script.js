/* ==========================================
   MUSIC
========================================== */

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "🎵 Play Music";

    } else {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicButton.innerHTML = "🔇 Pause Music";

            })
            .catch(() => {

                alert(
                    "Please make sure birthday-music.mp3 is inside the Dad-Birthday folder."
                );

            });

    }

}


/* ==========================================
   SURPRISE BUTTON
========================================== */

function startSurprise() {

    createConfetti();

    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   GIFT
========================================== */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const message =
        document.getElementById("giftMessage");

    gift.classList.toggle("open");

    if (gift.classList.contains("open")) {

        message.classList.add("show");

        createConfetti();

    } else {

        message.classList.remove("show");

    }

}


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    const pieces = [
        "#c76d55",
        "#f5c6b5",
        "#e6a18d",
        "#ffd89c",
        "#8c6a60"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            Math.random() * -100 + "px";


        piece.style.background =
            pieces[
                Math.floor(
                    Math.random() * pieces.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* ==========================================
   PAGE LOAD
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        createConfetti();

    }, 1000);

});
