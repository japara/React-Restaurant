import React, { useContext } from "react";
import BasicCard from "./Card";
import { Context } from "./Context";

export default function Menu(props) {
  const productData = useContext(Context);

  function onlyDetail() {}

  return (
    <div className="menu-page">
      {productData.productInfo.map((item) => {
        return (
          <BasicCard
            name={item.name}
            image={item.image}
            price={item.price}
            cart={item.status}
            changeNumber={props.addNumber}
            getDetails={onlyDetail}
          />
        );
      })}
    </div>
  );
}
