const $ = document
const toDoListBtn = $.querySelector('.toDoList_btn')

let taskList = [];

if(localStorage.getItem('taskList') != null){
    taskList = JSON.parse(localStorage.getItem('taskList'))
}

toDoListBtn.addEventListener('click', (event) =>{

    event.preventDefault()

    let toDoListText = $.getElementById('toDoList_text')
     
    if(toDoListText != ''){
        taskList.unshift({
            content :  toDoListText.value,
            status : 'doing'
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
    toDoListList.innerHTML = ''

    taskList.forEach((task ,index) => {
        let liElem = $.createElement('li')
        liElem.classList.add('toDoList_item')
        liElem.innerHTML = `
            <i class="fa-regular fa-square-check fa-xl check-svg"></i>
            <p class="toDoList_task">${task.content}</p>
            <i class="fa-solid fa-xmark fa-xl close-svg"></i>
            `
            toDoListList.append(liElem)
    })
   

  
}
addTastToHtml()

