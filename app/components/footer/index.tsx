import {
	Box,
	Divider,
	Heading,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
	FaDiscord,
	FaTelegram,
	FaTiktok,
	FaTwitter,
	FaVk,
	FaYoutube,
} from "react-icons/fa";

function Footer() {
	const router = useRouter();

	return (
		<Stack
			alignItems={["start", "center"]}
			direction={"column"}
			spacing={[4, 8]}
			w="full"
			p={8}
			as="footer"
		>
			<Stack direction={["column", "row"]} spacing={4}>
				<Image src="https://assets.silentclient.net/logos/logo.png" w="250px" />
				<Box display={["none", "block"]}>
					<Divider borderColor={"white"} orientation="vertical" h="full" />
				</Box>
				<Stack direction="row" alignItems={"center"} spacing={5}>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://dsc.gg/silentclient"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaDiscord size={25} />
					</Link>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://t.me/silent_client"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaTelegram size={25} />
					</Link>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://twitter.com/SilentClientMC"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaTwitter size={25} />
					</Link>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://www.youtube.com/@SilentClientMC"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaYoutube size={25} />
					</Link>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://www.tiktok.com/@SilentClientMC"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaTiktok size={20} />
					</Link>
					<Link
						transition="opacity 0.2s ease-in-out"
						href="https://vk.com/silentclient"
						isExternal
						_hover={{
							opacity: "0.5",
						}}
					>
						<FaVk size={25} />
					</Link>
				</Stack>
			</Stack>
			<Stack direction={["column", "row"]} spacing={[4, 8]}>
				<Stack direction={"column"} spacing={2}>
					<Heading size={"md"}>Silent Client</Heading>
					<Stack direction={"column"} spacing={1}>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/download"
							>
								Download
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/news"
							>
								News
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/faq"
							>
								FAQ
							</Link>
						</Box>
						<Box>
							<NextLink href={"/register"} passHref>
								<Link
									fontSize={"sm"}
									_hover={{ textDecoration: "none", opacity: "0.5" }}
								>
									Register
								</Link>
							</NextLink>
						</Box>
					</Stack>
				</Stack>
				<Stack direction={"column"} spacing={2}>
					<Heading size={"md"}>Company</Heading>
					<Stack direction={"column"} spacing={1}>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/brand"
							>
								Brand
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/rules"
							>
								Rules
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/staff"
							>
								Staff
							</Link>
						</Box>
					</Stack>
				</Stack>
				<Stack direction={"column"} spacing={2}>
					<Heading size={"md"}>Our Services</Heading>
					<Stack direction={"column"} spacing={1}>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://store.silentclient.net"
							>
								Store
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://status.silentclient.net"
							>
								Status
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://support.silentclient.net"
							>
								Support
							</Link>
						</Box>
					</Stack>
				</Stack>
				<Stack direction={"column"} spacing={2}>
					<Heading size={"md"}>Legal</Heading>
					<Stack direction={"column"} spacing={1}>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/privacy-policy"
							>
								Privacy Policy
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/offer-agreement"
							>
								Offer Agreement
							</Link>
						</Box>
						<Box>
							<Link
								fontSize={"sm"}
								_hover={{ textDecoration: "none", opacity: "0.5" }}
								href="https://silentclient.net/terms-and-conditions"
							>
								Terms & Conditions
							</Link>
						</Box>
						<Text fontSize={"sm"} opacity={"0.5"}>
							<>
								SP Akhmedov Muslim Telmanovich
								<br />
								TIN: 052304389440
								<br />
								PSRNSP: 324050000039253
							</>
						</Text>
					</Stack>
				</Stack>
			</Stack>
			<Stack
				position={"relative"}
				alignItems={"center"}
				w="full"
				justifyContent={"flex-end"}
				direction={"row"}
			>
				<Link
					position={"absolute"}
					left={["0%", "50%"]}
					justifyContent={"center"}
					fontSize={"sm"}
					transform={["", "translate(-50%, 0)"]}
					alignSelf={"center"}
					_hover={{ textDecoration: "none", opacity: "0.5" }}
					href="https://revage.net"
					isExternal
				>
					© {new Date().getFullYear()} Revage
				</Link>

				<Menu>
					<MenuButton
						as={Link}
						fontWeight={600}
						_hover={{
							opacity: "0.5",
							textDecoration: "none",
						}}
						textTransform={"uppercase"}
					>
						{router.locale}
					</MenuButton>
					<MenuList bgColor="black">
						{router.locales?.map(locale => {
							if (locale === router.locale) {
								return null;
							}

							return (
								// eslint-disable-next-line react/jsx-key
								<NextLink
									href={{
										pathname: router.pathname,
										query: router.query,
									}}
									locale={locale}
								>
									<MenuItem
										bgColor={"black"}
										_hover={{
											bgColor: "#131313",
										}}
										textTransform={"uppercase"}
									>
										{locale}
									</MenuItem>
								</NextLink>
							);
						})}
					</MenuList>
				</Menu>
			</Stack>
		</Stack>
	);
}

export default Footer;
