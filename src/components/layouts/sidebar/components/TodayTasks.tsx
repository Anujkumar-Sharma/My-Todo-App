import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { Todo, TodoStatus } from "../../../../store/slices/todo/todoSlice";
import InformationIcon from "../../../svg/InformationIcon";
import SidebarChart from "./SidebarChart";
import { BLACK_100_1, WHITE_100_1 } from "../../../../tw-config/colors";

const TodayTasks = ({ todos }: { todos: Array<Todo> }) => {
  const isDarkMode = useSelector((state: RootState) => state.todo.theme);
  const { completed, pending } = todos.reduce(
    (acc, curr) => {
      if (curr.status === TodoStatus.COMPLETED) {
        acc.completed += 1;
      } else {
        acc.pending += 1;
      }
      return acc;
    },
    { completed: 0, pending: 0 }
  );

  return (
    <div className="mt-[7px] pt-[18.61px] pb-[22.46px] bg-white-100-1 dark:bg-raisinBlack-100-1 shadow-[0px_1.33px_6.65px_0px_#0000001A]">
      <div className="px-[20.61px] border-b-[1.33px] border-antiFlashWhite-100-1 dark:border-eerieBlack-100-1">
        <div className="flex justify-between pb-[22.68px]">
          <h4 className="font-inter-medium text-[13.3px] leading-[16.09px] text-black-100-1 dark:text-white-100-1 font-medium flex flex-col gap-[1.28px]">
            <span>Today Tasks</span>
            <span className="text-[21.27px] leading-[25.75px] text-black-100-1 dark:text-white-100-1 font-medium">
              {todos.length}
            </span>
          </h4>
          <InformationIcon fill={isDarkMode ? WHITE_100_1 : BLACK_100_1} />
        </div>
      </div>
      <SidebarChart count={todos.length} chartStatus={{ completed, pending }} />
    </div>
  );
};

export default TodayTasks;
