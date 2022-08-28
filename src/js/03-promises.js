// імпорт бібліотеки Notiflix
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

Notiflix.Notify.init({});   
Notiflix.Notify.merge({     
  width: '310px',
  timeout: 10000,
});


const form = document.querySelector('.form');


form.addEventListener("submit", submit);


function submit(event) {
  event.preventDefault();   
  const {
    elements: { delay, step, amount } 
  } = event.currentTarget;           

  let delayValue = Number(delay.value);   
  let stepValue = Number(step.value);     
  let amountValue = Number(amount.value); 
  Notiflix.Notify.info(`delay: ${delayValue}, step: ${stepValue}, amount: ${amountValue}`);
    
  
  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delayValue)      
        .then(({ position, delay }) => {      
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {      
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    
    delayValue += stepValue;    
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;    
  
  const promise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      if (shouldResolve) {
        return resolve({ position, delay }) 
      } else {
        return reject({ position, delay })  
      }
    }, delay);
  })
  return promise;   
}