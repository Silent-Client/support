import Category from "@/app/types/Category";
import { Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function Category({ category }: { category: Category }) {
	if (category.articles.length === 0) {
		return null;
	}

	return (
		<Stack
			flex={"1 0 330px"}
			margin={{
				base: "0 0 30px",
				md: "0 15px 30px",
			}}
			spacing={3}
			bgColor={"rgb(19, 19, 19)"}
			borderRadius={"lg"}
			boxShadow={"rgba(0, 0, 0, 0.1) 0px 15px 9px 0px"}
			p={5}
			transition={"border-color 200ms"}
			borderWidth={"1px"}
			borderColor={"transparent"}
			_hover={{
				borderColor: "white",
				textDecoration: "none",
			}}
			as={NextLink}
			href={`/category/${category.link}`}
		>
			<Center>
				<Image src={category.icon} w="50px" h="50px" />
			</Center>
			<Center>
				<Heading size="sm">{category.name}</Heading>
			</Center>
			<Center>
				<Text textAlign={"center"}>{category.description}</Text>
			</Center>
		</Stack>
	);
}

export default Category;
