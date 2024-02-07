import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import './App.css';

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date (2023, 10, 18),
        description: 'Холодильник',
        amount: 999.99
    },
    {
        id: 'c2',
        date: new Date (2021, 10, 10),
        description: 'Iphone',
        amount: 1289.99
    },
    {
        id: 'c3',
        date: new Date (2023, 4, 15),
        description: 'Джинсы',
        amount: 99.99
    }
];

function App () {
    const [costs, setCosts] = useState (INITIAL_COSTS);


    const addCostHandler = (cost) => {
        setCosts ((prevCosts) => {
            return [cost, ...prevCosts]
        });
    }
    return (

        <div className="App">
            <h1 className='heading'> Учет расходов </h1>
            <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
    );
}


export default App;
