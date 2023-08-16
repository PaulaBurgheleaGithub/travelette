import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Transaction() {
	const [transaction, setTransaction] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getTransaction();
	}, [id]);

	const getTransaction = () => {
		fetch(`/api/transactions/${id}`)
			.then(response => response.json())
			.then(transaction => {
				setTransaction(...transaction);
			})
			.catch(error => {
				console.log(error);
		});
	}
	return (
	<section>
		<header>
			<h2>Transaction Details</h2>
		</header>
		<div>
			<p>Category: {transaction.category} -
				Merchant: {transaction.merchant} -
				Amount: {transaction.amount} -
				Currency: {transaction.currency} -
				Details: {transaction.description}
			</p>
		</div>
	</section>
	)
}
