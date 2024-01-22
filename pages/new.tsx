import Head from "next/head";
import { useEffect } from "react";

function New() {
	useEffect(() => {
		window.location.href =
			"https://silentclient.freshdesk.com/support/tickets/new";
	}, []);

	return (
		<>
			<Head>
				<title>Submit a request – Silent Client Support</title>
			</Head>
		</>
	);
}

export default New;
