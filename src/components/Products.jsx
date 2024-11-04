import { useEffect, useState } from "react";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Update filteredProducts based on category whenever it changes
  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  }, [category, products]);

  return (
    <div className="p-4 w-full">
      <h1 className="text-5xl font-bold my-4 text-center">Explore Cutting-Edge Gadgets</h1>
      <h1 className="text-2xl font-bold mb-4">{category === "all" ? "All Products" : category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.product_id} className="p-4 border rounded">
              <div>
                <img className="h-80 w-full" src={product.product_image} alt="" />
              </div>
              <h2 className="text-xl font-semibold">{product.product_title}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Availability: {product.availability ? "In Stock" : "Out of Stock"}</p>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
