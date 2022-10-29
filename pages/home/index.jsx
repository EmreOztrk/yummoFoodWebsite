import React from 'react'
import Carraousel from '../../components/Carraousel'
import Header from '../../components/layouts/Header'
import Story from '../../components/Story'
import Menu from '../../components/Menu'
import Special from '../../components/Special'
import Different from '../../components/Different'
import Blog from '../../components/Blog'
import Chef from '../../components/Chef'
import Event from '../../components/Event'

const index = () => {
  return (
    <div>
        <Header/>
        <Carraousel/>
        <Story/>
        <Menu/>
        <Special/>
        <Different/>
        <Blog/>
        <Chef/>
        <Event/>
    </div>
  )
}

export default index