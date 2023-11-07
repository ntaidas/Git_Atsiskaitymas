export default function closeTab(tab){
    document.querySelector('main').style.display='flex';
    tab.classList.add('hide');
    document.querySelector('html').style.height = '100%';
    setTimeout(()=>{    tab.remove();
        document.querySelector("main").classList.remove('hide');},500)

}
