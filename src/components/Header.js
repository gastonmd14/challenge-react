import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="/users/login">
            <li>LOGIN</li>
          </a>
          <a href="/users/register">
            <li>REGISTER</li>
          </a>
        </ul>
      </nav>
    </header>

  );
}

export default Header;
