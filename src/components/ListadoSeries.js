import { useContext } from "react";
import SeriesContext from "../context/SeriesContext";

const ListadoSeries = () => {
  const { series, setSeries } = useContext(SeriesContext);
  return (
    <ul className="series">



      <li className="serie"> hola( quue, 2111 año )</li>



    </ul>
  );
};
export default ListadoSeries;

//<li className="serie"><img className="poster" src="https://m.media-amazon.com/images/M/MV5BMTQzODk5N2UtYjE4ZC00YWM1LWJkMGYtYmY2NjNjMjIzZDRmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg" alt="Six feet under" />Six feet under (HBO, año 2001)</li>
