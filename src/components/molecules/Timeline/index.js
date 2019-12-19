import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Flex } from '@rebass/grid'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Text from '../../atoms/Text'

const StyledVerticalTimeline = styled(VerticalTimeline)`
  &.vertical-timeline::before {
    background: ${palette('primary', 0)};
  }
  .vertical-timeline-element-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${palette('primary', 1)};
    border: 0.25rem solid ${palette('primary', 0)};
    box-shadow: none;
    > * {
      width: 100%;
    }
  }
  .vertical-timeline-element-content {
    border: 0.125rem solid ${palette('primary', 0)};
    background: ${palette('primary', 1)};
    border-radius: 0.5rem;
    .vertical-timeline-element-date {
      float: right;
      opacity: 1;
    }
  }
  .vertical-timeline-element-content-arrow {
    border-right: 10px solid ${palette('primary', 1)};
  }

  /*
    work-around fix for mobile screen unintentional jumps while scrolling,
    by not using the bounce-2-inverse animation effect
  */
  @media only screen and (max-width: 1169px) {
    /* .vertical-timeline--animate */
    .vertical-timeline-element-content.bounce-in {
      -webkit-animation: cd-bounce-2 0.6s !important;
      -moz-animation: cd-bounce-2 0.6s !important;
      animation: cd-bounce-2 0.6s !important;
    }
  }
`

const DateTag = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.5rem;
  padding: 0.125rem 0.5rem;
`

const Timeline = ({ items, ...props }) => {
  return (
    <StyledVerticalTimeline {...props}>
      {items.map((item) => {
        const { title, subTitle, date, node, content } = item
        const emptyContent = !title && !subTitle && !content
        return (
          <VerticalTimelineElement
            key={title}
            date={(
              <DateTag>
                <Text variant="body1">{date}</Text>
              </DateTag>
            )}
            icon={node}
            contentStyle={emptyContent ? { display: 'none' } : null}
          >
            {!emptyContent && (
              <>
                <Flex flexDirection="column" mb="0.5rem">
                  <Text variant="body1" palette="white" bold>{title}</Text>
                  <Text variant="body2" palette="white">{subTitle}</Text>
                </Flex>
                {content}
              </>
            )}
          </VerticalTimelineElement>
        )
      })}
    </StyledVerticalTimeline>
  )
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      date: PropTypes.string,
      node: PropTypes.any,
      content: PropTypes.any,
    }),
  ),
}

Timeline.defaultProps = {
  items: [],
}

export default Timeline
