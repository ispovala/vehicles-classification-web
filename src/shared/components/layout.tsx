import React, { Fragment } from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col h-screen justify-between">
    <header className="w-screen flex flex-col border-b-2 border-gray-400">
      <div className="p-4 text-2xl mx-auto tracking-widest">
        <a href="/" className="text-green-900 font-bold">Auto</a>
        <a href="/" className="text-green-800 font-bold">Classif</a>
        <a href="/" className="text-green-600 font-bold text-4xl animate-pulse">AI</a>
      </div>
      <p className="flex justify-center tracking-wider">Clasificación de vehículos a partir de imágenes usando Redes Neuronales Convolucionales </p>
    </header>
    <div className="w-screen flex flex-col justify-between align-middle items-center">
      {children}
    </div>
    <footer className="h-4 w-full text-xl tracking-wider text-center pt-4 border-t-2 border-gray-400 space-y-2">
      <div className="flex justify-center space-x-4">
        <p className="tracking-wide font-semibold">•&nbsp;Grupo 8</p>
        <p className="tracking-wider">•&nbsp;Proyecto de Inteligencia Artificial</p>
        <a href="https://github.com/ai-grupo8/vehicles-classification-web">•&nbsp;Github</a>
      </div>
      <div className="flex justify-center space-x-4">
        <p>•&nbsp;Johnny Cotrina</p>
        <p>•&nbsp;Galo Ortega</p>
        <p>•&nbsp;Isaac Ponce</p>
      </div>
    </footer>
  </div>
);

export default Layout;
