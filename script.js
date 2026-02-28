const addTodoList = () => {
    const taskText = document.getElementById('todolist')
    const taskValue = taskText.value
    if (taskValue === '') {
        alert('Masukkan kegiatan terlebih dahulu')
    }else{
        const taskList = document.createElement('li')
        taskList.innerText = taskValue
        const list = document.getElementById('list')
        list.appendChild(taskList)
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Hapus'
        deleteBtn.addEventListener("click", function(){
            taskList.remove()
        })
        taskList.appendChild(deleteBtn)
        taskText.value = ""
    }
}