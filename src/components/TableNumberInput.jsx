import React from 'react'

const TableNumberInput = ({ tableNumber, setTableNumber }) => {
    return (
      <div className="p-4 bg-gray-50 border-b">
        <input
          type="text"
          placeholder="Enter your table number..."
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    );
  };

export default TableNumberInput