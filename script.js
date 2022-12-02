const subtitleNumber = document.querySelector('.subtitle-number');
const input = document.querySelector('.form__input');
const formButton = document.querySelector('.form__button');
const list = document.querySelector('.list');
let i;
let tasksStorrage;
let numberStorrage;

// check data in localStorage
if (localStorage.getItem('numberStorrage', 'tasksStorrage')) {
   i = localStorage.getItem('numberStorrage');
   list.innerHTML = localStorage.getItem('tasksStorrage');
} else {
   i = 0;
}

subtitleNumber.textContent = i;

// add task
formButton.addEventListener('click', createTask)

// change or delete task
list.addEventListener('click', changeDeleteTask)


function createTask (e) {
   e.preventDefault();
   
   if(input.value == '' || input.value < 1) {
      return;
   }
  
   const listItem = document.createElement('div');
   listItem.classList.add('list__item');
   list.append(listItem);

   const listContent = document.createElement('p');
   listContent.classList.add('list__content');   
   listContent.textContent = input.value;
   listItem.append(listContent);

   input.value = '';

   const listButton = document.createElement('span');
   listButton.classList.add('list__button');
   listButton.textContent = 'X';
   listItem.append(listButton);
   
   i++;
   subtitleNumber.textContent = i;

   toLocalStorage();
}

function changeDeleteTask(e) {
   if (e.target.tagName == 'P') {
      e.target.classList.toggle('done');
      toLocalStorage();
   } else if (e.target.tagName == 'SPAN') {
      let closeTag = e.target.closest('div');
      closeTag.remove();
      i--;
      subtitleNumber.textContent = i;
      toLocalStorage();
   }
}

function toLocalStorage() {
   tasksStorrage = list.innerHTML;
   numberStorrage = subtitleNumber.textContent;
   localStorage.setItem('tasksStorrage', tasksStorrage);
   localStorage.setItem('numberStorrage', numberStorrage);
}


   
   

   

   
   



