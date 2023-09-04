import UserDetails from "./UserDetails";
import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";
import UserNavbar from "./UserNavbar";
import CompanyDetails from "./CompanyDetails";
import axios from "axios";
import CreditDetails from "./CreditDetails";

import {FaUserAlt} from 'react-icons/fa'
import Spinner from "../spinner";

function UserProfile() {
	const [userData, setUserData] = useState([]);
	const [companyData, setCompanyData] = useState([]);
	const [creditCardData, setCreditCardData] = useState([]);
	const [productsData, setProductsData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		
		async function fetchData() {
			try {
				const userDetailsResponse = await axios.get(
					"https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01"
				);
				const companyDetailsResponse = await axios.get(
					"https://fakerapi.it/api/v1/companies?_quantity=1"
				);
				const creditCardDetailsResponse = await axios.get(
					"https://fakerapi.it/api/v1/credit_cards?_quantity=1"
				);
				const productsDetailsResponse = await axios.get(
					"https://fakerapi.it/api/v1/products?_quantity=3&amp;_taxes=1&amp;_categories_type=uuid"
				);

				const userData = userDetailsResponse.data.data[0];
				const companyData = companyDetailsResponse.data.data[0];
				const creditData = creditCardDetailsResponse.data.data[0];
				const productData = productsDetailsResponse.data.data;

			
				setUserData(userData);
				setCompanyData(companyData);
				setCreditCardData(creditData);
				setProductsData(productData);

				// console.log("Product Data----");
				// console.log(productData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
			setLoading(false);
		}

		fetchData();
	}, []);

	return (
		<>
			{loading ? (
				<div className="flex items-center justify-center h-screen">
					<Spinner/>
				</div>
			) : (
				<div>
					<div className="bg-gray-100">

						{/* Nav Bar */}
						<UserNavbar userData={userData} />

						<div className="container mx-auto my-5 p-5">
							<div className="md:flex no-wrap mx-auto justify-center">
								<div className="w-full md:w-9/12 mx-2 h-64">

									{/*Basic User Details */}
									<div className="bg-white p-3 shadow-sm rounded-sm">
										<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 justify-center mb-3">
											
											<span className="tracking-wide  items-center  underline-offset-8 text-xl flex gap-2 justify-center">
                                               <FaUserAlt/>
												<span>Basic User Details</span>
											</span>
										</div>

                                        {/* User Details */}
										<UserDetails userData={userData} />

										<button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
											Show Full Information
										</button>
									</div>

									{/* Company Details */}
									<div className="bg-white p-3 shadow-sm rounded-sm">
										<CompanyDetails
											companyData={companyData}
											creditCardData={creditCardData}
										/>
									</div>

									{/* Credit Card Information */}
									<div className="bg-white p-3 shadow-sm rounded-sm">
                                        
										<CreditDetails creditCardData={creditCardData} />
									</div>

									{/* Previously bought products section */}
									<div className="bg-white p-3 shadow-sm rounded-sm">
										<ProductDetails productData={productsData} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default UserProfile;
