import { useState } from "react";
import Formulario from "./components/Formulario";
import ListadoSeries from "./components/ListadoSeries";
import TotalSeries from "./components/TotalSeries";
import SeriesContext from "./context/SeriesContext";

function App() {
  const [series, setSeries] = useState([{ nombre: "Six feet under", plataforma: "HBO", anyo: 2001 }, { nombre: "Casi feliz", plataforma: "Netflix", anyo: 2020 }, { nombre: "Atypical", plataforma: "Netflix", anyo: 2017 }]);

  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Mis series</h1>
        </header>
        <SeriesContext.Provider value={{ series, setSeries }}>
          <section className="crear-serie row">
            <Formulario />
          </section>
          <section className="listado">
            <TotalSeries />
            <ListadoSeries />
          </section>
        </SeriesContext.Provider>
      </div>
    </>
  );
}

export default App;
