import React from 'react'
import PropTypes from 'prop-types'
import startCase from 'lodash/startCase'
import { Flex } from '@rebass/grid'
import { Element } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Text from '../../atoms/Text'

const ScrollSection = ({ name, title, children, ...props }) => {
  return (
    <Element name={name}>
      <Flex flexDirection="column" alignItems="center" {...props}>
        <Flex mb="0.75rem">
          <Fade bottom cascade>
            <Text variant="h2" bold>{title || startCase(name)}</Text>
          </Fade>
        </Flex>
        {children}
      </Flex>
    </Element>
  )
}

ScrollSection.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
}

ScrollSection.defaultProps = {
  name: '',
  title: null,
  children: null,
}

export default ScrollSection
