import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Fade from 'react-reveal/Fade'
import { graphql, useStaticQuery } from 'gatsby'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'
import ScrollSection from '../../molecules/ScrollSection'

const EmailText = styled(Text)`
  text-decoration: underline;
  :hover {
    color: ${palette('primary', 1)};
  }
`

const ContactSection = () => {
  const data = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <ScrollSection name="contact" title="Contact" mb="10rem">
      <Fade bottom cascade>
        <Image
          src={data.contactImage.childImageSharp.fluid}
          style={{ width: 'min(90vw, 730px)', marginBottom: '1.5rem' }}
          alt="Contact Me"
        />
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
