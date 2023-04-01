import { Container } from "@chakra-ui/react";
import React from "react";

function ContainerProvider({ children }: { children: React.ReactNode }) {
	return (
		<Container
			maxW={"full"}
			paddingInlineStart={[
				"15px",
				"15px",
				"15px",
				"2rem",
				"2rem",
				"3rem",
				"4rem",
			]}
			paddingInlineEnd={[
				"15px",
				"15px",
				"15px",
				"2rem",
				"2rem",
				"3rem",
				"4rem",
			]}
		>
			{children}
		</Container>
	);
}

export default ContainerProvider;
