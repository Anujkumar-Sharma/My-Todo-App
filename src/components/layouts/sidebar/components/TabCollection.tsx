import { useDispatch, useSelector } from "react-redux";
import { TABS } from "../../../../data/constant/common.constants";
import Tab from "../../../../pages/dashboard/components/Tab";
import SidebarTabWrapper from "../../../shared/SidebarTabWrapper";
import { changeTab } from "../../../../store/slices/todo/todoSlice";
import { RootState } from "../../../../store";

const TabCollection = () => {
  const selectedTab = useSelector((state: RootState) => state.todo.selectedTab);
  const dispatch = useDispatch();
  const handleTab = (tab: string) => {
    dispatch(changeTab(tab));
  };

  return (
    <SidebarTabWrapper>
      {TABS.map((tabData, index) => (
        <Tab
          key={index}
          tabData={tabData}
          handleTab={handleTab}
          selectedRoute={selectedTab}
        />
      ))}
    </SidebarTabWrapper>
  );
};

export default TabCollection;
