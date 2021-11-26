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
        } else if (day === 25) {
            tagLi.className = 'day holiday friday';
        } else {
            tagLi.className = 'day';
        }
        document.querySelector('#days').appendChild(tagLi)
    }
}
addDias(dezDaysList);

function creeatBtn(str, id) {
    tagBtn = document.createElement('button');
    tagBtn.innerText = str;
    tagBtn.id = id;
    document.querySelector('.buttons-container').appendChild(tagBtn);
}

creeatBtn('Feriados', 'btn-holiday');

document.querySelector('#btn-holiday').addEventListener('click', feriadosColor);
function feriadosColor() {
    let dayFeriados = document.querySelectorAll('.holiday');
    for (const day of dayFeriados) {
        if (day.style.backgroundColor === 'green') {
            day.style.backgroundColor = 'rgb(238,238,238)';
        } else {
            day.style.backgroundColor = 'green';
        }
    }
}

creeatBtn('Sexta-feira', 'btn-friday');

function sextou() {
    let arrayDay = document.querySelectorAll('.day');
    for (let i = 0; i < arrayDay.length; i++) {
        if (arrayDay[i].innerText === '4' || arrayDay[i].innerText === '11' || arrayDay[i].innerText === '18' || arrayDay[i].innerText === '25') {
            arrayDay[i].innerText = 'Sextou!!';
        } else if (arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!' || arrayDay[i].innerText === 'Sextou!!') {
            arrayDay[i].innerText = i - 1;
        }
    }
}

document.querySelector('#btn-friday').addEventListener('click', sextou);



let days = document.querySelector('#days');
days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '60px';
    event.target.style.fontWeight = '600';
})

days.addEventListener('mouseout', (event) => {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
})

function creatTarefas(str) {
    let tarefa = document.createElement('span');
    tarefa.innerText = str;
    document.querySelector('.my-tasks').appendChild(tarefa);
}
creatTarefas('cozinhar')

function legenda(cor) {
    let legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    document.querySelector('.my-tasks').appendChild(legenda);
}

legenda('red')

document.querySelector('.task').addEventListener('click', (event) => {
    if (event.target.className === 'task selected') {
        event.target.className = 'task'
    } else {
        event.target.className = 'task selected';
    }
})


//gabarito do corse
function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    days.addEventListener('click', function (event) {
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
        }
    });
};

setDayColor();


function compromissos() {
    let btn = document.querySelector('#btn-add');
    let input = document.querySelector('#task-input');
    let list = document.querySelector('.task-list');

    btn.addEventListener('click', () => {
        if (input.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = input.value;
            list.appendChild(newLi);
            input.value = '';
        } else {
            alert('Error: Digite ao menos 1 caractere.');
        }

    })
    input.addEventListener('keyup',(event) => {
        if (event.key === 'Enter' && input.value.length > 0) {
            let newLi = document.createElement('li');
            newLi.innerText = getInputField.value;
      
            list.appendChild(newLi);
            input.value = '';
          }
    })
}

compromissos();