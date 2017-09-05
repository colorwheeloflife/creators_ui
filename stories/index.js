import React from 'react';

import { storiesOf } from '@storybook/react';

import { Button, Dropdown, RadioGroup } from '../src/index.js';

storiesOf('Button/General', module)
  .add('basic', () => <Button>Basic</Button>);

storiesOf('Button/Type', module)
  .add('primary', () => <Button type='primary'>Primary</Button>)
  .add('success', () => <Button type='success'>Success</Button>)
  .add('danger', () => <Button type='danger'>Danger</Button>);

storiesOf('Button/Size', module)
  .add('small', () => <Button size='small'>Small</Button>)
  .add('large', () => <Button size='large'>Large</Button>);



const dropdown = {
  items: ['blue', 'green', 'yellow', 'orange', 'red', 'purple'].map(item => ({ name: item })),
  initial: 0
};

storiesOf('Dropdown/General', module)
  .add('basic', () => <Dropdown { ...dropdown }>Basic</Dropdown>);

storiesOf('Dropdown/Size', module)
  .add('small', () => <Dropdown size='small' { ...dropdown }>Small</Dropdown>)
  .add('large', () => <Dropdown size='large' { ...dropdown }>Large</Dropdown>);




const radioGroup = {
  items: ['blue', 'green', 'yellow', 'orange', 'red', 'purple'].map(item => ({ name: item })),
  initial: 0
};

storiesOf('RadioGroup/General', module)
  .add('basic', () => <RadioGroup { ...radioGroup }>Basic</RadioGroup>);

storiesOf('RadioGroup/Size', module)
  .add('small', () => <RadioGroup size='small' { ...radioGroup }>Small</RadioGroup>)
  .add('large', () => <RadioGroup size='large' { ...radioGroup }>Large</RadioGroup>);
