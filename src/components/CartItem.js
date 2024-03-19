import AddButton from "./AddButton";

function CartItem(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          borderWidth: 1,
          display: "flex",
          color: "#ffffff",
          marginRight: "20px",
          marginLeft: "20px",
          marginBottom: "10px",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={props.item.images.small}
            alt={props.item.name}
            height={60}
            width={44}
            //   className="image"
          />
        </div>
        <div className="card">
          <p>{props.item.name}</p>
          <p>{"$ " + props.item.cardmarket.prices.averageSellPrice}</p>
        </div>
        <p style={{ flex: 1 }}>
          {"$ " +
            parseFloat(
              props.item.cardmarket.prices.averageSellPrice * props.qty
            ).toFixed(2)}
        </p>
      </div>
      <AddButton item={props.item} count={props.qty}></AddButton>
    </div>
  );
}

export default CartItem;
