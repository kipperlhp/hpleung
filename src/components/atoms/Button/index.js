import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const StyledButton = styled.button`
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: ${palette('white', 0)};
  border: 0.125rem solid ${palette('primary', 0)};
  transition: ease 0.3s;
  outline: 0;
  :hover {
    background: ${palette('primary', 0)};
    color: ${palette('white', 0)};
    div {
      color: ${palette('white', 0)};
    }
  }
`

const Button = ({ onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props} />
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
