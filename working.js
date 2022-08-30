const kits=['w','a','s','d','j','k','l'];
const containerE1=document.querySelector(".container");
kits.forEach(kit=>{
    const btnE1=document.createElement("button");
    btnE1.classList.add("btn");
    btnE1.innerText=kit;
    btnE1.style.backgroundImage="url(images/" + kit + ".png)";
    containerE1.appendChild(btnE1);
    const audioE1=document.createElement("audio");
    audioE1.src="sound/"+kit+".mp3";
    containerE1.appendChild(audioE1);
    btnE1.addEventListener("click",()=>{
        audioE1.play();
    })
    window.addEventListener("keydown",(event)=>{
       if(event.key===kit){
        audioE1.play();
        btnE1.style.transform ="scale(0.9)";
        setTimeout(()=>{
            btnE1.style.transform ="scale(1)";
        },100);
       };
       
    })
});