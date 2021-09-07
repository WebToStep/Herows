import { filteredCards } from './heroes/filteredCards.js';
import { herowCard } from './heroes/herowCard.js';
import { resetFilters } from './heroes/resetFilters.js';

const heroes = document.querySelector('.heroes'),
    spiner = document.querySelector('.spinner'),
    inputs = document.querySelectorAll('input'),
    reset = document.querySelector('.reset');



filteredCards(herowCard);

document.addEventListener('change', e => {
    if (e.target.localName.toLowerCase() === 'input') {
        heroes.innerHTML = '';
        spiner.style.display = 'inline-block';
        let i = 0;
        const values = [];
        inputs.forEach(item => {
            const val = item.id.split('-');
            if (item.checked) {
                values.push(val);
            } else {
                i++;
            }
            if (i === inputs.length) {
                filteredCards(herowCard);
            }
        });
        filteredCards(herowCard, values);
        spiner.style.display = 'none';
    }
});

reset.addEventListener('click', () => {
    resetFilters();
});
