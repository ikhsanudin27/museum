/* ================= NAVIGATION ================= */

function showSection(id){
document.querySelectorAll(".content").forEach(sec=>{
sec.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

/* ================= GLOBAL STATE ================= */

let currentLang = "id";
let currentLevel = 0;
let aboutSlide = 0;

/* ================= ABOUT SLIDER ================= */

function showAboutSlide(index){

const slides = document.querySelectorAll(".about-slide");

slides.forEach(slide=>{
slide.classList.remove("active");
});

slides[index].classList.add("active");

}

function nextAbout(){

const slides = document.querySelectorAll(".about-slide");

aboutSlide++;

if(aboutSlide >= slides.length){
aboutSlide = 0;
}

showAboutSlide(aboutSlide);

}

function prevAbout(){

const slides = document.querySelectorAll(".about-slide");

aboutSlide--;

if(aboutSlide < 0){
aboutSlide = slides.length - 1;
}

showAboutSlide(aboutSlide);

}

/* ================= TRANSLATIONS ================= */

const translations = {

id:{

navHome:"Beranda",
navTentang:"Tentang",
navMaps:"Peta",
navQuiz:"Kuis",

searchPlaceholder:"Cari...",

heroTitle:"Museum Song Terus",
heroDesc:"Situs Arkeologi Penting di Pacitan, Jawa Timur",
heroBtn:"Jelajahi Museum",

info1Title:"Situs Prasejarah",
info1Text:"Song Terus merupakan salah satu situs arkeologi penting yang menyimpan bukti kehidupan manusia purba.",

info2Title:"Lokasi",
info2Text:"Museum ini terletak di Pacitan, Jawa Timur dan menjadi pusat penelitian prasejarah.",

info3Title:"Penemuan Fosil",
info3Text:"Berbagai alat batu dan fosil manusia purba ditemukan di kawasan Song Terus.",

tentangTitle:"Tentang Museum Song Terus",

tentangText1:"Museum Song Terus adalah museum arkeologi yang berada di Kabupaten Pacitan, Jawa Timur.",
tentangText2:"Gua Song Terus merupakan salah satu situs prasejarah penting di Indonesia.",
tentangText3:"Museum ini menjadi tempat edukasi untuk mempelajari kehidupan manusia prasejarah.",

sejarahTitle:"Sejarah Singkat",

sejarahText1:"Gua Song Terus telah lama menjadi objek penelitian arkeologi.",
sejarahText2:"Penelitian dilakukan oleh arkeolog dari dalam maupun luar negeri.",
sejarahText3:"Untuk menyimpan hasil penelitian tersebut maka dibangunlah Museum Song Terus.",

koleksiTitle:"Koleksi Museum",

koleksi1:"Fosil manusia purba",
koleksi2:"Alat-alat batu",
koleksi3:"Tulang hewan purba",
koleksi4:"Replika kehidupan manusia prasejarah",
koleksi5:"Informasi penelitian arkeologi",

fungsiTitle:"Fungsi Museum",

fungsi1:"Tempat penyimpanan peninggalan prasejarah",
fungsi2:"Sarana edukasi bagi masyarakat",
fungsi3:"Pusat informasi penelitian arkeologi",
fungsi4:"Pelestarian sejarah dan budaya",
fungsi5:"Objek wisata edukasi",

menarikTitle:"Hal Menarik",

menarik1:"Dekat dengan situs asli Gua Song Terus",
menarik2:"Menyimpan peninggalan manusia purba",
menarik3:"Memberikan informasi kehidupan ribuan tahun lalu",
menarik4:"Menjadi pusat penelitian arkeologi",

mapsTitle:"Lokasi Museum",
quizTitle:"Quiz Museum",

quiz:[

{
question:"Museum Song Terus berada di kabupaten?",
options:["Malang","Pacitan","Kediri"],
correct:1,
explanation:"Museum berada di Kabupaten Pacitan.",
image:"st1.jpg"
},

{
question:"Museum ini menyimpan penelitian dari?",
options:["Gua Song Terus","Candi Borobudur","Gunung Bromo"],
correct:0,
explanation:"Gua Song Terus adalah situs arkeologi penting.",
image:"st2.jpg"
},

{
question:"Tujuan utama didirikannya Museum Song Terus adalah…",
options:["Tempat konser","Pusat perbelanjaan","Melestarikan hasil penelitian prasejarah"],
correct:2,
explanation:"Museum dibuat untuk menjaga hasil penelitian prasejarah.",
image:"st4.jpg"
},

{
question:"Song Terus berkaitan dengan situs prasejarah berupa?",
options:["Gua","Candi","Keraton"],
correct:0,
explanation:"Song Terus merupakan gua tempat ditemukan fosil manusia purba.",
image:"st3.jpg"
},

{
question:"Fosil di Song Terus berasal dari zaman?",
options:["Modern","Prasejarah","Kolonial"],
correct:1,
explanation:"Fosil berasal dari masa prasejarah.",
image:"st5.jpg"
}

]

},

en:{

navHome:"Home",
navTentang:"About",
navMaps:"Location",
navQuiz:"Quiz",

searchPlaceholder:"Search...",

heroTitle:"Song Terus Museum",
heroDesc:"Important Archaeological Site in Pacitan, East Java",
heroBtn:"Explore Museum",

info1Title:"Prehistoric Site",
info1Text:"Song Terus is an important archaeological site that preserves evidence of early human life.",

info2Title:"Location",
info2Text:"The museum is located in Pacitan, East Java.",

info3Title:"Fossil Discoveries",
info3Text:"Various stone tools and early human fossils were discovered here.",

tentangTitle:"About Song Terus Museum",

tentangText1:"Song Terus Museum is an archaeological museum located in Pacitan Regency.",
tentangText2:"Song Terus Cave is one of the most important prehistoric sites in Indonesia.",
tentangText3:"The museum serves as an educational place for learning about prehistoric life.",

sejarahTitle:"Brief History",

sejarahText1:"Song Terus Cave has long been an archaeological research site.",
sejarahText2:"Research has been conducted by archaeologists from various countries.",
sejarahText3:"To preserve these discoveries the museum was built.",

koleksiTitle:"Museum Collections",

koleksi1:"Early human fossils",
koleksi2:"Stone tools",
koleksi3:"Ancient animal bones",
koleksi4:"Reconstruction of prehistoric life",
koleksi5:"Archaeological research information",

fungsiTitle:"Museum Functions",

fungsi1:"Storage of prehistoric artifacts",
fungsi2:"Educational facility",
fungsi3:"Archaeological information center",
fungsi4:"Preservation of history and culture",
fungsi5:"Educational tourism destination",

menarikTitle:"Interesting Facts",

menarik1:"Located near the original Song Terus Cave",
menarik2:"Houses prehistoric artifacts",
menarik3:"Shows life thousands of years ago",
menarik4:"Important archaeological research site",

mapsTitle:"Museum Location",
quizTitle:"Museum Quiz",

quiz:[

{
question:"Song Terus Museum is located in which regency?",
options:["Malang","Pacitan","Kediri"],
correct:1,
explanation:"The museum is located in Pacitan.",
image:"st1.jpg"
},

{
question:"This museum preserves research findings from?",
options:["Song Terus Cave","Borobudur Temple","Mount Bromo"],
correct:0,
explanation:"Song Terus Cave is an important archaeological site.",
image:"st2.jpg"
},

{
question:"The main purpose of establishing Song Terus Museum is…",
options:["Concert venue","Shopping center","Preserve prehistoric research findings"],
correct:2,
explanation:"The museum preserves prehistoric discoveries.",
image:"st4.jpg"
},

{
question:"Song Terus Museum is related to which prehistoric site?",
options:["Cave","Temple","Palace"],
correct:0,
explanation:"Song Terus is a cave where early human fossils were discovered.",
image:"st3.jpg"
},

{
question:"Fossils found in Song Terus indicate human life in which era?",
options:["Modern","Prehistoric","Colonial"],
correct:1,
explanation:"The fossils come from the prehistoric era.",
image:"st5.jpg"
}

]

}

};

/* ================= APPLY LANGUAGE ================= */

function applyLanguage(){

const t = translations[currentLang];

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks[0].innerText = t.navHome;
navLinks[1].innerText = t.navTentang;
navLinks[2].innerText = t.navMaps;
navLinks[3].innerText = t.navQuiz;

document.getElementById("searchInput").placeholder = t.searchPlaceholder;

document.getElementById("heroTitle").innerText = t.heroTitle;
document.getElementById("heroDesc").innerText = t.heroDesc;
document.getElementById("heroBtn").innerText = t.heroBtn;

document.getElementById("info1Title").innerText = t.info1Title;
document.getElementById("info1Text").innerText = t.info1Text;

document.getElementById("info2Title").innerText = t.info2Title;
document.getElementById("info2Text").innerText = t.info2Text;

document.getElementById("info3Title").innerText = t.info3Title;
document.getElementById("info3Text").innerText = t.info3Text;

document.getElementById("tentangTitle").innerText = t.tentangTitle;

document.getElementById("tentangText1").innerText = t.tentangText1;
document.getElementById("tentangText2").innerText = t.tentangText2;
document.getElementById("tentangText3").innerText = t.tentangText3;

document.getElementById("sejarahTitle").innerText = t.sejarahTitle;

document.getElementById("sejarahText1").innerText = t.sejarahText1;
document.getElementById("sejarahText2").innerText = t.sejarahText2;
document.getElementById("sejarahText3").innerText = t.sejarahText3;

document.getElementById("koleksiTitle").innerText = t.koleksiTitle;

document.getElementById("koleksi1").innerText = t.koleksi1;
document.getElementById("koleksi2").innerText = t.koleksi2;
document.getElementById("koleksi3").innerText = t.koleksi3;
document.getElementById("koleksi4").innerText = t.koleksi4;
document.getElementById("koleksi5").innerText = t.koleksi5;

document.getElementById("fungsiTitle").innerText = t.fungsiTitle;

document.getElementById("fungsi1").innerText = t.fungsi1;
document.getElementById("fungsi2").innerText = t.fungsi2;
document.getElementById("fungsi3").innerText = t.fungsi3;
document.getElementById("fungsi4").innerText = t.fungsi4;
document.getElementById("fungsi5").innerText = t.fungsi5;

document.getElementById("menarikTitle").innerText = t.menarikTitle;

document.getElementById("menarik1").innerText = t.menarik1;
document.getElementById("menarik2").innerText = t.menarik2;
document.getElementById("menarik3").innerText = t.menarik3;
document.getElementById("menarik4").innerText = t.menarik4;

document.querySelector("#maps h2").innerText = t.mapsTitle;
document.querySelector("#quiz h2").innerText = t.quizTitle;

}

/* ================= LANGUAGE SWITCH ================= */

function toggleLanguage(){

const flag = document.getElementById("langFlag");

if(currentLang === "id"){
currentLang = "en";
flag.src = "https://flagcdn.com/w40/gb.png";
}else{
currentLang = "id";
flag.src = "https://flagcdn.com/w40/id.png";
}

currentLevel = 0;

applyLanguage();
loadQuiz();

}

/* ================= QUIZ ================= */

function getLevels(){
return translations[currentLang].quiz;
}

function loadQuiz(){

const levels = getLevels();
const container = document.getElementById("quizContainer");
const feedback = document.getElementById("feedback");

if(currentLevel >= levels.length){

container.innerHTML = "<h3>Quiz Selesai 🎉</h3>";
feedback.innerHTML = "";
return;

}

const level = levels[currentLevel];

container.innerHTML = `

<h3>Level ${currentLevel+1}</h3>
<p>${level.question}</p>
${level.options.map((opt,i)=>`<button onclick="checkAnswer(${i})">${opt}</button>`).join("")}
`;

feedback.innerHTML="";

}

function checkAnswer(index){

const levels=getLevels();
const level=levels[currentLevel];
const feedback=document.getElementById("feedback");

if(index===level.correct){

feedback.innerHTML=`

<div class="quiz-explanation">
<h3>✔ Benar!</h3>
<p>${level.explanation}</p>
<img src="${level.image}">
<br><br>
<button onclick="nextLevel()">Lanjut</button>
</div>
`;

}else{

feedback.innerHTML="<h3>✖ Salah, coba lagi.</h3>";

}

}

function nextLevel(){
currentLevel++;
loadQuiz();
}

/* ================= SEARCH ================= */

function searchContent(){

const input=document.getElementById("searchInput").value.toLowerCase();
const sections=document.querySelectorAll(".content");

sections.forEach(sec=>{

if(sec.innerText.toLowerCase().includes(input)){

sec.classList.add("active");

sec.scrollIntoView({
behavior:"smooth"
});

}

});

}

/* ================= INIT ================= */

window.onload=function(){

applyLanguage();
loadQuiz();
showAboutSlide(0);

};
