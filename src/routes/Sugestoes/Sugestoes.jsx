import Navbar from "../../components/navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar corFonte={"text-texto"} corEscura={"bg-login"} corClara={"bg-cadastre"}/>
      <h2 className="text-3xl text-center text-texto font-bold pt-20 pb-10">Sugestão de destino</h2>
      <section className="flex flex-wrap gap-10 justify-center">
        <Card
          nome="Guerreiro"
          descricao="Lorem apslium Dolor mucha dor a dor eu sinto a dor ele sente adolescente."
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="fumaça"
          descricao="Lorem apslium Dolor mucha dor a dor eu sinto a dor ele sente adolescente."
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="Dragão shaolin"
          descricao="Lorem apslium Dolor mucha dor a dor eu sinto a dor ele sente adolescente."
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
        <Card
          nome="foo"
          descricao="Lorem apslium Dolor mucha dor a dor eu sinto a dor ele sente adolescente."
          palavraChave={["Lorem", "Apslium", "Dolor"]}
        />
      </section>
    </>
  )
}
