import React from 'react'

const RestaurantHeader = ({ onQRClick }) => {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 relative">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Mama's Kitchen</h1>
          <p className="text-sm opacity-90">📍 Victoria Island, Lagos</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm">4.8 • 1,200+ reviews</span>
          </div>
        </div>
        
        <button
          onClick={onQRClick}
          className="absolute top-4 left-4 bg-white bg-opacity-20 p-2 rounded-lg hover:bg-opacity-30"
        >
          📱
        </button>
      </div>
    );
  };

export default RestaurantHeader