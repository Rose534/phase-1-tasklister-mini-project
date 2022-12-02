const todo = 'create-task-form';

document.addEventListener("DOMContentLoaded", () => {
  
  const todoform = document.getElementById(todo);
  todoform.addEventListener('submit', plus);
});

function plus(e) {
  e.preventDefault();

  const text = e.target.task.value;

  const list = document.getElementById('tasks');

  const another = document.createElement('li');
  another.innerText = text;

  const deletebtn = document.createElement('button');
  deletebtn.innerText = ' x ';
  another.append(deletebtn);

  deletebtn.addEventListener('click', e => {
    const li = e.target.parentNode;
    li.remove();
  })

  list.append(another);

  e.target.reset();


console.log(text);
}
