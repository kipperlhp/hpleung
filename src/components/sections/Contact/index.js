import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Fade from 'react-reveal/Fade'
import Text from '../../atoms/Text'
import ScrollSection from '../../molecules/ScrollSection'

const EmailText = styled(Text)`
  text-decoration: underline;
  :hover {
    color: ${palette('primary', 1)};
  }
`

const ContactSection = () => {
  return (
    <ScrollSection name="contact" title="Contact" mb="10rem">
      <Fade bottom cascade>
        <Text align="center">
          Need to get in touch with me? Feel free to drop me an email!
        </Text>
        <a href="mailto: kipperlhp@yahoo.com.hk">
          <EmailText bold>
            kipperlhp@yahoo.com.hk
          </EmailText>
        </a>
      </Fade>
    </ScrollSection>
  )
}

export default ContactSection
