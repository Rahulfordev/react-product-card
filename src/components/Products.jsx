/* eslint-disable react/prop-types */
import Product from "./Product";

// const Products = (props) => {
//   const { products } = props;
//   return (
//     <div className="products">
//        {products}
//     </div>
//   )
// };

function Products({ products }) {
  // console.log(props);
  // const {products} = props;
  let productItem = products.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return (
    <section className="products">
      {/* {products.map((product) => (
        <Product key={product.id} product={product} />
      ))} */}
      {productItem}
    </section>
  );
}

export default Products;
