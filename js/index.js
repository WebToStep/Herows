import {filteredData} from './scrypts/data.js';
import {herowCart} from './scrypts/herowCart.js';


const heroes = document.querySelector('.heroes'),
spiner = document.querySelector('.spinner'),
inputs = document.querySelectorAll('input');




document.addEventListener('change', (e) =>{
   if(e.target.localName.toLowerCase() === 'input'){
      heroes.innerHTML = '';
      spiner.style.display = 'inline-block';
      let i = 0;
      const values = [];
      inputs.forEach((item) => {
         const val = item.id.split('-');
         if(item.checked){
               values.push(val);
            }else{
               i++
            }
            if(i === inputs.length){
               filteredData(herowCart);
            }
         })
         filteredData(herowCart, values);
         spiner.style.display = 'none';
   }
});

filteredData(herowCart);
// document.addEventListener('change', (e) =>{
//    if(e.target.localName.toLowerCase() === 'input'){
//       heroes.innerHTML = '';
//       spiner.style.display = 'inline-block';
//       let i = 0;
//       const values = [];
//          inputs.forEach((item) => {
//             const val = item.id.split('-');
//             if(item.checked){
//                values.push(val);
//                filteredData(herowCart, val[0], val[1], values);
//             }else{
//                i++
//             }
//             if(i === inputs.length){
//                filteredData(herowCart);
//             }
//          })
//          spiner.style.display = 'none';
//    }
// });

// filteredData(herowCart);
