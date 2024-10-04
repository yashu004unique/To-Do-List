let todos=[]

let textField = document.getElementById('todo-txt')
let TODOSAVE = document.getElementById('toSave')

function addNote(){

    if (textField.value === '' ){
        alert("Please add some text")
    }
    else{
        let value = {
            id: todos.length,
            todoItem: textField.value
        }         
        
        todos.push(value) 

        save()
        
        textField.value = ''

        console.log(todos)
    }    
}

function save(){

    let text = ''

    todos.forEach((value)=>{
        text += `
<div class="todo-list">
    <p>${value.todoItem}</p>
    <button onclick = "deleteTodo(${value.id})">Delete</button>
</div>
`
    }) 
    console.log(text)
    TODOSAVE.innerHTML = text
}

function deleteTodo(id){
    todos = todos.filter((value)=>
        value.id !== id
)
    save()
}