import React from "react";
import ServiceData from "./ServiceData";
import Card from "./Card";

function Service() {
	return (
		<>
			<h1 className="text-center mb-4">Our Services</h1>
			<div className="container-fluid">
				<div className="row">
					<div className="col-11 mx-auto">
						<div className="row gy-5">
							{ServiceData.map((val, index) => {
								return <Card title={val.title} imgsrc={val.imgsrc} key={index} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service;
