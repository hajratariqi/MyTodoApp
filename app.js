let addTodoBtn = document.getElementById('addTodo'); 
let todoInp = document.getElementById('todo');
let ul = document.getElementById('todoList');
let delAll = document.getElementById('delAll');
let todo = document.getElementById('todo');

const addTodo = () =>{
    if(todoInp.value){
        let li = document.createElement('li');
        let inp = document.createElement('input');
        inp.setAttribute('disabled', true);
        inp.setAttribute('type', 'text');
        inp.setAttribute('value', todoInp.value);
        inp.setAttribute('id', 'todo');
        ul.appendChild(li);
        li.appendChild(inp);

         // Create delete button
         let delBtn = document.createElement('button');
         let delIcon = document.createElement('img');
         delIcon.src = 'del.png'
         delIcon.classList.add('del-img')
         delBtn.setAttribute('onclick', 'this.parentNode.remove()');
         delBtn.appendChild(delIcon);
         li.appendChild(delBtn);

          // Create Edit button
        let editBtn = document.createElement('button');
        let editIcon = document.createElement('img');
        editIcon.src = 'edit.webp'
        editIcon.classList.add('del-img')
        editBtn.appendChild(editIcon);
        li.appendChild(editBtn);
        editBtn.setAttribute('onclick', 'editTodo(this)')

        todoInp.value = "";  
    }else{
        alert('Enter value in todo')
    }
}

todoInp.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTodo()
    }
})
addTodoBtn.addEventListener('click', addTodo)

delAll.addEventListener('click', ()=>{
    ul.innerHTML = ''
})
const editTodo = (e) => {
    let editInp = e.parentNode.firstChild
    if(editInp.hasAttribute('disabled')){
        editInp.removeAttribute('disabled')
        editInp.focus()
        e.innerHTML = 'Save'
    }else{
        if(editInp.value){
        e.innerHTML = 'Edit'
        editInp.setAttribute('disabled', true)
        }
    }
}