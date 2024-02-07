import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import {useState} from "react";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

function Costs (props) {

    const [selectedYear, setSelectedYear] = useState ('');
    const yearChangeHandler = (year) => {
        setSelectedYear (year);
        console.log (selectedYear);
    }

    const filteredCosts = props.costs.filter (cost => {
        return cost.date.getFullYear ().toString () === selectedYear;

    });


    return (
        <div>
            <Card className='costs'>
                <CostsFilter onYearChange={yearChangeHandler}
                             year={selectedYear}/>
                <CostDiagram costs={filteredCosts}/>
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    );
}

export default Costs;