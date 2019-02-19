import React from 'react';

const Projects = () => {
	return (
		<div>
			<section id="projects" className="section">
		      <div className="section-inner">

		        <div className="container">

		          <header className="heading">
		            <h2>Projects</h2>
		            <div className="separator"></div>
		          </header>

		          <ul className="filter">
		            <li data-group="all" className="active">All</li>
		            <li data-group="web">Websites</li>
		            <li data-group="js">JavaScript</li>
		            <li data-group="lesson">Lessons</li>
		          </ul>

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
		            <li data-groups="[&quot;lesson&quot;]" className="works-item works-item-w"><a href="#works-item-details-3" className="works-item-link"><span className="works-item-thumb"><img src="images/clock1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-3" className="popup mfp-hide">
		                <figure><img src="images/clock2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Digital Clock Lesson</h3>
		                  <p>I created the clock lesson to show students how to start thinking like a developer. It's the first project where they'll need to combine several aspects of JavaScript together in order to make it work.</p>
		                  <div className="center"><a href="http://codifyacademy.com/digitalclock/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-5" className="works-item-link"><span className="works-item-thumb"><img src="images/qanda1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-5" className="popup mfp-hide">
		                <figure><img src="images/qanda2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Student Q and A</h3>
		                  <p>Students run into a lot of problems when they're learning, so I created a place they could go to get the most common questions answered. This eventually has become a place to get even more insights on the projects due each week.</p>
		                  <div className="center"><a href="http://codifyacademy.com/codifyQandA/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-6" className="works-item-link"><span className="works-item-thumb"><img src="images/battle1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-6" className="popup mfp-hide">
		                <figure><img src="images/battle2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>JavaScript Battleship Lesson</h3>
		                  <p>The battleship project tests students ability to think through complex problems. It requires a high level understanding of programming and JavaScript skills. It's hard but always makes students feel like they really understand what they're doing once it's complete.</p>
		                  <div className="center"><a href="http://codifyacademy.com/project_battleship/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-7" className="works-item-link"><span className="works-item-thumb"><img src="images/calc1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-7" className="popup mfp-hide">
		                <figure><img src="images/calc2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Digital Calculator Lesson</h3>
		                  <p>Math is a common component of many real world projects. I created this calculator project so they could test out how well they understand how to manipulate numbers with JavaScript. Another hard one that feels great when completed.</p>
		                  <div className="center"><a href="http://codifyacademy.com/project_calculator/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-8" className="works-item-link"><span className="works-item-thumb"><img src="images/google1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-8" className="popup mfp-hide">
		                <figure><img src="images/google2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Google Replica Lesson</h3>
		                  <p>This is the very first project that any student has to complete. It's the most famous and probably the simplist page on the internet. This makes it easy to replicate and is fun for students to show off what they did to their friends and family who use google daily.</p>
		                  <div className="center"><a href="http://codifyacademy.com/project_google/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-9" className="works-item-link"><span className="works-item-thumb"><img src="images/tshirt1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-9" className="popup mfp-hide">
		                <figure><img src="images/tshirt2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Ecommerce in pure JavaScript</h3>
		                  <p>Prototyping is confusing and students don't always know when it's appropriate to use. I created this ecommerce project to show students how they use it in their daily lives and by building everything in JavaScript, they solidify their skills even more.</p>
		                  <div className="center"><a href="http://codifyacademy.com/tshirt/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-10" className="works-item-link"><span className="works-item-thumb"><img src="images/themes1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-10" className="popup mfp-hide">
		                <figure><img src="images/themes2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Portfolio Themes</h3>
		                  <p>As a developer, you need to have a great looking portfolio, which is why we gave all of our students access to these themes. Additionally, because of the complex files, it's a project that's most like what their first job will actually be like.</p>
		                  <div className="center"><a href="http://codifyacademy.com/themes/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-11" className="works-item-link"><span className="works-item-thumb"><img src="images/tm1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-11" className="popup mfp-hide">
		                <figure><img src="images/tm2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Codify Teacher Manual</h3>
		                  <p>We used to have a book, but realized that an online resource built the right way would be much faster to search through. Every teacher used this in each class and we gave students access as well for complete transparency.</p>
		                  <div className="center"><a href="http://codifyacademy.com/teachersmanual/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-12" className="works-item-link"><span className="works-item-thumb"><img src="images/routes1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-12" className="popup mfp-hide">
		                <figure><img src="images/routes2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Angular Routes Project</h3>
		                  <p>This entire page is built using angular. Angular is a JavaScript framework we taught towards the end of the course. MVC frameworks are a growing trend in web development and so it was important for us to make sure our grads are competent in the most popular one at the time.</p>
		                  <div className="center"><a href="http://codifyacademy.com/routes/#/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-13" className="works-item-link"><span className="works-item-thumb"><img src="images/sorting1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-13" className="popup mfp-hide">
		                <figure><img src="images/sorting2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>JavaScript Sorting App</h3>
		                  <p>This was originally built to sort new students into teams. But it later became a project to show students how to use forms in JavaScript and include animations.</p>
		                  <div className="center"><a href="http://codifyacademy.com/sorting/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
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
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-15" className="works-item-link"><span className="works-item-thumb"><img src="images/resources1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-15" className="popup mfp-hide">
		                <figure><img src="images/resources2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Student Resources</h3>
		                  <p>As our course grew and we added more content, we needed a place for students to go to find everything. This was the first place that students would check when they needed to find a resource at Codify. </p>
		                  <div className="center"><a href="http://codifyacademy.com/studentresources/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;js&quot;]" className="works-item"><a href="#works-item-details-16" className="works-item-link"><span className="works-item-thumb"><img src="images/survey1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-16" className="popup mfp-hide">
		                <figure><img src="images/survey2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Survey Project</h3>
		                  <p>Forms are the most common way that developer use JavaScript. This project was set up to show students how to use checkboxes, radio buttons and drop down. Once these are mastered, creating forms for your company is cake.</p>
		                  <div className="center"><a href="http://codifyacademy.com/survey/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
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
