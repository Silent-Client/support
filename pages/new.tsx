import {
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function New() {
	const [title, setTitle] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [body, setBody] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const toast = useToast();

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());

		setBody(params.d?.replaceAll("<br>", "\n") || "");
		setTitle(params.s || "");
	}, []);

	const { executeRecaptcha } = useGoogleReCaptcha();

	const submit = async () => {
		setIsLoading(true);
		try {
			if (title.trim() === "" || body.trim() === "" || email.trim() === "") {
				toast({
					title: "Error",
					description: "Please complete all fields.",
					status: "error",
					duration: 6000,
					isClosable: true,
					position: "bottom",
				});
				return;
			}

			if (!executeRecaptcha) {
				toast({
					title: "Error!",
					description: "Captcha error",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
				return;
			}
			const result = await executeRecaptcha("register");

			await axios.post("https://api.silentclient.net/support/send", {
				email: email,
				title: title,
				body: body,
				retoken: result,
			});

			toast({
				title: "Success",
				description:
					"Your message has been sent! You will be contacted by email.",
				status: "success",
				duration: 6000,
				isClosable: true,
				position: "bottom",
			});
		} catch (err: any) {
			if (err?.response && err.response?.data && err.response.data?.errors) {
				for (const error of err.response.data.errors) {
					toast({
						title: "Error",
						description: error.message,
						status: "error",
						duration: 3000,
						isClosable: true,
					});
				}
			} else {
				toast({
					title: "Error",
					description: `${err}`,
					status: "error",
					duration: 6000,
					isClosable: true,
					position: "bottom",
				});
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<Head>
				<title>Submit a request – Silent Client Support</title>
			</Head>

			<Container maxW="container.md">
				<Heading size="lg">Submit a request</Heading>
				<Stack direction={"column"} spacing={3} mt={5}>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							isDisabled={isLoading}
							value={email}
							onChange={e => setEmail(e.currentTarget.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Subject</FormLabel>
						<Input
							isDisabled={isLoading}
							value={title}
							onChange={e => setTitle(e.currentTarget.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Description</FormLabel>
						<Textarea
							isDisabled={isLoading}
							value={body}
							onChange={e => setBody(e.currentTarget.value)}
						/>
					</FormControl>
					<Button isDisabled={isLoading} onClick={submit}>
						Submit
					</Button>
				</Stack>
			</Container>
		</>
	);
}

export default New;
