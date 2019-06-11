import React from 'react';
import {Image, Row, Col, Jumbotron, Container, Card, ListGroup, Button} from 'react-bootstrap';
import header from './images/header.jpg'
import cover from './images/cover.jpg'

function Home() {
  return (
    <div className="container">
      <Row id="header-row">
        <Image id="img-head" src={header} fluid />
      </Row>
      <Row >
        <Jumbotron fluid id="jumbo-text">
          <Container>
            <h1 id="jumbo-header">What is CBA?</h1>
            <p>
            Chattanooga Beverage Alliance (CBA) is a group of professionally minded individuals in the beverage community:  from craft cocktail, coffee, tea, breweries, high volume bars, and to beverage interested individuals.  We are formed by people like you. 
            <br/>
            <br/>
            We seek to create a culture of education, professionalism, and collaboration that benefits every member and our Chattanooga community.
            </p>
          </Container>
        </Jumbotron>
      </Row>
      <Row>
        <Card className="bg-dark text-white">
          <Card.Img src={cover} alt="Card image" />
            <Card.ImgOverlay className="center-text">
              <Card.Text className="card-text">
                Dedicated to the
                Beverage
                Community of
                Chattanooga
              </Card.Text>
              <Card.Text className="sub-title">
                CHATTANOOGA BEVERAGE ALLIANCE | CBA
              </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
      <Row>
        <Col>
          <Jumbotron className="condense">
            <Container>
              <h2>Why Join?</h2>
              Being a member of the Chattanooga Beverage Alliance grants you exclusive access to educational seminars, workshops, trips, and events.  
              <br/>
              <br/>
              We work hard to facilitate an all inclusive experience for each member of CBA.  Current members of CBA are hard working, talented, and professionals within the beverage industry eager to help you grow, learn, and network.  We look forward to seeing you at our next masterclass or our next appreciation night!
            </Container>
          </Jumbotron>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h3>Benefits</h3>
              <ListGroup variant="flush">
                <ListGroup.Item>Exclusive News and Education</ListGroup.Item>
                <ListGroup.Item>Network with Industry Professionals</ListGroup.Item>
                <ListGroup.Item>Access to Happy Hour Events</ListGroup.Item>
                <Button href="/join">Join Today</Button>
              </ListGroup>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
