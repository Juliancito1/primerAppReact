import "./App.css";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui vamos a escribir logica

  return (
    //aqui va el maquetado y un poco de logica
    //<> es un Fragment
    <section className="container my-4">
    {/* <Titulos aqui van los props></Titulos> */}
     <Titulos nuevoTitulo = 'Este titulo fue creado con props' otroDato={true}/>
    </section>
  );
}

export default App;
