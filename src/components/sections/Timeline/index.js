import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import Fade from 'react-reveal/Fade'
import ScrollSection from '../../molecules/ScrollSection'
import Timeline from '../../molecules/Timeline'
import Image from '../../atoms/Image'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const TimelineSection = () => {
  const data = useStaticQuery(graphql`
    query {
      cuhkLogo: file(relativePath: { eq: "cuhk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ahsayLogo: file(relativePath: { eq: "ahsay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      altitudeLabsLogo: file(relativePath: { eq: "altitude-labs.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  const timelineItems = [
    {
      title: 'BSc Computer Science',
      subTitle: 'The Chinese University of Hong Kong',
      date: 'Dec 2015',
      node: <Image src={data.cuhkLogo.childImageSharp.fluid} circle />,
    },
    {
      title: 'Business System Developer',
      subTitle: 'Ahsay Backup',
      date: 'Mar 2016 - Jun 2018',
      node: <Image src={data.ahsayLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">。Enhanced the online sales management system</Text>
          <Text palette="white" variant="body2">。Designed and developed an online portal for business partners</Text>
          <Text palette="white" variant="body2">。Maintained the internal task and process management system</Text>
        </Flex>
      ),
    },
    {
      title: 'Software Engineer',
      subTitle: 'Altitude Labs',
      date: 'Jun 2018 - Nov 2019',
      node: <Image src={data.altitudeLabsLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">。Worked as a full-stack developer for both frontend (ReactJs) and backend (NodeJs)</Text>
          <Text palette="white" variant="body2">。Built responsive and cross-browser web applications for clients</Text>
          <Text palette="white" variant="body2">。Designed database structures and developed RESTful API</Text>
          <Text palette="white" variant="body2">。Participated in system architecture and software design, provided good user experiences</Text>
        </Flex>
      ),
    },
    {
      title: null,
      date: 'Now',
      node: <Icon icon="code" color="white" />,
    },
  ]
  return (
    <ScrollSection name="timeline" mb="4rem">
      <Fade bottom>
        <div style={{ width: '100%' }}>
          <Timeline items={timelineItems} />
        </div>
      </Fade>
    </ScrollSection>
  )
}

export default TimelineSection
