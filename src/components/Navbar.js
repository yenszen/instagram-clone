import React from "react";
import styled from "styled-components";

class Navbar extends React.Component {
  render() {
    return (
      <Navigation>
        <h3>INSTAGRAM</h3>
        <input type="text" placeholder="search" />
        <SubNav>
          <a href="#">Home</a>
          <a href="#">Messages</a>
          <a href="#">Explore</a>
          <a href="#">Activity</a>
          <a href="#">Profile</a>
        </SubNav>
      </Navigation>
    );
  }
}

const Navigation = styled.div`
  width: 100%;
  /* background: black; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: baseline;
`;

const SubNav = styled.nav`
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  /* background: grey; */
`;

export default Navbar;
