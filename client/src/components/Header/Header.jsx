import React from 'react';

function Header() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className=' left brand-logo'>
          Emaily
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <a href='sass.html'>Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
