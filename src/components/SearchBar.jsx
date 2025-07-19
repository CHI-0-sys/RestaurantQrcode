import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="p-4 bg-gray-50">
        <div className="relative">
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>
    );
  };

export default SearchBar