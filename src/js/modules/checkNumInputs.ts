const checkNumInputs = (selector: string) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(input => {
        input.addEventListener('input', () => {
            (<HTMLInputElement>input).value = (<HTMLInputElement>input).value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;