const heroes = document.querySelector('.heroes');

// создание карточки героя
export const herowCard = data => {
    // проверки есть ли в базе заданные параметры, избегаем ошибки получения
    // если есть то обрабатываем
    const birtDayCheck = () => {
        if (data.birthDay) {
            return `<small class="text-success">
         <i class="fas fa-calendar-alt fa-sm text-gray-400"></i> Родился "${data.birthDay}"
        </small>`;
        } else return '';
    };
    const deathDayCheck = () => {
        if (data.deathDay) {
            if (data.birthDay) {
                return `<br><small class="text-danger">
            <i class="fas fa-calendar-alt fa-sm text-gray-400"></i> Умер "${data.deathDay}"</small>`;
            } else {
                return `<small class="text-danger">
            <i class="fas fa-calendar-alt fa-sm text-gray-400"></i> Умер "${data.deathDay}"</small>`;
            }
        } else return '';
    };
    const moviesCheck = () => {
        if (data.movies) {
            return `Список фильмов: <br>
        <small class="text-secondary"> - ${data.movies.join('<br> - ')}</small>`;
        } else return '';
    };
    const statusCheck = () => {
        if (data.status === 'alive') {
            return `<i class="fas fa-heart text-danger"></i> <small class="text-secondary"> ${data.status}</small>`;
        } else if (data.status === 'deceased') {
            return `<i class="fas fa-skull text-warning"></i> <small class="text-secondary"> ${data.status}</small>`;
        } else if (data.status === 'unknown') {
            return `<i class="fas fa-question text-info"></i> <small class="text-secondary"> ${data.status}</small>`;
        } else return '';
    };
    // шаблон html карточки героя
    const card = document.createElement('div');
    card.classList.add('col-xl-4', 'col-md-6', 'mb-4');
    card.innerHTML = `
                  <div class="herow-card card m-card shadow border-0">
                     <a href="herow-detail.html#${data.name.replace(/ /, '')}">
                        <div class="m-card-cover">
                           <div class="position-absolute bg-white shadow-sm rounded p-2 m-2 love-box">
                              <h6 class="text-gray-900 mb-0 font-weight-bold">
                                  ${statusCheck()}
                              </h6>
                              <small class="text-muted">
                                 ${birtDayCheck()}
                                 ${deathDayCheck()}
                              </small>               
                           </div>
                           <img src="${'../dbHeroes-master/' + data.photo}" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body p-3">
                           <h5 class="card-title text-gray-900 mb-1">${data.name}</h5>
                           <p class="card-text">
                              <small class="text-muted">${data.species}</small>
                           </p>
                           <p class="card-text">
                              ${moviesCheck()}
                           </p>
                        </div>
                     </a>
                   </div>
                  `;
    // дабавляем на страницу
    heroes.append(card);
};
