import closeTab from "./closeTab.js";

export default class Tab {
  constructor({ header, img, video, paragraphs }) {
    this.header = header;
    this.img = img;
    this.video = video;
    this.paragraphs = paragraphs;
    return this.display();
  }
  display() {
    // static part
    document.querySelector("html").style.height = "fit-content";
    const tab = document.createElement("div");
    tab.setAttribute("id", "tab");
    tab.style.zIndex = "1";
    const closeButton = document.createElement("button");
    const closeImg = document.createElement("img");
    closeImg.setAttribute("src", "../pictures/xmark-solid.svg");
    closeButton.append(closeImg);
    document.querySelector("body").append(tab);
    closeButton.addEventListener("click", () => closeTab(tab));
    // part used to create content for tab from data file
    const header = document.createElement("h1");
    const headerTxt = document.createTextNode(this.header);
    header.appendChild(headerTxt);
    if (this.img) {
      const coverImg = document.createElement("img");
      coverImg.setAttribute("src", this.img);
      coverImg.setAttribute("alt", this.header);
      tab.append(closeButton, header, coverImg);
    }
    if(this.video){
      const coverVideo = document.createElement('video');
      coverVideo.setAttribute('autoplay','');
      coverVideo.setAttribute('loop','');
      const videoSrc = document.createElement('source');
      videoSrc.setAttribute('src', this.video);
      coverVideo.appendChild(videoSrc)
      tab.append(closeButton, header, coverVideo);
    }
    
    this.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      const pTxt = document.createTextNode(paragraph);
      p.append(pTxt);
      tab.append(p);
    });
    return tab;
  }
}
