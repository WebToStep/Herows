// // Запрос в БД
export const getData = async () => {
   // путь к запросу
   const data = await fetch('./dbHeroes-master/dbHeroes.json');
   if (data.ok) {
       return data.json()
   } else {
       // вызов сообщения об ошибке
       throw new Error(`Данные небыли получены, ошибка ${data.status} ${data.statusText}`)
   }
}

// обрабатываем полученные данные
export const filteredData = (callback, values) => {
   getData()
   .then((data) => {
      if (values) {
         let newArr = [];
         let speciesArr = [];
         let speciesArr2 = values.flat();
         console.log('speciesArr2: ', speciesArr2);

         if (speciesArr2.indexOf("species") > -1 || speciesArr2.indexOf("gender") > -1) {
            // In the array!
            values.forEach((item)=>{
                 if (item[1] === 'flora') item[1] = "flora colossus";
                 newArr = data.filter(i => {
                    if (i[item[0]]) {
                        return  i[item[0]].toLowerCase() === item[1].toLowerCase();
                    }
                 });
                 newArr.forEach((newArr) => callback(newArr));
            })
         } else if (speciesArr2.indexOf("species") > -1 && speciesArr2.indexOf("gender") > -1) {
            // In the array!
            // values.forEach((item)=>{
            //      if (item[1] === 'flora') item[1] = "flora colossus";
            //      newArr = data.filter(i => {
            //         if (i[item[0]]) {
            //             return  i[item[0]].toLowerCase() === item[1].toLowerCase();
            //         }
            //      });
            //      newArr.forEach((newArr) => callback(newArr));
            // })
            console.log('In the array');
         }
      } else {
         data.forEach((data) => {
            callback(data)
         })
      }
   })
   .catch(err => { console.error(err) })
}
