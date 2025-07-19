import React from 'react'

const MenuItems = ({ items, cart, onAddToCart, onRemoveFromCart }) => {
    return (
      <div className="p-4 pb-24">
        <div className="grid gap-4">
          {items.map(item => {
            const cartItem = cart.find(cartItem => cartItem.id === item.id);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{item.image}</span>
                      <h3 className="font-semibold">{item.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg font-bold text-green-600">₦{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {cartItem ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold">{cartItem.quantity}</span>
                        <button
                          onClick={() => onAddToCart(item)}
                          className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center hover:bg-green-200"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(item)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

export default MenuItems