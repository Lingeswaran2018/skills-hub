
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  noFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, noFooter = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      {!noFooter && <Footer />}
    </div>
  );
};

export default Layout;
