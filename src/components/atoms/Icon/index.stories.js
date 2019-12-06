import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

// TO-DO: load svg in storybook
storiesOf('Atoms|Icon', module)
  .add('default', () => (
    <Icon icon="menu" />
  ))
