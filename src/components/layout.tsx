import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <header>
    <div className="h-screen w-screen flex flex-col ">
      <div className="pt-4 text-2xl mx-auto tracking-widest">
        <a href="/">VEHICLES CRUD</a>
      </div>
    </div>
    <div className="justify-between align-middle items-center">{children}</div>
    <footer className="w-full text-xl text-center py-2 border-t-2 border-black">
      <a href="https://github.com/galortega/roundest-mon">Github</a>
      {" | "}
      Results
      {" | "}
      My Results
    </footer>
  </header>
);

export default Layout;
