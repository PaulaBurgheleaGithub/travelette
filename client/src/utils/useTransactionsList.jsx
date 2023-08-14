import { useState, useEffect } from "react";

const localCache = {};

export default function useTransactionList(id) {
	const [transactionList, setTransactionList] = useState([]);
	const [status, setStatus] = useState("unloaded");

	useEffect(() => {
		if (!id) {
			setTransactionList([]);
		} else if (localCache[id]) {
			setTransactionList(localCache[id]);
		} else {
			requestTransactionList();
		}

	async function requestTransactionList() {
		setTransactionList([]);
		setStatus("loading");
		const res = await fetch(
		`/api/transactions/${id}`
      );
      const json = await res.json();
      localCache[id] = json.transactions || [];
      setTransactionList(localCache[id]);
      setStatus("loaded");
    }
  }, [id]);

  return [transactionList, status];
}
