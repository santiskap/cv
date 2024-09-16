"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Image } from '@chakra-ui/react';

function NavLink({ name, href }: { name: string; href: string; }) {
    return (
        <a
            className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-blue-500 hover:text-white"
            href={href}
        >
            {name}
        </a>
    );
}

const SubNavLink = ({ name, href }: { name: string; href: string }) => (
  <a
    className="block px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400"
    href={href}
  >
    {name}
  </a>
);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-4 py-2 sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center  w-full justify-between">
          <div className="text-xl font-bold">
          <Image src="/logo.jpg" alt="Santiago Tula - Front-end Developer" width="80" height="80"></Image>
          </div>
          <div className="hidden md:flex space-x-4 ml-8">
            <NavLink name="Inicio" href="/" />
            <NavLink name="Portfolio" href="/portfolio#Portfolio" />
            <NavLink name="Proyectos" href="/proyectos#Proyectos" />
          </div>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 p-2"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="-mt-8 p-4 rounded-md w-1/2 mx-auto flex justify-between">
            <NavLink name="Inicio" href="/" />
            <NavLink name="Portfolio" href="/portfolio#Portfolio" />
            <NavLink name="Proyectos" href="/proyectos#Proyectos" />
          
        </div>
      </div>
    </nav>
  );
}
