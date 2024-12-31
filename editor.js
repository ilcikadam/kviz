const options = [];
const questions = [];
const correctAnswers = [];


function start(){
    let form = document.getElementById("form");
    let otazka = document.createElement("p");
    otazka.textContent = "Otazka";
    form.appendChild(otazka)
    let question = document.createElement("input");
    question.setAttribute("id","question")
    form.appendChild(question);
    for (let i = 0; i < 8; i++){
        let p = document.createElement("p");
        p.textContent = "Moznost";
        form.appendChild(p);
        let div = document.createElement("div");
        div.setAttribute("class", "flexContainer");
        form.appendChild(div);
        let input = document.createElement("input");
        input.setAttribute("class", "answer");
        div.appendChild(input);
        let tick = document.createElement("input");
        tick.setAttribute("type", "checkbox");
        tick.setAttribute("class", "tick");
        div.appendChild(tick);
    }
    alert("Started");
}

function addQuestion(){
    let ticks = document.getElementsByClassName("tick");
    let answers = document.getElementsByClassName("answer");
    let question = document.getElementById("question");
    questions.push(question.value);
    let answer = [];
    let correctAnswer = [];
    for (let i = 0; i<8; i++){
        answer.push(answers[i].value);
        if (ticks[i].checked){
            correctAnswer.push(answers[i].value);
        }
    }
    options.push(answer);
    correctAnswers.push(correctAnswer);
    for (let i = 0; i<ticks.length; i++){
        ticks[i].checked = false;
        answers[i].value = "";
        question.value = "";
    }
    
}

function copyText(){
    var text = "[";
    for (let i = 0; i<options.length-1; i++){
        text += '"' + questions[i] + '", ';
    }
    text += '"' + questions[options.length-1] + '"]';
    text += "\nOPTIONS \n";
    for (let i = 0; i<options.length; i++){
        let option = options[i];
        text +="[";
        for (let j = 0; j<7; j++){
            text += '"' + String(option[j]) + '",';
        }
        text += '"' + String(option[7]) + '"],';
    }
    text += "\nCORRECT ANSWERS \n";
    for (let i = 0; i<options.length; i++){
        let correctAnswer = correctAnswers[i];
        text +="[";
        for (let j = 0; j<correctAnswer.length-1; j++){
            text += '"' + String(correctAnswer[j]) + '",';
        }
        text += '"' + String(correctAnswer[correctAnswer.length-1]) + '"],';
    }
    document.getElementById("demo").innerHTML = text;
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("addQuestion").addEventListener("click", addQuestion);
document.getElementById("copyText").addEventListener("click", copyText);