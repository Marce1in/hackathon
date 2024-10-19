import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function Saiba() {
  return (
    <> 
      <div className="bg-[#F9F5F1] min-h-screen">
        {/* Navbar */}
        <Navbar
          corFonte={"text-textoform"}
          corEscura={"bg-textoform"}
          corClara={"bg-cadastroform"}
        />
      
        {/* Main Content */}
        <div className="px-[5vw] py-12 cl">
          <div>
            <h1 className="text-4xl font-bold text-[#8A6534] mb-6">Nome do bem Legal</h1>
            <p className="text-lg text-[#4B3B27] mb-8">
              Lorem ipsum dolor sit amet consectetur. Quam lobortis pellentesque ut tincidunt at urna at
              vitae malesuada. Pretium feugiat cras augue arcu. Vel proin metus auctor feugiat eleifend
              congue enim eu mauris. Aliquet sit interdum facilisis sodales arcu.
            </p>
          </div>

          {/* Mapa */}
          <div>
            <APIProvider apiKey={"AIzaSyCLjV95RVY16FJpJ8uONQC25z2v8Qkoyto"}>
              <Map
                className="h-96"
                defaultCenter={{lat: -31.776, lng: -52.3594}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
              />
            </APIProvider>
          </div>

        </div>
      </div>
    </>
  );
}
