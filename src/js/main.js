import "./slider";

/* import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";  */
    
import { modals, tabs, forms, changeModalState, timer } from "./modules/index";

window.addEventListener('DOMContentLoaded', () => {
    
    const modalState = {};
    let deadLine = '2022-12-01';

    changeModalState(modalState);
    modals();
    
    tabs({
        headersSelector: '.glazing_slider',
        tabsSelector: '.glazing_block',
        contentItemsSelector: '.glazing_content',
        activeClass: '.active'
    });

    tabs({
        headersSelector: '.decoration_slider',
        tabsSelector: '.no_click',
        contentItemsSelector: '.decoration_content > div > div',
        activeClass: 'after_click'
    });

    tabs({
        headersSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img',
        contentItemsSelector: '.big_img > div > div',
        activeClass: 'do_image_more',
        display: 'inline-block'
    });

    forms(modalState);
    timer('.container1', deadLine);

});