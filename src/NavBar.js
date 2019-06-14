import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.primary};
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      role="img"
      aria-label="logo"
      css={css`
        font-size: 60px;
        display: inline-block;
        animation: ${spin} 3s linear infinite;

        &:hover {
          text-decoration: underline;
        }
      `}
    >
      🐩
    </span>
  </header>
);

export default NavBar;
