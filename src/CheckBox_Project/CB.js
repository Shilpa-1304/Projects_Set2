import { useState } from "react";
export default function CB() {
  const [selected, setSelected] = useState(false);
  const [check, setCheck] = useState([]);
  const list = ["A", "B", "C", "D"];
  const handleClick = (e) => {
    const { value, checked } = e.target;
    setCheck([...check, value]);
    if (!checked) {
      setCheck(check.filter((item) => item !== value));
    }
  };
  const handleSelectAll = () => {
    if (!selected) {
      setSelected(!selected);
      setCheck(list);
    } else {
      setSelected(!selected);
      setCheck([]);
    }
  };
  console.log(check);
  return (
    <div>
      <div>
        <label>Select All</label>
        <input
          type="checkbox"
          name="SelectAll"
          checked={selected}
          onChange={() => {
            handleSelectAll();
          }}
        />
      </div>
      {list.map((item) => {
        return (
          <div>
            <label>{item}</label>
            <input
              type="checkbox"
              name="SelectAll"
              value={item}
              checked={check.includes(item)}
              onClick={(e) => handleClick(e)}
            />
          </div>
        );
      })}
    </div>
  );
}
