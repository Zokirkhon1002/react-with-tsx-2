import React, { ReactElement, memo } from "react";
import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  //   const img: string = new URL(`../assets/${product.sku}.jpg`, import.meta.url)
  //     .href;
  // logging
  //   console.log(img)

  const img: string = require(`../assets/${product.sku}.jpg`);

  const onAddToCart = (): void =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });

  const itemInCart = inCart ? "Item in Card: ✅" : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

function areProductsEqual(
  { product: prevProduct }: PropsType,
  { product: nextProduct }: PropsType
): boolean {
  return Object.keys(prevProduct).every(
    (key) =>
      prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType] && prevProduct === nextProduct
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
