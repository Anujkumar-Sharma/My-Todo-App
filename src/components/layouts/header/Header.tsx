import DrawerIcon from '../../svg/DrawerIcon'
import LogoWithText from '../../svg/LogoWithText'
import SearchIcon from '../../svg/SearchIcon'
import AppGridIcon from '../../svg/AppGridIcon'
import AppModeIcon from '../../svg/AppModeIcon'
import { FC, SetState } from '../../../types/common.types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { setTheme, toggleDisplay } from '../../../store/slices/todo/todoSlice'
import { useEffect } from 'react'
import LightModeIcon from '../../svg/LightModeIcon'
import { DARK_JUNGLE_GREEN_100_1, WHITE_100_1 } from '../../../tw-config/colors'
import AppRowIcon from '../../svg/RowDisplayIcon'

const Header: FC<{ setDrawer: SetState<boolean> }> = ({ setDrawer }) => {
  const htmlClassSelector = document.querySelector('html')?.classList
  const bodyClassSelector = document.querySelector('body')?.classList
  const isDarkMode = useSelector((state: RootState) => state.todo.theme)
  const display = useSelector((state: RootState) => state.todo.display)
  const bodyClass = 'bg-raisinBlack-200-1'
  const mode = 'dark'

  const htmlClassHandler = () => {
    if (isDarkMode) {
      htmlClassSelector?.remove(mode)
      bodyClassSelector?.remove(bodyClass)
    } else {
      htmlClassSelector?.add(mode)
      bodyClassSelector?.add(bodyClass)
    }
  }

  const dispatch = useDispatch()

  useEffect(() => {
    htmlClassHandler()
  })

  const toggleTheme = () => {
    dispatch(setTheme(isDarkMode ? undefined : mode))
    htmlClassHandler()
  }

  const displayToggle = () => dispatch(toggleDisplay())

  const handleDrawerClick = () => {
    setDrawer((drawer: boolean) => !drawer)
  }

  const modeColor = isDarkMode ? DARK_JUNGLE_GREEN_100_1 : WHITE_100_1

  return (
    <div className="relative z-[300]">
      <div className="h-14 px-4 py-6 lg:px-12 sm:px-8 md:px-12 flex justify-between bg-white-100-1 dark:bg-raisinBlack-200-1 fixed top-0 left-0 z-[300] w-full">
        <div className="flex gap-6 items-center">
          <button onClick={handleDrawerClick}>
            <DrawerIcon fill={modeColor} />
          </button>
          <LogoWithText />
        </div>
        <div className="flex gap-6 items-center">
          <SearchIcon fill={modeColor} />
          <div className="cursor-pointer" onClick={displayToggle}>
            {display === 'row' ? (
              <AppGridIcon fill={modeColor} />
            ) : (
              <AppRowIcon fill={modeColor} />
            )}
          </div>
          <div onClick={toggleTheme} className="cursor-pointer">
            {isDarkMode ? <AppModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
