import React from "react";
import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

const AboutPage = () => {
  let navigate = useNavigate();
  // Intentionally added an Error on line 16 so Error Boundary could catch it
  let object = {};

  const handleOnClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      {object.props.val}
      <Button className="contact-us-btn" onClick={handleOnClick}>Contact Us</Button>
    </div>
  );
};

export default AboutPage;