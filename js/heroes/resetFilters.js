import { filteredCards } from './filteredCards.js';
import { herowCard } from './herowCard.js';
const heroes = document.querySelector('.heroes');

export const resetFilters = () => {
    document.querySelectorAll('input').forEach(i => {
        heroes.innerHTML = '';
        filteredCards(herowCard);
        if (i.id === 'gender-all' || i.id === 'gender-all-1') {
            i.checked = true;
        } else {
            i.checked = false;
        }
    });
};

