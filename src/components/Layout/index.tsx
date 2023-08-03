import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="py-36 lg:py-12 px-6 lg:px-24 max-w-7xl mx-auto relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
