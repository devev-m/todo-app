const input = document.querySelector('.input');
const btn = document.querySelector('.button');
const list = document.querySelector('.list');

btn.addEventListener('click', (e) => {
   e.preventDefault();
   
   if(input.value !== '' & input.value.length > 1) {
      
      const div = document.createElement('div');
      div.classList.add('list-item');
      list.append(div);

      const paragraph = document.createElement('p');
      
      paragraph.innerHTML = input.value;
      div.append(paragraph);
      
      
      let span = document.createElement('span');
      span.innerHTML = 'X';
      div.append(span);

      input.value = '';

      paragraph.addEventListener('click', () => {
         paragraph.classList.toggle('done');
      })
      
   }
})


