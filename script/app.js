const $ = document
const toDoListBtn = $.querySelector('.toDoList_btn')

let taskList = [];





if(localStorage.getItem('taskList') != null){
    taskList = JSON.parse(localStorage.getItem('taskList'))
}

toDoListBtn.addEventListener('click', (event) =>{

    event.preventDefault()

    let toDoListText = $.getElementById('toDoList_text')
     
    if(toDoListText.value != ''){
        taskList.unshift({
            content :  toDoListText.value,
            status : false
        })
    }

    toDoListText.value = '';

    addTaskToHtml()

    saveTaskToLocalStorage()

})

function saveTaskToLocalStorage(){
    localStorage.setItem('taskList' , JSON.stringify(taskList))
}

function addTaskToHtml(){
   
    let toDoListList = $.querySelector('.toDoList_list')
    if(taskList.length !== 0){
        toDoListList.style.marginTop = '1rem'
    }else{
         toDoListList.style.marginTop = '0'
    }
    toDoListList.innerHTML = ''

    taskList.forEach((task, inedex) => {
        let liElem = $.createElement('li')
        liElem.classList.add('toDoList_item')
        liElem.innerHTML = `
           <div class='item' style="background-color: ${taskList[inedex].status ?  '#58ff68' : 'rgba(255, 255, 255, 0.6)' }">
                <i onclick='toggleStatus(${inedex})' class="fa-regular fa-square-check fa-xl check-svg"></i>
                <p class="toDoList_task">${task.content}</p>
                <i onclick='deleteTask(${inedex})' class="fa-solid fa-xmark fa-xl delete-svg"></i>
           </div>
            `
            toDoListList.append(liElem)
    })
   
}
addTaskToHtml()

function toggleStatus(inedex){

    taskList[inedex].status = !taskList[inedex].status

    addTaskToHtml()
    saveTaskToLocalStorage()
}


function deleteTask(inedex){
    taskList = taskList.filter((task , newInedex) => {return inedex != newInedex})
 
    addTaskToHtml()
    saveTaskToLocalStorage()
}





