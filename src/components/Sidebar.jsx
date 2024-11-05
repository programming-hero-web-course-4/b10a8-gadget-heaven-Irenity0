const categories = [
  "All Products",
  "Laptops",
  "Phones",
  "Accessories",
  "Smart-Watches",
  "MacBooks",
  "iPhones",
];

const Sidebar = ({ selectedCategory, onSelect }) => {
  function handleSelect(category) {
    if (category === "All Products") onSelect("all");
    else onSelect(category.toLowerCase());
  }

  return (
    <div className="w-1/5">
      <ul className="space-y-2 p-4 bg-gray-200 rounded-3xl">
        {categories.map((category, i) => (
          <li
            key={i}
            className="btn flex rounded-full w-full mx-auto"
            onClick={() => handleSelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

