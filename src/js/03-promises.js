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
      .then(result => Notiflix.Notify.success(result, { width: '300px' }))
      .catch(error => Notiflix.Notify.failure(error, { width: '300px' }));
    
    delay += step;    
  }  
};

function createPromise(position, delay) {  
  const shouldResolve = Math.random() > 0.3;
   
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};