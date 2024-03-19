//redux
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { addCart, addItem } from "../store/actions/index";
import { FiShoppingBag } from "react-icons/fi";

function AddToCard(props) {
  //add Card in Cart
  const add = (item) => {
    const check = props.carts.some((e) => {
      return e.item.id === item.id;
    });

    //if Duplicate Card in Cart, add count in Cart
    if (check) {
      const newArray = [...props.carts];
      newArray.map((e) => {
        if (e.item.id === item.id) {
          e.qty += 1;
        }
      });
      props.addItem(newArray);
    } else {
      //Add Card in Cart
      props.addCart(props.item);
    }
  };

  return (
    <div className="">
      <button onClick={() => add(props.item)} className="add-button">
        <FiShoppingBag color="#ffffff" size={15} />
        <p style={{ marginLeft: 10 }}>Add to cart</p>
      </button>
    </div>
  );
}

const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      addCart,
      addItem,
    },
    dispatch
  );

const mapStateToProps = (store) => ({
  carts: store.cartState.carts,
});
export default connect(mapStateToProps, mapDispatchProps)(AddToCard);
