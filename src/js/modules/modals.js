const modals = () => {
    function bindModal({triggersSelector, modalsSelector, closeSelector}) {
        const triggers = document.querySelectorAll(triggersSelector),
              modals = document.querySelector(modalsSelector),
              close = document.querySelector(closeSelector); 

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modals.style.display = "block";
                document.body.style.overflow = "hidden";
                /* document.body.classList.add('modal-open'); */
            });
        });
        const closeModal = () => {
            modals.style.display = "none";
            document.body.style.overflow = "";
        };

        close.addEventListener('click', () => {
            /* modals.style.display = "none";
            document.body.style.overflow = ""; */
            /* document.body.classList.remove('modal-open'); */
            closeModal();
        });

        modals.addEventListener('click', (e) => {
            if (e.target === modals) {
                /* modals.style.display = "none";
                document.body.style.overflow = ""; */
                /* document.body.classList.remove('modal-open'); */
                closeModal();
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    /* bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'); */
    bindModal({
        triggersSelector: '.popup_engineer_btn',
        modalsSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });
    /* bindModal('.phone_link', '.popup', '.popup .popup_close'); */
    bindModal({
        triggersSelector: '.phone_link',
        modalsSelector: '.popup',
        closeSelector: '.popup .popup_close'
    });
    showModalByTime('.popup', 60000);
};

export default modals;