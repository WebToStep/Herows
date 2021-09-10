import { getData } from '../scrypts/data.js';

export const filteredLenght = () => {
    const small = document.querySelectorAll('small');
    getData()
        .then(data => {
            small.forEach(e => {
                const key = e.parentNode.getAttribute('for').split('-')[0].toLowerCase();
                let val = e.parentNode.getAttribute('for').split('-')[1].toLowerCase();
                //  console.log('val: ', val);
                //  console.log('key: ', key);
                const filtered = data.filter(i => {
                    if (val === 'flora') val = "flora colossus";
                    if (val === 'all') {
                        return val;
                    }
                    if (i[key]) {
                        return i[key].toLowerCase() === val;
                    }
                });
                //  console.log('filtered: ', filtered.length);
                //  console.log(e);
                e.textContent = filtered.length;
            });
        });
};
