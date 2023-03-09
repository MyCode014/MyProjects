import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routess from '../../routes/Routess'


const Layout = () => {
  return ( <Fragment>
    <Header/>
    <div>
        <Routess/>
    </div>
    <Footer/>
  </Fragment>)
}

export default Layout