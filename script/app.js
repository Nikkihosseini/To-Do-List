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

    addTastToHtml()

    saveTaskToLocalStorage()

})

function saveTaskToLocalStorage(){
    localStorage.setItem('taskList' , JSON.stringify(taskList))
}

function addTastToHtml(){
   
    let toDoListList = $.querySelector('.toDoList_list')
    if(taskList.length !== 0){
        toDoListList.style.marginTop = '1rem'
    }else{
         toDoListList.style.marginTop = '0'
    }
    toDoListList.innerHTML = ''

    taskList.forEach((task ,index) => {
        let liElem = $.createElement('li')
        liElem.classList.add('toDoList_item')
        liElem.classList.add(task.status)
        liElem.innerHTML = `
            <i onclick='toggleClassCheched(${index})' class="fa-regular fa-square-check fa-xl check-svg"></i>
            <p class="toDoList_task">${task.content}</p>
            <i onclick='deleteTask(${index})' class="fa-solid fa-xmark fa-xl delete-svg"></i>
            `
            toDoListList.append(liElem)
    })
   
}
addTastToHtml()

function toggleClassCheched(index){

    taskList[index].status = !taskList[index].status


    addTastToHtml()
    saveTaskToLocalStorage()
}

function deleteTask(index){
    taskList = taskList.filter((task , newIndex) => {return newIndex != index})

    console.lo

    addTastToHtml()
    saveTaskToLocalStorage()
}





