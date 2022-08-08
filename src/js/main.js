import "./slider";

/* import {modals} from "./modules/modals";
import {tabs} from "./modules/tabs";
import {forms} from "./modules/forms"; */
import {modals, tabs, forms} from "./modules/index";



window.addEventListener('DOMContentLoaded', () => {
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
    forms();

});