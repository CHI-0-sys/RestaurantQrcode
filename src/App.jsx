import React, { useState } from 'react';
import QRDemo from './components/QRDemo';
import RestaurantHeader from './components/RestaurantHeader';
import TableNumberInput from './components/TableNumberInput';
import SmartRecommendations from './components/SmartRecommendations';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import MenuItems from './components/MenuItems';
import Cart from './components/Cart';
import { menuItems, smartRecommendations, categories } from './data/menuData';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [tableNumber, setTableNumber] = useState('');
  const [showQRDemo, setShowQRDemo] = useState(true);

  const allItems = Object.values(menuItems).flat();

  const getItemById = (id) => allItems.find(item => item.id === id);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === id 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== id));
    }
  };

  const addComboToCart = (combo) => {
    combo.items.forEach(itemId => {
      const item = getItemById(itemId);
      if (item) addToCart(item);
    });
  };

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQRScan = () => {
    setTimeout(() => {
      setShowQRDemo(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* QR Code Demo Screen */}
      {showQRDemo && (
        <QRDemo onScan={handleQRScan} />
      )}

      {/* Main Menu (shown after QR scan) */}
      {!showQRDemo && (
        <>
          <RestaurantHeader onQRClick={() => setShowQRDemo(true)} />
          
          <TableNumberInput 
            tableNumber={tableNumber}
            setTableNumber={setTableNumber}
          />
          
          <SmartRecommendations 
            recommendations={smartRecommendations}
            onAddCombo={addComboToCart}
            getItemById={getItemById}
          />
          
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <MenuItems 
            items={filteredItems}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
          
          <Cart 
            cart={cart}
            tableNumber={tableNumber}
          />
        </>
      )}
    </div>
  );
};

export default App;