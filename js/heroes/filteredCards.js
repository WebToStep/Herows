import { getData } from '../scrypts/data.js';

// фильтр получает функцию формирующую карту героя и массив с ключами в db(ключи берем из id input)
export const filterodCards = (callback, values) => {
    getData()
        .then(data => {
            //если в аргументах приходит массив values то фильтруем
            if (values) {
                let newArr = [];
                const findKeys = values.flat(),
                    speciesArr = [],
                    filtered = (oldArr, item) => oldArr.filter(i => {

                        if (i[item[0]]) {
                            return  i[item[0]].toLowerCase() === item[1].toLowerCase();
                        }
                    });
                //   если в массиве и species и gender
                if (findKeys.indexOf("species") > -1 && findKeys.indexOf("gender") > -1) {
                    // пушим всех героев в массив
                    values.forEach(item => {
                        if (item[0] === 'species') {
                            if (item[1] === 'flora') item[1] = "flora colossus";
                            speciesArr.push(...filtered(data, item));
                        }
                        // Повторно фильтруем созданный массив
                        if (item[0] === 'gender') {
                            newArr = filtered(speciesArr, item);
                        }
                    });
                    // рендерим результат на страницу
                    newArr.forEach(newArr => callback(newArr));
                    //   если в массиве только species или только gender
                } else if (findKeys.indexOf("species") > -1 || findKeys.indexOf("gender") > -1) {
                    values.forEach(item => {
                        if (item[1] === 'flora') item[1] = "flora colossus";
                        // фильтруем массив в новый массив
                        newArr = filtered(data, item);
                        // рендерим на страницу
                        newArr.forEach(newArr => callback(newArr));
                    });
                }
            // если values не передавались то выводим всех героев из бд
            } else {
                data.forEach(data => {
                    callback(data);
                });
            }
        })
        .catch(err => { console.error(err); });
};
