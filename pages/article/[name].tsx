import { getData } from "@/app/data";
import { cutTags } from "@/app/stringUtils";
import Article from "@/app/types/Article";
import Category from "@/app/types/Category";
import {
	Avatar,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Center,
	Container,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import parse from "html-react-parser";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import styles from "../../styles/Article.module.css";

function Article({
	article,
	category,
}: {
	article: Article;
	category: Category;
}) {
	return (
		<>
			<Head>
				<title>{`${article.name} – Silent Client Support`}</title>
				<meta
					name="description"
					content={`${cutTags(article.body).slice(0, 136)}...`}
				/>
			</Head>
			<Container maxW="full" w="full">
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink as={NextLink} href={`/`}>
							Silent Support
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem>
						<BreadcrumbLink as={NextLink} href={`/category/${category.link}`}>
							{category.name}
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink>{article.name}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Flex mt={10} direction={"row"}>
					<Stack
						display={{
							base: "none",
							lg: "flex",
						}}
						flex={{
							lg: "0 0 17%",
						}}
						direction={"column"}
						spacing={2}
					>
						<Heading size={"sm"}>ARTICLES IN THIS SECTION</Heading>
						<Stack direction={"column"} spacing={"3px"}>
							{category.articles.map(a => (
								<Link
									p="10px"
									fontWeight={a.link === article.link ? "bold" : "normal"}
									as={NextLink}
									href={a.link}
								>
									{a.name}
								</Link>
							))}
						</Stack>
					</Stack>
					<Box
						flex={{
							lg: "1 0 66%",
						}}
						maxW={{
							lg: "66%",
						}}
						minW={{
							lg: "640px",
						}}
						padding={{
							lg: "0 30px",
						}}
					>
						<Heading textTransform={"uppercase"} size="lg">
							{article.name}
						</Heading>

						<Stack
							alignItems={"center"}
							mt={2}
							direction={"row"}
							spacing={1}
							as={Link}
							href={`https://silentclient.net/u/${article.author}`}
						>
							<Avatar
								src={`https://mc-heads.net/avatar/${article.author}.png`}
								size={"sm"}
							></Avatar>
							<Text fontSize="md">{article.author}</Text>
						</Stack>

						<Text mt={5} className={styles.article}>
							{parse(article.body)}
						</Text>
						<Center>
							<Text mt={5}>
								Have more questions?{" "}
								<Link
									textDecoration={"underline"}
									_hover={{
										opacity: "0.8",
									}}
									as={NextLink}
									href="/new"
								>
									Submit a request
								</Link>
							</Text>
						</Center>
					</Box>
				</Flex>
			</Container>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const data = getData();

	const paths = [];

	for (const item of data) {
		for (const article of item.articles) {
			paths.push({ params: { name: article.link } });
		}
	}

	return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = getData();

	let article: Article | null = null;
	let category: Category | null = null;

	for (const item of data) {
		for (const articleItem of item.articles) {
			if (params?.name === articleItem.link) {
				article = articleItem;
				category = item;
			}
		}
	}

	return {
		props: {
			article,
			category,
		},
	};
};

export default Article;
