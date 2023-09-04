import { BsFillCreditCard2BackFill } from "react-icons/bs";

function CreditDetails({ creditCardData }) {
	// console.log(creditCardData);
	return (
		<div>
			<div className="text-2xl font-semibold mt-5 mb-6 ml-3 flex gap-2 items-center justify-center text-center">
				<span className="tracking-wide text-lg  text-2xl flex gap-2 items-center ">
					<BsFillCreditCard2BackFill />
					Credit Card Details
				</span>
			</div>
			<div className="text-gray-700">
				<div className="grid md:grid-cols-2 text-sm">
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Type</div>
						<div className="px-4 py-2">{creditCardData.type}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Expiration</div>
						<div className="px-4 py-2">{creditCardData.expiration}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Number</div>
						<div className="px-4 py-2">{creditCardData.number}</div>
					</div>
					<div className="grid grid-cols-2">
						<div className="px-4 py-2 font-semibold">Owner</div>
						<div className="px-4 py-2">{creditCardData.owner}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreditDetails;
