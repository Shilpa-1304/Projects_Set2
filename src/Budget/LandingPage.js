import { useState } from "react";
export default function LandingPage() {
  const [TotalBudget, setTotalBudget] = useState(2000);
  const [spent, setSpent] = useState(0);
  const [item, setItem] = useState({});
  const [remaining, setRemaining] = useState(TotalBudget);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, item]);
    // console.log(list);
    setSpent(spent + Number(item.Cost));
    setRemaining(remaining - Number(item.Cost));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <div>
      <h3>Budget Management</h3>
      <h4>Total Budget: {TotalBudget}</h4>
      <h4>Expenditure: {spent}</h4>
      <h4>Remaining: {remaining}</h4>
      <form>
        <div>
          <label>Expenditure: </label>
          <input
            type="text"
            name="Expenditure"
            onChange={(e) => handleChange(e)}
            placeholder="Add Expenditurn name..."
          />
        </div>
        <div>
          <label>Cost: </label>
          <input
            type="number"
            name="Cost"
            onChange={(e) => handleChange(e)}
            placeholder="Add Cost..."
          />
        </div>

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
