import { about, contact, intro, work } from "./data/tabs.js";
import Tab from "./modules/tabClass.js";

document.querySelector("#intro").addEventListener("click", () => {
  document.querySelector("main").classList.add("hide");
  setTimeout(() => {
    document.querySelector("main").style.display = "none";
    const tab = new Tab(intro);
  }, 500);
});
document.querySelector("#work").addEventListener("click", () => {
  document.querySelector("main").classList.add("hide");
  setTimeout(() => {
    document.querySelector("main").style.display = "none";
    const tab = new Tab(work);
  }, 500);
});
document.querySelector("#about").addEventListener("click", () => {
  document.querySelector("main").classList.add("hide");
  setTimeout(() => {
    document.querySelector("main").style.display = "none";
    const tab = new Tab(about);
  }, 500);
});
document.querySelector("#contact").addEventListener("click", () => {
  document.querySelector("main").classList.add("hide");
  setTimeout(() => {
    document.querySelector("main").style.display = "none";
    const tab = new Tab(contact);
  }, 500);
});
