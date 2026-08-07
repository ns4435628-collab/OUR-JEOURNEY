const gallery = [

{
    image:"images/school.jpg",
    title:"School Friends ❤️",
    text:"Where our beautiful journey quietly began."
},

{
    image:"images/train.jpg",
    title:"Two Years Later 🚆",
    text:"Life separated us... but destiny had different plans."
},

{
    image:"images/train-selfie.jpg",
    title:"One Random Train ❤️",
    text:"One unexpected meeting changed everything forever."
},

{
    image:"images/first-meet.jpg",
    title:"Our Meeting 🥹",
    text:"The day my heart quietly chose you."
},

{
    image:"images/best.jpg",
    title:"You & Me ❤️",
    text:"Every moment with you became my favourite memory."
},

{
    image:"images/final.jpg",
    title:"Forever ❤️",
    text:"This is only the beginning of our forever."
}

];

let current = 0;

const bg = document.getElementById("bg");
const img = document.getElementById("galleryImage");
const title = document.getElementById("galleryTitle");
const text = document.getElementById("galleryText");


function loadPhoto(index){

    img.style.opacity = "0";
    img.style.transform = "scale(.96)";

    setTimeout(() => {

        img.src = gallery[index].image;

        bg.style.backgroundImage = `url('${gallery[index].image}')`;

        title.textContent = gallery[index].title;
        text.textContent = gallery[index].text;

        img.onload = () => {
            img.style.opacity = "1";
            img.style.transform = "scale(1)";
        };

    },500);

}

function nextPhoto(){

    current++;

    if(current >= gallery.length){

        window.location.href = "letter.html";
        return;

    }

    loadPhoto(current);

    if (current < gallery.length - 1) {

    setTimeout(nextPhoto, 7000);

} else {

    setTimeout(() => {
        window.location.href = "letter.html";
    }, 8500);

}

}
loadPhoto(0);

setTimeout(nextPhoto,7000);