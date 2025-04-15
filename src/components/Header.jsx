import React from 'react';
import RegistrationForm from './RegistrationForm'; 

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: false,
      showRegistrationForm: false, 
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.setState(prevState => ({
      isLoginActive: !prevState.isLoginActive,
      showRegistrationForm: !prevState.showRegistrationForm, 
    }));
    console.log('Кнопку "Увійти" натиснуто!');
  }

  render() {
    const { additionalClass, navItems } = this.props; 
    const headerClassName = `header ${additionalClass || ''}`;
    const loginButtonClassName = `login-button ${this.state.isLoginActive ? 'active' : ''}`;

    return (
      <header className={headerClassName}>
        <h1 className="logo">PsyRehab</h1>
        <nav>
          <ul className="nav-list">
            {navItems && navItems.map((item, index) => (
              <li key={index}><a href={item.link}>{item.text}</a></li>
            ))}
          </ul>
        </nav>
        <button
          className={loginButtonClassName}
          onClick={this.handleLoginClick}
        >
          {this.state.showRegistrationForm ? 'Закрити' : 'Увійти'}
        </button>
        {this.state.showRegistrationForm && <RegistrationForm />} {}
      </header>
    );
  }
}

export default Header;

