//redux
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { addCart, addItem } from "../store/actions/index";

function AddButton(props) {
  //function for add cards inside of cart section
  const add = (item) => {
    const newArray = [...props.carts];
    newArray.map((e) => {
      if (e.item.id === item.id) {
        e.qty += 1;
      }
    });
    props.addItem(newArray);
  };

  //function for delete cards inside of cart section
  const del = (item) => {
    const newArray = [...props.carts];
    newArray.map((e) => {
      if (e.item.id === item.id) {
        //Do not lower than 1
        if (e.qty <= 1) {
          e.qty = 1;
        } else {
          e.qty -= 1;
        }
      }
    });
    props.addItem(newArray);
  };

  return (
    <div
      style={{
        flexDirection: "row",
        borderWidth: 1,
        display: "flex",
      }}
    >
      <button
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "none",
          borderRadius: 8,
          color: "#fff",
          width: 54,
          height: 54,
          cursor: "pointer",
        }}
        onClick={() => del(props.item)}
      >
        <p>-</p>
      </button>
      <button
        style={{
          flex: 3,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "none",
          marginRight: 10,
          marginLeft: 10,
          color: "#fff",
          borderRadius: 8,
        }}
      >
        <p>{props.count}</p>
      </button>
      <button
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          border: "none",
          borderRadius: 8,
          color: "#fff",
          width: 54,
          height: 54,
          cursor: "pointer",
          alignItems: "flex-end",
        }}
        onClick={() => add(props.item)}
      >
        <p>+</p>
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
export default connect(mapStateToProps, mapDispatchProps)(AddButton);
