import React from "react";
import web from "../images/about-page-img.svg";
import Common from "./Common";

function About() {
	return (
		<>
			<Common text="Welcome to About Page" btntext="Contact Here" imgsrc={web} link='/contact' />
		</>
	);
}

export default About;
