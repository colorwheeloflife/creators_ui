import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button } from '../src/index.js';

storiesOf('Button/General', module)
  .add('basic', () => <Button>Basic</Button>);

storiesOf('Button/Type', module)
  .add('primary', () => <Button type='primary'>Primary</Button>)
  .add('success', () => <Button type='success'>Success</Button>)
  .add('danger', () => <Button type='danger'>Danger</Button>);

storiesOf('Button/Size', module)
  .add('small', () => <Button size='small'>Small</Button>)
  .add('large', () => <Button size='large'>Large</Button>);



import { Dropdown } from '../src/index.js';

var colors = [{
    name: 'blue'
  }, {
    name: 'green'
  }, {
    name: 'yellow'
  }, {
    name: 'orange'
  }, {
    name: 'red'
  }, {
    name: 'purple'
  }
];

storiesOf('Dropdown/General', module)
  .add('basic', () => <Dropdown list={colors} selected={colors[0]}>Basic</Dropdown>);

storiesOf('Dropdown/Size', module)
  .add('small', () => <Dropdown size='small' list={colors} selected={colors[0]}>Small</Dropdown>)
  .add('large', () => <Dropdown size='large' list={colors} selected={colors[0]}>Large</Dropdown>);



/*



var colors = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];

*/
