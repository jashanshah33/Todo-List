// var todoList = (function () {
    
// let tasks = [];
// const tasksList = document.getElementById('list');
// const addTaskInput = document.getElementById('add');
// const tasksCounter = document.getElementById('tasks-counter');

// async function fetchTodo() {
//     // fetch("https://jsonplaceholder.typicode.com/todos")
//     // .then((resolved) => {
//     //     return resolved.json();
//     // })
//     // .then((data) => {
//     //     tasks = data.slice(0,50);
//     //     renderList()
//     // })
//     // .catch((error) =>{
//     //     console.log("error", error);
//     // })
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const data = await response.json();
//         tasks = data.slice(0,5);
//         renderList();
//     }catch(error)  {
//         console.log(error);
//     }

 

// }

// function addAskToDom(task) {
//     let li = document.createElement("li");
//     li.innerHTML = `   
//     <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
//     <label for="${task.id}">${task.title}</label>
//     <img src="bin.png" class="delete" data-id="${task.id}" />
//      `;
//      tasksList.append(li)
// }

// function renderList () {
//     tasksList.innerText = '';

//     for (let i = 0; i < tasks.length; i++) {
//         addAskToDom(tasks[i])  
//     }
//     tasksCounter.innerText = tasks.length;
// }

// function toggleTask(taskId) {
//     const task = tasks.filter( (task) => {
//         return task.id === Number(taskId);
//     })

//     if (task.length > 0) {
//         const currentTask = task[0];
//         currentTask.completed = !currentTask.completed
//         renderList();
//         showNotification('Task toggled sucessfully')
//         return;
//     }
//     showNotification('Task toggled failed')
    
// }

// function deleteTask (taskId) {
// const newTask = tasks.filter( (task) => {
//     return task.id !== Number(taskId);
// })
//     tasks = newTask;
//     renderList();
//     showNotification('Task is deleted sucessfully')

// }

// function addTask (task) {
//     if (task) {
//         // fetch("https://jsonplaceholder.typicode.com/todos", {
//         //     method: 'POST',
//         //     headers:{
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify(task)
//         //   })
//         // .then((resolved) => {
//         //     return resolved.json();
//         // })
//         // .then((data) => {
//         //     tasks = data.slice(0,10);
//         //     tasks.push(task);
//         //     renderList();
//         //     showNotification('Task added sucessfully')
           
//         // })
//         // .catch((error) =>{
//         //     console.log("error", error);
//         // }) 
    

  
//         tasks.push(task);
//         renderList();
//         showNotification('Task added sucessfully')
//         return;       
// }
// }

// function showNotification(text) {
//     alert (text);
// }

// function handleInputKeypress(e) {
//     if (e.key === 'Enter') {
//         const text = e.target.value;

//         if (!text) {
//             showNotification("Task text can not be empty")
//             return;
//         }

//         const task = {
//             text: title,
//             id: Date.now().toString(),
//             completed: false
//         }

//         e.target.value = '';
//         addTask(task);
//     }
// }
// function handleClickListener(e) {
//     const target = e.target;
    
//     if (target.className === "custom-checkbox") {
//         const taskId = target.id;
//          toggleTask(taskId);
//          return;
//     }
//     else if(target.className === "delete"){
//         const taskId = target.dataset.id;
//         deleteTask(taskId);
//         return;
//     }
// }

// function initializeApp() {
// fetchTodo()
// addTaskInput.addEventListener("keyup", handleInputKeypress);
// window.addEventListener("click", handleClickListener)
// }

// var a =10

// return{
//     initializeApp: initializeApp,
//     a:a
// }
// })();
