function Buttons({ filteredFood }) {
  return (
    <div className="container">
      <button onClick={() => filteredFood("sushi")} className="change">
        Sushi
      </button>
      <button onClick={() => filteredFood("udon")} className="change">
        Udon
      </button>
      <button onClick={() => filteredFood("ramen")} className="change">
        Ramen
      </button>
      <button onClick={() => filteredFood("sweets")} className="change">
        Sweets
      </button>
    </div>
  );
}

export default Buttons;
