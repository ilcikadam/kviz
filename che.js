var points = 0;

const questions = ["Vyberte správne pomenovania a vzorce kyselín odvodených od síry:"]
const correctAnswers = [["H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2SO6 je kyselina diperoxosírová","H2S2O9 je kyselina diperoxodisírová"]]
const options = [["H2SO5 je kyselina peroxosiričitá","H2SO6 je kyselina peroxosírová","H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2S2O7 je kyselina peroxodisiričitá","H2SO6 je kyselina diperoxosírová","H2S2O8 je kyselina diperoxodisírová","H2S2O9 je kyselina diperoxodisírová"]]

const validationButton = document.getElementById("validation");
const setButton = document.getElementById("setQuestions");
validationButton.addEventListener("click", validation);
setButton.addEventListener("click", setQuestions);

let list = [];
    for (let i = 0; i<questions.length; i++){
        list.push(i);
    }
    let permIndeces = randomPermutation(list);

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

function setQuestions(){
    for (let i = 0; i<100 && i< options.length;i++){
        let div = document.createElement('div');
        div.setAttribute('id', i);
        document.getElementById("form").appendChild(div);
        let question = document.createElement('h1');
        question.textContent = String(i+1) + "." + questions[permIndeces[i]];
        question.setAttribute('class', 'paragraph');
        document.getElementById(i).appendChild(question);
        let randomOptions = randomPermutation(options[permIndeces[i]]);
        for (let j = 0; j<4; j++){
            let tick = document.createElement('input');
            tick.setAttribute('type', 'checkbox');
            tick.setAttribute('value', j);
            tick.setAttribute('class', 'tick');
            let option = document.createElement('label');
            option.setAttribute('for', j);
            option.setAttribute('class', 'answer');
            option.setAttribute('id', 'moznost'+String(i)+String(j))
            option.textContent = randomOptions[j];
            let br = document.createElement('br');
            document.getElementById(i).appendChild(tick);
            document.getElementById(i).appendChild(option);
            div.appendChild(br);
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
            if (correctAnswers[permIndeces[x]].includes(answers[i].innerHTML)){
                points += 1;
            }
            else{
                document.getElementById('moznost'+String(x)+String(i%4)).style.backgroundColor = "red";
            }
        }
        else{
            if (!correctAnswers[permIndeces[x]].includes(answers[i].innerHTML)){
                points += 1;
            }
            else{
                document.getElementById('moznost'+String(x)+String(i%4)).style.backgroundColor = "red";
            }
       }
    }
    document.getElementById("demo").innerHTML = String(points) + "/" + String(ticks.length);
    if (questions.length != options.length || questions.length != correctAnswers.length) {
        document.getElementById("demo").innerHTML = "chyba";
    }
    points = 0;
}



