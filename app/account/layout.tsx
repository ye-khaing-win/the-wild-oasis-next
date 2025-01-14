import React, { FC, ReactNode } from "react";
import SideNavigation from "../_components/SideNavigation";

interface TLayoutProps {
  children: ReactNode;
}

const layout: FC<TLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
};

export default layout;
