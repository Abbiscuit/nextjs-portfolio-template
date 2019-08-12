import React, { Component } from 'react';
import Link from 'next/link';

import './navbar.styles.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link href="/">
          <a title="Home" className="option">
            Home
          </a>
        </Link>
        <div className="options">
          <Link href="/about">
            <a title="About Next JS" className="option">
              About
            </a>
          </Link>
          <Link href="/works">
            <a title="Works" className="option">
              Works
            </a>
          </Link>
          <Link href="/contact">
            <a title="Contact" className="option">
              Contact
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
