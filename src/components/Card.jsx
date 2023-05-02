import React from "react";
import image from "../images/home-page-img.svg";

function Card(props) {
	return (
		<>
			<div className="col-12 col-md-6 col-lg-3 ">
				<div class="card" style={{ width: "100%" }}>
					<img
						src={props.imgsrc}
						class="card-img-top"
						style={{ width: "100%", objectFit: "cover" }}
						alt="..."
					/>
					<div class="card-body">
						<h5 class="card-title">{props.title}</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the bulk
							of the card's content.
						</p>
						<a href="#" class="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
