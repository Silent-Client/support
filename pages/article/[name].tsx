import { getData } from "@/app/data";
import Article from "@/app/types/Article";
import { Container, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import styles from "../../styles/Article.module.css";

function Article({ article }: { article: Article }) {
	return (
		<>
			<Head>
				<title>{article.name} – Silent Client Support</title>
			</Head>
			<Container minW="full">
				<Heading size="lg">{article.name}</Heading>
				<Text mt={5} className={styles.article}>
					{ReactHtmlParser(article.body)}
				</Text>
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

	for (const item of data) {
		for (const articleItem of item.articles) {
			if (params?.name === articleItem.link) {
				article = articleItem;
			}
		}
	}

	return {
		props: {
			article,
		},
	};
};

export default Article;
