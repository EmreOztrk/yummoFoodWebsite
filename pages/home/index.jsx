import React from 'react'
import Carraousel from '../../components/Carraousel'
import Header from '../../components/layouts/Header'
import Story from '../../components/Story'
import Menu from '../../components/Menu'
import Special from '../../components/Special'
import Different from '../../components/Different'
import Blog from '../../components/Blog'
import Chef from '../../components/Chef'

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
        {/* <Chef/> */}
    </div>
  )
}

export default index