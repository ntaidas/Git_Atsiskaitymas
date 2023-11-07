export default function closeTab(tab){
    document.querySelector('main').style.display='flex';
    tab.remove();
    document.querySelector('html').style.height = '100%';
}