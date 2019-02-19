import React from 'react';
import Header from './Header';
import About from './About'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Footer from './Footer'

const App = () => {
	return (
		<div className="wrapper h-card">
			<Header />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;