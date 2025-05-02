/*
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
*/
import React from 'react';

function Service({ title, image, onShowDetails, id, serviceId }) {

  return (
    <div className="service">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <button className="service-button" onClick={() => onShowDetails(serviceId)}>
        Детальніше
      </button>
    </div>
  );
}

export default Service;