const tasks = [
  { title: 'Купить продукты на неделю', isDone: false },
  { title: 'Полить цветы', isDone: true },
  { title: 'Сходить на тренировку', isDone: false },
]

const rootElement = document.getElementById('root')

const titleElement = document.createElement('h1')
titleElement.textContent = 'Список дел'
rootElement.append(titleElement)

const taskListElement = document.createElement('ul')

tasks.forEach(task => {
  const taskElement = document.createElement('li')

  const taskTitleElement = document.createElement('div')
  taskTitleElement.textContent = task.title
  taskElement.append(taskTitleElement)

  const taskCheckboxElement = document.createElement('input')
  taskCheckboxElement.type = 'checkbox'
  taskCheckboxElement.checked = task.isDone
  taskElement.append(taskCheckboxElement)

  taskListElement.append(taskElement)
})

rootElement.append(taskListElement)
