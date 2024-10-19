import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function Card ({nome, img, descricao, palavraChave}) {
  const palavraChaveElm = palavraChave.map(item => 
    <div key={item} className="badge badge-outline">
      {item}
    </div>)

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl text-texto">
        <figure>
          <img
            src="https://iema.es.gov.br/Media/iema/Not%C3%ADcias/PECF%20-%20Karol%20Gazoni%20(14).jpeg"
            alt={nome}
          />
        </figure>
        <div className="card-body shadow-2xl">
          <h2 className="card-title">
            {nome}
          </h2>
          <p className="h-52">
            {descricao}
          </p>
          <div className="card-actions justify-end">
            {palavraChaveElm}
          </div>
          <div className="card-actions justify-end mt-2">
            <Link to="/sobre" className="btn bg-cadastre text-white">Saiba Mais</Link>
          </div>
        </div>
      </div>
    </>
  )
}
