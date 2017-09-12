import React from 'react';

import { storiesOf } from '@storybook/react';

import { ItemCard } from '../src/index.js';


const itemCardProperties = {
  item: {
    name: 'Spirit Tree',
    artist: 'TheSpiritNectar',
    price: 280,
    currency: 'CA'
  }
}

storiesOf('ItemCard/General', module)
  .add('basic', () => <ItemCard { ...itemCardProperties }></ItemCard>);
