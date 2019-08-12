import React, { Component } from 'react';
import Link from 'next/link';

import './navbar.styles.scss';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a title="Our API"> Home </a>
          </Link>
          <Link href="/about">
            <a title="About Next JS"> About NextJS </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
