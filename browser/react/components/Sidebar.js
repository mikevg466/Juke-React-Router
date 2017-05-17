import React from 'react';
import {Link} from 'react-router'

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <ul className="list-unstyled">
            <li>
              <Link activeClassName='active' to="/albums">ALBUMS</Link>
            </li>
            <li>
              <Link activeClassName='active' to="/artists">ARTISTS</Link>
            </li>
          </ul>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;


// <a href="#" onClick={deselectAlbum}>ALBUMS</a>
