import React, { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((v) => !v);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-blue-600 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white flex items-center gap-2">
          <i className="fas fa-brain"></i>IA na Educação
        </h1>
        <div className="hidden md:flex space-x-8">
          <a href="#cenario" className="nav-link text-white">
            O Cenário
          </a>
          <a href="#solucao" className="nav-link text-white">
            A Solução
          </a>
          <a href="#fundamentacao" className="nav-link text-white">
            Fundamentação
          </a>
          <a href="#riscos" className="nav-link text-white">
            Riscos
          </a>
          <a href="#passos" className="nav-link text-white">
            Próximos Passos
          </a>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <a
          href="#cenario"
          className="block py-2 px-6 text-sm text-white hover:bg-blue-700"
          onClick={closeMenu}
        >
          O Cenário
        </a>
        <a
          href="#solucao"
          className="block py-2 px-6 text-sm text-white hover:bg-blue-700"
          onClick={closeMenu}
        >
          A Solução
        </a>
        <a
          href="#fundamentacao"
          className="block py-2 px-6 text-sm text-white hover:bg-blue-700"
          onClick={closeMenu}
        >
          Fundamentação
        </a>
        <a
          href="#riscos"
          className="block py-2 px-6 text-sm text-white hover:bg-blue-700"
          onClick={closeMenu}
        >
          Riscos
        </a>
        <a
          href="#passos"
          className="block py-2 px-6 text-sm text-white hover:bg-blue-700"
          onClick={closeMenu}
        >
          Próximos Passos
        </a>
      </div>
    </header>
  );
}

export default Header;