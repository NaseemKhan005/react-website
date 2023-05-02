import React from "react";
import web from "../images/about-page-img.svg";
import HeroSection from "./HeroSection";

function About() {
	return (
		<>
			<HeroSection
				text="Welcome to About Page"
				btntext="Contact Here"
				imgsrc={web}
				link="/contact"
			/>
		</>
	);
}

export default About;
