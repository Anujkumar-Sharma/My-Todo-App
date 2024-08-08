import React, { ReactNode } from "react";

export type FC<T> = React.FC<T>;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type SVGComponents = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
};

export type SidebarTab = {
  tabName: string;
  icon: React.FC<SVGComponents>;
  route: string;
};
export type SidebarTabs = SidebarTab[];

export type ChildrenType = { children: ReactNode };
