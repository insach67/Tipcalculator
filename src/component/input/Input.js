 
 import {FaRupeeSign} from "react-icons/fa"
 const Input = ({ inputHandler, addHandler, customer }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Enter the bill amount</h4>
        <br />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
      < FaRupeeSign/>
        <input
       
          style={{ width: "600px" }}
          type="number"
          onChange={inputHandler}
          name="amount"
          placeholder="Enter Amount"
        />
        
      </div>
      <hr style={{ marginTop: "100px" }} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>How was the Service:</h4>
        <select name="type" onChange={inputHandler}>
          <option>Select Service</option>
          <option value="Excellent">Excellent_20%</option>
          <option value="Good">Good_15%</option>
          <option value="Fair">Fair_10%</option>
          <option value="Bad">Bad_5%</option>
        </select>
        <input
          style={{ width: "300px", marginLeft: "10px" }}
          type="text"
          name="names"
          onChange={inputHandler}
        />
        <button
          style={{
            backgroundColor: "grey",
            marginLeft: "10px",
            color: "black",
            borderRadius:"8px"
          }}
          onClick={addHandler}
        >
          Add Customer
        </button>
      </div>
    </>
  );
};
export default Input
