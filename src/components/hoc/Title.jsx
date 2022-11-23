import React from 'react'
import withLargeFont from './withLargeFont'
const Title = withLargeFont(props => {
  return <p {...props}>Lorem ipsum dolor sit amet.</p>
})

export default Title
