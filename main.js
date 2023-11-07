import { about, contact, intro, work } from "./data/tabs.js";
import Tab from "./modules/tabClass.js";

document.querySelector('#intro').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab(intro);
})
document.querySelector('#work').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab(work);
})
document.querySelector('#about').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab(about);
})
document.querySelector('#contact').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab(contact);
})