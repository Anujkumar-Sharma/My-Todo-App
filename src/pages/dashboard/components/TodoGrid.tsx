import { ChangeEvent } from 'react'
import { setSelectedTodo, Todo } from '../../../store/slices/todo/todoSlice'
import ImportantTabIcon from '../../../components/svg/ImportantTabIcon'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import classNames from 'classnames'
import { BLACK_100_1, WHITE_100_1 } from '../../../tw-config/colors'

type TodoGridProps = {
  todo: Todo
  handleChangeSelectedTodo: (e: ChangeEvent<HTMLInputElement>) => void
  handleImportant: ({
    id,
    important,
  }: {
    id: string
    important: boolean
  }) => void
}

const TodoGrid = ({
  todo,
  handleChangeSelectedTodo,
  handleImportant,
}: TodoGridProps) => {
  const isDarkMode = useSelector((state: RootState) => state.todo.theme)
  const dispatch = useDispatch()
  return (
    <div className="border-2 border-fernGreen-100-o33 flex justify-between items-center gap-3 w-full p-4">
      <div className="px-2 flex items-center gap-6 w-[calc(100%-26px)] h-12">
        <input
          type="checkbox"
          className="h-5 w-5 cursor-pointer accent-green-700"
          value={todo.id}
          checked={todo.status === 'completed'}
          onChange={handleChangeSelectedTodo}
        />
        <p
          className={classNames(
            'capitalize cursor-pointer w-[calc(100%-48px)] h-full flex items-center overflow-hidden text-darkJungleGreen-100-1 dark:text-cultured-100-1',
            {
              'line-through': todo.status === 'completed',
            },
          )}
          onClick={() => dispatch(setSelectedTodo(todo))}
        >
          {todo.title}
        </p>
      </div>

      <div className="flex gap-4 h-12">
        <div
          onClick={() =>
            handleImportant({ id: todo.id, important: !todo.important })
          }
          className="cursor-pointer h-full flex items-center"
        >
          <ImportantTabIcon
            fill={todo.important ? 'black' : ''}
            color={isDarkMode ? BLACK_100_1 : WHITE_100_1}
            className={classNames(
              {
                'fill-black-100-1': todo.important,
                'fill-white-100-1': !todo.important,
              },
              'h-6 w-6',
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoGrid
