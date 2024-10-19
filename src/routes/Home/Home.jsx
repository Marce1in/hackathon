import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Card from "../Sugestoes/components/Card";

export default function Home() {
  return (
    <>
      <Navbar corFonte={"text-textohome"} corClara={"bg-cadastrohome"} corEscura={"bg-loginhome"}/>

      <div className="hero bg-cadastrohome min-h-96">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl mb-5 font-bold text-white">Encontre o passeio ideal</h1>
            <hr/>
            <Link to="/formulario" className="mt-20 btn bg-white text-textohome">Iniciar jornada</Link>
          </div>
        </div>
      </div>

      <h2 className="text-texto pt-20 text-3xl text-center pb-5 font-bold">Destinos mais visitados</h2>

      <section className="flex flex-wrap gap-10 justify-center">
        <Card
          nome="Lorem"
          descricao="Lorem Apslium dolor Eu sou uma linda descrição maneira :)"
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="Lorem"
          descricao="Lorem Apslium dolor Eu sou uma linda descrição maneira :)"
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="Lorem"
          descricao="Lorem apslium Dolor mucha dor a dor eu sinto a dor ele sente adolescente."
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="Lorem"
          descricao="Lorem Apslium dolor Eu sou uma linda descrição maneira :)"
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
      </section>
      <div className="flex justify-center py-20">
        <Link to="formulario" className="btn bg-cadastre w-44 text-white">Ver mais</Link>
      </div>


      <section className="flex flex-wrap justify-center pb-10">
        <div className="w-96 pb-10">
          <article>
            <h2 className="text-textohome text-center text-3xl pb-10">Equipe de desenvolvedores</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam lobortis pellentesque ut tincidunt at urna at vitae malesuada. Pretium feugiat cras augue arcu. Vel proin metus auctor feugiat eleifend congue enim eu mauris. Aliquet sit interdum facilisis sodales arcu. Aliquet sit interdum facilisis sodales arcu.
            </p>
          </article>
          <button className="btn bg-cadastrohome w-44 text-white mt-5">Ver mais</button>
        </div>

        <div className="w-96 bg-cadastrohome flex justify-center rounded-3xl">
          <img
              className="w-80 p-12 bg-cadastrohome "
            src="https://img.abyssale.com/574bfa75-c880-46be-97ae-599473818958"/>
        </div>
      </section>

      <section className="flex flex-wrap justify-center rounded pt-10">
        <div className="w-96 pb-10">
          <article>
            <h2 className="text-textohome text-center text-3xl pb-10">Equipe de desenvolvedores</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quam lobortis pellentesque ut tincidunt at urna at vitae malesuada. Pretium feugiat cras augue arcu. Vel proin metus auctor feugiat eleifend congue enim eu mauris. Aliquet sit interdum facilisis sodales arcu. Aliquet sit interdum facilisis sodales arcu.
            </p>
          </article>
          <button className="btn bg-cadastrohome w-44 text-white mt-5">Ver mais</button>
        </div>

        <div className="w-96 bg-cadastrohome flex justify-center rounded-3xl">
          <img
              className="w-80 p-12 bg-cadastrohome rounded"
            src="https://i.pinimg.com/736x/3d/39/57/3d39577b7c62a9e6b7f49166127861c6.jpg"/>
        </div>
      </section>

      <footer className="footer mt-10 footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by SulDestino Industries Ltd</p>
        </aside>
      </footer>

    </>
  )
}
