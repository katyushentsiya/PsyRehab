import React from 'react';
import BackgroundImage from './BackgroundImage';

function MainBlock() {
  return (
    <div className="container">
      <section className="main-block">
        <h2>Психологічна підтримка:твій безпечний простір</h2>
        <p>Отримай інструменти для подолання труднощів. Індивідуальні консультації та ресурси для саморозвитку</p>
        <button>Запит</button>
      </section>
      <BackgroundImage />
    </div>
  );
}

export default MainBlock;