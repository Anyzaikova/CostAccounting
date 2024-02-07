import './CostForm.css';
import {useState} from "react";


export default function CostForm (props) {

    const [inputName, setInputName] = useState ('');
    const [inputAmount, setInputAmount] = useState ('');
    const [inputDate, setInputDate] = useState ('');

    const nameChangeHandler = (e) => {
        setInputName (e.target.value);
    }
    const amountChangeHandler = (e) => {
        setInputAmount (e.target.value)
    }
    const dateChangeHandler = (e) => {
        setInputDate (e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault ();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date (inputDate)
        }
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={inputName}
                           onChange={nameChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min="0.01" step="0.01"
                           onChange={amountChangeHandler}
                           value={inputAmount}/>
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01"
                           step="2022-12-31"
                           onChange={dateChangeHandler}
                           value={inputDate}/>
                </div>
                <div className="new-cost__actions">
                    <button type="submit"> Добавить  расход</button>
                    <button type="button" onClick={props.onCancel}>
                        Отмена</button>
                </div>
            </div>
        </form>
    )
}


//  КАК ПРИМЕР
// const [userInput, setUserInput]=useState({
//     name: '',
//     amount: '',
//     date: ''
// })
// const nameChangeHandler = (e) => {
//     setUserInput((prevState)=>{
//         return {
//             ...userInput,
//             name :e.target.value
//         }
//     })
// }
// const amountChangeHandler = (e) => {
//     setUserInput({
//         ...userInput,
//         amount: e.target.value,
//     })
// }
// const dateChangeHandler = (e) => {
//     setUserInput({
//         ...userInput,
//         date: e.target.value,
//     })
// }