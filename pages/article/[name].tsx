import { getData } from "@/app/data";
import { cutTags } from "@/app/stringUtils";
import Article from "@/app/types/Article";
import Category from "@/app/types/Category";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

function Article({
	article,
	category,
}: {
	article: Article;
	category: Category;
}) {
	useEffect(() => {
		window.location.href = article.redirect;
	}, []);

	return (
		<>
			<Head>
				<title>{`${article.name} – Silent Client Support`}</title>
				<meta
					name="description"
					content={`${cutTags(article.body).slice(0, 136)}...`}
				/>
			</Head>
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
