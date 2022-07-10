import React from "react";
import { Card, Button } from "react-bootstrap";
import "../screens/LoginScreen/LoginScreen.css";

const Footer = () => {
  return (
    <footer>
      <Card className="text-center">
        <Card.Header>Note Saver Application</Card.Header>
        <Card.Body>
          <Card.Title>Assignment for SURGE GLOBAL</Card.Title>
          <Button href="https://github.com/IT20228644" variant="primary" className="button ">
            github.com/chanuka-dulanjaya
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">@Copyright Note Saver</Card.Footer>
      </Card>
    </footer>
  );
};

export default Footer;
