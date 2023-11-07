import closeTab from "./closeTab.js";

export default class Tab {
  constructor({header,img,paragraphs}) {
     this.header = header;
     this.img = img;
     this.paragraphs = paragraphs;
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
    document.querySelector("body").append(tab);
    closeButton.addEventListener("click", () => closeTab(tab));
    
    const header = document.createElement('h1');
    const headerTxt = document.createTextNode(this.header);
    header.appendChild(headerTxt);
    const coverImg = document.createElement('img');
    coverImg.setAttribute('src',this.img);
    coverImg.setAttribute('alt',this.header);
    tab.append(closeButton,header,coverImg);
    this.paragraphs.forEach(paragraph => {
        console.dir(paragraph)
        const p = document.createElement('p');
        const pTxt = document.createTextNode(paragraph);
        p.append(pTxt)
        tab.append(p)
    })
    
    return tab
  }
}
