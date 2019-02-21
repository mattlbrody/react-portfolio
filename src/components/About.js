import React from 'react';

const About = () => {
	return (
		<div>
			<section id="about" className="section section-bg-light section-top-rise section-bottom-rise">
		      <div className="section-inner">

		        <div className="container">

		          <header className="heading">
		            <h2>About Me</h2>
		            <div className="separator"></div>
		          </header>

		          <div className="row">
		            <div className="col span_4 center">
		              <div className="site-photo"><img src="images/photo.jpg" width="250" height="250" alt="Matt Brody" className="photo" /></div>
		            </div>
		            <div className="col span_8">
		              <br />
		              <br />
		              <br />
		              <p>I love building beautiful web applications and problem solving. Coding is a perfect mix of both those activities, so I was naturally drawn to it 10 years ago and haven't stopped since. Apart from coding I also enjoy surfing, strategy games, and teaching my kids new things. If you're in need of a talented web developer that's been practicing his dad jokes, get in touch!</p>
		              <p>Feel free to connect with me on <a rel="noopener noreferrer" href="https://www.linkedin.com/in/matt-brody-5631672b/" target="_blank">LinkedIn</a></p>
		            </div>
		          </div>

		        </div>

		      </div>
		    </section>
	    </div>
	);
}

export default About;
