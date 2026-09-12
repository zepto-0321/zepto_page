async function getData(name){
    const res = await fetch(`../contents/${name}.txt`);
    return res.text();
}

const splitBetween = (text,start,end)=> text.split(start)[1].split(end)[0].split(/\r?\n/).filter(Boolean);


const urlParams = new URLSearchParams(window.location.search);
const contentTxt = urlParams.get("c") || "index"
window.onload = async ()=>{
    const content = (await getData(contentTxt));
    const metaD = splitBetween(content,"/:",":/");
    const sideD = splitBetween(content,"/=","=/");
    const mainD = splitBetween(content,"/@","@/");

    const mainE = document.getElementById("main");
    const headerE = document.getElementById("header");
    const asideE = document.getElementById("aside");

    metaD.forEach(ctx => {
        const elm = ctx.split(":");
        if(elm[0] === "header") headerE.textContent = elm[1];
        if(elm[0] === "title") document.title = elm[1]
    });
    sideD.forEach((txt,i) => {
        const elm = document.createElement("a");
        elm.textContent = txt;
        elm.href =`/#${i}`;
        elm.style.display="block";
        asideE.appendChild(elm);
    });

    let headingCnt=0;
    mainD.forEach(txt=> {
        let elm;
        if(txt[0] === "#"){
            headingCnt++;
            elm = document.createElement("h3");
            elm.id=headingCnt;
            elm.textContent = txt.slice(1);
        }else{
            elm = document.createElement("p");
            elm.textContent = txt;
        }
        mainE.appendChild(elm);
    });
}