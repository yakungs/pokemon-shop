import Drawer from "@mui/material/Drawer";

import { AiOutlineClose } from "react-icons/ai";

import CartItem from "./CartItem";

//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearAll } from "../store/actions/index";
function CartDrawer(props) {
  //total Price all card in Cart
  const totalPrice = props.carts.reduce((sum, item) => {
    sum += item.item.cardmarket.prices.averageSellPrice * item.qty;
    return sum;
  }, 0);

  //total Card in Cart
  const totalCard = props.carts.reduce((sum, item) => {
    sum += item.qty;
    return sum;
  }, 0);

  return (
    <Drawer
      anchor={"right"}
      open={props.toggle}
      onClose={props.toggleDrawer(false)}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "#1F1D2B",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <div className="drawer">
          <div className="drawer-cart-container">
            <p className="text-outline">Cart</p>
            <button
              style={{
                fontSize: "12px",
                color: "#ABBBC2",
                textDecorationLine: "underline",
                border: "none",
                background: "none",
                margin: "0px",
                padding: "0px",
              }}
              onClick={() => props.clearAll()}
            >
              clear all
            </button>
          </div>
          <button className="cart-icon" onClick={props.toggleDrawer(false)}>
            <AiOutlineClose color="#ffffff" size={20} />
          </button>
        </div>
        <div
          style={{
            flexDirection: "row",
            borderWidth: 1,
            display: "flex",
            color: "#ffffff",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        >
          <p style={{ flex: 1 }}>Item</p>
          <p style={{ flex: 3 }}>Qty</p>
          <p style={{ flex: 1 }}>Price</p>
        </div>

        {props.data.map((item, index) => {
          return (
            <CartItem key={index} item={item.item} qty={item.qty}></CartItem>
          );
        })}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#fff" }}>Total card amount</p>
            <p style={{ color: "#fff" }}>{totalCard}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#fff" }}>Total Price</p>
            <p style={{ color: "#fff" }}>{parseFloat(totalPrice).toFixed(2)}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <button
            style={{
              flex: 3,
              backgroundColor: "#EA7C69",
              height: 48,
              border: "none",
              color: "#fff",
              borderRadius: 8,
              cursor: "pointer",
            }}
            onClick={props.toggleDrawer(false)}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </Drawer>
  );
}

const mapStateToProps = (store) => ({
  carts: store.cartState.carts,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators(
    {
      clearAll,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchProps)(CartDrawer);
