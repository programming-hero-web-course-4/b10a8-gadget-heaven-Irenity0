// Sidebar.jsx
const Sidebar = ({ handleCategoryClick }) => {
  return (
    <div className="w-1/5 mt-10">
      <ul className="space-y-2  p-4 bg-gray-200 rounded-3xl">
        <button onClick={() => handleCategoryClick("all")} className="btn rounded-full block w-full mx-auto">
          All Products
        </button>
        <button onClick={() => handleCategoryClick("laptops")} className="btn rounded-full block w-full mx-auto">
          Laptops
        </button>
        <button onClick={() => handleCategoryClick("phones")} className="btn rounded-full block w-full mx-auto">
          Phones
        </button>
        <button onClick={() => handleCategoryClick("accessories")} className="btn rounded-full block w-full mx-auto">
          Accessories
        </button>
        <button onClick={() => handleCategoryClick("smart-watches")} className="btn rounded-full block w-full mx-auto">
          Smart Watches
        </button>
        <button onClick={() => handleCategoryClick("macbooks")} className="btn rounded-full block w-full mx-auto">
          MacBooks
        </button>
        <button onClick={() => handleCategoryClick("iphones")} className="btn rounded-full block w-full mx-auto">
          iPhones
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
