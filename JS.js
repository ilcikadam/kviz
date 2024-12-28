//import {correctAnswers} from "editor.js";
//will not work if opened from ://
var points = 0;
const questions = ["Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?","Kto vynasiel dynamit?"];
const correctAnswers = ["Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel","Alfred Nobel"];
const options = [["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"],["Alfred Nobel", "Nikola Tesla", "Albert Einstein", "Heisenberg", "Schrödinger", "Born", "Watt", "Hawking"]];

//TO DO: make all indeces index=> i, j

const validationButton = document.getElementById("validation");
const setButton = document.getElementById("setQuestions");
validationButton.addEventListener("click", validation);
setButton.addEventListener("click", setQuestions);

function randint(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function randomPermutation(options){
    var permutation = [];
    var indeces = [];
    for (let i = 0; i<options.length;i++){
        indeces.push(i);
    }
    for (let j = 0; j<options.length; j++){
        let x = randint(0,(options.length-j));
        permutation.push(options[indeces[x]]);
        indeces.splice(x,2,indeces[x+1]);
    }
    return permutation;
}

function setQuestionsOld(){
    for (let i = 0; i<10;i++){
        document.getElementById("otazka" + String(i)).innerHTML = questions[i];
        let randomOptions = randomPermutation(options[i]);
        for (let index = 0; index<4; index++){
            document.getElementById(String(i)+String(index)).innerHTML = randomOptions[index];
        }
    }
}

function setQuestions(){
    let randomQuestions = randomPermutation(questions);
    for (let i = 0; i<10;i++){
        let div = document.createElement('div');
        div.setAttribute('id', i);
        document.getElementById("form").appendChild(div);
        let question = document.createElement('h1');
        question.textContent = randomQuestions[i];
        question.setAttribute('class', 'paragraph');
        document.getElementById(i).appendChild(question);
        let randomOptions = randomPermutation(options[i]);
        for (let j = 0; j<4; j++){
            let tick = document.createElement('input');
            tick.setAttribute('type', 'checkbox');
            tick.setAttribute('value', j);
            tick.setAttribute('class', 'tick');
            let option = document.createElement('label');
            option.setAttribute('for', j);
            option.setAttribute('class', 'answer');
            option.textContent = randomOptions[j];
            document.getElementById(i).appendChild(tick);
            document.getElementById(i).appendChild(option);
        }
    }
}




function colorValidation(){
    const ticks = document.getElementsByClassName("tick");
    const answers = document.getElementsByClassName("answer");
    for (let index in ticks){
        if (ticks[index].checked) {
            if (correctAnswer.includes(answers[index].innerHTML)){
                document.getElementById(index).style.backgroundColor = "green";
            }
            else{
                document.getElementById(index).style.backgroundColor = "red";
            }
       }

    }
}

function validation(){
    const ticks = document.getElementsByClassName("tick");
    const answers = document.getElementsByClassName("answer");
    for (let i = 0; i < ticks.length; i++){
        let x = Math.floor(i/4);
        if (ticks[i].checked) {
            if (correctAnswers[x].includes(answers[i].innerHTML)){
                points += 1;
            }
        }
        else{
            if (!correctAnswers[x].includes(answers[i].innerHTML)){
                points += 1;
            }
       }
    }
    document.getElementById("demo").innerHTML = points;
    points = 0;
}


