import { Box, ChakraProvider, Container, Stack } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import theme from "../app/theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Convenient pvp client for Minecraft with 30+ mods, FPS Boost, Optifine and cosmetics."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon-16x16.png"
				/>
				<link rel="manifest" href="/assets/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<Stack minH="100vh" direction={"column"} justifyContent={"space-between"}>
				<Box>
					<Header />

					<Container
						maxW={"full"}
						pt={5}
						paddingInlineStart={[
							"15px",
							"15px",
							"15px",
							"2rem",
							"2rem",
							"3rem",
							"4rem",
						]}
						paddingInlineEnd={[
							"15px",
							"15px",
							"15px",
							"2rem",
							"2rem",
							"3rem",
							"4rem",
						]}
					>
						<Component {...pageProps} />
					</Container>
				</Box>

				<Footer />
			</Stack>
		</ChakraProvider>
	);
}
