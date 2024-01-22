import { getData } from "@/app/data";
import Category from "@/app/types/Category";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";

function Category({ category }: { category: Category }) {
	useEffect(() => {
		window.location.href = category.redirect;
	}, []);

	return (
		<>
			<Head>
				<title>{`${category.name} – Silent Client Support`}</title>
				<meta name="description" content={`${category.description}`} />
			</Head>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const data = getData();

	const paths = [];

	for (const item of data) {
		paths.push({ params: { name: item.link } });
	}

	return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const data = getData();

	let category: Category | null = null;

	for (const item of data) {
		if (params?.name === item.link) {
			category = item;
		}
	}

	return {
		props: {
			category,
		},
	};
};

export default Category;
