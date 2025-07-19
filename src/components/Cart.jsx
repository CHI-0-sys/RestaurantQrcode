import React from 'react'

const Cart = ({ cart, tableNumber }) => {
    const getCartTotal = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    const getCartQuantity = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };
  
    const generateWhatsAppOrder = () => {
      if (!tableNumber) {
        alert('Please enter your table number');
        return;
      }
  
      let message = `🍽️ *Order from Mama's Kitchen*\n\n`;
      message += `📍 Table: ${tableNumber}\n`;
      message += `📅 ${new Date().toLocaleString()}\n\n`;
      message += `*Order Details:*\n`;
      
      cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}\n`;
      });
      
      message += `\n*Total: ₦${getCartTotal().toLocaleString()}*\n\n`;
      message += `Please confirm this order. Thank you! 🙏`;
  
      const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  
    if (cart.length === 0) return null;
  
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-orange-500">🛒</span>
            <span className="font-semibold">{getCartQuantity()} items</span>
          </div>
          <div className="text-xl font-bold text-green-600">
            ₦{getCartTotal().toLocaleString()}
          </div>
        </div>
        
        <button
          onClick={generateWhatsAppOrder}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2"
        >
          📱 Send Order via WhatsApp
        </button>
      </div>
    );
  };

export default Cart