//Domov
function domov(color){
    var c = document.getElementById("domov");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,50,50)
    ctx.beginPath();
    ctx.moveTo(25,0);
    ctx.lineTo(50,25);
    ctx.lineTo(40,25);
    ctx.lineTo(40,50);
    ctx.lineTo(30,50);
    ctx.lineTo(30,40);
    ctx.lineTo(20,40);
    ctx.lineTo(20,50);
    ctx.lineTo(10,50);
    ctx.lineTo(10,25);
    ctx.lineTo(0,25);
    ctx.lineTo(25,0);
    ctx.fillStyle = color;
    ctx.fill();
}
//BIO
function bio(color) {
    var bioc = document.getElementById("bio");
    var bioctx = bioc.getContext("2d");
    var cpx = 15
    var cpy = 21
    bioctx.clearRect(0,0,200,50)
    bioctx.lineWidth = 3;
    bioctx.beginPath();
    bioctx.moveTo(13,0);
    bioctx.quadraticCurveTo(cpx,cpy,25,25)
    bioctx.moveTo(37,0);
    bioctx.quadraticCurveTo(50-cpx,cpy,25,25)
    bioctx.moveTo(13,50);
    bioctx.quadraticCurveTo(cpx,50-cpy,25,25)
    bioctx.moveTo(37,50);
    bioctx.quadraticCurveTo(50-cpx,50-cpy,25,25)
    bioctx.strokeStyle = color;
    bioctx.stroke();
    posx = [12,9,0,9,12]
    for (let i = 0; i < 5; i++){
        y = 10*i+5
        bioctx.moveTo(25-posx[i], y);
        bioctx.lineTo(25+posx[i], y);
        bioctx.strokeStyle = color;
        bioctx.stroke();
    }
    bioctx.fillStyle = color;
    bioctx.font = "30px Arial";
    bioctx.fillText("Biológia", 55, 35);
}

//CHE
function che(color){
    var chec = document.getElementById("che");
    var chectx = chec.getContext("2d");
    chectx.clearRect(0,0,200,50)
    chectx.lineWidth = 3;
    chectx.strokeStyle = color;
    chectx.beginPath();
    chectx.arc(25, 35, 13, 1.5*Math.PI+0.2, 1.5*Math.PI-0.2);
    chectx.stroke();
    var girth = 3
    var moreGirth = 5
    chectx.beginPath();
    chectx.moveTo(25-girth,22);
    chectx.lineTo(25-girth,10);
    chectx.lineTo(25-moreGirth,10);
    chectx.lineTo(25-moreGirth,5);
    chectx.lineTo(25+moreGirth,5);
    chectx.lineTo(25+moreGirth,10);
    chectx.lineTo(25+girth,10);
    chectx.lineTo(25+girth,22);
    chectx.stroke();
    chectx.lineWidth = 2;
    chectx.beginPath();
    chectx.moveTo(22,31);
    chectx.arc(20, 31, 2, 0, 2*Math.PI);
    chectx.moveTo(32,34);
    chectx.arc(31, 34, 1, 0, 2*Math.PI);
    chectx.moveTo(26,40);
    chectx.arc(23, 40, 3, 0, 2*Math.PI);
    chectx.stroke();
    chectx.fillStyle = color;
    chectx.font = "30px Arial";
    chectx.fillText("Chémia", 55, 35);
}

//editor
function edit(color){
    var editc = document.getElementById("edit");
    var editctx = editc.getContext("2d");
    editctx.clearRect(0,0,200,50)
    editctx.lineWidth = 3;
    editctx.strokeStyle = color;
    editctx.beginPath();
    editctx.moveTo(3,10);
    editctx.lineTo(3,45);
    editctx.moveTo(3,10);
    var cpx = 22;
    var cpy = 2;
    editctx.quadraticCurveTo(cpx,cpy, 28,10);
    editctx.lineTo(28,45);
    editctx.moveTo(53,10);
    editctx.lineTo(53,45);
    editctx.moveTo(53,10);
    editctx.quadraticCurveTo(55-cpx,cpy, 28,10);
    editctx.moveTo(3,45);
    editctx.quadraticCurveTo(cpx,cpy+35, 28,45);
    editctx.moveTo(53,45);
    editctx.quadraticCurveTo(55-cpx,cpy+35, 28,45);
    editctx.stroke();

    var anotherGirth = 2;
    var length = 20;
    editctx.fillStyle = color;
    editctx.lineWidth = 2;
    editctx.beginPath();
    editctx.moveTo(30,30);
    editctx.lineTo(35-anotherGirth, 25-anotherGirth);
    editctx.lineTo(35-anotherGirth, 25-anotherGirth);
    editctx.lineTo(35-anotherGirth+length, 25-anotherGirth-length);
    editctx.arc(35+length, 25-length, 3, 1.25*Math.PI, 0.25*Math.PI);
    editctx.lineTo(35+anotherGirth, 25+anotherGirth);
    editctx.lineTo(30, 30);
    editctx.fill();

    editctx.font = "30px Arial";
    editctx.fillText("Editor", 70, 35);
}


//main
domov("white");
function domMouseOver(){domov("#55f")}
function domMouseOut(){domov("white")}
document.getElementById("domov").addEventListener("mouseover", domMouseOver)
document.getElementById("domov").addEventListener("mouseout", domMouseOut)

bio("white");
function bioMouseOver(){bio("yellowgreen")}
function bioMouseOut(){bio("white")}
document.getElementById("bio").addEventListener("mouseover", bioMouseOver)
document.getElementById("bio").addEventListener("mouseout", bioMouseOut)

che("white");
function cheMouseOver(){che("#f4f")}
function cheMouseOut(){che("white")}
document.getElementById("che").addEventListener("mouseover", cheMouseOver)
document.getElementById("che").addEventListener("mouseout", cheMouseOut)

edit("white");
function editMouseOver(){edit("orange")}
function editMouseOut(){edit("white")}
document.getElementById("edit").addEventListener("mouseover", editMouseOver)
document.getElementById("edit").addEventListener("mouseout", editMouseOut)