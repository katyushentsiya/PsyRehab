import React from 'react';

class Service extends React.Component {
  render() {
    const { title, image, link } = this.props;

    return (
      <div className="service">
        <img src={image} alt={title} className="service-image" />
        <h3 className="service-title">{title}</h3>
        <button className="service-button">Детальніше</button>
      </div>
    );
  }
}

export default Service;