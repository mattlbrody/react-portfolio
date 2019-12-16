import React from 'react';

const Footer = () => {
	return (
		<div>
			<section id="contacts" className="section section-bg-img section-bg-overlay section-top-rise">
		      <div className="bg"></div>
		      <div className="section-inner">

		        <div className="container">

		          <header className="heading">
		            <h2>Contacts</h2>
		            <div className="separator"></div>
		          </header>

		          <div className="contacts">
		            <div className="row">
		              <div className="col span_4">
		                <div className="contacts-item">
		                  <div className="icon-b"><i className="fa fa-map-marker"></i></div>
		                  <address className="adr"><span className="locality">St. Louis</span>, <br /><span className="street-address">Missouri</span></address>
		                </div>
		              </div>
		              <div className="col span_4">
		                <div className="contacts-item">
		                  <div className="icon-b"><i className="fa fa-phone"></i></div><span className="tel">(314) 285-9505</span>
		                </div>
		              </div>
		              <div className="col span_4">
		                <div className="contacts-item">
		                  <div className="icon-b"><i className="fa fa-send"></i></div><a href="mailto:mail@yoursite.com" className="email">mattlbrody@gmail.com</a>
		                </div>
		              </div>
		            </div>
		          </div>
		          <form method="post" action="send.php" className="contact-form">
		            <div className="row">
		              <div className="col span_6">
		                <div className="input">
		                  <label htmlFor="name">Your name</label>
		                  <div className="input-field">
		                    <input type="text" name="name" id="name" className="input-field-item required" />
		                  </div>
		                </div>
		              </div>
		              <div className="col span_6">
		                <div className="input">
		                  <label htmlFor="email">Your mail</label>
		                  <div className="input-field">
		                    <input type="text" name="email" id="email" className="input-field-item required" />
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="input">
		              <label htmlFor="message">Message</label>
		              <div className="input-field">
		                <textarea name="message" id="message" cols="30" rows="5" className="input-field-item required"></textarea>
		              </div>
		            </div>
		            <div className="center">
		              <input type="submit" value="Send" className="btn btn-bordered" />
		            </div>
		          </form>

		        </div>

		      </div>
		    </section>
	    </div>
	);
}

export default Footer;
