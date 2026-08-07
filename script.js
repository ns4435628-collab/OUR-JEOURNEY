const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "0";

    setTimeout(function () {
        window.location.href = "letter.html";
    }, 1200);

});