var points = 0;

const questions = ["Vyberte správne pomenovania a vzorce kyselín odvodených od síry:","Vyberte správne pomenovania a vzorce hydridov:", "Vyberte odpovede, kde vzorce neodpovedajú uvedeným zlúčeninám:"]
const correctAnswers = [["H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2SO6 je kyselina diperoxosírová","H2S2O9 je kyselina diperoxodisírová"],["AsH3 je arzán","GeH4 je germán","H2Se je selán","PH3 je fosfán"],["SiN4 je nitrid kremičitý","LiAs3 je arzenid lítny","Pb3N2 je azid olovnatý","AlSb3 je antimonid hlinitý"]]
const options = [["H2SO5 je kyselina peroxosiričitá","H2SO6 je kyselina peroxosírová","H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2S2O7 je kyselina peroxodisiričitá","H2SO6 je kyselina diperoxosírová","H2S2O8 je kyselina diperoxodisírová","H2S2O9 je kyselina diperoxodisírová"],["P3H je fosfán","Al3H je fosfán","AsH3 je arzán","GeH4 je germán","H2Se je selán","PH3 je fosfán","SeH2 je selán","HS2 je sulfán"],["SiN4 je nitrid kremičitý","GaAs je arzenid galitý","LiAs3 je arzenid lítny","Pb3N2 je azid olovnatý","Mg3P2 je fosfid horečnatý","CaC2 je karbid vápenatý","Si3N4 je nitrid kremičitý","AlSb3 je antimonid hlinitý"]]



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
        question.textContent = String(i+1) + ". " + questions[permIndeces[i]];
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

function validation(){
    const ticks = document.getElementsByClassName("tick");
    const answers = document.getElementsByClassName("answer");
    errors = [];
    for (let i = 0; i < ticks.length; i++){
        let x = Math.floor(i/4);
        if (ticks[i].checked) {
            if (correctAnswers[permIndeces[x]].includes(answers[i].innerHTML)){
                points += 1;
            }
            else{
                document.getElementById('moznost'+String(x)+String(i%4)).style.backgroundColor = "red";
                errors.push(x);
            }
        }
        else{
            if (!correctAnswers[permIndeces[x]].includes(answers[i].innerHTML)){
                points += 1;
            }
            else{
                document.getElementById('moznost'+String(x)+String(i%4)).style.backgroundColor = "red";
                errors.push(x);
            }
       }
    }
    document.getElementById("demo").innerHTML = String(points) + "/" + String(ticks.length);
    if (questions.length != options.length || questions.length != correctAnswers.length) {
        document.getElementById("demo").innerHTML = "chyba";
    }
    else {
        document.getElementById("pocetotazok").innerHTML = "Počet otázok: " + String(questions.length);
    }
    points = 0;
}
if (questions.length != options.length || questions.length != correctAnswers.length) {
        document.getElementById("demo").innerHTML = "chyba";
    }
else {
    document.getElementById("pocetotazok").innerHTML = "Počet otázok: " + String(questions.length);
}

function filterovanie() {
    var filterBox = document.getElementById("filterBox")
    for (let i = 0; i<100 && i< options.length; i++){
        var x = document.getElementById(i);
        if (!filterBox.checked){
            x.style.display = "block"
        }
        else if (errors.includes(i)){
            x.style.display = "block";
        }
        else{
            x.style.display = "none";
        }
    } 
}

//main

const validationButton = document.getElementById("validation");
validationButton.addEventListener("click", validation);

const setButton = document.getElementById("setQuestions");
setButton.addEventListener("click", setQuestions);

let list = [];
let errors = [];
for (let i = 0; i<questions.length; i++){
    list.push(i);
}
let permIndeces = randomPermutation(list);