'use strict';

import Notiflix from 'notiflix';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();  

  const formElements = event.currentTarget.elements;  
  let delay = Number(formElements.delay.value);
  const step = Number(formElements.step.value);
  const amount = formElements.amount.value;

  for (let i = 1; i <= amount; i += 1) {   
    console.log(`delay: ${delay}, step: ${step}, amount: ${amount}`);

    createPromise(i, delay)
      .then(({position, delay}) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { width: '300px' }))
      .catch(({position, delay}) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { width: '300px' }));
    
    delay += step;    
  }  
};

function createPromise(position, delay) {  
  const shouldResolve = Math.random() > 0.3;
   
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
};