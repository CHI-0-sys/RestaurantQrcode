import React from 'react'

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
    return (
      <div className="p-4 bg-white border-b">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default CategoryFilter