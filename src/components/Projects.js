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
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-1" className="works-item-link"><span className="works-item-thumb"><img src="images/infiniscape1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-1" className="popup mfp-hide">
		                <figure><img src="images/infiniscape2.png" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Infiniscape</h3>
		                  <p>Infiniscape is a full stack application that is built on React, Redux and C#. It allows users to purchase fun online experiences with hosts. I built out the entire front-end including the landing pages, shopping carts, dashboard, experience pages, and all the front end logic to save the data in Redux.</p>
		                  <div className="center"><a href="https://go-infiniscape.com/#/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-2" className="works-item-link"><span className="works-item-thumb"><img src="images/monicas1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-2" className="popup mfp-hide">
		                <figure><img src="images/monicas2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Monica's Cookies</h3>
		                  <p>A shopify eCommerce site I built focusing heavily on improving the conversion rate and simplicity for users. I probably should have opted to be paid in cookies, they're so good!</p>
		                  <div className="center"><a href="https://monicasgourmet.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-6" className="works-item-link"><span className="works-item-thumb"><img src="images/clever1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-6" className="popup mfp-hide">
		                <figure><img src="images/clever2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Clever Real Estate Blog Rebuild</h3>
		                  <p>Helped build a blog using React, GraphQL, and CosmicJS. They already had an existing Wordpress blog, which meant a lot of the work was ensuring no SEO rankings were lost during the conversion to the new blog.</p>
		                  <div className="center"><a href="https://listwithclever.com/real-estate-blog/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item works-item-w"><a href="#works-item-details-3" className="works-item-link"><span className="works-item-thumb"><img src="images/devstar1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-3" className="popup mfp-hide">
		                <figure><img src="images/devstar2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>DevStar Academy</h3>
		                  <p>This is the 2nd coding bootcamp I started, this one was in St. Louis where I lived for 1 year. I really enjoy teaching people and this was a fun way to help people interested in learning how to code.</p>
		                  <div className="center"><a href="https://devstaracademy.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;lesson&quot;]" className="works-item"><a href="#works-item-details-7" className="works-item-link"><span className="works-item-thumb"><img src="images/playbook1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-7" className="popup mfp-hide">
		                <figure><img src="images/playbook2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>Team Playbook Builder</h3>
		                  <p>This is a Squarespace site that needed some changes to the UX and UI. I helped the owner figure out the best way to update his site and built out those changes.</p>
		                  <div className="center"><a href="https://www.teamplaybookbuilder.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
		                </div>
		              </div>
		            </li>
		            <li data-groups="[&quot;web&quot;]" className="works-item"><a href="#works-item-details-11" className="works-item-link"><span className="works-item-thumb"><img src="images/rivers1.png" width="250" height="250" alt="" /></span></a>
		              <div id="works-item-details-11" className="popup mfp-hide">
		                <figure><img src="images/rivers2.png" width="750" height="500" alt="" /></figure>
		                <div className="popup-inner">
		                  <h3>3Rivers</h3>
		                  <p>A financial advisors website built using HTML, CSS and JavaScript. This is a straightforward website build with a focus on making minor changes to reflect their events and increasing their conversion rate.</p>
		                  <div className="center"><a href="https://my3rivers.com/" rel="noopener noreferrer" target="_blank" className="btn">View site</a></div>
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
