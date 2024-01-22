import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";

function NotFound() {
	useEffect(() => {
		window.location.href = "https://silentclient.freshdesk.com/";
	}, []);
	return (
		<Center h="full" w="full">
			<Head>
				<title>Silent Client Support</title>
			</Head>
		</Center>
	);
}

export default NotFound;
