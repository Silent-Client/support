import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

function NotFound() {
	return (
		<Center h="full" w="full">
			<Head>
				<title>Not Found | Silent Client</title>
			</Head>
			<Center height="70vh">
				<Stack spacing={16}>
					<Stack spacing={2}>
						<Center>
							<Heading size="4xl">404</Heading>
						</Center>
						<Center>
							<Text fontSize={["sm", "xl"]}>
								Sorry, this page could not be found.
							</Text>
						</Center>
					</Stack>
					<Center>
						<NextLink href="/">
							<Button>Back to home</Button>
						</NextLink>
					</Center>
				</Stack>
			</Center>
		</Center>
	);
}

export default NotFound;
