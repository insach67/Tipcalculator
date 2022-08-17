 const Footer = ({ addHandler, total, people }) => {
  return (
    <>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ backgroundColor: "grey", color: "black" }}
          onClick={addHandler}
        >
          Calculate Tip & Customer
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Number of Customer</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{people.length}</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
          
        }}
      >
        @sachin
      </div>
    </>
  );
};
export default Footer
