import { useContext } from "react";
import SeriesContext from "../context/SeriesContext";

const TotalSeries = () => {
  const { series, setSeries } = useContext(SeriesContext);

  return (
    <h3 className="total">Listando {series.lenght} series</h3>
  );
};
export default TotalSeries;
