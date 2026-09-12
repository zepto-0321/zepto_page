const resizer = document.querySelector("#resizer");
const body = document.body;
const aside = document.getElementById("aside");

let MIN;
const MAX = 500;
//asideの子要素に変化があったらMINをaaide.widthに
const observer = new MutationObserver(() => {
    if (aside.children.length === 0) return;

    MIN = aside.offsetWidth;

    observer.disconnect();
});
observer.observe(aside, {
    childList: true
});


let dragging = false;

resizer.addEventListener("mousedown",()=>{
    dragging = true;
});

document.addEventListener("mousemove",(e)=>{
    if(!dragging) return;

    const width = Math.min( Math.max(e.clientX ,MIN) ,MAX); //clamp
    body.style.gridTemplateColumns = `${width}px 10px 1fr`
    console.log(MIN);
});

document.addEventListener("mouseup",()=>{
    dragging = false;
});