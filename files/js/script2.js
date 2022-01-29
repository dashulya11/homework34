'use strict';

(function () {

    document.addEventListener('DOMContentLoaded', () => {
        const data = JSON.parse(
            localStorage.getItem('inputsData')
        )
        let ul = document.createElement('ul');
        document.querySelector('body').append(ul);
        for (let key in data) {
            if (data[key]) {
                let li = document.createElement('li');
                li.textContent = data[key];
                ul.append(li);
            } else {
                alert('The fields to fill are empty! Try to re-enter the data.');
                break;
            }
        }
    });
})()
