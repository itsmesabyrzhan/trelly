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
    return <h2>Загрузка...</h2>
  }

  if (tasks.length === 0) {
    return <h2>Задачи отсутствуют</h2>
  }

  return (
    <>
      <ul>
        { tasks.map((task) => {
          return (
            <li key={ task.id }>
              <p>
                <b>Заголовок: </b>
                <span
                  style={ {
                    textDecoration: task.isDone ? 'line-through' : 'none',
                  } }>
                  { task.title }
                </span>
              </p>
              <p>
                <b>Статус: </b>
                <input type="checkbox" checked={ task.isDone } onChange={ () => task.isDone = !task.isDone } />
              </p>
              <p>
                <b>Дата создания задачи: </b>
                { task.addedAt ? task.addedAt : '' }
              </p>
            </li>
          )
        }) }
      </ul>
    </>
  )
}
