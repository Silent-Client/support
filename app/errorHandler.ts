export default function errorHandler(err: any, toast: any) {
	if (err?.response && err.response?.data && err.response.data?.errors) {
		for (const error of err.response.data.errors) {
			toast({
				title: "Error!",
				description: error.message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	} else {
		toast({
			title: "Unknown error!",
			status: "error",
			duration: 3000,
			isClosable: true,
		});
	}
}
