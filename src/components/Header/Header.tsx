import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Gatos Aleatórios</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="/sobre" className="text-white">
              Sobre
            </a>
          </li>
          <li>
            <a href="/contato" className="text-white">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
