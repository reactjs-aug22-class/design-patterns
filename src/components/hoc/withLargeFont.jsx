import React from 'react'

export default function withLargeFont(Component) {
  return props => {
    const style = {
      // merge the original styles
      ...props.style,
      fontSize: '4rem',
      color: 'red'
    }
    return <Component {...props} style={style} />
  }
}
