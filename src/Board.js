import React from 'react';
import {Row, Col, Card, Image, Container, Jumbotron} from 'react-bootstrap'

import jen from './images/Board Members/Jen Gregory.jpg'
import michelle from './images/Board Members/Michelle Richards.jpg'
import toby from './images/Board Members/Toby Darling.jpg'
import agatha from './images/Board Members/Agatha Broyles.jpg'
import tyler from './images/Board Members/Tyler Sowrey.jpg'
import mary from './images/Board Members/Mary Grower.jpg'
import chase from './images/Board Members/Chase Pettingill-Davis.png'
import christian from './images/Board Members/Christian Beairsto.jpg'
import josh from './images/Board Members/Josh Smith.png'

function Board() {
  return (
    <div className="container">
        <h1>CBA Board Members</h1>
        The Chattanooga Beverage Alliance Board is a 100% volunteered position.  Each board member is annually voted in by the CBA community.  The 2019 Board Members are the first and helped build CBA from the ground up.  They are an acting administration group without official titles until the first annual voting begins in November of 2020.
        <br/><br/>
        <Row className="center-content">
        <Col>
            <Image className="board-member-img" src={toby}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
              <h2 className="b-member">Toby Darling, CSS</h2>
              <h3 className="b-role">President & Co-Founder</h3>
              <div className="bio-text">
              Toby loves working and throwing parties. He’s involved with multiple festivals and events, and is always scheming to come up with the next big party! He is best versed in spirits, but does not shy away from cocktails, beer, wine, coffee, or tea. He currently works as an operations director for local cocktail mixers company, the bar manager at a cocktail bar and incubator, and privately consults for start ups and events. He enjoys writing poetry and short stories in his down time, and is a big Minecraft and Doctor Who nerd.
                <br/>
                <br/>
                Photo Credit: <a href="https://www.facebook.com/AmberWardPhotography/">Amber Ward Photography</a>
              </div>
            </Container>
            </Jumbotron> 
        </Col>
        </Row>
        <Row className="center-content inverse-column" /*id="top-margin"*/>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Agatha Broyles</h2>
            <h3 className="b-role">Vice-President</h3>
            <div className="bio-text">
            Agatha spends every waking moment caring for those around her. She truly connects with all the people and places and dogs. If you’ve sat at Agatha’s bar, you know the impact and you know the heart. As Vice President for CBA, Agatha plans to build bridges between other folks in the industry and community. She plans on continuing the conversation on growth and inclusivity.
            <br/>
            <br/>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
          <Col>
                <Image className="board-member-img" src={agatha}/>
          </Col>
        </Row>
        <Row className="center-content">
        <Col>
            <Image className="board-member-img" src={chase}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
              <h2 className="b-member">Chase Pettingill-Davis</h2>
              <h3 className="b-role">Secretary</h3>
              <div className="bio-text">
              After working for a local distillery as the assistant general manager, Chase has since
              propelled his career further into the beverage industry. He currently runs the spirits
              program as the buyer and manager at one of Chattanooga’s finest liquor stores. He
              loves all things cocktails, beer, and wine. He also loves spending time with his puppy
              and going antiquing on the weekends!
              <br/>
              <br/>
              </div>
            </Container>
            </Jumbotron> 
        </Col>
        </Row>
        <Row className="center-content inverse-column" id="top-margin">
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Jen Gregory</h2>
            <h3 className="b-role">Treasurer & Co-Founder</h3>
            <div className="bio-text">
              With years of experience in every aspect of this industry, it’s hard to say what Jen hasn’t done.  From helping a number of start ups, to wine consulting for the rich and famous.  She’s worked in every field of the beverage industry.  Her knowledge is unlimited and extremely versed in cocktails, spirits, wine, beer, coffee, tea, and more.
              <br/>
              <br/>
              Photo Credit: <a href="https://ourampersandphoto.com/">Our Ampersand Photography</a>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
          <Col>
              <Image className="board-member-img" src={jen}/>
          </Col>
        </Row>
        <br/><br/>
        <h1>Ambassadors</h1>
        <Row  className="center-content">
          <Col>
            <Image className="board-member-img" src={michelle}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Michelle Richards</h2>
            <h3 className="b-role">Wine Ambassador & Co-Founder</h3>
            <div className="bio-text">
            One of Chattanooga’s most influential people, Michelle has been leading the wine and
            cocktail industry by storm. She has been with one of Chattanooga’s premier fine dining
            establishments since 2012 and is the Sommelier and General Manager. You’ll find her
            drinking a bottle of Provence rosé by the pool, or sipping on some Mezcal and
            Montenegro on the beaches of Miami.
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
            <h2 className="b-member">Josh Smith</h2>
            <h3 className="b-role">Spirits/Cocktail Ambassador</h3>
            <div className="bio-text">
              Josh will talk your ear off about all the cool things happening in the world of spirits/
              cocktails, but he’s always pushing himself to be a student simultaneously! He’s
              currently the Lead Bartender for one of Chattanoogas exclusive cocktail and whiskey bars, 
              and his job is setting the mise en place for all things bar related. He’s love
              educating. He’s love food. He’s love dogs. He’s love conversations. He’s love
              intentionality. Feel free to say hey next time you see him, and talk nerdy.
            </div>
            </Container>
          </Jumbotron> 
          </Col>
          <Col>
              <Image className="board-member-img" src={josh}/>
          </Col>
        </Row>
        <Row  className="center-content">
          <Col>
            <Image className="board-member-img" src={tyler}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Tyler “Hippie” Sowrey</h2>
            <h3 className="b-role">Coffee/Tea Ambassador</h3>
            <div className="bio-text">
              Tyler Sowrey, aka Hippie/Hip, is the roaster, trainer, and manager for a local coffee
              roaster and shop. He’s been here for five years and working in coffee for over a
              decade. He is constantly driven to learn new things, such as spirits, cocktails, and
              teas. Vintage Volkswagens and motorcycles are his non-drinkable jam. And he’s here
              for you to always make things a little weird.
            <br/>
            <br/>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
        </Row>
        <Row className="center-content inverse-column">
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Christian Beairsto</h2>
            <h3 className="b-role">Beer Ambassador</h3>
            <div className="bio-text">
              Christian thoroughly enjoys delicious craft beverages, especially beer! He currently
              works at a local brewery and has been there for almost three years! He mainly
              manages the taproom, but also brews as well as other random things. He has also
              been home-brewing now for a little over 4 years, and absolutely loves the craft. Outside
              of his lovely wife and family, the only thing he loves more than beer is dogs. His wife,
              Sara, and him are working on opening up a dog park/bar/brewery this summer! I love
              the great outdoors so Chattanooga is where he has decided to call home. When he
              was 11 he practiced magic, but was terrible so he just read Harry Potter instead. He
              hopes to help spread knowledge of craft beer and the industry further in the city, and
              open the minds of anyone who has not yet experienced the bliss of freshly fermented
              craft beer!
            </div>
            </Container>
          </Jumbotron> 
          </Col>
          <Col>
              <Image className="board-member-img" src={christian}/>
          </Col>
        </Row>
        <Row  className="center-content">
          <Col>
            <Image className="board-member-img" src={mary}/>
          </Col>
          <Col>
          <Jumbotron>
            <Container>
            <h2 className="b-member">Mary Gower</h2>
            <h3 className="b-role">Health/Wellness Ambassador</h3>
            <div className="bio-text">
              Mary has been a Chattanoogan for ten years although she is a Nashville native. When
              she is not bartending, you can find her roller blading on the river walk, traveling,
              thrifting with her husband or watching a b-horror film. She have a passion for people
              and maintaining order, which is why she started Clean Bee Organizing LLC in 2019.
              She aspires to live a healthy lifestyle and is okay with being a meat eater!
            <br/>
            <br/>
            </div>
            </Container>
          </Jumbotron> 
          </Col>
        </Row>
    </div>
  );
}

export default Board;
