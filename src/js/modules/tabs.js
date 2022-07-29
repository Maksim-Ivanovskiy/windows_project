const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {        //навешиваем обработчик события на обшую площадь которая соединяет в себе все табы
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||         //проверяем, что мы действительно кликнули на один из табов
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {  
            tab.forEach((item, i) => {                                    //перебираем эти табы и запоминает не только таб но и номер по порядку(i)
                if (target == item || target.parentNode == item) {      //как только пользователь кликнул на таб который мы перебираем, мы используем его индекс(i)
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;