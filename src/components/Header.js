import React from 'react';

const Header = () => {
	return (
		<div>
			<a className="reactnotice" rel="noopener noreferrer" href="https://reactjs.org/" target="_blank">
		      <h4>Built in React JS!</h4>
		    </a>
		    <div className="main-nav">
		    	<nav>
		    		<ul>
		    			<li><a href="index.html#intro">Intro</a></li>
		    			<li><a href="index.html#about">About</a></li>
		    			<li><a href="index.html#experience">Experience</a></li>
		    			<li><a href="index.html#skills">Skills</a></li>
		    			<li><a href="index.html#projects">Projects</a></li>
		    			<li><a href="index.html#testimonials">Testimonials</a></li>
		    			<li><a href="index.html#contacts">Contacts</a></li>
		    		</ul>
		    	</nav>
		    	<div className="btn-icon btn-nav">
		    		<div className="line"></div>
		    		<div className="line"></div>
		    		<div className="line"></div>
		    	</div>
		    </div>

		    <section id="intro" className="section section-bg-img section-bg-overlay section-bottom-rise">
		      <div className="bg"></div>
		      <div className="section-inner">

		        <div className="container">

		          <div className="intro">
		            <header className="heading">
		              <h1 className="wow zoomIn"><span className="name"><span className="fn">Matt Brody</span></span><span className=" category"><b className="is-visible">Developer</b></span></h1>
		              <div className="separator wow zoomIn"></div>
		            </header>
		          </div>

		        </div>

		      </div>
		      <canvas id="particles"></canvas>
		    </section>
	    </div>
	);
}

export default Header;
