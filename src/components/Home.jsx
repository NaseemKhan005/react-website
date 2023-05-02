import React from "react";
import web from "../images/home-page-img.svg";
import Common from "./Common";

function Home() {
	return (
		<>
			<Common text="Grow your business with" btntext="Get Started" imgsrc={web} link='/service' />
		</>
	);
}

export default Home;
