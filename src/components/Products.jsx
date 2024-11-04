import Product from "./Product";
import productsInfo from "./data.json";

const Products = ({ selectedCategory }) => {
  function getProducts() {
    if (selectedCategory === "all") {
      return productsInfo;
    } else {
      return productsInfo.filter(
        (product) => product.category.toLowerCase() === selectedCategory
      );
    }
  }

  const products = getProducts();

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
