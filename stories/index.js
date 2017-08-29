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
