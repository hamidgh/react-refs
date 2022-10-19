import React, {useEffect, useRef} from 'react';
import './styles/home.scss';
import {Form} from "react-bootstrap";

const HomePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" ref={inputRef}/>

        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
    </Form>
  )
}

export default HomePage;

