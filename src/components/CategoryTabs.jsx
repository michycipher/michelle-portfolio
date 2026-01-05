const categories = ["frontend", "backend", "mobile", "tools"];

const CategoryTabs = ({ active, onChange }) => {
  return (
    <div className="categories">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
