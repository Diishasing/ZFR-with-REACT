import React from 'react'
import styled from 'styled-components';
import './Preloader.css'
function Preloader() {
  
  

  return (
    <>
    <Nav>
      bhai ye na navbar
    </Nav>
   <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="frame-1">
          <a href="https://zhcetformularacing.com/">
            <img src = '1.jpg' />
            <span>ZFR<br/>COMBUSTION</span>
          </a>
        </div>
        <div className="frame-2">
        <a href="#">
            <img src = '2.jpg' />
            <span>ZFR<br/>ELECTRIC</span>
          </a>
        </div>
        <div className="frame-3">
        <a href="https://www.linkedin.com/in/team-green-warriors-212b7a162/">
            <img src = '3.jpg' />
            <span>TEAM<br/>GREEN WARRIORS</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

      
    

export default Preloader;


const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: black;
  color: white;
  `
