import Category from "@/app/components/main/Category";
import { getData } from "@/app/data";
import CategoryType from "@/app/types/Category";
import { Center, Container, Flex, Heading } from "@chakra-ui/react";
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
					<Heading textAlign={"center"}>What can we help you with?</Heading>
				</Center>
				<Flex flexWrap={"wrap"} mt={5}>
					{categories.map((category, key) => (
						<Category key={key} category={category} />
					))}
				</Flex>
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
