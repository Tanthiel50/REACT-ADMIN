import "./services.scss";
import Filter from "../../components/filter/Filter";

const Services = () => {


  return (
    <div>
        <div className="filter">
            <Filter/>
        </div>
        <div className="home">
            <div className="box box1">
                Chart
            </div>
            <div className="box box2">Lorem</div>
            <div className="box box3">Map</div>
            <div className="box box4">Chart</div>
        </div>
    </div>
  )
}

export default Services