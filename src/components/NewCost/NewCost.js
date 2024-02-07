import './NewCost.css';
import CostForm from "./CostForm";
import {useState} from "react";

export default function NewCost (props) {
    const [isFormVisible, setIsFormVisible] = useState (false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random ().toString ()
        }
        props.onAddCost (costData);
        // Убираем форму когда данные отправлены
        setIsFormVisible(false);
    }

    function inputCostDataHandler () {
        setIsFormVisible (true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible (false);
    }
    return (
        <div className="new-cost">
            {!isFormVisible && <button
                onClick={inputCostDataHandler}>
                Добавить новый расход
            </button>}
            {isFormVisible &&
                <CostForm
                    onSaveCostData={saveCostDataHandler}
                    onCancel={cancelCostHandler}/>}
        </div>
    )
}