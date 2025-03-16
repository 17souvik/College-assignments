document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', deleteTask);

            const taskCheckbox = listItem.querySelector('.task-checkbox');
            taskCheckbox.addEventListener('change', toggleComplete);
        }
    }

    function deleteTask(event) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }

    function toggleComplete(event) {
        const listItem = event.target.parentNode;
        const taskText = listItem.querySelector('.task-text');
        taskText.classList.toggle('completed');
    }
});

