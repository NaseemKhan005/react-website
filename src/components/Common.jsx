import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
	return (
		<>
			<div className="md-container-fluid">
				<div className="col-11 mx-auto">
					<div className="gap-5 d-flex flex-column align-items-center my-auto flex-md-row py-5 py-md-0">
						<div className="col-12 col-md-6">
							<h1>
								{props.text} <span style={{ color: "#536dfe" }}>NaseemKhan</span>
							</h1>
							<p className="fs-5">We are team of talented developer making website</p>
							<NavLink
								to={props.link}
								className="btn btn-outline-primary rounded-5 py-2 px-4"
							>
								{props.btntext}
							</NavLink>
						</div>
						<div className="col-12 col-md-6">
							<img src={props.imgsrc} alt="image" className="w-100" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Common;
