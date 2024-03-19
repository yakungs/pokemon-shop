import AddToCard from "./AddToCard";

function CardItem(props) {
  return (
    <div className="card-container">
      <div className="image">
        <img
          src={props.data.images.small}
          alt={props.data.name}
          height={142}
          width={102}
        />
      </div>
      <div className="info-box">
        <p className="info">{props.data.name}</p>
        <div className="price-info">
          <p className="price">
            {"$ " + props.data.cardmarket.prices.averageSellPrice}
          </p>
          <p className="price">• {props.data.set.total} Cards</p>
        </div>
        <AddToCard item={props.data} addCart={props.addCart}></AddToCard>
      </div>
    </div>
  );
}

export default CardItem;
