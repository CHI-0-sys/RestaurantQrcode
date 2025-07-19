import React from 'react';

const SmartRecommendations = ({ recommendations, onAddCombo, getItemById }) => {
    const getCurrentTimeRecommendation = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "☀️ Breakfast Special";
      if (hour < 17) return "🌤️ Lunch Favorite";
      return "🌙 Dinner Combo";
    };
  
    return (
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-purple-600">📈</span>
          <h2 className="font-bold text-lg">Smart Recommendations</h2>
        </div>
        <div className="text-sm text-gray-600 mb-3">{getCurrentTimeRecommendation()}</div>
        
        {recommendations.map((combo, index) => (
          <div key={index} className="bg-white rounded-lg p-3 mb-3 shadow-sm border border-purple-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {combo.badge}
                </span>
                <h3 className="font-semibold mt-1">{combo.name}</h3>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 line-through">₦{combo.originalPrice.toLocaleString()}</div>
                <div className="text-lg font-bold text-green-600">₦{combo.discountPrice.toLocaleString()}</div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-2">
              {combo.items.map(itemId => getItemById(itemId)?.name).join(' + ')}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>👥</span>
                <span>{combo.orders} orders today</span>
              </div>
              <button
                onClick={() => onAddCombo(combo)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700"
              >
                Add Combo
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default SmartRecommendations;  