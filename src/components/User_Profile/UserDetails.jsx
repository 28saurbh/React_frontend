function UserDetails({ userData }) {
	return (
		<>
			<div className="text-gray-700">
				<div className="grid md:grid-cols-2 text-sm">
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">First Name</div>
						<div className="px-4 py-2">{userData.firstname}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Last Name</div>
						<div className="px-4 py-2">{userData.lastname}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Gender</div>
						<div className="px-4 py-2">{userData.gender}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Phone</div>
						<div className="px-4 py-2">{userData.phone}</div>
					</div>

					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Email.</div>
						<div className="px-4 py-2">
							<a className="text-blue-800" href={`mailto:${userData.email}`}>
								{userData.email}
							</a>
						</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Birthday</div>
						<div className="px-4 py-2">{userData.birthday}</div>
					</div>
				</div>
				<div className="grid grid-cols-4">
					<div className="px-4 py-2 font-semibold">Address</div>
					<div className="px-4 py-2 col-span-3 text-sm">
						{userData.address.buildingNumber}, {userData.address.street},{" "}
						{userData.address.city}, {userData.address.country},{" "}
						{userData.address.country} - {userData.address.zipcode}
					</div>
				</div>
			</div>

			<div className="my-4"></div>
		</>
	);
}

export default UserDetails;
