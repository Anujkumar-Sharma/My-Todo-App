import TodoRow from './TodoRow'
import useTodo from '../../../hooks/useTodo'
import { ChangeEvent } from 'react'
import TodoGrid from './TodoGrid'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import classNames from 'classnames'

const ListTodo = () => {
  const { todos, toggleImportant, update } = useTodo()
  const display = useSelector((state: RootState) => state.todo.display)

  console.log({ todos })

  const handleChangeSelectedTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      update({ id: value, status: 'completed' })
    } else {
      update({ id: value, status: 'todo' })
    }
  }

  const handleImportant = ({
    id,
    important,
  }: {
    id: string
    important: boolean
  }) => {
    toggleImportant({ id, important })
  }

  return (
    <div>
      {display === 'row' &&
        todos
          .filter((t) => t.status === 'todo')
          .map((todo) => (
            <TodoRow
              todo={todo}
              key={todo.id}
              handleChangeSelectedTodo={handleChangeSelectedTodo}
              handleImportant={handleImportant}
            />
          ))}
      <div
        className={classNames(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2',
          { 'my-4': display === 'grid' },
        )}
      >
        {display === 'grid' &&
          todos
            .filter((t) => t.status === 'todo')
            .map((todo) => (
              <TodoGrid
                todo={todo}
                key={todo.id}
                handleChangeSelectedTodo={handleChangeSelectedTodo}
                handleImportant={handleImportant}
              />
            ))}
      </div>
      <p className="mb-[25px] text-[15px] leading-5 text-darkJungleGreen-100-1 dark:text-cultured-100-1">
        Completed
      </p>
      <div>
        {todos
          .filter((t) => t.status === 'completed')
          .map((todo) => (
            <TodoRow
              todo={todo}
              key={todo.id}
              handleChangeSelectedTodo={handleChangeSelectedTodo}
              handleImportant={handleImportant}
            />
          ))}
      </div>
    </div>
  )
}

export default ListTodo
