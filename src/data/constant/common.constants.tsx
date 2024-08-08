import AddPlayListTabIcon from "../../components/svg/AddPlayListTabIcon";
import AllTasksTabIcon from "../../components/svg/AllTasksTabIcon";
import AssignTabIcon from "../../components/svg/AssignTabIcon";
import PlannedTabIcon from "../../components/svg/PlannedTabIcon";
import StarTabIcon from "../../components/svg/StarTabIcon";
import TodayTabIcon from "../../components/svg/TodayTabIcon";
import { SidebarTabs } from "../../types/common.types";

export const TABS: SidebarTabs = [
  {
    tabName: 'All Tasks',
    icon: AllTasksTabIcon,
    route: 'all-tasks',
  },
  {
    tabName: 'Today',
    icon: TodayTabIcon,
    route: 'today-tasks',
  },
  {
    tabName: "Important",
    icon: StarTabIcon,
    route: "important-tasks",
  },
  {
    tabName: 'Planned',
    icon: PlannedTabIcon,
    route: 'planned-tasks',
  },
  {
    tabName: 'Assigned to me',
    icon: AssignTabIcon,
    route: 'assigned-tasks',
  },
]

export enum TodoTab {
  ALL_TASKS = 'all-tasks',
  TODAY_TASKS = 'today-tasks',
  IMPORTANT_TASKS = 'important-tasks',
  PLANNED_TASKS = 'planned-tasks',
  ASSIGNED_TASKS = 'assigned-tasks',
}

export const TAB_ADD_LIST = {
  tabName: 'Add list',
  icon: AddPlayListTabIcon,
  route: 'add-list',
}
