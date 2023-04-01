import { getData } from "@/app/data";
import Article from "@/app/types/Article";
import Category from "@/app/types/Category";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Center,
	Container,
	Heading,
	Link,
	Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import ReactHtmlParser from "react-html-parser";
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
			</Head>
			<Container minW="full">
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink as={NextLink} href={`/`}>
							Home
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
				<Heading size="lg" mt={5}>
					{article.name}
				</Heading>
				<Text mt={5} className={styles.article}>
					{ReactHtmlParser(article.body)}
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
