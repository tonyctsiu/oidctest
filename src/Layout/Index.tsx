import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
