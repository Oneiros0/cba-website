import React from 'react';
import {Row, Col, Card, Image, Container, Jumbotron} from 'react-bootstrap'
import david from './images/Board Members/David Kidwell.jpg'
import jen from './images/Board Members/Jen Gregory.jpg'
import kaleena from './images/Board Members/Kaleena Goldsworthy.jpg'
import michelle from './images/Board Members/Michelle Richards.jpg'
import toby from './images/Board Members/Toby Darling.jpg'

function Board() {
  return (
    <div className="container">
        <h1>CBA Board Members</h1>
        The Chattanooga Beverage Alliance Board is a 100% volunteered position.  Each board member is annually voted in by the CBA community.  The 2019 Board Members are the first and helped build CBA from the ground up.  They are an acting administration group without official titles until the first annual voting begins in September of 2019.
        <Row className="center-content" id="top-margin">
          <Col>
                <Image className="board-member-img" src={jen}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Jen Gregory</h2>
            <h3 className="b-role">CO-FOUNDER</h3>
            <div className="bio-text">
              With years of experience in every aspect of this industry, it’s hard to say what Jen hasn’t done.  From helping a number of start ups, to wine consulting for the rich and famous.  She’s worked in every field of the beverage industry.  Her knowledge is unlimited and extremely versed in cocktails, spirits, wine, beer, coffee, tea, and more.
              <br/>
              <br/>
              Photo Credit: <a href="https://ourampersandphoto.com/">Our Ampersand Photography</a>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
        </Row>
        <Row className="center-content inverse-column">
          <Col>
          <Jumbotron>
            <Container>
              <h2 className="b-member">Kaleena Goldsworthy-Warnock</h2>
              <h3 className="b-role">CO-FOUNDER</h3>
              <div className="bio-text">
                It’s easy to call Kaleena the Bitter Queen of Chattanooga, but keep in mind that those are words of endearment.  Kaleena is the sole-proprietor of a local holistic bitters company, consults with local start up bars, and is very well traveled to furtherest and most exotic alcohol destinations.   From the most bizarre botanicals to the craziest ingredients, she knows more about what goes into your cocktail than anyone else.
              </div>
            </Container>
            </Jumbotron> 
          </Col>
          <Col>
            <Image className="board-member-img" src={kaleena}/>
          </Col>
        </Row>
        <Row  className="center-content">
          <Col>
            <Image className="board-member-img" src={michelle}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Michelle Richards</h2>
            <h3 className="b-role">CO-FOUNDER</h3>
            <div className="bio-text">
              One of Chattanooga’s most influential people, Michelle has been leading the wine and cocktail industry by storm.  She has been with one of Chattanooga’s premier fine dining establisments since 2012 and is the Sommelier and General Manager.  You’ll find her drinking a bottle of Provence rosé by the pool, or sipping on some Mezcal and Montenegro on the beaches of Miami. 
              <br/>
              <br/>
              Photo Credit: <a href="https://ourampersandphoto.com/">Our Ampersand Photography</a>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
        </Row>
        <Row className="center-content inverse-column">
          <Col>
          <Jumbotron>
            <Container>
              <h2 className="b-member">Toby Darling</h2>
              <h3 className="b-role">CO-FOUNDER, CSS</h3>
              <div className="bio-text">
                Toby loves working and throwing parties.  He’s involved with multiple festivals and events, and is always scheming to come up with the next big party!  He is best versed in spirits, but does not shy away from cocktails, beer, wine, coffee, or tea.  He currently works as an operations director for local cocktail mixers company and privately consultants for start ups and events.
                <br/>
                <br/>
                Photo Credit: <a href="https://www.facebook.com/AmberWardPhotography/">Amber Ward Photography</a>
              </div>
            </Container>
            </Jumbotron> 
          </Col>
          <Col>
            <Image className="board-member-img" src={toby}/>
          </Col>
        </Row>
        <Row  className="center-content">
          <Col>
                <Image className="board-member-img" src={david}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">David Kidwell</h2>
            <h3 className="b-role">CO-FOUNDER</h3>
            <div className="bio-text">
              A serial bartender by trade, David has bartended in just about every style and variety imaginable.  He’s one of Chattanooga’s top bartenders and overall one of the most knowledgable people about cocktails.  He specializes most in rum and mezcal, but proves to be just as skilled in just about any spirit you can hand him.
            </div>
            </Container>
          </Jumbotron> 
          </Col>
        </Row>
    </div>
  );
}

export default Board;
