document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("examForm");
    const jumpscare = document.getElementById("jumpscare");


    form.addEventListener("submit", function (event) {

        // Mencegah halaman melakukan reload
        event.preventDefault();


        // Tampilkan jumpscare
        jumpscare.style.display = "flex";

    });

});
