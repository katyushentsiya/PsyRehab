import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import Service from './components/Service';
import About from './components/About';

function App() {

  const navItems = [
    { text: 'Головна', link: '#' },
    { text: 'Послуги', link: '#' },
    { text: 'Про нас', link: '#' },

  ]
  const servicesData = [
    {
      title: 'Системна оцінки психологічного стану користувачів',
      image: '/public/test.png',
      link: '#'
    },
    {
      title: 'Бібліотека інформаційних ресурсів',
      image: '/public/educ.png',
      link: '#'
    },
    {
      title: 'Платформа для обміну досвілом',
      image: '/public/forum.png',
      link: '#'
    },
  ];

  return (
    <div className="app">
      <Header navItems={navItems} />
      <div className="content-wrapper">
        <MainBlock />
      </div>

      <section className="services">
        <h2>Наші послуги</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </section>

      <About />
      
    </div>
  );
}

export default App;
