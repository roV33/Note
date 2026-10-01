document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("examForm");
    const jumpscare = document.getElementById("jumpscare");
    const scareAudio = document.getElementById("scareAudio");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Tampilkan jumpscare
        jumpscare.style.display = "flex";

        // Atur volume
        scareAudio.volume = 1.0;

        // Putar dan ulangi terus
        scareAudio.loop = true;
        scareAudio.currentTime = 0;

        scareAudio.play();

    });

});
