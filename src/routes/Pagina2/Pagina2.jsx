import { Link } from "react-router-dom";

export default function Pagina2 (){
  return(
    <>
      <h2 className="text-blue-500">
        Eu sou a segunda pagina
      </h2>
      <Link to="/" className="underline text-sm">
        Clique em mim para voltar
      </Link>
    </>
  )
}
