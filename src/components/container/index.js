import React from 'react'
import SideBar from '../sideBar'
import Nav from '../nav'
import './style.scss'

function Container(props) {
  const { component, ...rest } = props

  const Component = component

  return (
    <>
      <Nav {...rest} />

      <div className="side-main-wrapper">
        <SideBar {...rest} />
        <div className="main-content">
          <Component {...rest} />
        </div>
      </div>
    </>
  )
}

export default Container
