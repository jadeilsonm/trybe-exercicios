function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function addDias(array) {
    for (const day of array) {
        let tagLi = document.createElement('li');
        tagLi.innerText = day;
        if (day === 24 | day === 31) {
            tagLi.className = 'day holiday';
        } else if (day === 4 | day === 11 | day === 18) {
            tagLi.className = 'day friday';
        }else if (day === 25) {
            tagLi.className = 'day holiday friday';
        }else {
            tagLi.className = 'day';
        }
        document.querySelector('#days').appendChild(tagLi)
    }
}
addDias(dezDaysList);

function creeatBtn(str,id){
    tagBtn = document.createElement('button');
    tagBtn.innerText = str;
    tagBtn.id = id;
    document.querySelector('.buttons-container').appendChild(tagBtn);
}

creeatBtn('Feriados','btn-holiday');

document.querySelector('#btn-holiday').addEventListener('click',feriadosColor);
function feriadosColor(){
    let dayFeriados = document.querySelectorAll('.holiday');
    for (const day of dayFeriados) {
        if (day.style.backgroundColor === 'green'){
            day.style.backgroundColor = 'rgb(238,238,238)';
        }else{
            day.style.backgroundColor = 'green';
        }
    }
}

creeatBtn('Sexta-feira','btn-friday');

function sextou(){
    let arrayDay = document.querySelectorAll('.day');
    for (let i = 0;i < arrayDay.length; i ++) {
        if(arrayDay[i].innerText === '4' || arrayDay[i].innerText === '11' || arrayDay[i].innerText === '18' || arrayDay[i].innerText === '25'  ){
            arrayDay[i].innerText = 'Sextou!!';
        } else if(arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!'  ){
            arrayDay[i].innerText = i - 1;
        }
    }
}

document.querySelector('#btn-friday').addEventListener('click',sextou);

