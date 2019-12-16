import React from 'react';

const Projects = () => {
	return (
		<div>
			<section id="projects" className="section">
		      <div className="section-inner">

		        <div className="container">

		          <header className="heading">
		            <h2>Recent Projects</h2>
		            <div className="separator"></div>
		          </header>

		          {/* <ul className="filter">
		            <li data-group="all" className="active">All</li>
		            <li data-group="web">Websites</li>
		            <li data-group="js">JavaScript</li>
		          </ul> */}

		          <ul className="works">
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-1" className="works-item-link"><span className="works-item-thumb"><img src="images/uriise1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-1" className="popup mfp-hide">
		                <figure><img src="images/uriise2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Uriise.com</h3>
		                  <p>Uriise is a fully functioning web app I built that allows teachers to advertise a 1 on 1 online lesson on whatever they want to teach. Everything works, you can login, create a lesson and start making money.</p>
		                  <div className="center"><a href="https://uriise.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-2" className="works-item-link"><span className="works-item-thumb"><img src="images/codifyacademy1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-2" className="popup mfp-hide">
		                <figure><img src="images/codifyacademy2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Codify Academy</h3>
		                  <p>Codify Academy is the business I've built for the past 5 years. I've done a lot of testing on this website to increase our conversion rate and give the users a better experience.</p>
		                  <div className="center"><a href="http://codifyacademy.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item works-item-w"><a href="#works-item-details-17" className="works-item-link"><span className="works-item-thumb"><img src="images/kangy2.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-17" className="popup mfp-hide">
		                <figure><img src="images/kangy.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Kangy</h3>
		                  <p>This is a React project built for business owners to post on multipe social media sites all at once time.</p>
		                  <div className="center"><a href="http://kangy-dev.com.s3-website-us-east-1.amazonaws.com/kangy/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-6" className="works-item-link"><span className="works-item-thumb"><img src="images/headsets2.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-6" className="popup mfp-hide">
		                <figure><img src="images/headsets.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Headsets.com</h3>
		                  <p>While I worked at headsets, I redesigned and built an updated website from them, starting from the ground up. I helped optimize their user experience and implemeted a lot of A/B Split tests to increase their overall conversion rate.</p>
		                  <div className="center"><a href="https://www.headsets.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item works-item-w"><a href="#works-item-details-3" className="works-item-link"><span className="works-item-thumb"><img src="images/fobos2.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-3" className="popup mfp-hide">
		                <figure><img src="images/fobos.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Fobos</h3>
		                  <p>This is a website made using HTML and CSS for UC Santa Cruz's FOBOS Telescope Department.</p>
		                  <div className="center"><a href="http://fobos.ucolick.org/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-7" className="works-item-link"><span className="works-item-thumb"><img src="images/homelike2.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-7" className="popup mfp-hide">
		                <figure><img src="images/homelike.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Homelike</h3>
		                  <p>I created a replica of their web apps functionality using React and Redux.</p>
		                  <div className="center"><a href="https://mattlbrody.github.io/homelikeclone/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-11" className="works-item-link"><span className="works-item-thumb"><img src="images/tm1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-11" className="popup mfp-hide">
		                <figure><img src="images/tm2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Codify Teacher Manual</h3>
		                  <p>We used to have use a book, but realized that an online resource built the right way would be much faster to search through. Every teacher used this in each class and we gave students access as well for complete transparency.</p>
		                  <div className="center"><a href="http://codifyacademy.com/teachersmanual/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-12" className="works-item-link"><span className="works-item-thumb"><img src="images/routes1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-12" className="popup mfp-hide">
		                <figure><img src="images/routes2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Angular Project</h3>
		                  <p>This entire page is built using angular. Angular is a JavaScript framework we taught towards the end of the course. MVC frameworks are a growing trend in web development and so it was important for us to make sure our grads are competent in the most popular one at the time.</p>
		                  <div className="center"><a href="http://codifyacademy.com/routes/#/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-14" className="works-item-link"><span className="works-item-thumb"><img src="images/tracker1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-14" className="popup mfp-hide">
		                <figure><img src="images/tracker2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Student Success Tracker</h3>
		                  <p>The success of our students was paramount to Codify's success. So I built this success tracker to measure how much they completed everyweek. It's seperated by mentor, then class. It was one of the most popular tools among the teachers since it shorted the time it took to check in with students.</p>
		                  <div className="center"><a href="http://codifyacademy.com/student_success_tracker/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </section>
	    </div>
	);
}

export default Projects;
