// // Запрос в БД
export const getData = async () => {
    // путь к запросу
    const data = await fetch('./dbHeroes-master/dbHeroes.json');
    if (data.ok) {
        return data.json();
    } else {
        // вызов сообщения об ошибке
        throw new Error(`Данные небыли получены, ошибка ${data.status} ${data.statusText}`);
    }
};
