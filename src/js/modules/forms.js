import checkNumInputs from './checkNumInputs';

export const forms = (state) => {
    const forms  = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',  //создаем объект с сообщениями, которые будут показываться пользователю
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;       //функция, которая отвечает за отправку запроса
        const res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };  

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';                    //функция по очищению всех инпутов
        });
    };

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {        //перебираем все формы, навешиваем обработчик события, создаем блок, в котором будем показывать пользователю, что что-то пошло не так, либо запрос отправился.
            e.preventDefault();     

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.append(statusMessage);


            const formData = new FormData(form);        //собираем все введенные данные из этой формы   
            if (form.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php', formData)     //отправляем запрос на сервер по адресу в первом документе с даннымы, который получил formData
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};



