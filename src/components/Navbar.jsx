import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3 mb-5">
				<div className="container-fluid col-11">
					<NavLink to="/" className="navbar-brand fs-3 border-0 ">
						NaseemKhan
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto gap-4 fs-5">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" aria-current="page">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/service" className="nav-link">
									Services
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
