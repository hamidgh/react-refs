import React from "react";
import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

const AboutPage = () => {
  let navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <Button className="contact-us-btn" onClick={handleOnClick}>Contact Us</Button>
    </div>
  );
};

export default AboutPage;