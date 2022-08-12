
export const modals = () => {

    function bindModal({triggersSelector, modalsSelector, closeSelector, closeCLickOverlay = true}: {triggersSelector: string, modalsSelector: string, closeSelector: string, closeCLickOverlay?: boolean}) {
        const triggers = document.querySelectorAll(triggersSelector),
              modals = document.querySelector<HTMLDivElement>(modalsSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll<HTMLDivElement>('[data-modal]'); 

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e: any) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                });
    
                modals.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        const closeModal = () => {
            modals.style.display = "none";
            document.body.style.overflow = "";
        };

        close.addEventListener('click', () => {

            windows.forEach(window => {
                window.style.display = 'none';
            });
            closeModal();
        });

        modals.addEventListener('click', (e: Event) => {
            if (e.target === modals && closeCLickOverlay) {
                windows.forEach(window => {
                    window.style.display = 'none';
                });
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") { 
                closeModal();
            }
        });
    }

    function showModalByTime(selector: string, time: number) {
        setTimeout(function () {
            document.querySelector<HTMLElement>(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    bindModal({
        triggersSelector: '.popup_engineer_btn',
        modalsSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });

    bindModal({
        triggersSelector: '.phone_link',
        modalsSelector: '.popup',
        closeSelector: '.popup .popup_close'
    });

    bindModal({
        triggersSelector: '.popup_calc_btn',
        modalsSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });

    bindModal({
        triggersSelector: '.popup_calc_button',
        modalsSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeCLickOverlay: false
    });

    bindModal({
        triggersSelector: '.popup_calc_profile_button',
        modalsSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeCLickOverlay: false
    });

    showModalByTime('.popup', 60000);
};

