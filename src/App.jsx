import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import Service from './components/Service';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  const navItems = [
    { text: 'Головна', link: '#main-block-section' },
    { text: 'Послуги', link: '#services-section' },
    { text: 'Про нас', link: '#about-section' },

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

  const footerLinks = [
    { text: 'Головна', href: '#main-block-section' },
    { text: 'Послуги', href: '#services-section' },
    { text: 'Про нас', href: '#about-section' },
  ];

  const footerSocialIcons = [
    { href: 'https://facebook.com', src: '/Facebook.png', alt: 'Facebook' },
    { href: 'https://twitter.com', src: '/twitter.png', alt: 'Twitter' },
    { href: 'https://instagram.com', src: '/instagram.png', alt: 'Instagram' },
  ];

  return (
    <div className="app">
      <Header navItems={navItems} />
      <div className="content-wrapper">
        <MainBlock />
      </div>

      <section className="services" id="services-section">
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
      <Footer
        links={footerLinks}
        socialIcons={footerSocialIcons}
      />
      
    </div>
  );
}

export default App;
