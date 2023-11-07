function closeTab(tab){
    document.querySelector('main').style.display='flex';
    tab.remove();
}

document.querySelector('#intro').addEventListener('click',()=>{
    document.querySelector('main').style.display='none';

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.style.zIndex='1';

    const closeButton = document.createElement('button');
    const closeImg = document.createElement('img');
    closeImg.setAttribute('src','./pictures/xmark-solid.svg');
    closeButton.append(closeImg);

    tab.append(closeButton)
    document.querySelector('body').append(tab)

    closeButton.addEventListener('click',()=>{
        closeTab(tab);
    })
})