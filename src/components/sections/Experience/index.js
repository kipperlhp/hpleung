import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import ScrollSection from '../../molecules/ScrollSection'
import Timeline from '../../molecules/Timeline'
import Image from '../../atoms/Image'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    query {
      veriGuideLogo: file(relativePath: { eq: "veriguide.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      democraticPartyLogo: file(relativePath: { eq: "democratic_party.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cmiLogo: file(relativePath: { eq: "cmi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ahsayLogo: file(relativePath: { eq: "ahsay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      altitudeLabsLogo: file(relativePath: { eq: "altitude-labs.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  const timelineItems = [
    {
      title: 'Junior Research Assistant',
      subTitle: 'VeriGuide Team, CUHK',
      date: 'May - Aug 2013',
      node: <Image src={data.veriGuideLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">
            Assisted in the development of the plagiarism checking system (VeriGuide) in the school
          </Text>
        </Flex>
      ),
    },
    {
      title: 'Programming Assistant',
      subTitle: 'Democratic Party',
      date: 'Jun - Aug 2014',
      node: <Image src={data.democraticPartyLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">
            Assisted in the implementation of the database system of Hong Kong residents’
            information in 18 regions, with a responsive web user interface and barcode
            scanner integration
          </Text>
        </Flex>
      ),
    },
    {
      title: 'IT Intern',
      subTitle: 'China Mobile International',
      date: 'Jun - Jul 2015',
      node: <Image src={data.cmiLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">
            Provided IT operations support, computer troubleshooting,
            and assisted in infrastructure works
          </Text>
        </Flex>
      ),
    },
    {
      title: 'Business System Developer',
      subTitle: 'Ahsay Backup',
      date: 'Mar 2016 - Jun 2018',
      node: <Image src={data.ahsayLogo.childImageSharp.fluid} circle />,
      content: (
        <Flex flexDirection="column" mt="1rem">
          <Text palette="white" variant="body2">
            Developed and Enhanced the online sales management system and online
            portal for business partners. Maintained the internal task and process
            management system
          </Text>
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
          <Text palette="white" variant="body2">
            Worked as a full-stack developer for both frontend (ReactJs) and backend (NodeJs)
            to build responsive and cross-browser web applications for clients, with database
            structure design and RESTful API development
          </Text>
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
    <ScrollSection name="experience" mb="10rem">
      <Timeline items={timelineItems} />
    </ScrollSection>
  )
}

export default ExperienceSection
