let addTodoBtn = document.getElementById('addTodo'); 
let todoInp = document.getElementById('todo');
let ul = document.getElementById('todoList');
let delAll = document.getElementById('delAll');
let todo = document.getElementById('todoTask');
let todosCount = document.getElementById('todosCount')
let todoNum = document.getElementById('todoNum')
let count = 0

const addTodo = () =>{
    if(todoInp.value){
        let li = document.createElement('li');
        let inpContainer = document.createElement('div');
        inpContainer.classList.add('inpContainer');

        let inp = document.createElement('input');
        inp.setAttribute('disabled', true);
        inp.setAttribute('type', 'text');
        inp.setAttribute('value', todoInp.value);
        inp.setAttribute('id', 'todoTask')
        todosCount.innerHTML = 'Your Remaining todos: '
        count += 1;

          // check box in todo item
          let checkBox = document.createElement('input')
          checkBox.setAttribute('type', 'checkbox')

          checkBox.addEventListener('click', ()=>{
          if(checkBox.checked){
                count -= 1; inp.style.textDecoration = 'line-through'; inp.style.color = 'gray'}
                else{count += 1; inp.style.textDecoration = 'none'; inp.style.color = 'black'}
            todoNum.innerHTML = count;
          })


          let btnContainer = document.createElement('div');
          btnContainer.classList.add('btnContainer');

        
        todosCount.appendChild(todoNum)
        li.appendChild(checkBox)
        ul.appendChild(li);
        li.appendChild(inp);

          // Create Edit button
        let editBtn = document.createElement('button');
        let editIcon = document.createElement('img');
        editIcon.src = 'edit.webp'
        editIcon.classList.add('edit-img')
        editBtn.appendChild(editIcon);
        li.appendChild(editBtn);
        editBtn.setAttribute('onclick', 'editTodo(this)')

        // Create delete button
        let delBtn = document.createElement('button');
        let delIcon = document.createElement('img');
        delIcon.src = 'del.png'
        delIcon.classList.add('cross-img')
        delBtn.setAttribute('onclick', 'removeTodo(this)');
        delBtn.appendChild(delIcon);
        li.appendChild(delBtn);
        
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(delBtn);
        todoInp.value = "";  
        todoNum.innerHTML = count;


        li.appendChild(inpContainer)
        inpContainer.appendChild(checkBox)
        inpContainer.appendChild(inp)

        li.appendChild(btnContainer);
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
    let editInp = e.parentNode.parentNode.firstChild.childNodes[1]
    if(editInp.hasAttribute('disabled')){
        editInp.removeAttribute('disabled')
        editInp.focus()
        e.innerHTML = 'save'
        const length = editInp.value.length;
        editInp.setSelectionRange(length, length);
        e.classList.add('saveBtn')
    }else{
        if(editInp.value){
        e.innerHTML = `<img src='edit.webp' class='del-img'/>`
        editInp.setAttribute('disabled', true)
        e.removeAttribute('class')
        }
    }
    editInp.addEventListener('keypress', (b) =>{  
        if(b.key === 'Enter'){
            editTodo(e)
        }
    })
}

const removeTodo = (e) =>{
    count -=1;
    todoNum.innerHTML = count;
    e.parentNode.parentNode.remove();
}