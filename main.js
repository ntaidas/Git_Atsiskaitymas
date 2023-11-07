import { intro } from "./data/tabs.js";
import Tab from "./modules/tabClass.js";

document.querySelector('#intro').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';
    const tab = new Tab(intro);
})