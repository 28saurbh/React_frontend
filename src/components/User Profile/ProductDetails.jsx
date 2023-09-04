import { FaInfoCircle } from "react-icons/fa";

function ProductDetails({ productData }) {
	console.log(productData);
	return (
		<>
			<div>
				<div className="text-2xl font-semibold mt-5 mb-6 ml-3 flex justify-center text-center">
					<span className="tracking-wide text-lg  text-2xl flex gap-2 items-center ">
						<FaInfoCircle />
						Product Information
					</span>
				</div>
				<div className="text-gray-700">
					<div className="grid md:grid-cols-1 text-sm">
						{productData.map((product, index) => (
							<div key={index}>
								<div className="grid grid-cols-2">
									<div className="flex justify-center p-5">
										<img
											src="http://via.placeholder.com/640x360"
											alt="Error in img load"
											className=" rounded-md"
										/>
									</div>
									<div className="flex justify-center p-5">
										<div>
											<img
												src="http://via.placeholder.com/320x180"
												alt="Error in img load"
												className=" rounded-xl p-2"
											/>
											<img
												src="http://via.placeholder.com/320x180"
												alt="Error in img load"
												className=" rounded-xl p-2"
											/>
										</div>
										<div>
											<img
												src="http://via.placeholder.com/320x180"
												alt="Error in img load"
												className=" rounded-xl p-2"
											/>
											<img
												src="http://via.placeholder.com/320x180"
												alt="Error in img load"
												className=" rounded-xl p-2"
											/>
										</div>
									</div>
								</div>
								<div className="grid grid-cols-4">
									<div className="px-4 py-2 font-semibold">Product Name </div>
									<div className="px-4 py-2 col-span-3">{product.name}</div>
								</div>
								<div className="grid grid-cols-4">
									<div className="px-4 py-2 font-semibold">Description</div>
									<div className="px-4 py-2 col-span-3">
										{product.description}
									</div>
								</div>
								<div className="grid grid-cols-4">
									<div className="px-4 py-2 font-semibold">Price</div>
									<div className="px-4 py-2 col-span-3">{product.price}</div>
								</div>
								<div className="grid grid-cols-4">
									<div className="px-4 py-2 font-semibold text-blue-400 ">
										{" "}
										<button>More Info</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
