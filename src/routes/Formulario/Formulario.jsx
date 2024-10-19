import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Formulario() {
  // Estados para controlar o botão selecionado em cada seção
  const [viagemSelecionada, setViagemSelecionada] = useState(null);
  const [duracaoSelecionada, setDuracaoSelecionada] = useState(null);
  const [buscaSelecionada, setBuscaSelecionada] = useState(null);

  // Funções para alterar o botão selecionado
  const selecionarViagem = (opcao) => setViagemSelecionada(opcao);
  const selecionarDuracao = (opcao) => setDuracaoSelecionada(opcao);
  const selecionarBusca = (opcao) => setBuscaSelecionada(opcao);

  return (
    <>
      <Navbar
        corFonte={"text-textoform"}
        corEscura={"bg-textoform"}
        corClara={"bg-cadastroform"}
      />
      <div className="lg:mr-16 pt-24">
        <h2 className="text-textoform text-center justify-center font-bold text-5xl mb-3">
          Encontre o passeio ideal
        </h2>
        <hr className="border-[#b05413] border-b-2 w-[25vw] m-auto max-lg:hidden mb-12" />

        <section>
          <h3 className="font-bold text-textoform text-center justify-center mb-5">
            Tipo de viagem
          </h3>
          <div className="flex flex-wrap text-center justify-center mb-5 gap-6">
            {["Casal", "Em família", "Amigos", "Solo"].map((opcao) => (
              <button
                key={opcao}
                onClick={() => selecionarViagem(opcao)}
                className={`btn text-textoform shadow-sm shadow-textoform ${
                  viagemSelecionada === opcao ? "bg-[#4B3B27] text-white" : ""
                }`}
              >
                {opcao}
              </button>
            ))}
          </div>

          <h3 className="text-textoform font-bold text-center justify-center mb-5">
            Duração
          </h3>
          <div className="flex flex-wrap text-center justify-center mb-5 gap-6">
            {["1 dia", "2 - 3 dias", "5 - 7 dias", "+7 dias"].map((opcao) => (
              <button
                key={opcao}
                onClick={() => selecionarDuracao(opcao)}
                className={`btn text-textoform shadow-sm shadow-textoform ${
                  duracaoSelecionada === opcao ? "bg-[#4B3B27] text-white" : ""
                }`}
              >
                {opcao}
              </button>
            ))}
          </div>

          <h3 className="text-textoform font-bold text-center justify-center mb-5">
            O que você busca?
          </h3>
          <div className="flex flex-wrap text-center justify-center mb-5 gap-6">
            {["Descanso", "Gastronomia", "Cultura", "Atividades", "Trilhas", "Cascatas", "Paisagem"].map(
              (opcao) => (
                <button
                  key={opcao}
                  onClick={() => selecionarBusca(opcao)}
                  className={`btn text-textoform shadow-sm shadow-textoform ${
                    buscaSelecionada === opcao ? "bg-[#4B3B27] text-white" : ""
                  }`}
                >
                  {opcao}
                </button>
              )
            )}
          </div>
        </section>

        <div className="flex flex-wrap text-center justify-center mb-5 gap-6 mt-16">
          <Link to="/sugestoes" className="underline text-sm">
            <button className="btn text-branco bg-textoform shadow-sm shadow-textoform">
              Enviar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
