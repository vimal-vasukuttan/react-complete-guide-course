const AddNewExpense = (props) => {

    const handleAddNewExpense = () => {
        props.handleAddNewExpense()
    }
    return (<div>
        <button onClick={handleAddNewExpense}>Add New Expense</button>
    </div>)
}

export default AddNewExpense