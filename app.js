let cell = document.querySelector('.row > div');

cell.addEventListener('click', event => {
  cell.innerHTML = `Click count: ${event.detail}`;
});