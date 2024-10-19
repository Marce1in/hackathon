import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="text-red-500">
        Eu sou uma home
      </h1>
      <Link to="/pagina2" className="underline text-sm">
        Clique em mim eu sou um link
      </Link>
    </>
  )
}
