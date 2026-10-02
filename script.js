document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("examForm");
    const jumpscare = document.getElementById("jumpscare");
    const scareVideo = document.getElementById("scareVideo");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        jumpscare.style.display = "flex";

        scareVideo.currentTime = 0;
        scareVideo.play();

    });

});
