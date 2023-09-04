import React, { useState } from "react";
import statesData from "../states.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Form() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		altPhoneNumber: "",
		streetAddress: "",
		city: "",
		state: "",
		country: "india",
		pinCode: "",
		dob: "",
		CompanyName: "",
		idCardNumber: "",
		password: "",
		confirmPassword: "",
	});

    const today = new Date().toISOString().split("T")[0];
    // console.log(today)
    
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	function validateForm(e) {
		e.preventDefault();
		// console.log(formData);
		const newErrors = {};

		// Validation for Name
		if (formData.firstName.length === 0) {
			newErrors.firstName = "Name is required";
		}

		// Validation for Email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Invalid email address";
		}

		// Validation for Phone Number


		const phoneRegex = /^[0-9]{10}$/;
		if (!phoneRegex.test(formData.phoneNumber)) {
			newErrors.phoneNumber = "Invalid phone number";
		}

        if (formData.altPhoneNumber == formData.phoneNumber) {
			newErrors.altPhoneNumber = "Phone Number and alternate phone number should not be same";
		}

		// Validation for Alternate Phone Number (optional)
		if (formData.altPhoneNumber && !phoneRegex.test(formData.altPhoneNumber)) {
			newErrors.altPhoneNumber = "Invalid alternate phone number";
		}

		// Validation for Address
		if (formData.streetAddress.trim() === "") {
			newErrors.streetAddress = "Address is required";
		}

		// Validation for City
		if (formData.city.trim() === "") {
			newErrors.city = "City is required";
		}

		// Validation for State
		if (formData.state.trim() === "") {
			newErrors.state = "State is required";
		}

		// Validation for PinCode
		const pinCodeRegex = /^[0-9]{6}$/;
		if (!pinCodeRegex.test(formData.pinCode)) {
			newErrors.pinCode = "Invalid Pin-code";
		}

		// Validation for Date of Birth
		if (formData.dob.trim() === "") {
			newErrors.dob = "Date of Birth is required";
		}

		// Validation for Company Name
		if (formData.CompanyName.trim() === "") {
			newErrors.CompanyName = "Company name is required";
		}

		// Validation for ID Card Number
		if (formData.idCardNumber.trim() === "") {
			newErrors.idCardNumber = "ID card number is required";
		}

		// Validation for Password
		if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
		}

		// Validation for Confirm Password
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (Object.keys(newErrors).length === 0) {
			setErrors({});
			console.log("Final Data --- " );
            console.log(formData)
            alert("Registration successful!")
			setSuccessMessage("Registration successful!");
		} else {
			setErrors(newErrors);
			setSuccessMessage("");
		}
	}

	function inputChangeHandler(event) {
		const { name, value } = event.target;

		setFormData((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});

		setErrors({
			...errors,
			[name]: "",
		});
	}

	return (
		<form
			action=""
			onSubmit={validateForm}
			className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md"
		>
			{/* first name */}
			<div>
				<label htmlFor="firstName" className="font-medium text-sm">
					First name
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="text"
					placeholder="Sourabh"
					id="firstName"
					name="firstName"
					onChange={inputChangeHandler}
					value={formData.firstName}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
				{errors.firstName && (
					<p className="text-red-500 text-sm">{errors.firstName}</p>
				)}
			</div>

			{/* last name */}
			<div>
				<label htmlFor="lastName" className="font-medium text-sm">
					Last name
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="text"
					placeholder="Garewal"
					id="lastName"
					name="lastName"
					onChange={inputChangeHandler}
					value={formData.lastName}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
			</div>

			{/* email */}
			<div>
				<label htmlFor="email" className="font-medium text-sm">
					Email address
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="email"
					placeholder="28saurbh@gmail.com"
					id="email"
					name="email"
					onChange={inputChangeHandler}
					value={formData.email}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
				{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
			</div>

			{/* Phone Number */}
			<div>
				<label htmlFor="phoneNumber" className="font-medium text-sm">
					Phone Number
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="tel"
					placeholder="+918251023881"
					id="phoneNumber"
					name="phoneNumber"
					onChange={inputChangeHandler}
					value={formData.phoneNumber}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
    
			</div>

			{/* Alt Phone Number */}
			<div>
				<label htmlFor="altPhoneNumber" className="font-medium text-sm">
					Alternate Phone Number
                
				</label>

				<input
					type="tel"
					placeholder="+919425888072"
					id="altPhoneNumber"
					name="altPhoneNumber"
					onChange={inputChangeHandler}
					value={formData.altPhoneNumber}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
				/>
                {errors.altPhoneNumber && <p className="text-red-500 text-sm">{errors.altPhoneNumber}</p>}
			</div>

			{/* street address  */}
			<div>
				<label htmlFor="streetAddress" className="font-medium text-sm">
					Street address
				</label>

				<textarea
					name="streetAddress"
					id="streetAddress"
					placeholder="1234 Main St"
					onChange={inputChangeHandler}
					value={formData.address}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					
				></textarea>
                {errors.streetAddress && <p className="text-red-500 text-sm">{errors.streetAddress}</p>}
			</div>

			{/* city */}
			<div>
				<label htmlFor="city" className="font-medium text-sm">
					City
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="text"
					id="city"
					name="city"
					placeholder="Indore"
					onChange={inputChangeHandler}
					value={formData.city}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
			</div>

			{/* state */}
			<div>
				<label htmlFor="state" className="font-medium text-sm">
					State / Province
                    <span className="text-red-500"> *</span>
				</label>

				<select
					name="state"
					id="state"
					type="text"
					value={formData.state}
					onChange={inputChangeHandler}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				>
					<option value="">Select a state</option>
					{statesData.map((state) => (
						<option key={state.id} value={state.name}>
							{state.name}
						</option>
					))}
				</select>
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
			</div>

			{/* Pin code */}
			<div>
				<label htmlFor="pinCode" className="font-medium text-sm">
					ZIP / Pin code
                    <span className="text-red-500"> *</span>
				</label>

				<input
					type="number"
					id="pinCode"
					name="pinCode"
					placeholder="124001"
					onChange={inputChangeHandler}
					value={formData.pinCode}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
                {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
    
			</div>

			{/* country  - dropdown*/}
			<div>
				<label htmlFor="country" className="font-medium text-sm">
					Country
				</label>

				<select
					name="country"
					id="country"
					value={formData.country}
					onChange={inputChangeHandler}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				>
					<option value="india">India</option>
					<option value="united states">United States</option>
					<option value="canada">Canada</option>
					<option value="mexico">Mexico</option>
				</select>
                
			</div>

			{/* DOB */}
			<div>
				<label htmlFor="dob" className="font-medium text-sm">
					Date of Birth:
                    <span className="text-red-500"> *</span>
				</label>
				<input
					id="dob"
					name="dob"
					type="date"
					value={formData.dob}
					onChange={inputChangeHandler}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
                    max={today}
					required
				/>
                {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
			</div>

			{/* Company Name */}
			<div>
				<label htmlFor="CompanyName" className="font-medium text-sm">
					Company Name:
                    <span className="text-red-500"> *</span>
				</label>
				<input
					id="CompanyName"
					name="CompanyName"
					type="text"
					value={formData.CompanyName}
					onChange={inputChangeHandler}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
                {errors.CompanyName && <p className="text-red-500 text-sm">{errors.CompanyName}</p>}
			</div>

			{/* Id card Number */}
			<div>
				<label htmlFor="idCardNumber" className="font-medium text-sm">
					Id card Number
                    <span className="text-red-500"> *</span>
				</label>
				<input
					id="idCardNumber"
					name="idCardNumber"
					type="number"
					value={formData.idCardNumber}
					onChange={inputChangeHandler}
					className="w-full border border-blue-400 rounded-md p-2 mt-2"
					required
				/>
                {errors.idCardNumber && <p className="text-red-500 text-sm">{errors.idCardNumber}</p>}
			</div>

			{/* Password  */}
			<div>
				<label htmlFor="password" className="font-medium text-sm">
					Password
                    <span className="text-red-500"> *</span>
				</label>
				<div className="relative">
					<input
						id="password"
						name="password"
						type={showPassword ? "text" : "password"}
						value={formData.password}
						onChange={inputChangeHandler}
						className="w-full border border-blue-400 rounded-md p-2 mt-2"
						required
					/>
					<span
						onClick={togglePasswordVisibility}
						className="absolute top-7 right-2 transform -translate-y-1/2 cursor-pointer"
					>
						{showPassword ? <FaEyeSlash /> : <FaEye />}
					</span>
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password}</p>
					)}
				</div>
			</div>

			{/* Confirm Password  */}
			<div>
				<label htmlFor="password" className="font-medium text-sm">
					Confirm Password
                    <span className="text-red-500"> *</span>
				</label>
				<div className="relative">
					<input
						id="confirmPassword"
						name="confirmPassword"
						type={showConfirmPassword ? "text" : "password"}
						value={formData.confirmPassword}
						onChange={inputChangeHandler}
						className="w-full border border-blue-400 rounded-md p-2 mt-2"
						required
					/>
					<span
						onClick={toggleConfirmPasswordVisibility}
						className="absolute top-7 right-2 transform -translate-y-1/2 cursor-pointer"
					>
						{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
					</span>
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm">{errors.confirmPassword}</p>
					)}
				</div>
			</div>

            {/* success Message */}

            {successMessage && (
				<p className="text-green-500 mt-2">{successMessage}</p>
			)}

			{/* submit button */}
			<button
				className="bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200"
				type="submit"
			>
				Save
			</button>

			
		</form>
	);
}

export default Form
