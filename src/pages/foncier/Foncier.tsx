import "./foncier.scss";
import Filter from "../../components/filter/Filter";

const Foncier = () => {


  return (
    <div>
        <div className="filter">
            <Filter/>
        </div>
        <div className="foncier">
            <div className="box box1">
                Map
            </div>
        </div>
    </div>
  )
}

export default Foncier