import './App.css'

const tasks = [
  {
    id: 1,
    title: 'Купить продукты на неделю',
    isDone: false,
    addedAt: '1 сентября',
  },
  {
    id: 2,
    title: 'Полить цветы',
    isDone: true,
    addedAt: '2 сентября',
  },
  {
    id: 3,
    title: 'Сходить на тренировку',
    isDone: false,
    addedAt: '3 сентября',
  },
]

export function App() {

  if (tasks === null) {
    return <span>Загрузка...</span>
  }

  if (tasks.length === 0) {
    return <span>Задачи отсутствуют</span>
  }

  return (
    <>
      <ul>
        { tasks.map((task) => {
          return (
            <li key={ task.id }>
              <p>
                <b>Заголовок:</b>
                { task.title }
              </p>
              <p>
                <b>Статус:</b>
                <input type="checkbox" checked={ task.isDone } onChange={ () => task.isDone = !task.isDone } />
              </p>
              <p>
                <b>Дата создания задачи:</b>
                { task.addedAt ? task.addedAt : '' }
              </p>
            </li>
          )
        }) }
      </ul>
    </>
  )
}
