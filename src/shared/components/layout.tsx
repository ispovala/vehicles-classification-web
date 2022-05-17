import React, { Fragment } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Fragment>
    <header className="w-screen flex flex-col border-b-2 border-gray-400">
      <div className="p-4 text-2xl mx-auto tracking-widest">
        <a href="/">VEHICLES CRUD</a>
      </div>
    </header>
    <div className="h-screen w-screen flex flex-col justify-between align-middle items-center">
      {children}
    </div>
    <footer className="w-full text-xl tracking-wider text-center pt-4 border-t-2 border-gray-400">
      <a href="https://github.com/galortega/vehicles-client.git">Github</a>
    </footer>
  </Fragment>
);

export default Layout;
