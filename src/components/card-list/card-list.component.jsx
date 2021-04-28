import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    <div className='card-list'>
      {props.breweries.map(brewery => (
        <Card key={brewery.obdb_id} brewery={brewery} />
      ))}
    </div>
);