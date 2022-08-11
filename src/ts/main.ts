import "../js/slider";

import { modals, tabs, forms, changeModalState, images, timer } from "../js/modules/index";

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
    images();
});