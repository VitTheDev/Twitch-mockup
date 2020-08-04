import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from '../authentication/GoogleAuth';

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
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
