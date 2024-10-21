import LineChart from "./components/LineChart";
import CardDashboard from "./components/CardDashboard";
import GraphsDashboard from "./components/GraphsDashboard";
import PieChartSM from "./components/PieChartSM";
import LineChartSM from "./components/LineChartSM";
import SearchBarGeneral from "./components/SearchBarGeneral";

export default function Home() {
  return (
    <div className="h-screen lg:col-start-2 col-end-5 col-start-1 overflow-hidden">
      {/* Buscador - Informacion User */}
      <SearchBarGeneral page={"Home Page"} />
      {/* Contenedor Seccion */}
      <div className="px-12 mt-6">
        {/* 4 indicadores */}
        <div className="my-10">
          <CardDashboard />
        </div>
        {/* Line Chart */}
        <div className="lg:pb-2 lg:px-12 lg:h-84 shadow-md">
          <div className="hidden lg:block">
            <GraphsDashboard />
          </div>
          <div className="lg:hidden block">
            <PieChartSM />
          </div>
          <div className="lg:hidden block">
            <LineChartSM />
          </div>
        </div>
      </div>
    </div>
  );
}
