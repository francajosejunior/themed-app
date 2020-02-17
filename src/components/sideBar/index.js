import React from 'react';
import { menu } from '../../services/menuServices';
import './styles.scss';

const dashBoardWhite = require('../../images/dashboard_white.png');

function SideBar() {
  return (
    <section className="menu-sidebar bg-primary">
      {menu.map(m => (
        <ul key={m.label}>
          <li>
            <img
              className="side-dash-icon"
              src={dashBoardWhite}
              alt=""
              height="25"
              width="25"
            />
            <div className="menu-label">{m.label}</div>
          </li>
        </ul>
      ))}
    </section>
  );
}

export default SideBar;
