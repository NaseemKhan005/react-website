import React from "react";
import web from "../images/home-page-img.svg";
import HeroSection from "./HeroSection";

function Home() {
	return (
		<>
			<HeroSection
				text="Grow your business with"
				btntext="Get Started"
				imgsrc={web}
				link="/service"
			/>
		</>
	);
}

export default Home;
