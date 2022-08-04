export const tabs = ({headersSelector, tabsSelector, contentItemsSelector, activeClass}) => {
    const header = document.querySelector(headersSelector),
          tab = document.querySelectorAll(tabsSelector),
          content = document.querySelectorAll(contentItemsSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {        //навешиваем обработчик события на обшую площадь которая соединяет в себе все табы
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||         //проверяем, что мы действительно кликнули на один из табов
        target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {  
            tab.forEach((item, i) => {                                    //перебираем эти табы и запоминает не только таб но и номер по порядку(i)
                if (target == item || target.parentNode == item) {      //как только пользователь кликнул на таб который мы перебираем, мы используем его индекс(i)
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

