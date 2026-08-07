const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

const message = `

Suno na... ❤️

Pata hai...

Kabhi kabhi main sochta hu...

Agar us din tum us train me mujhe na dekhti...
Agar tum mujhe pehchan kar bhi ignore kar deti...
Agar tumne mujh tak pahunchne ki itni koshish na ki hoti...

To shayad...

Aaj meri zindagi itni khoobsurat na hoti.

Tum meri kahani me aayi nahi...

Tum meri kahani hi ban gayi.

Main maanta hu...

Maine tumhe bahut baar hurt kiya...
Kabhi jaan bujhkar...
Kabhi anjaane me...

Lekin ek baat kabhi nahi badli...

Har baar tumne mera haath chhodne ke bajaye...
Aur bhi mazbooti se pakad liya.

Jab main apni purani yaadon me uljha hua tha...
Apni ex ki baatein tumhe batata tha...
Kabhi rota tha...

Tab bhi tum mere saath rahi.

Tumne mujhe kabhi judge nahi kiya...

Bas samjha.

Aur shayad wahi pal tha...
Jab bina mujhe pata chale...
Main tumse pyaar karne laga.

Tum sirf meri girlfriend nahi ho...

Kabhi meri maa ki tarah meri care karti ho...

Kabhi meri best friend ban jaati ho...

Kabhi meri wife ki tarah mujhe sambhal leti ho...

Aur kabhi ek chhoti si bachchi ban kar mujhse naraz ho jaati ho.

Aur sach kahu...

Mujhe tumhara har roop bahut pasand hai.

Aaj bhi mujhe hamari pehli mulaqat yaad hai...

Blue jeans...
Blue shirt and black sandel.....
Orange glasses...

Jab maine tumhe pehli baar dekha tha...

Us pal bas ek hi khayal aaya tha...

Yaar...
Itni khoobsurat ladki bhi hoti hai?

Aur phir...

Pehli mulaqat me hi tumne mujhe thappad maara. 😂❤️

Aaj us baat ko yaad karke hasi bhi aati hai...
Aur pyaar bhi.

Hamara pehla hand hold...
Pehla hug...
Pehla kiss...

Sab kuch sirf tumhare saath hi itna special laga.

Tumhare saath bitaya hua har pal...
Meri zindagi ki sabse khoobsurat yaad hai.

Aur ek chhota sa sapna hai mera...

Ek din...

Kisi nadi ke kinaare...
Khoobsurat pahadon ke beech...

Ek chhota sa ghar ho...

Jahan sirf tum aur main ho...

Na duniya ka shor...
Na kisi ki fikr...

Bas tumhara haath mere haath me ho...

Aur poori zindagi yun hi guzar jaye.

Thank You...

Mujhe itna pyaar karne ke liye...

Meri har kami ke saath mujhe apnane ke liye.

Agar mujhe dobara zindagi jeene ka mauka mile...

To main har baar...

Har janam...

Sirf tumhe hi chununga.

I Love You So Much...

Forever Yours,

Nikhil ❤️

`;


let i = 0;

envelope.onclick = () => {

    envelope.style.display = "none";

    letter.style.display = "flex";

    type();

};

function type(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);
        
        window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
    });

        i++;

        let speed = 80;   // Normal typing speed

// Full stop ke baad pause
if (message.charAt(i) === ".") {
    speed = 350;
}

// Naye paragraph ke baad pause
if (message.charAt(i) === "\n") {
    speed = 500;
}

// Last lines dheere type hongi
if (i > message.length - 60) {
    speed = 180;
}
        setTimeout(type, speed);

    }else{

    console.log("Letter Finished");

    nextBtn.style.display = "block";
    
    nextBtn.onclick = () => {

    window.location.href = "final.html";

}

}}

