import React from 'react';
import './styles/home.scss';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const HomePage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('about');
  };

  return (
    <div  className="home-page">
      <h2>Home Page</h2>
      <Button onClick={handleOnClick} >About</Button>
    </div>
  )
}

export default HomePage;

