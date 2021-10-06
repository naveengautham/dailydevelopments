window.onload = function(){
    const additemstocapture=document.getElementById("add-items");
    const capturingtextitems=document.getElementById("add-text");
    const listItemstoadd=document.getElementById("list-items");
const enteritems= e =>{
    let inputValue=capturingtextitems.value;
    if(!inputValue){
        return;
    }

    const finaltask=(e)=>{
        if(e.target.checked){
            e.target.setAttribute('class','strike');
        }else{
            e.target.removeAttribute('class')
        }
    }
   
    const template= document.getElementById("template");
    const clone=document.importNode(template.content,true);
    clone.querySelector("span").textContent=inputValue;
    clone.querySelector("input").addEventListener('click',finaltask);
    listItemstoadd.appendChild(clone);
    

    capturingtextitems.value=""
};
    additemstocapture.addEventListener('click',enteritems);
};