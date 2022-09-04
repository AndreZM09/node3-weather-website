
const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

// msg1.textContent = 'From js';

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const location = search.value;

    msg1.textContent = 'Loading...'
    msg2.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error;
            } else {
                msg1.textContent = data.location;
                msg2.textContent = data.forecast;
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });

});





