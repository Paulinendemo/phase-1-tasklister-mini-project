document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputValue = document.getElementById('new-task-description').value;
  const ul = document.querySelector('#tasks');
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const buttons = document.getElementsByClassName('button');


})