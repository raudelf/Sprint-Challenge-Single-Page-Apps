import React from "react";
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export default function Header() {
  let LinkContainer = Styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  `;

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <LinkContainer>
        <div className="links">
          <Link to="/" style={{textDecoration: 'none', width: '200px', padding: '3px', backgroundColor: '#111E6C', color: 'white'}}>Home</Link>
        </div>
        <div className="links">
          <Link to="/characters" style={{textDecoration: 'none', width: '200px', padding: '3px', backgroundColor: '#111E6C', color: 'white'}}>Character List</Link>
        </div>
      </LinkContainer>
    </header>
  );
}
