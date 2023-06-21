import React, { ReactNode } from "react";
import NavBar from "../NavBar";
import useBikes from "@/hooks/useBikes";

type LayoutProps = {
  children: ReactNode;
};
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const { loading } = useBikes();

  return (
    <div>
      <NavBar />
      {loading ? "Loading" : children}
    </div>
  );
};

export default Layout;
