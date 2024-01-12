import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex flex-col h-screen justify-between">
    <header className="w-screen flex flex-col border-b-2 border-gray-400">
      <div className="p-4 text-2xl mx-auto tracking-widest">
        <a href="/" className="text-green-900 font-bold">Auto</a>
        <a href="/" className="text-green-800 font-bold">Classif</a>
        <a href="/" className="text-green-600 font-bold text-4xl animate-pulse">AI</a>
      </div>
      <p className="flex justify-center tracking-wider text-center">Clasificación de vehículos a partir de imágenes usando Redes Neuronales Convolucionales </p>
    </header>
    <div className="w-screen flex flex-col justify-between align-middle items-center my-auto">
      {children}
    </div>
    <a href="https://github.com/ai-grupo8" className="ml-auto mr-4"><img className="w-10 h-10" src="/github.png" alt="github" /></a>
    <div className="p-16" />
    <footer className="absolute inset-x-0 bottom-0 w-full tracking-wider text-center pt-4 border-t-2 border-gray-400 space-y-2 text-sm md:text- base">
      <div className="grid grid-rows-2 text-center">
        <ul className="tracking-wide font-semibold text-base">Grupo 8</ul>
        <ul className="tracking-wider">Proyecto de Inteligencia Artificial</ul>
      </div>
      <div className="flex justify-center space-x-4">
        <ul>Johnny Cotrina</ul>
        <ul>•</ul>
        <ul>Galo Ortega</ul>
        <ul>•</ul>
        <ul>Isaac Ponce</ul>
      </div>
      <div className="p-1" />
    </footer>
  </div>
);

export default Layout;
