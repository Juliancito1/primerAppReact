import "./App.css";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //aqui vamos a escribir logica

  return (
    //aqui va el maquetado y un poco de logica
    //<> es un Fragment
    <section className="container my-4">
     <Titulos></Titulos>
     <Titulos/>
    </section>
  );
}

export default App;
