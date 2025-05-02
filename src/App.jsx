
import React, { useState } from 'react'; 
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import Service from './components/Service';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  const [currentView, setCurrentView] = useState('home');
  const [initialScrollToService, setInitialScrollToService] = useState(null);

  const handleShowDetails = (id) => {
    setInitialScrollToService(id); 
    setCurrentView('details');
  };

  const handleGoBackToServices = () => {
    setCurrentView('home');
    setInitialScrollToService(null); 
  };

  const navItems = [
    { text: 'Головна', link: '#main-block-section' },
    { text: 'Послуги', link: '#services-section' },
    { text: 'Про нас', link: '#about-section' },

  ]
  const servicesData = [
    {
      id: 'system-support',
      title: 'Системна оцінки психологічного стану користувачів',
      image: '/public/test.png',
      link: '#'
    },
    {
      id: 'library',
      title: 'Бібліотека інформаційних ресурсів',
      image: '/public/educ.png',
      link: '#'
    },
    {
      id: 'forum',
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

  /*
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
  */
return (
  <div className="app">
    <Header navItems={navItems} />
    <div className="content-wrapper">
      {currentView === 'home' && (
        <>
          <MainBlock />
          <section className="services" id="services-section">
            <h2>Наші послуги</h2>
            <div className="services-list">
              {servicesData.map((service) => (
                <Service
                  key={service.id}
                  serviceId={service.id}
                  title={service.title}
                  image={service.image}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          </section>
          <About />
        </>
      )}

      {currentView === 'details' && (
        <ServiceDetailsPage initialScrollTo={initialScrollToService} onGoBack={handleGoBackToServices} />
      )}
    </div>
    <Footer links={footerLinks} socialIcons={footerSocialIcons} />
  </div>
);
}

export default App;