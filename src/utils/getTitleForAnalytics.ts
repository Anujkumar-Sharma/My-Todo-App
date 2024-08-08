import { TodoTab } from "../data/constant/common.constants";

const getTitleForAnalytics = (selectedTab: string) => {
  let title = "All Todos";

  switch (selectedTab) {
    case TodoTab.ALL_TASKS:
      title = "All Todos";
      break;

    case TodoTab.TODAY_TASKS:
      title = "Todays Todos";
      break;

    case TodoTab.IMPORTANT_TASKS:
      title = "Important Todos";
      break;

    case TodoTab.PLANNED_TASKS:
      title = "Planned Todos";
      break;

    case TodoTab.ASSIGNED_TASKS:
      title = "Assigned Todos";
      break;

    default:
      title;
  }

  return title;
};

export default getTitleForAnalytics;
