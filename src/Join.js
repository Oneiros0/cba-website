import React from 'react';
import { Form, Image, Input } from 'react-bootstrap';
import cheers from './images/cheers.jpg'

function Join() {
  return (
    <div className="container">
        <h1 id="join-header">Join the Chattanooga Beverage Alliance Today!</h1>
        <br/>
        <div className="membership-desc">
          <h2>
            CBA - Annual Membership
          </h2>
          <p>
            For only $30 a year, you can be a member of the Chattanooga Beverage Alliance! This membership is an annual fee.
          </p>
        </div>


        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="KQAEW4K7MQHJA"/>
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        

          {/* <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="BGL84A6NJQ3YN"/>
          <table>
          </table>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/> */}
        </form>
        <Image id="cheers" src={cheers}/>
        <br/>
        <br/>
        <p className="contactus-text">
          If you have any questions about memberships please send us an email! 
          <br/>
          <br/>
          <a href="mailto:chattbeveragealliance@gmail.com">Click Here For Inquiries!</a>
        </p>
    </div>
  );
}

export default Join;
