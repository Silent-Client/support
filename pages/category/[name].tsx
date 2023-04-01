import { getData } from "@/app/data";
import Category from "@/app/types/Category";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Container,
	Heading,
	Link,
	Stack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";

function Category({ category }: { category: Category }) {
	return (
		<>
			<Head>
				<title>{`${category.name} – Silent Client Support`}</title>
			</Head>
			<Container minW="full">
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink as={NextLink} href={`/`}>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink>{category.name}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading size="lg" mt={5}>
					{category.name}
				</Heading>
				<Stack direction={"column"} spacing={1} mt={5}>
					{category.articles.map((article, key) => (
						<Link
							key={key}
							_hover={{ textDecoration: "none", opacity: "0.8" }}
							as={NextLink}
							href={`/article/${article.link}`}
						>
							&gt; {article.name}
						</Link>
					))}
				</Stack>
			</Container>
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
