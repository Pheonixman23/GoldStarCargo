import { Link } from "react-router-dom";
import "./sidebar.css";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import styled from "styled-components";
import {Card } from 'react-bootstrap'



export default function Sidebar() {
  return (
    <div className="sidebar">
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Need Help?</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </div>
  );
}