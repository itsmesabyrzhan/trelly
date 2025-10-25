import './App.css'

const tasks = [
  {
    id: 1,
    title: 'Купить продукты на неделю',
    isDone: false,
    addedAt: '1 сентября',
    priority: 2,
  },
  {
    id: 2,
    title: 'Полить цветы',
    isDone: true,
    addedAt: '2 сентября',
    priority: 0,
  },
  {
    id: 3,
    title: 'Сходить на тренировку',
    isDone: false,
    addedAt: '3 сентября',
    priority: 1,
  },
  {
    id: 4,
    title: 'Срочно отправить рабочий отчет',
    isDone: false,
    addedAt: '4 сентября',
    priority: 4,
  },
  {
    id: 5,
    title: 'Заплатить за коммунальные услуги',
    isDone: false,
    addedAt: '3 сентября',
    priority: 3,
  },
]

const priorityColors: Record<number, string> = {
  0: '#ffffff',
  1: '#ffd7b5',
  2: '#ffb38a',
  3: '#ff9248',
  4: '#ff6700',
}

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
            <li
              key={ task.id }
              style={ {
                backgroundColor: priorityColors[task.priority],
              } }
              onClick={ () => alert(`ID задачи: ${ task.id }`) }
            >
              <p>
                <b>Заголовок: </b>
                <span
                  style={ {
                    textDecoration: task.isDone ? 'line-through' : 'none',
                  } }
                >
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
