/* eslint-disable react/prop-types */

// function Product({product}) {
//     // const {product} = props;
//     return (
//         <article className="product">
//             <h1>{product.title}</h1>
//         </article>
//     )
// }

const Product = ({ product }) => {
  // console.log(props);
  return (
    <article className="product">
      <img src={product.image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{product.title}</h4>
        <p className="product__price">Price: {product.price}</p>
        <p className="product__rating">Rating: {product.rating.rate}</p>
        <p className="product__dec">{product.description}</p>
        <button className="product__btn btn">Add to card</button>
      </div>
    </article>
  );
};

export default Product;
