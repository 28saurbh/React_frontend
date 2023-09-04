function UserNavbar({ userData }) {
	return (
		<>
			<div className="w-full text-white bg-main-color">
				<div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
					<div className="p-4 flex flex-row items-center justify-between">
						<a
							href="#"
							className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
						>
							User profile
						</a>
					</div>
					<nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
						<div className="relative">
							<div className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-blue-800 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-blue-800 focus:outline-none focus:shadow-outline">
								<span>
									{userData.firstname} {userData.lastname}
								</span>
								<img
									className="inline h-6 rounded-full"
									src="http://via.placeholder.com/64x64"
								/>
							</div>
						</div>
					</nav>
				</div>
				{/*  End of Navbar */}
			</div>
		</>
	);
}

export default UserNavbar;
