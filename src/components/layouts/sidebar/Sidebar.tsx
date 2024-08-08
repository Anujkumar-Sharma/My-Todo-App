import SidebarTabWrapper from '../../shared/SidebarTabWrapper'
import { TAB_ADD_LIST } from '../../../data/constant/common.constants'
import Tab from '../../../pages/dashboard/components/Tab'
import classNames from 'classnames'
import { FC, SetState } from '../../../types/common.types'
import TabCollection from './components/TabCollection'
import ProfileView from './components/ProfileView'
import TodoAnalytics from './components/TodoAnalytics'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import useTodo from '../../../hooks/useTodo'

const Sidebar: FC<{ drawer: boolean; setDrawer: SetState<boolean> }> = ({
  drawer,
  setDrawer,
}) => {
  const { selectedTab } = useSelector((state: RootState) => state.todo)
  const { todos } = useTodo()

  return (
    <>
      <div
        className={classNames(
          'fixed top-0 left-0 w-full h-full bg-black-100-o50 dark:bg-black-100-o70 z-[252] md:hidden',
          drawer ? 'block' : 'hidden',
        )}
        onClick={() => setDrawer(false)}
      ></div>
      <div
        className={classNames(
          'transition-width duration-300 h-[calc(100vh-56px)] md:h-auto justify-end fixed z-[255] bg-white-100-1 dark:bg-raisinBlack-200-1 dark:md:bg-transparent md:z-0 left-0 top-14 overflow-auto md:overflow-hidden md:top-20 md:static md:p-0 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] dark:shadow-none md:shadow-none',
          drawer
            ? 'max-w-[300px] w-full sm:w-[340px] md:w-[280px] flex opacity-100 px-6'
            : 'w-0 opacity-0 px-0',
        )}
      >
        <div className="w-[280px] pt-0 md:pt-[102px] mt-[102px] md:mt-0 h-full pb-5 bg-white-100-1  dark:bg-raisinBlack-200-1">
          <div className="relative bg-antiFlashWhite-100-2 dark:bg-charlestonGreen-100-1 pt-[71.93px] px-5 pb-10">
            <div className="flex flex-col gap-[9px]">
              <ProfileView />
              <TabCollection />
              <SidebarTabWrapper>
                <Tab tabData={TAB_ADD_LIST} />
              </SidebarTabWrapper>
              <TodoAnalytics todos={todos} selectedTab={selectedTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
