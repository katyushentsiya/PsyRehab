import React from 'react';

function Footer({ links, socialIcons }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="logo-footer">PsyRehab</h1>
        </div>
        <div className="footer-center">
          <div className="footer-links">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} PsyRehab. Всі права захищено.
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;