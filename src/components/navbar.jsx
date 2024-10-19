/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Navbar({corFonte, corClara, corEscura}) {

  return(
    <>
      <nav className={`${corFonte} flex flex-row justify-between items-center mx-[5vw] h-16`}>

        <h2 className="text-xl">Sul<span className="font-semibold">Destino</span></h2>

        <ul className="flex flex-row gap-5 font-bold max-lg:hidden">
          <li className="hover:underline underline-offset-8">
            <Link to="/" >Home</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link to="/">Destinos Mais Visitados</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link to="/formulario">Formulário</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link to="/">Sobre Nós</Link>
          </li>
        </ul>

        <div className="max-lg:hidden">
          <button className={`${corClara} btn mr-3 text-white`}>Cadastre-se</button>
          <button className={`${corEscura} btn text-white`}>Login</button>
        </div>

        <div className="lg:hidden z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn drawer-button bg-transparent border-none shadow-none">☰</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/sugestoes">Destinos Mais Visitados</Link></li>
              <li><Link to="/formulario">Formulário</Link></li>
              <li><Link to="/">Sobre Nós</Link></li>

              <button className="btn mt-5">Cadastre-se</button>
              <button className="btn mt-5">Login</button>

            </ul>

          </div>
        </div>

      </nav>
    </>
    )
}
