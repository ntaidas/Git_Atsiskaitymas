import closeTab from "./closeTab.js";

export default class Tab {
  constructor() {
    // this.img = img;
    // this.paragrapgh = paragrapgh;
    return this.display();
  }
  display() {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.style.zIndex = "1";
    const closeButton = document.createElement("button");
    const closeImg = document.createElement("img");
    closeImg.setAttribute("src", "../pictures/xmark-solid.svg");
    closeButton.append(closeImg);
    tab.append(closeButton);
    document.querySelector("body").append(tab);
    closeButton.addEventListener("click", () => closeTab(tab));



    return tab
  }
}
