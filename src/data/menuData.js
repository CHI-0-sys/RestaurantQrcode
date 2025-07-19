const menuItems = {
    appetizers: [
      { id: 1, name: 'Pepper Soup', price: 1500, category: 'appetizers', image: '🍲', description: 'Spicy goat meat pepper soup' },
      { id: 2, name: 'Suya', price: 2000, category: 'appetizers', image: '🥩', description: 'Grilled beef with spices' },
      { id: 3, name: 'Spring Rolls', price: 1200, category: 'appetizers', image: '🥟', description: 'Crispy vegetable rolls' }
    ],
    rice: [
      { id: 4, name: 'Jollof Rice', price: 2500, category: 'rice', image: '🍚', description: 'Nigerian party rice' },
      { id: 5, name: 'Fried Rice', price: 2800, category: 'rice', image: '🍛', description: 'Mixed vegetable fried rice' },
      { id: 6, name: 'Coconut Rice', price: 3000, category: 'rice', image: '🥥', description: 'Rice cooked in coconut milk' }
    ],
    swallow: [
      { id: 7, name: 'Pounded Yam + Egusi', price: 3500, category: 'swallow', image: '🍲', description: 'Pounded yam with egusi soup' },
      { id: 8, name: 'Eba + Okra Soup', price: 2800, category: 'swallow', image: '🍲', description: 'Garri with okra soup' },
      { id: 9, name: 'Fufu + Bitter Leaf', price: 3200, category: 'swallow', image: '🍲', description: 'Fufu with bitter leaf soup' }
    ],
    proteins: [
      { id: 10, name: 'Grilled Chicken', price: 3000, category: 'proteins', image: '🍗', description: 'Perfectly grilled chicken' },
      { id: 11, name: 'Grilled Fish', price: 4000, category: 'proteins', image: '🐟', description: 'Fresh grilled tilapia' },
      { id: 12, name: 'Assorted Meat', price: 2500, category: 'proteins', image: '🥩', description: 'Mixed meat platter' }
    ],
    sides: [
      { id: 13, name: 'Fried Plantain', price: 800, category: 'sides', image: '🍌', description: 'Sweet fried plantain' },
      { id: 14, name: 'Coleslaw', price: 600, category: 'sides', image: '🥗', description: 'Fresh vegetable salad' },
      { id: 15, name: 'Garden Salad', price: 1000, category: 'sides', image: '🥬', description: 'Mixed green salad' }
    ],
    beverages: [
      { id: 16, name: 'Zobo', price: 500, category: 'beverages', image: '🧃', description: 'Local hibiscus drink' },
      { id: 17, name: 'Chapman', price: 800, category: 'beverages', image: '🍹', description: 'Nigerian cocktail' },
      { id: 18, name: 'Malt', price: 400, category: 'beverages', image: '🥤', description: 'Maltina drink' }
    ]
  };
  
  const smartRecommendations = [
    { 
      items: [4, 10, 16], // Jollof + Chicken + Zobo
      name: 'Popular Combo',
      originalPrice: 6000,
      discountPrice: 5200,
      orders: 47,
      badge: '🔥 Trending'
    },
    {
      items: [7, 12], // Pounded Yam + Assorted Meat
      name: 'Traditional Delight',
      originalPrice: 6000,
      discountPrice: 5500,
      orders: 32,
      badge: '⭐ Chef\'s Special'
    },
    {
      items: [2, 17], // Suya + Chapman
      name: 'Perfect Pair',
      originalPrice: 2800,
      discountPrice: 2500,
      orders: 28,
      badge: '💡 Smart Pick'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'appetizers', name: 'Appetizers', icon: '🍲' },
    { id: 'rice', name: 'Rice Dishes', icon: '🍚' },
    { id: 'swallow', name: 'Swallow & Soup', icon: '🍲' },
    { id: 'proteins', name: 'Proteins', icon: '🍗' },
    { id: 'sides', name: 'Sides', icon: '🥗' },
    { id: 'beverages', name: 'Beverages', icon: '🧃' }
  ];
  
  export  {menuItems, smartRecommendations, categories};