import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="ui top fixed menu">
        <NavLink to="/" className="item">
          Translation
        </NavLink>

        <NavLink to="/search" className="item">
          Search
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
