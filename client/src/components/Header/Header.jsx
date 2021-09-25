import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  function isLoggedIn() {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  }
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={props.auth ? '/surveys' : '/'} className=' left brand-logo'>
          Emaily
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isLoggedIn()}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
