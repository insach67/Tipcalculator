import { useState } from "react";
import style from "./tip.module.css";
import Output from "../output/Output";
import Input from "../input/Input";
import Footer from "../footer/Footer";
const Tip = () => {
  const [customer, SetCustomer] = useState({
    id: 1,
    amount: "",
    cusvalue: "",
    type: "",
    names: ""
  });

  const [total, setTotal] = useState(0);

  const [people, setpeople] = useState([]);

  const getValue = (service) => {
    switch (service) {
      case "Excellent":
        return 20;

      case "Good":
        return 15;

      case "Fair":
        return 10;

        case "Bad":
          return 10;

      default:
        break;
    }
  };

  const inputHandler = (event) => {
    SetCustomer({ ...customer, [event.target.name]: event.target.value });
    console.log("cus", customer);
  };

  const addHandler = () => {
    const finalTip =Number(customer.amount) / getValue(customer.type);
    console.log("final", finalTip);
    customer.cusvalue = finalTip;
    setTotal(total + finalTip);
    setpeople([...people, customer]);
    SetCustomer("");
  };

  return (
    <>
      <h3 className={style.header}>Tip Calculator</h3>
      <div>
        <Input
          inputHandler={inputHandler}
          values={people}
          addHandler={addHandler}
          customer={customer}
        />
      </div>
      <div><Output people={people} /></div>
      <div>
        <Footer addHandler={addHandler} total={total} people={people} />
      </div>
    </>
  );
};
export default Tip
