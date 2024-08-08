import { ChildrenType, FC } from "../../types/common.types";

const SidebarTabWrapper: FC<ChildrenType> = ({ children }) => {
  return <div className="bg-white-100-1 dark:bg-raisinBlack-100-1 py-6">{children}</div>;
};

export default SidebarTabWrapper;
