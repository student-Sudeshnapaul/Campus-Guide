function showTopics(category) {
    let output = "";

    if (category === "quant") {
        output = `
            <h3>Quantitative Topics</h3>
            <ul>
                <li>Percentages</li>
                <li>Profit and Loss</li>
                <li>Time and Work</li>
                <li>Time, Speed and Distance</li>
                <li>Ratio and Proportion</li>
            </ul>
        `;
    }

    else if (category === "reasoning") {
        output = `
            <h3>Reasoning Topics</h3>
            <ul>
                <li>Number Series</li>
                <li>Blood Relations</li>
                <li>Seating Arrangement</li>
                <li>Direction Sense</li>
                <li>Logical Puzzles</li>
            </ul>
        `;
    }
    else if (category === "verbal") {
        output = `
            <h3>Verbal Ability Topics</h3>
            <ul>
                <li>Synonyms & Antonyms</li>
                <li>Sentence Correction</li>
                <li>Reading Comprehension</li>
                <li>Error Spotting</li>
                <li>Fill in the Blanks</li>
            </ul>
        `;
    }

    document.getElementById("topics-area").innerHTML = output;
}
function showPYQs(company) {
    let output = "";

    if (company === "tcs") {
        output = `
            <h3>TCS PYQs</h3>
            <ul>
                <li>Find the missing number: 2, 6, 12, 20, ?</li>
                <li>If A can do work in 10 days and B in 15 days, how long together?</li>
                <li>Arrange alphabetically: Apple, Ape, April</li>
            </ul>
        `;
    }

    else if (company === "infosys") {
        output = `
            <h3>Infosys PYQs</h3>
            <ul>
                <li>Simple interest on ₹5000 at 10% for 2 years?</li>
                <li>Find the synonym of “Rapid”</li>
            </ul>
        `;
    }

    else if (company === "wipro") {
        output = `
            <h3>Wipro PYQs</h3>
            <ul>
                <li>Angle between clock hands at 3:30</li>
                <li>Identify the error: He don’t like coffee.</li>
            </ul>
        `;
    }

    else if (company === "cognizant") {
        output = `
            <h3>Cognizant PYQs</h3>
            <ul>
                <li>Find the next term: 5, 10, 20, 40, ?</li>
                <li>Odd one out: Dog, Cat, Cow, Lion</li>
            </ul>
        `;
    }

    document.getElementById("pyq-area").innerHTML = output;
}
let questions = [
    {
        question: "What is 20% of 150?",
        options: ["20", "25", "30", "35"],
        answer: "30"
    },
    {
        question: "If A can do a work in 10 days, how much in 1 day?",
        options: ["1/10", "1/5", "10", "5"],
        answer: "1/10"
    },
    {
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "30"],
        answer: "32"
    }
];

let currentQuestion = 0;
let score = 0;
function startExam() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}
function showQuestion() {
    let q = questions[currentQuestion];

    let output = `
        <h3>Question ${currentQuestion + 1}</h3>
        <p>${q.question}</p>
    `;

    q.options.forEach(option => {
        output += `
            <div class="option">
                <input type="radio" name="option" value="${option}">
                ${option}
            </div>
        `;
    });

    output += `<button onclick="submitAnswer()">Submit</button>`;

    document.getElementById("exam-area").innerHTML = output;
}
function submitAnswer() {
    let selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        alert("Please select an option!");
        return;
    }

    if (selected.value === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
function showResult() {
    document.getElementById("exam-area").innerHTML = `
        <h2>Exam Completed</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
    `;
}
