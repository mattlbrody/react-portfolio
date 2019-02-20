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
		              <h3>I want to build something great</h3>
		              <p>Five years ago, I started a coding bootcamp with a $25 ad on craigslist. I was able to help hundreds of students change their lives forever while growing Codify Academy to a million dollar company in just 3 years. I loved building out the course, coding in house apps, and helping students understand the complex nuances of front-end web development. With Codify winding down, I'm looking to get back into coding full time. If your company makes cool things and needs a good web developer, let's schedule a call.</p>
		            </div>
		          </div>

		        </div>

		      </div>
		    </section>
	    </div>
	);
}

export default About;
