import errorHandler from "@/app/errorHandler";
import { getQueryVariable } from "@/app/stringUtils";
import {
	Button,
	Center,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	Link,
	Select,
	Spinner,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Application {
	id: number;
	user_id: number;
	type: "twitch" | "youtube";
	channel: string;
	most_recent_video: string;
	status: "ok" | "waiting" | "rejected";
	created_at: string;
	updated_at: string;
}

interface ApplicationForm {
	type: "twitch" | "youtube";
	channel: string;
	most_recent_video: string;
	contacts: {
		telegram: string | null;
		discord: string | null;
	};
}

function PartnerApplication() {
	const toast = useToast();
	const router = useRouter();

	const [account, setAccount] = useState<{
		original_username: string;
		token: string;
	} | null>(null);
	const [activeApplication, setActiveApplication] =
		useState<Application | null>(null);

	const getActiveApplication = async (token?: string) => {
		const { data } = await axios.get(
			"https://api.silentclient.net/partner_program/get_application",
			{
				headers: {
					Authorization: `Bearer ${token || account?.token}`,
				},
			}
		);
		setActiveApplication(data.application);
	};

	useEffect(() => {
		const loginUrl = `https://auth.silentclient.net/login?redirect_url=${window.location.href}`;

		const getAccount = async () => {
			const token = getQueryVariable("access_token");
			if (token) {
				try {
					router.replace(
						{
							query: {},
						},
						undefined,
						{ shallow: true }
					);
					await getActiveApplication(token);
					const { data } = await axios.get(
						"https://api.silentclient.net/account",
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
					setAccount({
						token: token,
						...data.account,
					});
				} catch (error) {
					window.location.href = loginUrl;
				}
			} else {
				window.location.href = loginUrl;
			}
		};

		getAccount();
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ApplicationForm>();
	const onSubmit: SubmitHandler<ApplicationForm> = async data => {
		try {
			await axios.post(
				"https://api.silentclient.net/partner_program/send_application",
				data,
				{
					headers: {
						Authorization: `Bearer ${account?.token}`,
					},
				}
			);

			await getActiveApplication();
		} catch (error) {
			errorHandler(error, toast);
		}
	};

	return (
		<>
			<Head>
				<title>Silent Client Partner Program Application</title>
			</Head>

			{(!account && (
				<Center h="full" minH="66vh">
					<Spinner size={"xl"} color="white"></Spinner>
				</Center>
			)) || (
				<Container maxW="container.md">
					<Heading size="lg">Partner Program Application</Heading>
					<Stack direction={"column"} spacing={1}>
						<Stack alignItems={"center"} direction={"row"} spacing={1}>
							<Text>Logged in as</Text>
							<Image
								borderRadius={"md"}
								src={`https://cache.silentclient.net/avatar/${account?.original_username}.png`}
								w="20px"
								h="20px"
							/>
							<Heading size="sm">{account?.original_username}</Heading>
						</Stack>
						<Text>
							Not you?{" "}
							<Link
								href={`https://auth.silentclient.net/login?redirect_url=https://support.silentclient.net/application/partner-program&force_login=1`}
								textDecoration={"underline"}
								_hover={{
									opacity: "0.5",
									textDecoration: "none",
								}}
							>
								Logout
							</Link>
						</Text>
					</Stack>
					{(activeApplication === null && (
						<form onSubmit={handleSubmit(onSubmit)}>
							<Stack direction={"column"} spacing={3} mt={5}>
								<FormControl isInvalid={errors.type && true}>
									<FormLabel>Platform</FormLabel>
									<Select
										isDisabled={isSubmitting}
										placeholder="Select your platform"
										{...register("type", { required: true })}
									>
										<option value={"youtube"}>YouTube</option>
										<option value={"twitch"}>Twitch</option>
									</Select>
									{errors.type && (
										<FormErrorMessage>Platform is required.</FormErrorMessage>
									)}
								</FormControl>

								<FormControl isInvalid={errors.channel && true}>
									<FormLabel>Channel</FormLabel>
									<Input
										isDisabled={isSubmitting}
										placeholder="Link to your channel"
										{...register("channel", { required: true })}
									></Input>
									{errors.channel && (
										<FormErrorMessage>Channel is required.</FormErrorMessage>
									)}
								</FormControl>
								<FormControl isInvalid={errors.most_recent_video && true}>
									<FormLabel>Most recent video</FormLabel>
									<Input
										isDisabled={isSubmitting}
										placeholder="Link to your most recent video"
										{...register("most_recent_video", { required: true })}
									></Input>
									{errors.most_recent_video && (
										<FormErrorMessage>
											Most recent video is required.
										</FormErrorMessage>
									)}
								</FormControl>

								<Heading size={"sm"}>Contacts</Heading>

								<FormControl isInvalid={errors.contacts?.discord && true}>
									<FormLabel>Discord</FormLabel>
									<Input
										isDisabled={isSubmitting}
										placeholder="Your Discord username"
										{...register("contacts.discord")}
									></Input>
								</FormControl>

								<FormControl isInvalid={errors.contacts?.telegram && true}>
									<FormLabel>Telegram</FormLabel>
									<Input
										isDisabled={isSubmitting}
										placeholder="Your Telegram username (without @)"
										{...register("contacts.telegram")}
									></Input>
								</FormControl>

								<Button isDisabled={isSubmitting} type="submit">
									Submit
								</Button>
							</Stack>
						</form>
					)) || (
						<Stack direction={"column"} spacing={2} mt={5}>
							<Heading size={"md"}>
								{activeApplication?.status === "waiting"
									? "Your application is under consideration."
									: activeApplication?.status === "ok"
									? "Your application is accepted!"
									: "Your application has been rejected."}
							</Heading>
						</Stack>
					)}
				</Container>
			)}
		</>
	);
}

export default PartnerApplication;
