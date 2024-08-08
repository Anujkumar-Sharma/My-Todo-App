import { useEffect, useState } from 'react'
import Header from '../../components/layouts/header/Header'
import Sidebar from '../../components/layouts/sidebar/Sidebar'
import classNames from 'classnames'
import ExpendableDownArrowIcon from '../../components/svg/ExpendableDownArrowIcon'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import ViewTodo from './components/ViewTodo'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import useScreenSize from '../../hooks/useScreenSize'
import {
  PALE_GREEN_100_OB5,
  PHTHALO_GREEN_100_O9E,
} from '../../tw-config/colors'

const Dashboard = () => {
  const { selectedTodo, theme: isDarkMode } = useSelector(
    (state: RootState) => ({
      selectedTodo: state.todo.selectedTodo!,
      theme: state.todo.theme,
    }),
  )

  const screenSize = useScreenSize()
  const drawerCloseScreens = ['default', 'sm']
  const isDrawerOpen = !drawerCloseScreens.includes(screenSize)

  const [drawer, setDrawer] = useState<boolean>(isDrawerOpen)
  const [expandTodoInput, setExpandTodoInput] = useState<boolean>(true)

  useEffect(() => {
    setDrawer(isDrawerOpen)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize])

  return (
    <div className="relative z-50 dark:bg-raisinBlack-200-1">
      <Header setDrawer={setDrawer} />
      <div
        className={classNames(
          'min-h-[calc(100vh-56px)] px-4 sm:px-8 md:px-12 py-6 flex transition-all duration-300 mt-14',
          drawer ? 'xl:gap-12 lg:gap-8 md:gap-4' : 'gap-0',
        )}
      >
        <Sidebar drawer={drawer} setDrawer={setDrawer} />
        <div
          className={classNames(
            'transition-all duration-300 flex',
            drawer
              ? 'xl:w-[calc(100%-328px)] lg:w-[calc(100%-312px)] md:w-[calc(100%-297px)] w-full'
              : 'w-full',
          )}
        >
          <div
            className={classNames(
              'transition-all duration-300',
              selectedTodo
                ? 'xl:w-[calc(100%-360px)] lg:w-[calc(100%-260px)] md:w-full'
                : 'w-full',
            )}
          >
            <div
              className="h-7 flex items-center cursor-pointer"
              onClick={() => setExpandTodoInput(!expandTodoInput)}
            >
              <label
                htmlFor="selected-type"
                className="text-[13px] leading-4 text-phthaloGreen-100-o9e dark:text-paleGreen-100-ob5 font-outfit-medium"
              >
                To Do
              </label>
              <div
                className={classNames(
                  'h-6 w-6 transition-all duration-300',
                  expandTodoInput ? 'rotate-0' : '-rotate-180',
                )}
              >
                <ExpendableDownArrowIcon
                  fill={isDarkMode ? PHTHALO_GREEN_100_O9E : PALE_GREEN_100_OB5}
                />
              </div>
            </div>
            <AddTodo expandTodoInput={expandTodoInput} />
            <ListTodo />
          </div>
          <ViewTodo selectedTodo={selectedTodo} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
