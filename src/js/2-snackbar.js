import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[name="delay"]');
const form = document.querySelector('fieldset');
const btn = document.querySelector('button');

let delay = null;
let state = null;

form.addEventListener('change', event => {
  if (event.target.type === 'radio') {
    state = event.target.value;
  }
});

input.addEventListener('blur', event => {
  delay = event.target.value;
});

btn.addEventListener('click', makePromise);

function makePromise(event) {
  event.preventDefault();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(value => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: '#63975c',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: '#da2e28',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    });
}
