//import {correctAnswers} from "editor.js";
//will not work if opened from ://
var points = 0;
const questions = ["Prvú ucelenú evolučnú teóriu živých organizmov sformuloval:","Ktoré tvrdenie je správne:","Ktorú z uvedených chorôb nespôsobujú vírusy:","Bunkovú teóriu formulovali:","Základy novodobej anatómie ľudského tela položili:", "Medzi fyziologické vedy patria:", "Parazitológia študuje:", "Dvojzávitnicovú štruktúru DNA a jej význam pre prenos genetickej informácie objasnili:","Voda v bunkách má funkciu:", "Monomérom bielkovín sú:", "Jednotlivé aminokyseliny sú v bielkovinovom reťazci pospájané väzbou:", "Bielkoviny majú funkciu:", "Monomérom nukleových kyselín sú:","Z chemického hľadiska sú nukleové kyseliny:", "Lipidy:", "Mikroorganizmy:", "Medzi prokaryota patria:", "Medzi nebunkové organizmy patria:","Vírusy sú:", "Vírusy spôsobujú u človeka:", "Rozmnožovanie vírusov:", "Pôvodcom detskej obrny je:", "Bielkovinový obal vírusu sa nazýva:", "Vírusy spôsobujú u človeka", "Vírusy sa rozmnožujú:", "Zástupcovia kmeňa hubky(Porifera):"];
const correctAnswers = [["J.B. Lamarck","francúzsky prírodovedec J.B.Lamarck v roku 1809"],["L.Pasteur definitívne vyvrátil možnosť samoplodenia i tých najmenších organizmov","T.Schwann patrí k autorom bunkovej teórie","pre skúmanie biologických objektov použil mikroskop medzi prvými R.Hooke"],["tuberkulózu","kvapavku","syfilis"],["M.J.Schleiden","J.E.Purkyne","T.Schwann"],["A.Vesalius"],["fyziológia človeka","vedy,ktoré  študujú funkciu jednotlivých orgánov živých sústav","fyziológia živočíchov","fyziológia rastlín"],["cudzopasné organizmy","cudzopasné mikroorganizmy","vzťahy medzi hostiteľom a parazitom","a definuje biologické zákonitosti vzťahov medzi parazitom a hostiteľom"],["v roku 1953","F.H.Crick","J.D.Watson"],["substrátovú-vytvára vhodné prostredie pre chemické deje","ako účinné rozpúšťadlo","regulačnú-reguluje príjem a výdaj látok bunkou","ako dôležitý faktor tepelného hospodárenia"],["aminokyseliny"],["peptidovou","kovalentnou"],["informačnú","metabolickú-globulárne bielkoviny","mechanickú-fibrilárne bielkoviny","štruktúrnu"],["nukleotidy","ribonukleotidy alebo deoxyribonukleotidy"],["polynukleotidy","makromolekulové látky","biopolyméry"],["môžu byť súčasťou vitamínov","sú súčasťou niektorých hormónov","sa podieľajú na regulačných procesoch v bunke","sú najhospodárnejším zdrojom energie","sú súčasťou membrán","majú ochrannú funkciu, napr.vosky"],["sú archeóny","sú všetky baktérie","študuje mikrobiológia","majú mikroskopické rozmery","sú onkogénne vírusy","sú jednobunkové organizmy mikroskopických rozmerov"],["baktérie","niektoré mikroorganizmy","archeóny"],["onkovírusy","bakteriofágy","vírusy","molekulárne vnútrobunkové parazity"],["vnútrobunkové parazity","nebunkové organizmy","nukleoproteínové častice","bez vlastného metabolizmu","schopné vyvolať infekčné ochorenia"],["besnotu","žltačku","chrípku","kiahne"],["prebieha len v živých bunkách","môže prebiehať aj v bunkových kultúrach"],["vírus","nukleoproteínová častica"],["bielkovinový plášť","kapsid"],["osýpky","infekčné ochorenia","nádchu","herpes simplex","zhubné nádory","AIDS"],["v živočíšnych bunkách tak, že do nich prenikajú pinocytózou","v hostiteľskej bunke, ktorá vytvára nové virióny","tak, že v hostiteľskej bunke prebieha replikácia a realizácia ich genetickej informácie"],["žijú prisadnuto","trávia svoju potravu intracelulárne","majú telo nepravidelného tvaru","sa rozmnožujú pohlavne i nepohlavne"]];
const options = [["nemecký lekár G.Trevirana","Ch.Darwin","J.B. Lamarck","L.Pasteur","C.Linné","C.Woese","anglický prírodovedec W.Harvey","francúzsky prírodovedec J.B.Lamarck v roku 1809"],["J.B. Lamarck je autorom binomickej nomenklatúry","L.Pasteur definitívne vyvrátil možnosť samoplodenia i tých najmenších organizmov","M.J. Schleiden je zakladateľom modernej systematiky organizmov","T.Schwann patrí k autorom bunkovej teórie","C.Woese je autorom dvojmenného pomenovania organizmov","pre skúmanie biologických objektov použil mikroskop medzi prvými R.Hooke","J.G. Mendel objasnil, že molekuly DNA sú materiálnym nositeľom genetickej informácie","autorstvo pojmu biológia sa pripisuje A.Leeuwenhoekovi"],["mozgovú encefalitídu","detskú obrnu","tuberkulózu","kvapavku","syfilis","chrípku","opar","besnotu"],["R.Hooke","A.Leewenhoek","M.J.Schleiden","L.Pasteur","J.E.Purkyne","T.Schwann","M.Malpighi","Ch.L.Treviranus"],["W.Harvey","Aristoteles","R.Hooke","J.E.Purkyne","A.Vesalius","Galenos","R.Virchow","M.Malpighi"],["fyziológia človeka","fyziológia prvkov","histológia","embryológia","vedy,ktoré  študujú funkciu jednotlivých orgánov živých sústav","fyziológia živočíchov","vedy,ktoré študujú funkciu jednotlivých bunkových organel","fyziológia rastlín"],["správanie mikroorganizmov","cudzopasné organizmy","vzťahy živých sústav k prostrediu","cudzopasné mikroorganizmy","dedičnosť a premenlivosť organizmov","vzťahy medzi hostiteľom a parazitom","zárodočný vývoj mikroorganizmov","a definuje biologické zákonitosti vzťahov medzi parazitom a hostiteľom"],["C.Woese","v roku 1944","v roku 1953","F.H.Crick","J.G.Mendel","v roku 1866","J.D.Watson","v roku 1966"],["zásobnú ","konštrukčnú","ako zdroj energie","substrátovú-vytvára vhodné prostredie pre chemické deje","ako účinné rozpúšťadlo","regulačnú-reguluje príjem a výdaj látok bunkou","ako dôležitý faktor tepelného hospodárenia","ako základná stavebná jednotka makromolekulových látok"],["nukleotidy","peptidy","aminoskupiny","atómy uhlíka a dusíka","aminokyseliny","dusíkaté organické bázy","monosacharidy","nukleozidy"],["esterovou","fosfodiesterovou","glykozidovou","peptidovou","vodíkovými mostíkmi","peptidovou medzi dusíkatými bázami","kovalentnou","nekovalentnou"],["informačnú","ako najhospodárnejší zdroj energie","metabolickú-fibrilárne bielkoviny","metabolickú-globulárne bielkoviny","mechanickú-fibrilárne bielkoviny","mechanickú-globulárne bielkoviny","v živočíšnych bunkách hlavne zásobnú","štruktúrnu"],["aminokyseliny","adenín,guanín,tymín,cytozín","nukleotidy","chromatín","dusíkaté bázy","nukleozidy","ribonukleotidy alebo deoxyribonukleotidy","pentózy"],["polypeptidy","estery vyšších mastných kyselín a glycerolu","polynukleotidy","makromolekulové látky","biopolyméry","pentózy","monoméry","dlhé reťazce zložené z aminokyselín"],["môžu byť súčasťou vitamínov","sú súčasťou niektorých hormónov","katalyzujú chemické reakcie v bunke","sú hlavnou zložkou protilátok","sa podieľajú na regulačných procesoch v bunke","sú najhospodárnejším zdrojom energie","sú súčasťou membrán","majú ochrannú funkciu, napr.vosky"],["sú archeóny","sú všetky baktérie","študuje mikrobiológia","majú mikroskopické rozmery","sú onkogénne vírusy","sú len eukaryotické organizmy","sú jednobunkové organizmy mikroskopických rozmerov","sú viditeľné aj voľným okom"],["jednobunkové riasy","baktérie","niektoré mikroorganizmy","bakteriofágy","bičíkovce","archeóny","vírusy","jednobunkové rastliny"],["sinice","onkovírusy","spirily","červené krvinky","bakteriofágy","spirochéty","vírusy","molekulárne vnútrobunkové parazity"],["vnútrobunkové parazity","nebunkové organizmy","mimobunkové parazity","nukleoproteínové častice","organizmy s jednoduchým metabolizmom","bez vlastného metabolizmu","prokaryotické organizmy","schopné vyvolať infekčné ochorenia"],["besnotu","žltačku","chrípku","krívačku a slintačku","kiahne","tuberkulózu","kvapavku","Downov syndróm"],["má štyri fázy-profáza,metafáza,anafáza,telofáza","má tri fázy","prebieha amitózou","prebieha len v živých bunkách","prebieha len v eukaryotických bunkách","prebieha delením","prebieha aj mimo bunky","môže prebiehať aj v bunkových kultúrach"],["vírus","bakteriofág","nukleoproteínová častica","baktéria","bacil","Salmonella","Shigella","streptokok"],["kapsid a je zložený z tukových monomérov","cysta","puzdro","virión","bielkovinový plášť","spóra","nukleoid","kapsid"],["syfilis","osýpky","infekčné ochorenia","nádchu","herpes simplex","zhubné nádory","mozaikovú chorobu","AIDS"],["meiózou","mitózou","amitózou","v živočíšnych bunkách tak, že do nich prenikajú pinocytózou","pučaním","nepriamym delením","v hostiteľskej bunke, ktorá vytvára nové virióny","tak, že v hostiteľskej bunke prebieha replikácia a realizácia ich genetickej informácie"],["žijú prisadnuto","trávia svoju potravu intracelulárne","majú telo lúčovito súmerné","majú telo nepravidelného tvaru","sú predovšetkým vodné živočíchy, ale patria tu i suchozemské živočíchy","dráždivú činnosť prejavujú až v dospelosti","sa rozmnožujú pohlavne i nepohlavne","v nepriaznivých podmienkach vytvárajú vonkajšie puky-gemule"]];


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
    for (let i = 0; i<100;i++){
        let div = document.createElement('div');
        div.setAttribute('id', i);
        document.getElementById("form").appendChild(div);
        let question = document.createElement('h1');
        question.textContent = questions[permIndeces[i]];
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
    //document.getElementById("demo").innerHTML = questions.length;
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
    points = 0;
}



