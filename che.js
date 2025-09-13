var points = 0;

const questions = ["Vyberte správne pomenovania a vzorce kyselín odvodených od síry:","Vyberte správne pomenovania a vzorce hydridov:", "Vyberte odpovede, kde vzorce neodpovedajú uvedeným zlúčeninám:","Vyberte odpovede, kde vzorce neodpovedajú uvedeným zlúčeninám:", "Vyberte správne pomenovania a vzorce kyselín:", "Vyberte správne pomenovania a vzorce hydrátov solí:", "Vyberte odpovede, kde vzorce neodpovedajú uvedeným zlúčeninám:", "Vyberte správne pomenovania a vzorce nasledujúcich zlúčenín:", "Tetrachloro-paládnatan amónny:", "Hexakyano-chromitan hexaammin-kobaltitý:", "Vyberte odpovede, kde vzorce neodpovedajú uvedeným zlúčeninám:", "Chróm má oxidačné číslo +VI v zlúčeninách:", "Fosfor má oxidačné číslo +III v zlúčeninách:", "Aké oxidačné čísla môže mať vodík v rozličných molekulách?", "Aké oxidačné čísla môže mať kyslík v rozličných molekulách?","Bróm môže mať v rozličných molekulách oxidačné čísla:", "Aké oxidačné číslo môže mať chlór v rozličných molekulách?", "Vyberte zlúčeniny, v ktorých má železo oxidačné číslo +III:", "Vyberte zlúčeniny, v ktorých sa vyskytuje prvok s oxidačným číslom +III:", "Vyberte tie vzorce zlúčenín, kde je P s oxidačným číslom +V, chlórnan sodný a nitrid hlinitý:", "Reakciou H3PO4 s Ca(OH)2 môže vzniknúť:", "Vyberte správne pomenovania a vzorce oxidov dusíka:", "V ktorých zlúčeninách sa vyskytuje prvok s oxidačným číslom +II:", "Vyberte zlúčeniny so správnym vzorcom a názvom:", "Vyberte správne pomenovania a vzorce kyselín:"]
const correctAnswers = [["H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2SO6 je kyselina diperoxosírová","H2S2O9 je kyselina diperoxodisírová"],["AsH3 je arzán","GeH4 je germán","H2Se je selán","PH3 je fosfán"],["SiN4 je nitrid kremičitý","LiAs3 je arzenid lítny","Pb3N2 je azid olovnatý","AlSb3 je antimonid hlinitý"],["KCr(OH)2 je hydroxid draselno-chromitý","Cs3CoCl6 je chlorid tricézno-kobaltnatý","COS2 je oxid-sulfid uhličitý","PCl5O je chlorid-oxid fosforečný"],["HOCN je kyselina kyanatá","H6Si2O7 je kyselina heptaoxodikremičitá","H3BO3 je kyselina trioxoboritá","H2S2O5 je kyselina dihydrogéndisiričitá"],["Na2SO4. 10 H2O je dekahydrát síranu sodného","(NH4)2Fe(SO4)2.6H2O je hexahydrát síranu amónno-železnatého","CaSO4.1/2H2O je hemihydrát síranu vápenatého","Na2Mg(CO3)2.10H2O je dekahydrát uhličitanu horečnato-sodného"],["K2[PtBr6] je hexabromoplatnatan didraselný","Na[Au(CN)2OH] je dikyano-hydroxozlatitan sodný","[Sn3(OH)6CO]Cl2 je chlorid hexahydroxo-karbonyl-ciničitý","K2[MnF6] je hexafluoromanganičnan draselný"],["Sr(H2PO3)2 je dihydrogénfosforitan strontnatý ","CsHMoO4 je hydrogénmolybdénan cézny","Li2HVO4 je hydrogénvanadičnan lítny","Ag2HIO5 je hydrogénjodistan strieborný"],["obsahuje komplexný anión s nábojovým číslom —2","má centrálny atóm paládium","má vzorec (NH4)2[PdCl4]","má koordinačné číslo 4"],["obsahuje komplexný anión s nábojovým číslom —3","koordinačné čísla komplexného katiónu a komplexného aniónu sú rovnaké","má vzorec [Co(NH3)6][Cr(CN)6]","obsahuje 2 centrálne atómy s rovnakým oxidačným číslom"],["NiCO3 . 6 H2O je uhličitan hexaakvanikelnatý","Zn(SiO3)2 je kremičitan zirkoničitý","Sb2[Ni(NH3)]Cl3 je triammin-trichloronikelnatan antimonitý","Ba(TlO4)2 je telúran bárnatý"],["PbCrO4","CrO3","Na2CrO4","K2Cr2O7"],["PBr3","(NH4)2HPO3","CaHPO3","P(CN)3"],["+I v NaHCO3","-I v LiH","+I v NH3","0 ako plynná látka vo vzduchu"],["+II v OF2","-I v Na2O2","-II v P2O5"],["+I v Br2O","+V v HBrO3","-I v bromovodíku","+VII v KBrO4","0  v kvapalnom skupenstve"],["+VII v NaClO4. H2O","+I v Cl2O","-I v MnCl2","+IV v ClO2"],["Fe(OH)O","[Fe(H2O)6]Cl3","FePO4","FeO.Fe2O3"],["Bi(OH)2NO3","P4O6","[CrBr2(H2O)4]NO2","HBO2"],["HPO3-NaClO-AlN","H4P2O7-NaClO-AlN","H3PO4-NaClO-AlN"],["CaHPO4","Ca(H2PO4)2","Ca3(PO4)2"],["N2O4 je dimér oxidu dusičitého","N2O5 je oxid dusičný","N2O je oxid dusný","NO2 je oxid dusičitý"],["(ZnO2)2-","[Fe(CN)6]4-","[Cu(CN)4]2-","BaO2"],["BiCl(O) je chlorid oxid bizmutitý","H3PO2 je kyselina trihydrogénfosforná","Mg(BO2)2 je boritan horečnatý","TeF6 je fluorid telúrový"],["H3AsO3 je kyselina trioxoarzenitá","H2TeO3 je kyselina teluričitá","H5IO6 je kyselina pentahydrogénjodistá","H4P2O7 je kyselina tetrahydrogéndifosforečná"]]
const options = [["H2SO5 je kyselina peroxosiričitá","H2SO6 je kyselina peroxosírová","H2S2O8 je kyselina peroxodisírová","H2S2O7 je kyselina disírová","H2S2O7 je kyselina peroxodisiričitá","H2SO6 je kyselina diperoxosírová","H2S2O8 je kyselina diperoxodisírová","H2S2O9 je kyselina diperoxodisírová"],["P3H je fosfán","Al3H je fosfán","AsH3 je arzán","GeH4 je germán","H2Se je selán","PH3 je fosfán","SeH2 je selán","HS2 je sulfán"],["SiN4 je nitrid kremičitý","GaAs je arzenid galitý","LiAs3 je arzenid lítny","Pb3N2 je azid olovnatý","Mg3P2 je fosfid horečnatý","CaC2 je karbid vápenatý","Si3N4 je nitrid kremičitý","AlSb3 je antimonid hlinitý"],["Cu2CO3(OH)2 je hydroxid-uhličitan meďnatý ","MnCl2O je chlorid-oxid manganičitý","Ca5F(PO4)3 je fluorid-tris(fosforečnan) pentavápenatý","KCr(OH)2 je hydroxid draselno-chromitý","CaCl(ClO) je chlorid-chlórnan vápenatý","Cs3CoCl6 je chlorid tricézno-kobaltnatý","COS2 je oxid-sulfid uhličitý","PCl5O je chlorid-oxid fosforečný"],["HOCN je kyselina kyanatá","H6Si2O7 je kyselina heptaoxodikremičitá","H3BO3 je kyselina trioxoboritá","H2S2O5 je kyselina dihydrogéndisiričitá","HBrO4 je kyselina tetraoxobromičitá","H6TeO6 je kyselina hexaoxoteluričitá","H4SiO4 je kyselina tetraoxokremistá","H4P2O7 je kyselina tetrahydrogéndifosforitá"],["Na2SO4. 10 H2O je dekahydrát síranu sodného","AlK(SO4)2 . 12H2O je undekahydrát síranu draselno-hlinitého","Hg(BO3)2 . 2H2O je dihydrát boritanu ortuťnatého","CaMg(CO3)2.11H2O je dodekahydrát uhličitanu horečnato-vápenatého","(NH4)2Fe(SO4)2.6H2O je hexahydrát síranu amónno-železnatého","BaClO4.3H2O je trihydrát chloristanu bárnatého","CaSO4.1/2H2O je hemihydrát síranu vápenatého","Na2Mg(CO3)2.10H2O je dekahydrát uhličitanu horečnato-sodného"],["NH4[CdCl3] je trichlorokademnatan amónny","K2[PtBr6] je hexabromoplatnatan didraselný","Na[Au(CN)2OH] je dikyano-hydroxozlatitan sodný","[Sn3(OH)6CO]Cl2 je chlorid hexahydroxo-karbonyl-ciničitý","Rb[Ag(CN)2] je dikyanostriebornan rubídny","K2[MnF6] je hexafluoromanganičnan draselný","Fe[Hg(SCN)4] je tetratiokyanatoortuťnatan železnatý","Li2[PbF6] je hexafluoroolovičitan lítny"],["CaHS je hydrogénsulfid vápenatý","KH2B4O7 je dihydrogéntetraboritan draselný","Sr(H2PO3)2 je dihydrogénfosforitan strontnatý ","CsHMoO4 je hydrogénmolybdénan cézny","Li2HVO4 je hydrogénvanadičnan lítny","KFe(HCO3)2 je hydrogénuhličitan draselno-železitý ","Ag2HIO5 je hydrogénjodistan strieborný","NH4H2AsO4 je dihydrogénarzenitan amónny"],["má koordinačné číslo 6","centrálny atóm je donorom elektrónov","Cl a NH4+ sú ligandy","má vzorec (NH4)2[PtCl4]","obsahuje komplexný anión s nábojovým číslom —2","má centrálny atóm paládium","má vzorec (NH4)2[PdCl4]","má koordinačné číslo 4"],["má vzorec [Cr(CN)6][Co(NH3)6]","obsahuje komplexný anión s nábojovým číslom —3","koordinačné čísla komplexného katiónu a komplexného aniónu sú rovnaké","Cr je centrálnym atómom komplexného katiónu","má iba elektroneutrálne ligandy","má vzorec [Co(NH3)6][Cr(CN)6]","obsahuje 2 centrálne atómy s rovnakým oxidačným číslom","má vzorec [Cr(NH3)6][Co(CN)6]"],["NiCO3 . 6 H2O je uhličitan hexaakvanikelnatý","Zn(SiO3)2 je kremičitan zirkoničitý","Sb2[Ni(NH3)]Cl3 je triammin-trichloronikelnatan antimonitý","SrWO4 je wolfráman strontnatý","Ba(TlO4)2 je telúran bárnatý","Na2S2O9 je diperoxodisíran sodný","Pb2P2O7 je difosforečnan diolovnatý","NH4[IrCl5] je pentachloroiridičitan amónny"],["PbCrO4","K2CrO3","CrO3","Na2CrO4","Cr2O7","K2Cr2O7","Fe(CrO2)3","(NH4)2CrO3"],["PBr3","KH2PO2","(NH4)2HPO3","FePO4","CaHPO3","HPO3","P(CN)3","PH3"],["-III v PH3","+I v NaHCO3","+II v H2O2","-I v LiH","-I v HF","+I v NH3","0 ako plynná látka vo vzduchu","+III v tríciu"],["-III v Fe2O3","+I v VO","+II v OF2","-I v Na2O2","+III v H3O+","-II v P2O5","+IV v N2O4","+VI v síranoch"],["+III v KBrO3","+I v Br2O","+V v HBrO3","-II v CuBr2","-I v bromovodíku","+VII v KBrO4","0  v kvapalnom skupenstve","+IV v PbBr4"],["+VII v NaClO4. H2O","+I v Cl2O","+II v ClBr2","-I v MnCl2","+III v NaClO","+IV v ClO2","-II v PbClO2","-III v AlCl3"],["Fe(OH)O","K4[Fe(CN)6]","[Fe(H2O)6]Cl3","Fe(HCO3)2","FePO4","Fe(ClO4)2.6H2O","FeO.Fe2O3","Fe(NO3)2.6H2O"],["Bi(OH)2NO3","P4O6","NH3","Na4[CoF6]","[CrBr2(H2O)4]NO2","Na3[AsS4]","H2PtCl6","HBO2"],["H3PO4-Na2ClO-AlN3","HPO3-NaClO-AlN","H2PO4-NaClO-AlN3","HPO4-NaClO-AlN3","HPO3-Na2ClO2-AlN","HPO-NaClO2-AlN3","H4P2O7-NaClO-AlN","H3PO4-NaClO-AlN"],["Ca(HPO4)2","CaHPO4","Ca(H2PO4)2","Ca2HPO4","CaH2PO4","CaPO4","Ca3(PO4)2","Ca2(PO4)3"],["N2O4 je dimér oxidu dusičitého","N2O5 je oxid dusičný","N2O je oxid dusný","NO2 je dioxid dusnatý","N2O3 je oxid dusnatý","NO2 je oxid dusičitý","N2O5 je dimér oxidu dusitého","N2O4 je dimér oxidu dusnatého"],["(MnO4)2-","(ZnO2)2-","[Fe(CN)6]4-","(Cr2O7)2-","(CrO4)2-","[Cu(CN)4]2-","BaO2","(H2PO4)1-"],["BiCl(O) je chlorid oxid bizmutitý","H3PO2 je kyselina trihydrogénfosforná","NH4MgHPO4 je hydrogénfosforečnan horečnato-amónny","Mg(BO2)2 je boritan horečnatý","NH4[PdCl4] je tetrachloro-paladičnan amónny","H4SiO4 je kyselina kremistá","SiC je uhoľnatan kremičitý","TeF6 je fluorid telúrový"],["H4B2O4 je kyselina tetrahydrogéndiboritá","H3AsO3 je kyselina trioxoarzenitá","H2TeO3 je kyselina teluričitá","HPO3 je kyselina fosforitá","H5IO6 je kyselina pentahydrogénjodistá","HClO4 je kyselina chlorečná","H4P2O7 je kyselina tetrahydrogéndifosforečná","H2S2O5 je kyselina disírová"]]



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

