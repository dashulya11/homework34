'use strict';

(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        
        const inpData = Array.from(
            event.target.querySelectorAll('input, select')
        )
            .reduce((accum, item) => {
                accum[item.name] = item.value;
                return accum;

            }, {});
            console.log(inpData);

        localStorage.setItem(
            'inputsData',
            JSON.stringify(inpData)
        );
        
            
        event.target.reset();
    });
    document.addEventListener('DOMContentLoaded', () => {
        const data = JSON.parse(
            localStorage.getItem('inputsData')
            
        );
        
        setTimeout( () => {
            form
                .querySelectorAll('input, select')
                .forEach(item => {
                    item.value = data[item.name]
            })
        }, 1500)
    })
})()