import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
    // Definição das rotas do menu de navegação
    const navMenu: { [key: string]: string }[] = [
        {
            'Home': '/home',
            'Central de Atendimento': '/contact',
            'Conheça a Empresa': '/about',
        }
    ];

    return (
        <div 
            className="w-full h-28 bg-gray-300 flex items-center justify-center gap-5"
        >
            {/* Mapeamento das opções do menu */}
            {Object.keys(navMenu[0]).map((key) => (
                <a 
                    key={key} 
                    href={navMenu[0][key]} 
                    className="text-2xl font-bold text-gray-800 hover:text-cyan-600"
                >
                    {key}
                </a>
            ))}
            
            {/* Botão de Login */}
            <Link 
                to={'/login'} 
                className="w-40 h-16 flex items-center justify-center bg-cyan-600 text-white text-2xl hover:bg-cyan-800 transition-all duration-300"
            >
                Login
            </Link>
        </div>
    );
};

export default NavBarMenu;
