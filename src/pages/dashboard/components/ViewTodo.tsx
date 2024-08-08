import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import {
  deleteTodo,
  setSelectedTodo,
  Todo,
  TodoStatus,
  updateTodo,
} from '../../../store/slices/todo/todoSlice'
import PlusIcon from '../../../components/svg/PlusIcon'
import BellIcon from '../../../components/svg/BellIcon'
import CalendarIcon from '../../../components/svg/CalendarIcon'
import RepeatIcon from '../../../components/svg/RepeatIcon'
import { ChangeEvent, useState } from 'react'
import moment from 'moment'
import Delete from '../../../components/svg/Delete'
import { Calendar } from 'primereact/calendar'
import CloseCrossIcon from '../../../components/svg/CloseCrossIcon'
import { RootState } from '../../../store'
import {
  BLACK_100_1,
  CHINESE_WHITE_100_1,
  DARK_JUNGLE_GREEN_100_1,
  WHITE_100_1,
} from '../../../tw-config/colors'

const ViewTodo = ({ selectedTodo }: { selectedTodo: Todo }) => {
  const isDarkMode = useSelector((state: RootState) => state.todo.theme)
  const dispatch = useDispatch()
  const [calenderOpen, setCalenderOpen] = useState(false)

  const [fieldOpen, setFieldOpen] = useState({
    title: false,
    reminder: false,
    dueDate: false,
    step: false,
  })
  const [todoDetails, setTodoDetails] = useState({
    title: selectedTodo?.title,
    dueDate: selectedTodo?.dueDate,
    reminder: selectedTodo?.reminder,
    notes: selectedTodo?.notes,
  })

  const handleFieldOpenChange = (
    field: 'title' | 'reminder' | 'dueDate' | 'step',
  ) => {
    setFieldOpen((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setTodoDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = (updated: Partial<Todo>) => {
    dispatch(
      updateTodo({
        id: selectedTodo?.id,
        ...updated,
      }),
    )
    dispatch(
      setSelectedTodo({
        ...selectedTodo,
        ...updated,
      }),
    )
  }

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id))
    dispatch(setSelectedTodo(null))
  }

  return (
    <>
      <div
        className={classNames(
          'lg:hidden fixed top-0 left-0 w-full h-full bg-black-100-o50 dark:bg-black-100-o70 z-[100] transition-all duration-300',
          selectedTodo ? 'block' : 'hidden',
        )}
        onClick={() => dispatch(setSelectedTodo(null))}
      ></div>
      <div
        className={classNames(
          'lg:h-[calc(100vh-56px)] h-full md:h-screen fixed z-[150] lg:z-0 top-0 right-0 lg:top-14 transition-all duration-300 justify-start overflow-hidden flex flex-col text-sm',
          selectedTodo
            ? 'xl:w-[452px] lg:w-[300px] max-w-[400px] w-full flex opacity-100'
            : 'w-0 opacity-0',
        )}
      >
        {selectedTodo && (
          <div className="h-full pt-12 bg-antiFlashWhite-100-2 dark:bg-charlestonGreen-100-1">
            <div className="pl-4 pr-4 md:pl-12 h-[calc(100%-69px)]">
              <div className="w-full py-4 border-t-2 border-fernGreen-100-o33">
                <div className="h-12">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex justify-center items-center">
                      <input
                        type="checkbox"
                        className="h-5 w-5 cursor-pointer accent-green-700"
                        value={selectedTodo?.id}
                        checked={selectedTodo?.status === 'completed'}
                        onChange={() => {
                          handleUpdate({
                            status:
                              selectedTodo.status === TodoStatus.TODO
                                ? TodoStatus.COMPLETED
                                : TodoStatus.TODO,
                          })
                        }}
                      />
                    </div>
                    <div
                      className="cursor-pointer capitalize text-darkJungleGreen-100-1 dark:text-chineseWhite-100-1"
                      onClick={() => handleFieldOpenChange('title')}
                    >
                      {selectedTodo?.title}
                    </div>
                  </div>
                </div>

                {fieldOpen.title && (
                  <>
                    <input
                      className="mt-2 p-2 w-full"
                      type="text"
                      name="title"
                      defaultValue={todoDetails.title}
                      onChange={handleChange}
                    />
                    <button
                      className="p-2 font-bold cursor-pointer"
                      onClick={() => {
                        handleUpdate({ title: todoDetails.title })
                        handleFieldOpenChange('title')
                      }}
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
              <div className="h-[calc(100%-81.6px)] overflow-auto">
                <div className="w-full border-t-2 border-fernGreen-100-o33">
                  <div className="h-14">
                    <div className="flex h-full items-center">
                      <div className="h-12 w-12 flex items-center justify-center pt-1">
                        <PlusIcon
                          fill={
                            isDarkMode
                              ? DARK_JUNGLE_GREEN_100_1
                              : CHINESE_WHITE_100_1
                          }
                        />
                      </div>
                      <div className="cursor-pointer text-darkJungleGreen-100-1 dark:text-chineseWhite-100-1">
                        Add Step
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full border-t-2 border-fernGreen-100-o33">
                  <div className="h-14">
                    <div
                      className="flex h-full items-center"
                      onClick={() => {
                        handleFieldOpenChange('reminder')
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <BellIcon
                          fill={
                            isDarkMode
                              ? DARK_JUNGLE_GREEN_100_1
                              : CHINESE_WHITE_100_1
                          }
                        />
                      </div>
                      <div className="cursor-pointer text-darkJungleGreen-100-1 dark:text-chineseWhite-100-1">
                        Set Reminder
                      </div>
                    </div>
                  </div>
                  {fieldOpen.reminder && (
                    <>
                      <input
                        className="mt-2 p-2 w-full md:w-[calc(100%-24px)] dark:bg-charlestonGreen-100-1 dark:border dark:border-japaneseLaurel-100-1 rounded dark:text-platinum-100-1 focus:outline-none"
                        type="time"
                        name="reminder"
                        defaultValue={moment(
                          selectedTodo.reminder,
                          'hh:mm',
                        ).format('hh:mm')}
                        onChange={handleChange}
                      />
                      <button
                        className="px-4 py-1 font-bold cursor-pointer bg-platinum-100-1 dark:bg-japaneseLaurel-100-1 rounded-md mt-2.5 mb-3"
                        onClick={() => {
                          handleUpdate({ reminder: todoDetails.reminder })
                          handleFieldOpenChange('reminder')
                        }}
                      >
                        Update
                      </button>
                    </>
                  )}
                </div>
                <div className="w-full border-t-2 border-fernGreen-100-o33">
                  <div className="h-14">
                    <div
                      className="flex h-full items-center"
                      onClick={() => {
                        handleFieldOpenChange('dueDate')
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <CalendarIcon
                          fill={
                            isDarkMode
                              ? DARK_JUNGLE_GREEN_100_1
                              : CHINESE_WHITE_100_1
                          }
                        />
                      </div>
                      <div className="cursor-pointer text-darkJungleGreen-100-1 dark:text-chineseWhite-100-1">
                        Add Due Date
                      </div>
                    </div>
                  </div>
                  {fieldOpen.dueDate && (
                    <div className="mb-3">
                      <div
                        className={classNames(
                          'h-full transition-all duration-600',
                          {
                            'h-[220px]': calenderOpen,
                          },
                        )}
                      >
                        <Calendar
                          className="mt-2 w-full md:w-[calc(100%-24px)]"
                          inputClassName="h-[38px] px-4 dark:bg-charlestonGreen-100-1 dark:border dark:border-japaneseLaurel-100-1 rounded dark:text-platinum-100-1 focus:outline-none"
                          name="dueDate"
                          value={moment(todoDetails.dueDate).toDate()}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          onChange={handleChange as any}
                          onShow={() => setCalenderOpen(true)}
                          onHide={() => setCalenderOpen(false)}
                        />
                      </div>

                      <button
                        className="px-4 py-1 font-bold cursor-pointer bg-platinum-100-1 dark:bg-japaneseLaurel-100-1 rounded-md mt-2.5 mb-3"
                        onClick={() => {
                          handleUpdate({
                            dueDate: moment(todoDetails.dueDate).toDate(),
                          })
                          handleFieldOpenChange('dueDate')
                        }}
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-full border-t-2 border-b-2 border-fernGreen-100-o33">
                  <div className="h-14">
                    <div
                      className="flex h-full items-center"
                      onClick={() => {
                        handleUpdate({ repeat: !selectedTodo?.repeat })
                      }}
                    >
                      <div className="w-12 h-12 flex items-center justify-center">
                        <RepeatIcon
                          fill={
                            selectedTodo?.repeat
                              ? 'green'
                              : isDarkMode
                              ? DARK_JUNGLE_GREEN_100_1
                              : CHINESE_WHITE_100_1
                          }
                        />
                      </div>
                      <div
                        className={classNames(
                          'cursor-pointer',
                          selectedTodo?.repeat
                            ? 'text-green-600'
                            : 'text-darkJungleGreen-100-1 dark:text-chineseWhite-100-1',
                        )}
                      >
                        Repeat
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 h-[calc(100%-375px)] min-h-[120px]">
                  <textarea
                    className="mt-2 p-2 w-full h-full bg-antiFlashWhite-100-2 dark:bg-charlestonGreen-100-1 dark:text-antiFlashWhite-100-1 row-span-3 resize-none focus:outline-none"
                    name="notes"
                    rows={4}
                    placeholder="Add notes"
                    defaultValue={todoDetails.notes}
                    onChange={(e) => {
                      handleUpdate({ notes: e.target.value })
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center h-[69px] border-t border-japaneseLaurel-100-o99 px-[13px]">
              <button
                className="w-12 h-12 flex justify-center items-center"
                type="button"
                onClick={() => {
                  dispatch(setSelectedTodo(null))
                }}
              >
                <CloseCrossIcon fill={isDarkMode ? BLACK_100_1 : WHITE_100_1} />
              </button>{' '}
              <p className="break-words w-[calc(100%-72px)] text-center text-darkJungleGreen-100-o96 dark:text-mintCream-100-o96">
                Created {moment(selectedTodo?.createdAt).fromNow()}
              </p>
              <button
                className="flex justify-center items-center"
                onClick={() => handleDeleteTodo(selectedTodo.id)}
              >
                <Delete fill={isDarkMode ? BLACK_100_1 : WHITE_100_1} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ViewTodo
