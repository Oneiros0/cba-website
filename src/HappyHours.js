import React from 'react';
import {Row, Col, Image, Jumbotron, Container, Button} from 'react-bootstrap';
import londoncalling from './images/Happy Hours/londoncalling.jpg';
import madpriest from './images/Happy Hours/madpriest.jpg';
import mainstreetmeats from './images/Happy Hours/mainstreetmeats.jpg';
import nakedriver from './images/Happy Hours/nakedriver.jpg';
import yogalanding from './images/Happy Hours/Yoga Landing.jpg'
import {Redirect, Link} from 'react-router-dom'


class HappyHours extends React.Component{
  render(){
    return(
      <div className="container">
      <br/>
      <br/>
      <h1>Happy Hours</h1>
      <div>
        Exclusive Happy Hours for Chattanooga Beverage Alliance Members
        <br/>
        <br/>
        Present your CBA Membership Card to any of the below establishments to take advantage of these exclusive deals.
      </div>
      <Row id="top-margin" className="hh-row">
        <Col>
          <Image className="board-member-img" src={yogalanding}/>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h2>Yoga Landing</h2>
              <br/>
              <br/>
              2414 Sidney Street, 37408
              <br/>
              <br/>
              Your health and wellness are important to us!  Yoga Landing offers 20% off classes and packages to CBA Members.  Just present your CBA Member Card to redeem the discount.
              <br/>
              <br/>
              <Button variant="dark">
                <a href="https://www.yogalanding.net/" target="_blank" rel="noopener noreferrer">Website</a>
              </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row id="top-margin" className="hh-row">
        <Col>
          <Image className="board-member-img" src={londoncalling}/>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h2>London Calling</h2>
              <br/>
              <br/>
              715 CHERRY STREET, 37402
              <br/>
              <br/>
              Secret weekly spirit included with exclusive CBA discounts!  Ask the bartender for more information.
              <br/>
              <br/>
              10% off tab everyday
              <br/>
              <br/>
              25% off tab Sundays
              <br/>
              <br/>
              <Button variant="dark">
                <a href="https://www.londoncallingbar.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row id="top-margin">
        <Col>
          <Image className="board-member-img" src={mainstreetmeats}/>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h2>Main Street Meats</h2>
              217 E MAIN STREET, 37408
              <br/>
              <br/>
              Weekly Tipple of a spirit and beer at a discounted rate for CBA members!  Ask the bartender for more information.
              <br/>
              <br/>
              <Button variant="dark">
                <a href="http://www.mainstreetmeatschatt.com" target="_blank" rel="noopener noreferrer">Website</a>
              </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row id="top-margin">
        <Col>
          <Image className="board-member-img" src={nakedriver}/>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h2>Naked River Brewing Company</h2>
              <br/>
              <br/>
              1791 REGGIE WHITE BOULEVARD, 37408
              <br/>
              <br/>
              Pint Night every weekday from 5-7!
              <br/>
              <br/>
              <Button variant="dark">
                <a href="https://www.nakedriverbrewing.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row id="top-margin">
        <Col>
          <Image className="board-member-img" src={madpriest}/>
        </Col>
        <Col>
          <Jumbotron>
            <Container>
              <h2>Mad Priest Coffee & Cocktails</h2>
              <br/>
              <br/>
              719 CHERRY STREET #100, 37402
              <br/>
              <br/>
              Exclusive Menu of Classic Cocktails!  Ask the bartender for more information.
              <br/>
              <br/>
                <Button variant="dark">
                  <a href="https://www.madpriestcha.com/" target="_blank" rel="noopener noreferrer">Website</a>
                </Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </div> 
    ) 
  }
}

export default HappyHours;
