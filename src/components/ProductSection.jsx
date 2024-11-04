// ProductSection.jsx
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useState } from "react";

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex gap-12 w-11/12 mx-auto">
      <Sidebar handleCategoryClick={handleCategoryChange} />
      <Products category={selectedCategory} />
    </div>
  );
};

export default ProductSection;
