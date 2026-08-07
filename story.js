const scenes = [
{
    title: "📚 School Friends",
    text:"We were just two school best friends...<br><br>Laughing, talking, and sharing countless memories.<br><br>Never imagining that one day...<br>our friendship would become the most beautiful love story of my life. ❤️",
    image: "images/01-school.jpg"
},
{
    title: "💔 Two Years Later",
    text: "Life became busy...<br><br>No calls...<br>No messages...<br><br>But destiny wasn't finished with us.",
    image: "images/02-train.jpg"
},
{
    title: "🚆 Destiny",
    text: "After two years...<br><br>Life gave us one more chance.<br><br>One random train...<br><br>Changed our story forever. ❤️",
    image: "images/03-selfie.jpg"
},
{
    title: "🚆 Our Second Beginning",
    text: "You saw me on that train...<br><br>I didn't even notice you.<br>I was lost in my own world.<br><br>But you didn't give up.<br>You tried to contact me.<br>You kept making efforts.<br><br>Looking back now...<br>I'm so thankful you chose to stay. ❤️",
    image: "images/04-first-meet.jpg"
},
{
    title: "❤️ You Never Gave Up",
    text: "At first...<br><br>I didn't give you the time you deserved.<br>Sometimes I hurt you.<br><br>But you never stopped trying.<br>Your efforts slowly melted my heart.<br><br>Thank you for believing in us. ❤️",
    image: "images/05-best.jpg"
},

{
    title: "💖 Forever Starts Here",
    text: "Today...<br><br>You are my peace.<br>My happiness.<br>My safe place.<br><br>I don't know what the future holds...<br>But I know one thing...<br><br>I want you beside me in every chapter of my life. ❤️",
    image: "images/10-final.jpg"
}
];

let current = 0;

const img = document.getElementById("storyImage");
const title = document.getElementById("title");
const text = document.getElementById("text");
const progressBar = document.getElementById("progressBar");
showScene(0);

function nextScene(){

    current++;

    if(current >= scenes.length){

        window.location.href = "gallery.html";
        return;

    }

    img.style.opacity = "0";
    title.style.opacity = "0";
    text.style.opacity = "0";

    setTimeout(()=>{

        showScene(current);

        img.style.opacity = "1";
        title.style.opacity = "1";
        text.style.opacity = "1";

    },700);

}


function showScene(index)
{

    img.src = scenes[index].image;
    title.innerHTML = scenes[index].title;
    text.innerHTML = scenes[index].text;
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

}
const timings = [
    8000,   // School
    10000,  // Two Years
    10000,   // Destiny
    15000,  // Second Beginning
    15000,  // You Never Gave Up
    15000   // Forever
];

function playStory() {

    progressBar.style.transition = `width ${timings[current]}ms linear`;
    progressBar.style.width = "100%";

    setTimeout(() => {

        nextScene();

        if(current < scenes.length){
            playStory();
        }

    }, timings[current]);

}

playStory();