import React from 'react'
import { palette } from 'styled-theme'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Icon from './atoms/Icon'
import Text from './atoms/Text'
import Viewport from './atoms/Viewport'

const StyledFooter = styled.footer`
  background: ${palette('primary', 1)};
`

const StyledViewport = styled(Viewport)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem;
`

const FooterWave = styled(Icon)`
  transform: rotate(180deg) translateY(-2px);
  color: ${palette('primary', 1)};
`

const StyledA = styled.a`
  :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledIcon = styled(Icon)`
  :hover {
    color: ${palette('primary', 2)};
  }
`

const StyledDivider = styled.hr`
  width: 90%;
  height: 0.0625rem;
  background: ${palette('white', 0)};
  margin: 1rem 0;
`

const Footer = () => {
  return (
    <Box>
      <FooterWave icon="wave-bottom" width="100%" height="auto" />
      <StyledFooter>
        <StyledViewport>
          <Flex>
            <StyledA href="https://github.com/kipperlhp" target="_blank" rel="noopener noreferrer">
              <StyledIcon icon="github" width="2rem" color="white" />
            </StyledA>
            <StyledA href="https://www.linkedin.com/in/hpleung" target="_blank" rel="noopener noreferrer">
              <StyledIcon icon="linkedin" width="2rem" color="white" />
            </StyledA>
            <StyledA href="https://angel.co/leung-hiu-pak" target="_blank" rel="noopener noreferrer">
              <StyledIcon icon="angellist" width="2rem" color="white" />
            </StyledA>
            <StyledA href="http://facebook.com/profile.php" target="_blank" rel="noopener noreferrer">
              <StyledIcon icon="facebook" width="2rem" color="white" />
            </StyledA>
          </Flex>
          <StyledDivider />
          <Text palette="white" align="center">
            {`© ${new Date().getFullYear()} Leung Hiu Pak, All rights reserved.`}
          </Text>
        </StyledViewport>
      </StyledFooter>
    </Box>
  )
}

export default Footer
