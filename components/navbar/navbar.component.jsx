import React, { Component } from 'react';
import Link from 'next/link';

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
        <style jsx>
          {`
            a {
              padding: 10px;
              text-decoration: none;
              color: #333;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Navbar;
