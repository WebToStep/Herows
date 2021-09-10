/* eslint-disable indent */
import { getData } from '../scrypts/data.js';
const appendTag = document.querySelector('.container-fluid');

// создание карточки героя
export const renderHerowDetail = hash => {
    getData()
        .then(data => {
            const filtered = data.filter(i =>
                i.name.replace(/ /, '') === hash
            );
            filtered.forEach(i => {
                const filmList = i.movies.map(film => `
                <div class="col-xl-3 col-md-6">
                    <div class="card m-card film shadow border-0">
                        <div class="m-card-cover">
                            <div class="position-absolute bg-white shadow-sm rounded text-center p-2 m-2 love-box">
                                <h6 class="text-gray-900 mb-0 font-weight-bold"><i class="fas fa-heart text-danger"></i> 74</h6>
                            </div>
                            <img src="img/cinema/Ресурс${Math.floor(Math.random() * 3)}.png" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body p-3">
                            <h5 class="card-title text-gray-900 mb-1">${film}</h5>
                        </div>
                    </div>
                </div>`);
                // // шаблон html карточки героя
                const herow = document.createElement('div');
                herow.className = 'row';
                herow.innerHTML = `
                        <div class="col-xl-3 col-lg-3">
                         <div class="bg-white p-3 widget shadow rounded mb-4">
            <!-- photo -->
                            ${i.photo ?
                        `<img src="${'../../dbHeroes-master/' +
                        i.photo}" class="img-fluid rounded" alt="${i.name}">` :
                        ''} 
                            <h1 class="h6 mb-3 mt-3 font-weight-bold text-gray-900">Herow Info</h1>
            <!-- realName -->                       
                            ${i.realName ?
                        `<p class="mb-2">
                                    <i class="fas fa-user-alt"></i> 
                                    Real Name<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${i.realName}
                                </p>` : ''}
            <!-- gender -->               
                            <p class="mb-2">
                                ${i.gender === 'Femele' ?
                        '<i class="fas fa-mars"></i>' :
                        '<i class="fas fa-mars"></i>'}
                                Gender - ${i.gender ? i.gender : ''}
                            </p>
            <!-- status --> 
                             ${i.status ?
                        `<p class="mb-2"><i class="fas fa-list-alt fa-fw"></i>
                                &nbsp;&nbsp;${i.status}</p>` : ''} 
            <!-- birthDay    --> 
                             ${i.birthDay ?
                        `<p class="mb-2"><i class="fas fa-calendar-alt fa-fw"></i>
                                Date of Birth - ${i.birthDay}</p>` : ''} 
            <!-- deathDay --> 
                             ${i.deathDay ?
                        `<p class="mb-2"><i class="fas fa-calendar-alt fa-fw"></i>
                                Date of death - ${i.deathDay}</p>` : ''} 
            <!-- citizenship --> 
                             ${i.citizenship ?
                        `<p class="mb-2"><i class="fas fa-map-marker-alt fa-fw"></i>
                                Location - ${i.citizenship}</p>` : ''} 
                         </div>
                      </div>
                      <div class="col-xl-9 col-lg-9">
                         <div class="bg-white info-header shadow rounded mb-4">
                            <div class="row d-flex align-items-center justify-content-between p-3 border-bottom">
                               <div class="col-lg-7 m-b-4">
            <!-- name --> 
                                  <h3 class="text-gray-900 mb-0 mt-0 font-weight-bold">${i.name}</h3>
            <!-- species -->
                               ${i.species === 'human' ?
                        '<p class="mb-0 text-gray-800">' +
                        '<small class="text-muted">' +
                        '<i class="fas fa-user-circle fa-fw fa-sm mr-1"></i>' +
                        '&nbsp;&nbsp;' + i.species +
                        '</small>' +
                        '</p>' :
                        i.species === 'Celestial' ?
                            '<p class="mb-0 text-gray-800">' +
                            '<small class="text-muted">' +
                            '<i class="fab fa-skyatlas"></i>' +
                            '&nbsp;&nbsp;' + i.species +
                            '</small>' +
                            '</p>' :
                            i.species === 'Zehoberei' ?
                                '<p class="mb-0 text-gray-800">' +
                                '<small class="text-muted">' +
                                '<i class="fab fa-reddit-alien"></i>' +
                                '&nbsp;&nbsp;' + i.species +
                                '</small>' +
                                '</p>' :
                                i.species === 'flora colossus' ?
                                    '<p class="mb-0 text-gray-800">' +
                                    '<small class="text-muted">' +
                                    '<i class="fas fa-seedling"></i>' +
                                    '&nbsp;&nbsp;' + i.species +
                                    '</small>' +
                                    '</p>' :
                                    i.species === 'Asgardian' ?
                                        '<p class="mb-0 text-gray-800">' +
                                        '<small class="text-muted">' +
                                        '<i class="fab fa-fort-awesome"></i>' +
                                        '&nbsp;&nbsp;' + i.species +
                                        '</small>' +
                                        '</p>' :
                                        i.species === 'Titan' ?
                                            '<p class="mb-0 text-gray-800">' +
                                            '<small class="text-muted">' +
                                            '<i class="fab fa-empire"></i>' +
                                            '&nbsp;&nbsp;' + i.species +
                                            '</small>' +
                                            '</p>' :
                                            i.species === 'Android' ?
                                                '<p class="mb-0 text-gray-800">' +
                                                '<small class="text-muted">' +
                                                '<i class="fas fa-robot"></i>' +
                                                '&nbsp;&nbsp;' + i.species +
                                                '</small>' +
                                                '</p>' :
                                                i.species === 'Centaurian' ?
                                                    '<p class="mb-0 text-gray-800">' +
                                                    '<small class="text-muted">' +
                                                    '<i class="fab fa-ethereum"></i>' +
                                                    '&nbsp;&nbsp;' + i.species +
                                                    '</small>' +
                                                    '</p>' : ''
                    }
                               </div>
                            </div>
                         </div>
                         <div class="bg-white p-3 widget shadow rounded mb-4">
                         <h3>Actor - ${i.actors}</h3>
                            <h1 class="h6 mb-3 mt-0 font-weight-bold text-gray-900">list of films</h1>
                            <div class="row">
                            ${filmList.join('')}
                            </div>
                         </div>
                      </div>`;
                // дабавляем на страницу
                appendTag.append(herow);
            });
        });
};
