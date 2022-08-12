
export const tabs = ({headersSelector, tabsSelector, contentItemsSelector, activeClass, display = 'block'}: 
{headersSelector: string, tabsSelector: string, contentItemsSelector: string, activeClass: string, display?: string }) => {
    const headers = document.querySelector(headersSelector),
          tabs = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll<HTMLDivElement>(contentItemsSelector);
    
    function hideTabContent() {
        content.forEach(contentItem => {
            contentItem.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {

        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    headers.addEventListener('click', (e) => {        //навешиваем обработчик события на обшую площадь которая соединяет в себе все табы
        const target = e.target as HTMLDivElement;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||         //проверяем, что мы действительно кликнули на один из табов
            (<HTMLDivElement>target.parentNode).classList.contains(tabsSelector.replace(/\./, "")))) {  
            tabs.forEach((tab, i) => {                                    //перебираем эти табы и запоминает не только таб но и номер по порядку(i)
                if (target == tab || target.parentNode == tab) {      //как только пользователь кликнул на таб который мы перебираем, мы используем его индекс(i)
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
