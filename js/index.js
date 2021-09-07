import { filterodCards } from './heroes/filteredCards.js';
import { herowCard } from './heroes/herowCard.js';


const heroes = document.querySelector('.heroes'),
    spiner = document.querySelector('.spinner'),
    inputs = document.querySelectorAll('input');




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
                filterodCards(herowCard);
            }
        });
        filterodCards(herowCard, values);
        spiner.style.display = 'none';
    }
});

filterodCards(herowCard);
