document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("examForm");

    const downloadOverlay =
        document.getElementById("downloadOverlay");

    const progressFill =
        document.getElementById("progressFill");

    const progressText =
        document.getElementById("progressText");

    const downloadStatus =
        document.getElementById("downloadStatus");

    const cancelDownload =
        document.getElementById("cancelDownload");

    const jumpscare =
        document.getElementById("jumpscare");

    const scareVideo =
        document.getElementById("scareVideo");


    let progress = 0;
    let downloadTimer = null;


    /* ========================= */
    /* KONFIRMASI DATA */
    /* ========================= */

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Reset progress
        progress = 0;

        progressFill.style.width = "0%";
        progressText.textContent = "0%";
        downloadStatus.textContent = "Menyiapkan...";

        // Tampilkan download palsu
        downloadOverlay.style.display = "flex";


        /* ========================= */
        /* SIMULASI DOWNLOAD */
        /* ========================= */

        downloadTimer = setInterval(function () {

            // Kecepatan download dibuat tidak terlalu cepat
            progress += Math.floor(Math.random() * 4) + 1;


            if (progress >= 100) {
                progress = 100;

                clearInterval(downloadTimer);

                downloadStatus.textContent =
                    "Download selesai";
            }


            progressFill.style.width = progress + "%";
            progressText.textContent = progress + "%";


            if (progress < 30) {

                downloadStatus.textContent =
                    "Menghubungkan ke server...";

            } else if (progress < 70) {

                downloadStatus.textContent =
                    "Mengunduh file...";

            } else if (progress < 100) {

                downloadStatus.textContent =
                    "Memproses file...";

            }

        }, 180);

    });


    /* ========================= */
    /* TOMBOL BATAL */
    /* ========================= */

    cancelDownload.addEventListener("click", function () {

        // Hentikan simulasi download
        if (downloadTimer) {
            clearInterval(downloadTimer);
        }

        // Hilangkan download overlay
        downloadOverlay.style.display = "none";


        /* ========================= */
        /* JUMPSCARE */
        /* ========================= */

        jumpscare.style.display = "flex";

        scareVideo.currentTime = 0;

        scareVideo.play().catch(function (error) {

            console.log(
                "Video tidak dapat diputar otomatis:",
                error
            );

        });

    });

});
