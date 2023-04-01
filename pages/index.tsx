import Category from "@/app/components/main/Category";
import { getData } from "@/app/data";
import CategoryType from "@/app/types/Category";
import { Center, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function Home({ categories }: { categories: CategoryType[] }) {
	return (
		<>
			<Head>
				<title>Silent Client Support</title>
			</Head>
			<Container minW="full">
				<Center>
					<Heading>Silent Client Support</Heading>
				</Center>
				<SimpleGrid mt={5} columns={[1, 2, 3]} spacing={5}>
					{categories.map(category => (
						<Category category={category} />
					))}
				</SimpleGrid>
			</Container>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			categories: getData(),
		},
	};
};
