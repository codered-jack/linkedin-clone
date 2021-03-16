import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
          <FiberManualRecord/>
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('JACK is back','Top News --999 readers')}
      {newsArticle('Covid Update','Top News --876 readers')}
      {newsArticle('Tesla hits new highs','Top News --876 readers')}
    </div>
  );
};

export default Widgets;
