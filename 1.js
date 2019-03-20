// Use promise and arrow functions for the following code.

console.log('uno');

setTimeout(function(){
  console.log('dos');
});

console.log('tres');

console.log('INICIO===');
const later = (delay, value) =>
  new Promise((resolve, reject) => {
    if (delay <= 10000) {
      setTimeout(resolve, delay, value);
    } else {
      reject(() => ({
        error: 'Tiempo mayor a 10 segundos'
      }));
    }
  });

later(11000, 4)
  .then(response => {
    console.log('PROMESA CUMPLIDA!!!!');
  })
  .catch(e => {
    console.log('PROMESA RECHAZADA', e);
  });

console.log('FINAL');
