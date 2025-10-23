import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Купить продукты на неделю', isDone: false },
    { id: 2, title: 'Полить цветы', isDone: true },
    { id: 3, title: 'Сходить на тренировку', isDone: false },
  ])

  return (
    <>
      <h1>Список дел</h1>
      <ul>
        { tasks.map((task) => {
          return (
            <li key={ task.id }>
              <div>{ task.title }</div>
              <input
                type="checkbox"
                checked={ task.isDone }
                onChange={ () => {
                  setTasks(
                    tasks.map(t => t.id === task.id ? { ...t, isDone: !t.isDone } : t))
                } } />
            </li>
          )
        }) }
      </ul>
    </>
  )
}

export default App
