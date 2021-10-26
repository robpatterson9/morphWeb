import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg from './bg.jpg';
import { Container } from 'react-bootstrap';
import mlogo from './front.png'
import React, { useState } from "react";
import styled from "styled-components";


const Button = styled.button`
  background-color: #000;

  color: white;
  padding: 15px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  

  cursor: pointer;
  
 
  }
`;
function Home() {
    return (
  <>
      <div className="container-fluid">

        <img src={mlogo} />
     
   
 <a href="mailto: info@metamorphos.is" target="_blank">
<button type="button" class="btn btn-primary">Contact</button>


 </a> </div>


 
    

</>

      


          )}



          export default Home;
  