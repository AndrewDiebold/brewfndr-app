import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
  <h1> {props.brewery.name} </h1>
  <h2>{props.brewery.city}, {props.brewery.state}</h2>
  <h3><a href={props.brewery.website_url} target="_blank" rel="noreferrer">{props.brewery.website_url}</a></h3>
  </div>
)