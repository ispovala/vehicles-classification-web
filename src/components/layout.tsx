import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <div className="h-screen w-screen flex flex-col justify-between align-center items-center">
      <div className="text-2xl mx-auto">
        <a href="/">Which Pokémon is Rounder?</a>
      </div>
    </div>
    {children}
    <footer className="w-full text-xl text-center py-2 border-t-2 border-black">
      <a href="https://github.com/galortega/roundest-mon">Github</a>
      {" | "}
      Results
      {" | "}
      My Results
    </footer>
  </>
);

export default Layout;
