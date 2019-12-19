import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import Image from '../../atoms/Image'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'

const ContainerBox = styled(Box)`
  position: relative;
  overflow: hidden;
  :hover {
    .coverImg {
      -webkit-filter: blur(10px) opacity(40%) grayscale(70%);
      filter: blur(10px) opacity(40%) grayscale(70%);
    }
    .hoverLayer {
      opacity: 1;
    }
  }
`

const StyledImage = styled(Image)`
  transition: ease 0.3s;
`

const OverLay = styled(Flex)`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ease 0.3s;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
`

const ImageButtonBox = ({ title, description, imgSrc, btnLink, ...props }) => {
  return (
    <ContainerBox {...props}>
      <StyledImage src={imgSrc} className="coverImg" />
      <OverLay className="hoverLayer" p="1rem">
        <Text align="center" variant="h3" bold>{title}</Text>
        <Text align="center">{description}</Text>
        <Flex mt="1rem">
          <Button>
            <a href={btnLink} target="_blank" rel="noopener noreferrer">
              <Text>View Site</Text>
            </a>
          </Button>
        </Flex>
      </OverLay>
    </ContainerBox>
  )
}

ImageButtonBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  btnLink: PropTypes.string,
}

ImageButtonBox.defaultProps = {
  title: '',
  description: '',
  imgSrc: { src: null },
  btnLink: null,
}

export default ImageButtonBox
