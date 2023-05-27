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
	Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";

function Category({ category }: { category: Category }) {
	return (
		<>
			<Head>
				<title>{`${category.name} – Silent Client Support`}</title>
				<meta name="description" content={`${category.description}`} />
			</Head>
			<Container minW="full">
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink as={NextLink} href={`/`}>
							Silent Support
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink>{category.name}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Heading size="lg" textTransform={"uppercase"} mt={5}>
					{category.name}
				</Heading>
				<Heading size="xs" textTransform={"uppercase"} mt={2}>
					{category.description}
				</Heading>
				{(category.articles.length === 0 && (
					<Text mt={5}>
						There are no articles in this section yet. We are working on writing
						articles for sections.
					</Text>
				)) || (
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
				)}
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
