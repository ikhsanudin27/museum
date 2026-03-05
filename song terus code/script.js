/* ================= NAVIGATION ================= */

function showSection(id) {
    document.querySelectorAll(".content").forEach(sec => {
        sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}


/* ================= GLOBAL STATE ================= */

let currentLang = "id";   // default langsung Indonesia
let currentLevel = 0;


/* ================= TRANSLATIONS ================= */

const translations = {

    id: {
        navHome: "Beranda",
        navTentang: "Tentang",
        navMaps: "Peta",
        navQuiz: "Kuis",

        heroTitle: "Museum Song Terus",
        heroDesc: "Situs Arkeologi Penting di Pacitan, Jawa Timur",

        tentangTitle: "Tentang Museum Song Terus",
        tentangText: "Museum ini menyimpan hasil penelitian arkeologi dari Gua Song Terus.",

        mapsTitle: "Lokasi Museum",
        quizTitle: "Quiz Museum",

        quiz: [
            {
                question: "Museum Song Terus berada di kabupaten?",
                options: ["Malang", "Pacitan", "Kediri"],
                correct: 1,
                explanation: "Museum berada di Kabupaten Pacitan.",
                image: "st1.jpg"
            },
            {
                question: "Museum ini menyimpan penelitian dari?",
                options: ["Gua Song Terus", "Candi Borobudur", "Gunung Bromo"],
                correct: 0,
                explanation: "Gua Song Terus adalah situs arkeologi penting.",
                image: "st2.jpg"
            },
            {
                question: "Tujuan utama didirikannya Museum Song Terus adalah…",
                options: ["Tempat konser", "Pusat perbelanjaan", "Melestarikan hasil penelitian prasejarah"],
                correct: 2,
                explanation: "Museum ini dibuat untuk menyimpan dan memperkenalkan hasil penelitian agar sejarah tetap terjaga.",
                image: "st4.jpg"
            },
            {
                question: "Museum Song Terus berkaitan erat dengan situs prasejarah berupa?",
                options: ["Gua", "Candi", "Keraton"],
                correct: 0,
                explanation: "Song Terus adalah sebuah gua tempat ditemukannya fosil manusia purba.",
                image: "st3.jpg"
            },
            {
                question: "Fosil yang ditemukan di kawasan Song Terus menunjukkan kehidupan manusia pada zaman?",
                options: ["Moderen", "Prasejarah", "Kolonial"],
                correct: 1,
                explanation: "Fosil tersebut berasal dari masa prasejarah sebelum adanya tulisan.",
                image: "st5.jpg"
            }
        ]
    },

    en: {
        navHome: "Home",
        navTentang: "About",
        navMaps: "Location",
        navQuiz: "Quiz",

        heroTitle: "Song Terus Museum",
        heroDesc: "Important Archaeological Site in Pacitan, East Java",

        tentangTitle: "About Song Terus Museum",
        tentangText: "This museum preserves archaeological research findings from Song Terus Cave.",

        mapsTitle: "Museum Location",
        quizTitle: "Museum Quiz",

        quiz: [
            {
                question: "Song Terus Museum is located in which regency?",
                options: ["Malang", "Pacitan", "Kediri"],
                correct: 1,
                explanation: "The museum is located in Pacitan Regency.",
                image: "st1.jpg"
            },
            {
                question: "This museum preserves research findings from?",
                options: ["Song Terus Cave", "Borobudur Temple", "Mount Bromo"],
                correct: 0,
                explanation: "Song Terus Cave is an important archaeological site.",
                image: "st2.jpg"
            },
            {
                question: "The main purpose of establishing Song Terus Museum is…",
                options: ["Concert venue", "Shopping center", "Preserve prehistoric research findings"],
                correct: 2,
                explanation: "The museum was built to preserve research findings for future generations.",
                image: "st4.jpg"
            },
            {
                question: "Song Terus Museum is closely related to which prehistoric site?",
                options: ["Cave", "Temple", "Palace"],
                correct: 0,
                explanation: "Song Terus is a cave where early human fossils were discovered.",
                image: "st3.jpg"
            },
            {
                question: "Fossils found in Song Terus indicate human life in which era?",
                options: ["Modern", "Prehistoric", "Colonial"],
                correct: 1,
                explanation: "The fossils come from the prehistoric era before written records.",
                image: "st5.jpg"
            }
        ]
    }
};


/* ================= APPLY LANGUAGE ================= */

function applyLanguage() {

    const t = translations[currentLang];

    const navLinks = document.querySelectorAll(".navbar nav a");
    navLinks[0].innerText = t.navHome;
    navLinks[1].innerText = t.navTentang;
    navLinks[2].innerText = t.navMaps;
    navLinks[3].innerText = t.navQuiz;

    document.querySelector("#home h2").innerText = t.heroTitle;
    document.querySelector("#home p").innerText = t.heroDesc;

    document.querySelector("#tentang h2").innerText = t.tentangTitle;
    document.getElementById("tentangText").innerText = t.tentangText;

    document.querySelector("#maps h2").innerText = t.mapsTitle;
    document.querySelector("#quiz h2").innerText = t.quizTitle;
}


/* ================= TOGGLE LANGUAGE ================= */

function toggleEnglish() {
    currentLang = currentLang === "id" ? "en" : "id";
    currentLevel = 0;
    applyLanguage();
    loadQuiz();
}


/* ================= QUIZ SYSTEM ================= */

function getLevels() {
    return translations[currentLang].quiz;
}

function loadQuiz() {

    const levels = getLevels();
    const container = document.getElementById("quizContainer");
    const feedback = document.getElementById("feedback");

    if (currentLevel >= levels.length) {
        container.innerHTML = "<h3>Quiz Selesai! 🎉</h3>";
        feedback.innerHTML = "";
        return;
    }

    const level = levels[currentLevel];

    container.innerHTML = `
        <h3>Level ${currentLevel + 1}</h3>
        <p>${level.question}</p>
        ${level.options.map((opt, i) =>
            `<button onclick="checkAnswer(${i})">${opt}</button>`
        ).join("")}
    `;

    feedback.innerHTML = "";
}

function checkAnswer(index) {

    const levels = getLevels();
    const level = levels[currentLevel];
    const feedback = document.getElementById("feedback");

    if (index === level.correct) {
        feedback.innerHTML = `
            <div class="quiz-explanation">
                <h3>✔ Benar!</h3>
                <p>${level.explanation}</p>
                <img src="${level.image}">
                <br><br>
                <button onclick="nextLevel()">Lanjut</button>
            </div>
        `;
    } else {
        feedback.innerHTML = "<h3>✖ Salah, coba lagi.</h3>";
    }
}

function nextLevel() {
    currentLevel++;
    loadQuiz();
}


/* ================= SEARCH ================= */

function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const sections = document.querySelectorAll(".content");

    sections.forEach(sec => {
        if (sec.innerText.toLowerCase().includes(input)) {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });
}


/* ================= INIT ================= */

window.onload = function() {
    applyLanguage();   // langsung set Bahasa Indonesia saat pertama load
    loadQuiz();
};