import { useEffect, useState } from "react";
import Items from "../components/Items";

export default function Home() {
  const LENGTH = 4;
  const [input, setInput] = useState(2);
  const [items, setItems] = useState([0]);

  function convertToMaxValue(value: number) {
    return `${value}${value}${value}${value}`;
  }

  function check_number(checking_number: number) {
    const number_array = Array.from(checking_number.toString().split(""));
    const sum = Number(
      number_array.reduce((acc, currVal) => {
        return acc + Number(currVal);
      }, 0)
    );
    if (sum == 21) {
      return true;
    }
    return false;
  }

  function generate_numbers(max: string): number[] {
    const max_number_possible = Number(max);

    const all_numbers_array = Array.from(
      Array(max_number_possible + 1).keys()
    ).filter((number) => number.toString().length == LENGTH);

    const result_array = all_numbers_array.filter(check_number);
    return result_array;
  }

  useEffect(() => {
    setItems(generate_numbers(convertToMaxValue(input)));
  }, [input]);

  return (
    <section className="container overflow-hidden">
      <div className="row align-items-center justify-content-center mt-4">
        <section className="card mt-2 p-3 col-10 text-center">
        <div className="card-body row">
          <label className="form-label">Slide to select a number (2-9)</label>
          <input
            type="range"
            className="form-range col col-12"
            value={input}
            onChange={(ev) => setInput(Number(ev.target.value))}
            min={2} 
            max={9}
            step={1}
          />         
            <p className="col col-4 m-0">Value: {input}</p> 
            <p className="col col-4 m-0">Results: {items.length}</p> 
            <p className="col col-4 m-0">Max: {convertToMaxValue(input)}</p>
          </div>
        </section>


         <section className="row mt-4 gy-2 align-items-center text-center justify-content-center">
         {items.map((value) => (
            <Items key={value} value={value} />
          ))}
         </section>
  

      </div>
    </section>
  );
}
