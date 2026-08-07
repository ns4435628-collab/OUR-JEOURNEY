
const text = document.getElementById("text");

const restart = document.getElementById("restart");

const lines = [

"I Love You... ❤️",

"I Really Do...",

"And I'll Keep Choosing You...",

"In Every Lifetime...",

"Forever Yours,<br>Nikhil ❤️",

"THE END?",

"No...<br>This Is Just The Beginning ❤️"

];

let i = 0;

function showLine(){

if(i >= lines.length){

restart.style.display="inline-block";

return;

}

text.style.opacity="0";

setTimeout(()=>{

text.innerHTML=lines[i];

text.style.opacity="1";

i++;

setTimeout(showLine,2500);

},900);

}

showLine();

restart.onclick=()=>{

window.location.href="index.html";

};

const proposal = document.getElementById("proposal");

const question = document.getElementById("question");

const openHeart = document.getElementById("openHeart");

const yes1 = document.getElementById("yes1");

const yes2 = document.getElementById("yes2");

setTimeout(() => {

proposal.style.display = "flex";

},21000);

openHeart.onclick = () => {

    proposal.style.display = "none";

    question.style.display = "flex";

};

function yesClicked(){

question.innerHTML = `

<h1>

❤️

I Knew It...

<br><br>

Thank You For Being

The Best Thing

That Ever Happened

To Me.

<br><br>

I Love You Forever ❤️

</h1>

`;

}

yes1.onclick = yesClicked;

yes2.onclick = yesClicked;

openHeart.onclick = () => {

    proposal.style.display = "none";

    question.style.display = "flex";

};