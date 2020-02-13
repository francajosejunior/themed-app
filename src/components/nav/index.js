import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isFetchingSelector } from '../../features/preloader/slice'
import './styles.scss'

const user = require('../../images/user.png')
const signOut = require('../../images/sign-out.png')
const menu = require('../../images/menu.png')
const arrowDown = require('../../images/arrow-down.png')

function Nav() {
  const isFetching = useSelector(isFetchingSelector)
  return (
    <div className="header-component">
      <header className={`header ${isFetching ? 'componente-carregando' : ''}`}>
        <div className="btn-menu">
          <img className="nav-menu-icon" src={menu} alt="" />
        </div>
        <Link to="/">
          <div className="image-logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <img className="nav-user-icon" src={user} alt="" />
            </li>
            {/* <li>
              <span className="nav-user-name">
                Daniel.Salviati
                <img className="nav-arrow-icon" src={arrowDown} alt="" />
              </span>
            </li> */}
            <li>
              <img src={signOut} alt="sair" />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav
