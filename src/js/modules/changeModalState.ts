import checkNumInputs from './checkNumInputs';

export const changeModalState = (state) => {

    const windowsForm = document.querySelectorAll('.balcon_icons_img'),
          windowsWidth = document.querySelectorAll('#width'),
          windowsHeight = document.querySelectorAll('#height'),
          windowsType = document.querySelectorAll('#view_type'),
          windowsProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event: string, elems: any, prop: string) => {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (elem.getAttribute('type') === 'checkbox') {

                            state[prop] = i === 0 ? "Холодное" : "Теплое";
                            
                            elems.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = elem.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                }
                console.log(state);
            });
        });
    };

 bindActionToElems('click', windowsForm, 'form');
 bindActionToElems('input', windowsHeight, 'height');
 bindActionToElems('input', windowsWidth, 'width');
 bindActionToElems('change', windowsType, 'type');
 bindActionToElems('change', windowsProfile, 'profile');

};