import React from 'react'
import Carraousel from '../../components/Carraousel'
import Header from '../../components/layouts/Header'
import Story from '../../components/Story'
import Menu from '../../components/Menu'

const index = () => {
  return (
    <div>
        <Header/>
        <Carraousel/>
        <Story/>
        <Menu/>
    </div>
  )
}

export default index