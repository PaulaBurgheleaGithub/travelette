import { useState, useEffect } from "react";

export default function Transactions() {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		getTransactions()
	}, []);

	const getTransactions = () => {
		fetch("/api/transactions")
			.then(response => response.json())
			.then(transactions => {
			setTransactions(transactions);
			})
			.catch(error => {
			console.log(error);
			});
	};


	return (
		<div>
			<header>
				<svg width="24" height="24" fill="currentColor" focusable="false" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M2.576 4a.861.861 0 0 0-.862.861v11.135c0 .475.386.861.862.861h4.71v-1.714H5.143a1.714 1.714 0 0 0-1.714-1.714v-6a1.714 1.714 0 0 0 1.714-1.715h13.714a1.715 1.715 0 0 0 1.715 1.715V5.714v9.429-1.714a1.713 1.713 0 0 0-1.715 1.714h-2.143v1.714h4.71a.861.861 0 0 0 .862-.861V4.86A.861.861 0 0 0 21.424 4H2.576Zm7.71 6.429a1.714 1.714 0 1 1 3.428 0 1.714 1.714 0 0 1-3.428 0ZM12 7a3.429 3.429 0 1 0 0 6.857A3.429 3.429 0 0 0 12 7Zm-.857 12.288-1.751-1.751-1.212 1.212 3.211 3.211a.862.862 0 0 0 1.218 0l3.211-3.211-1.212-1.212-1.75 1.75v-4.144h-1.715v4.145Z"></path></svg>
				<h2>Transactions Page</h2>
			</header>

		</div>
	)
}
