import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  function isLoggedIn() {
    switch (props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'Im logged out';
      default:
        return 'Im logged in';
    }
  }
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className=' left brand-logo'>
          Emaily
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {/* <li>
            <a href='sass.html'>Login with Google</a>
          </li> */}
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
