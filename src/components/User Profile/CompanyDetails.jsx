import UserDetails from "./UserDetails";
import { CgOrganisation } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
// import CreditDetails from "./CreditDetails";

function CompanyDetails({ companyData }) {
	let cntAddress = 1;

	return (
		<>
			{/* <!-- Profile tab -->  */}
			{/* <!-- About Section --> */}
			<div className="bg-white p-3 shadow-sm rounded-sm">
				<div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 justify-center mb-6">
					<span className="tracking-wide text-lg  text-2xl flex gap-2 items-center">
						<CgOrganisation />
						Company Details
					</span>
				</div>
				<div className="text-gray-700 text-sm">
					<div className="grid md:grid-cols-2 text-sm">
						<div className="grid grid-cols-2">
							<div className="px-4 py-2 font-semibold">Company Name</div>
							<div className="px-4 py-2">{companyData.name}</div>
						</div>
						<div className="grid grid-cols-2">
							<div className="px-4 py-2 font-semibold">Phone</div>
							<div className="px-4 py-2">{companyData.phone}</div>
						</div>

						<div className="grid grid-cols-2">
							<div className="px-4 py-2 font-semibold">Email.</div>
							<div className="px-4 py-2">
								<a
									className="text-blue-800"
									href={`mailto:${companyData.email}`}
								>
									{companyData.email}
								</a>
							</div>
						</div>
						<div className="grid grid-cols-2">
							<div className="px-4 py-2 font-semibold">Country</div>
							<div className="px-4 py-2">{companyData.country}</div>
						</div>
					</div>

					{/* Company Address */}
					<>
						<div className="text-base font-semibold mt-5 mb-2 ml-3 underline  underline-offset-8 flex gap-2 items-center">
							<FaAddressCard />
							Company Address:
						</div>

						<div className="grid grid-cols-2">
							{companyData.addresses.map((address, index) => (
								<div key={index}>
									<div className="px-4 py-2 font-semibold">
										Company Address No. {cntAddress++}{" "}
									</div>
									<div className="px-4 py-2">
										{address.buildingNumber}, {address.streetName},{" "}
										{address.city}, {address.country} - {address.zipcode}
									</div>
								</div>
							))}
						</div>
					</>

					{/* Contact Company person */}
					<>
						<div className="text-base font-semibold mt-5 mb-2 ml-3 underline  underline-offset-8 flex items-center gap-2">
							<BiSolidPhoneCall />
							Contact Person:
						</div>
						<UserDetails userData={companyData.contact} />
					</>
				</div>
			</div>

			<div className="my-4"></div>
		</>
	);
}

export default CompanyDetails;
