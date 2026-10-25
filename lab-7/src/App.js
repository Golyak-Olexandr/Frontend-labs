import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

function App() {
  // Масив з 6 товарів для Завдання 2
  const gamingGoods = [
    {
      id: 1,
      title: 'Миша Logitech G Pro X Superlight 2',
      price: 6499,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'Клавіатура SteelSeries Apex Pro TKL',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Навушники HyperX Cloud II Wireless',
      price: 5499,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      title: 'Килимок Razer Gigantus V2 XXL',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      title: 'Геймпад Sony DualSense Controller',
      price: 3199,
      image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      title: 'Монітор ASUS TUF Gaming VG27AQ',
      price: 12499,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="container">
      <Header />
      <Content />
      <Image />

      <hr className="divider" />

      <section className="goods-section">
        <h2>Галерея геймерських девайсів (GoodsCard Gallery)</h2>
        <div className="goods-gallery">
          {gamingGoods.map((goods) => (
            <GoodsCard
              key={goods.id}
              image={goods.image}
              title={goods.title}
              price={goods.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;