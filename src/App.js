import "./App.css";
import CardItem from "./components/CardItem";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import DropDown from "./components/DropDown";
import CartDrawer from "./components/CartDrawer";
import Pagination from "@mui/material/Pagination";
import Webcam from "react-webcam";
//connect
import { connect } from "react-redux";

function App(props) {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  //pagination
  const [last, setLast] = useState(1);
  const [first, setFirst] = useState(0);

  //search
  const [search, setSearch] = useState("");

  //filter value
  const [rare, setRare] = useState();
  const [type, setType] = useState("");
  const [set, setSet] = useState("");

  //fitler array
  const [rareInfo, setRareInfo] = useState([]);
  const [typeInfo, setTypeInfo] = useState([]);
  const [setInfo, setSetInfo] = useState([]);
  //Fetch Data From Api
  useEffect(() => {
    //Fetch pokemon card 20 cards
    axios.get("https://api.pokemontcg.io/v2/cards").then((res) => {
      setData(res.data.data.slice(first, 20 * last));
    });

    //Ferch rarities api
    axios.get("https://api.pokemontcg.io/v2/rarities").then((res) => {
      setRareInfo(res.data.data);
    });

    //Fetch types api
    axios.get("https://api.pokemontcg.io/v2/types").then((res) => {
      setTypeInfo(res.data.data);
    });

    //Fetch set api
    axios.get("https://api.pokemontcg.io/v2/sets").then((res) => {
      setSetInfo(res.data.data);
    });
    // return () => {};
  }, [first, last]);

  //open and close Drawer
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggle(open);
  };

  //function for search
  const onchange = (event) => {
    setSearch(event.target.value);
  };

  //function for filter by select
  const changeFilter = (type, val) => {
    // set value by type
    if (type === "Set") {
      setSet(val);
    } else if (type === "Rarity") {
      setRare(val);
    } else {
      setType(val);
    }
  };

  //set Pagination
  const onPageChange = (evt, value) => {
    const st = 20 * value - 20;
    setFirst(st);
    setLast(value);
  };

  return (
    <Webcam />
    // <div className="App">
    //   <div className="navbar">
    //     <p className="Logo">Pokemon market</p>
    //     <div className="menu">
    //       <input
    //         className="search"
    //         placeholder="search by name"
    //         onChange={onchange}
    //       ></input>
    //       <React.Fragment>
    //         <button
    //           type="submit"
    //           className="cart-icon"
    //           onClick={toggleDrawer(true)}
    //         >
    //           <FiShoppingBag color="#ffffff" size={20} />
    //         </button>
    //         <CartDrawer
    //           data={props.carts}
    //           toggle={toggle}
    //           toggleDrawer={toggleDrawer}
    //         ></CartDrawer>
    //       </React.Fragment>
    //     </div>
    //   </div>
    //   <div className="filter">
    //     <p className="choose-text">Choose Card</p>
    //     <div className="dropdown-container">
    //       <DropDown
    //         data={typeInfo}
    //         type={"Type"}
    //         changeFilter={changeFilter}
    //       ></DropDown>
    //       <DropDown
    //         data={rareInfo}
    //         type={"Rarity"}
    //         changeFilter={changeFilter}
    //       ></DropDown>
    //       <DropDown
    //         data={setInfo}
    //         type={"Set"}
    //         changeFilter={changeFilter}
    //       ></DropDown>
    //     </div>
    //   </div>
    //   <div className="card-list">
    //     {data
    //       .filter((e) => {
    //         return e.name.toLowerCase().match(search);
    //       })
    //       .filter((e) => {
    //         if (rare === undefined || rare === "Rarity") {
    //           return e;
    //         } else if (e.rarity === rare) {
    //           return e.rarity === rare;
    //         } else {
    //           return null;
    //         }
    //       })
    //       .filter((e) => {
    //         if (set === "" || set === "Set") {
    //           return e;
    //         } else if (e.set.name === set) {
    //           return e.set.name === set;
    //         } else {
    //           return null;
    //         }
    //       })
    //       .filter((e) => {
    //         if (type === "" || type === "Type") {
    //           return e;
    //         } else if (e.types.includes(type)) {
    //           return e.types.includes(type);
    //         } else {
    //           return null;
    //         }
    //       })
    //       .map((item, index) => {
    //         return (
    //           <CardItem
    //             key={index}
    //             data={item}
    //             addCart={props.addCart}
    //           ></CardItem>
    //         );
    //       })}
    //   </div>
    //   <div
    //     style={{
    //       display: "flex",
    //       flex: 1,
    //       color: "white",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <Pagination
    //       className="MuiPagination-ul"
    //       count={Math.round(250 / 20)}
    //       size="large"
    //       color="primary"
    //       onChange={onPageChange}
    //     />
    //   </div>
    // </div>
  );
}
const mapStateToProps = (store) => ({
  carts: store.cartState.carts,
});

export default connect(mapStateToProps, null)(App);
