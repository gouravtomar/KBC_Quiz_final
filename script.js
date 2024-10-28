const questions = [
    ["Which animal is known as the 'Ship of the Desert'?", "Horse", "Camel", "Tiger", "Lion", 2],
    ["Recently which institute hosted the International Chess Federation (FIDE) rated chess tournament?", "IIT Madras", "IIT Kanpur", "IIT Delhi", "IIT Hyderabad", 1],
    ["Recently which country of East Africa was hit by the tropical cyclone named Gamane?", "Madagascar", "Tanzania", "Kenya", "Mauritius", 1],
    ["P-800 Onyx Missile, recently seen in news, is developed by which country?", "China", "Japan", "Russia", "India", 3],
    ["Recently who has been appointed as India's next ambassador to Niger?", "Pankaj Saran", "P. R. Chakraborty", "Vikram Misri", "Sita Ram Meena", 4]
];
const levels = [1000, 2000, 4000, 5000, 7000, 10000, 15000, 18000, 22000, 25000, 30000, 35000];
let currentQuestion = 0;
let money = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerText = `Question for ₹${levels[currentQuestion]}\n${question[0]}`;
    document.getElementById("opt1").innerText = question[1];
    document.getElementById("opt2").innerText = question[2];
    document.getElementById("opt3").innerText = question[3];
    document.getElementById("opt4").innerText = question[4];
    document.getElementById("result").innerText = "";
}

function checkAnswer(option) {
    const question = questions[currentQuestion];
    if (option === question[5]) {
        document.getElementById("result").innerText = `Correct answer, you have won Rs. ${levels[currentQuestion]}`;
        money = levels[currentQuestion];
    } else {
        document.getElementById("result").innerText = "Wrong answer!";
        document.getElementById("take-home-money").innerText = `Your take-home money is Rs. ${money}`;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("result").innerText = "Quiz completed!";
        document.getElementById("take-home-money").innerText = `Your total earnings: Rs. ${money}`;
    }
}

loadQuestion();
