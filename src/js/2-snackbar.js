import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', makePromise);

function makePromise(event) {
  event.preventDefault();

  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  event.currentTarget.reset();

  console.log(delay);
  console.log(state);

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
        message: `✅ Fulfilled promise in ${value}ms`,
        position: 'topRight',
        color: '#63975c',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${error}ms`,
        position: 'topRight',
        color: '#da2e28',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    });
}
