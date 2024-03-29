import { Center, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import {
	FaDiscord,
	FaTelegram,
	FaTiktok,
	FaTwitter,
	FaVk,
	FaYoutube,
} from "react-icons/fa";
import { MenuItems } from "../header";

function Footer() {
	return (
		<Center w="full" padding="45px 0px" as="footer">
			<Stack
				w={["auto", "full"]}
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
				direction={["column", "row"]}
				justifyContent="space-between"
			>
				<Center w="full" justifyContent={["center", "left"]} h="42px">
					<Link
						fontWeight={600}
						_hover={{ textDecoration: "none", opacity: "0.5" }}
						href="https://aithercol.com"
						isExternal
					>
						© {new Date().getFullYear()} AitherCol
					</Link>
				</Center>

				<Center h="42px">
					<Stack direction="row" alignItems={"center"} spacing={5}>
						<Link
							transition="opacity 0.2s ease-in-out"
							href="https://dsc.gg/silentclient"
							color="#c9c9c9"
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
							color="#c9c9c9"
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
							color="#c9c9c9"
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
							color="#c9c9c9"
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
							color="#c9c9c9"
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
							color="#c9c9c9"
							isExternal
							_hover={{
								opacity: "0.5",
							}}
						>
							<FaVk size={25} />
						</Link>
					</Stack>
				</Center>
				<Center w="full" justifyContent={["center", "right"]} h="42px">
					<Stack direction="row" spacing={5}>
						{MenuItems.map(link => (
							<Link
								color="rgb(114, 114, 114)"
								fontWeight={600}
								_hover={{
									color: "white",
									textDecoration: "none",
								}}
								as={NextLink}
								href={link.to}
							>
								{link.name}
							</Link>
						))}
						<Link
							color="rgb(114, 114, 114)"
							fontWeight={600}
							_hover={{
								color: "white",
								textDecoration: "none",
							}}
							href="https://silentclient.net/download"
						>
							Download
						</Link>
						<Link
							color="rgb(114, 114, 114)"
							fontWeight={600}
							_hover={{
								color: "white",
								textDecoration: "none",
							}}
							href="https://silentclient.net/faq"
						>
							FAQ
						</Link>
						<Link
							color="rgb(114, 114, 114)"
							fontWeight={600}
							_hover={{
								color: "white",
								textDecoration: "none",
							}}
							href="https://silentclient.net/news"
						>
							News
						</Link>
					</Stack>
				</Center>
			</Stack>
		</Center>
	);
}

export default Footer;
