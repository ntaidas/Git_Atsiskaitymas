import Tab from "./modules/tabClass.js";

document.querySelector('#intro').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab;
})