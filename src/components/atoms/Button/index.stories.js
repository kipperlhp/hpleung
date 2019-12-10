import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Atoms|Button', module)
  .add('default', () => (
    <Button onClick={() => console.log('hihi')}>Click Me</Button>
  ))
