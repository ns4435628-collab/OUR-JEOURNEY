const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "story.html";

    }, 1000);

});