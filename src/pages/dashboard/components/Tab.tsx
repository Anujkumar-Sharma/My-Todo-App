import classNames from "classnames";
import { FC, SidebarTab } from "../../../types/common.types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  DARK_JUNGLE_GREEN_100_1,
  GRANNY_SMITH_APPLE_100_1,
  JAPANESE_LAUREL_100_1,
  PLATINUM_100_1,
} from "../../../tw-config/colors";

const Tab: FC<{
  tabData: SidebarTab;
  selectedRoute?: string;
  handleTab?: (tab: string) => void;
}> = ({
  tabData: { tabName, icon: Icon, route },
  selectedRoute,
  handleTab,
}) => {
  const isDarkMode = useSelector((state: RootState) => state.todo.theme);

  return (
    <div
      className={classNames(
        "h-10 px-4 py-2 flex gap-4 items-center cursor-pointer",
        route === selectedRoute
          ? "bg-japaneseLaurel-100-o29 rounded-lg"
          : "bg-lotion-100-1 dark:bg-raisinBlack-100-1"
      )}
      onClick={() => {
        handleTab?.(route);
      }}
    >
      <Icon
        fill={
          route === selectedRoute
            ? isDarkMode
              ? JAPANESE_LAUREL_100_1
              : GRANNY_SMITH_APPLE_100_1
            : isDarkMode
            ? DARK_JUNGLE_GREEN_100_1
            : PLATINUM_100_1
        }
      />
      <label
        htmlFor="nav-elements"
        className={classNames(
          "text-[15px] font-medium leading-5 text-darkJungleGreen-100-1 font-outfit-medium cursor-pointer",
          route === selectedRoute
            ? "text-japaneseLaurel-100-1 dark:text-grannySmithApple-100-1"
            : "text-darkJungleGreen-100-1 dark:text-platinum-100-1"
        )}
      >
        {tabName}
      </label>
    </div>
  );
};

export default Tab;
