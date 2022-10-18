import React from 'react'

const Title = ({addClass,children}) => {
  return (
    <span className={`font-yeseva ${addClass}`}>{children}</span>
  )
}

export default Title