import { APIProvider, Map } from "@vis.gl/react-google-maps";
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
      <APIProvider apiKey="AIzaSyCLjV95RVY16FJpJ8uONQC25z2v8Qkoyto">
        <Map
          className="w-full h-screen"
          defaultCenter={{lat: -31.776, lng:  -52.3594}}
          defaultZoom={16}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </>
  )
}

