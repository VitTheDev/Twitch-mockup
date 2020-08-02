import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink className="item" to="/">
        Twitch
      </NavLink>
      <div className="right menu">
        <NavLink className="item" to="/streams/show">
          Streams
        </NavLink>
        <NavLink className="item" to="/">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
