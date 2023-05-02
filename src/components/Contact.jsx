import React, { useState } from "react";

function Contact() {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const InputEvent = (event) => {
		const { name, value } = event.target;
		setData((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		alert(`
    Hello ${data.name}
    Here is your data: 
    name: ${data.name}
    email: ${data.email}
    phone no: ${data.phone}
    message: ${data.message}
    `);
	};

	return (
		<>
			<h1 className="text-center mb-4">Contact Us</h1>
			<div className="col-11 col-md-10 col-lg-5 mx-auto">
				<form onSubmit={submitForm}>
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">
							Your Name:
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Your name"
							onChange={InputEvent}
							value={data.name}
							name="name"
						/>
					</div>
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">
							Your Email:
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Your email"
							onChange={InputEvent}
							value={data.email}
							name="email"
						/>
					</div>
					<div className="mb-3">
						<label for="exampleFormControlInput1" className="form-label">
							Your Phone No.
						</label>
						<input
							type="number"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Your phone no."
							onChange={InputEvent}
							value={data.phone}
							name="phone"
						/>
					</div>
					<div className="mb-3">
						<label for="exampleFormControlTextarea1" className="form-label">
							Message:
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							onChange={InputEvent}
							value={data.message}
							name="message"
						></textarea>
					</div>
					<div className="col-12 d-flex">
						<button className="btn btn-primary mx-auto mt-2" type="submit">
							Submit form
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Contact;
