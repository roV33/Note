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

const downloadTitle =
    document.getElementById("downloadTitle");

const downloadSubtitle =
    document.getElementById("downloadSubtitle");

const cancelDownload =
    document.getElementById("cancelDownload");

const warningOverlay =
    document.getElementById("warningOverlay");

const warningOK =
    document.getElementById("warningOK");

const warningCancel =
    document.getElementById("warningCancel");

const jumpscare =
    document.getElementById("jumpscare");

const scareVideo =
    document.getElementById("scareVideo");


let progress = 0;
let downloadTimer = null;


/* ========================= */
/* MULAI DOWNLOAD PALSU */
/* ========================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    progress = 0;

    progressFill.style.width = "0%";
    progressText.textContent = "0%";

    downloadTitle.textContent =
        "Mengunduh file...";

    downloadSubtitle.textContent =
        "Persiapan halaman ujian";

    downloadStatus.textContent =
        "Menyiapkan...";

    downloadOverlay.style.display = "flex";


    downloadTimer = setInterval(function () {

        progress += Math.floor(Math.random() * 4) + 1;


        if (progress >= 100) {

            progress = 100;

            clearInterval(downloadTimer);

            progressFill.style.width = "100%";
            progressText.textContent = "100%";

            downloadTitle.textContent =
                "Memproses file...";

            downloadSubtitle.textContent =
                "Pemeriksaan sedang berlangsung";

            downloadStatus.textContent =
                "Memeriksa file...";


            /*
             * Setelah 100%, tunggu sebentar
             * lalu tampilkan peringatan.
             */

            setTimeout(function () {

                downloadOverlay.style.display =
                    "none";

                warningOverlay.style.display =
                    "flex";

            }, 1800);

            return;
        }


        progressFill.style.width =
            progress + "%";

        progressText.textContent =
            progress + "%";


        if (progress < 30) {

            downloadStatus.textContent =
                "Menghubungkan ke server...";

        } else if (progress < 70) {

            downloadStatus.textContent =
                "Mengunduh file...";

        } else {

            downloadStatus.textContent =
                "Memproses file...";

        }

    }, 180);

});


/* ========================= */
/* BATAL SAAT DOWNLOAD */
/* ========================= */

cancelDownload.addEventListener("click", function () {

    if (downloadTimer) {
        clearInterval(downloadTimer);
    }

    downloadOverlay.style.display =
        "none";

    playJumpscare();

});


/* ========================= */
/* TOMBOL OK */
/* ========================= */

warningOK.addEventListener("click", function () {

    warningOverlay.style.display =
        "none";

    playJumpscare();

});


/* ========================= */
/* TOMBOL BATAL PADA WARNING */
/* ========================= */

warningCancel.addEventListener("click", function () {

    warningOverlay.style.display =
        "none";

    playJumpscare();

});


/* ========================= */
/* JUMPSCARE */
/* ========================= */

function playJumpscare() {

    jumpscare.style.display =
        "flex";

    scareVideo.currentTime = 0;

    scareVideo.play().catch(function (error) {

        console.log(
            "Video tidak dapat diputar otomatis:",
            error
        );

    });

}

});
