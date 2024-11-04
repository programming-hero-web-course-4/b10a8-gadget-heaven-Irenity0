import Sidebar from "./Sidebar";
import Products from "./Products";
import { useState } from "react";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <h2 className="text-4xl font-bold text-center">
        Explore Cutting Edge Gadgets
      </h2>
      <br />
      <br />
      <div className="flex gap-12 w-11/12 mx-auto">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <Products selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default ProductSection;

