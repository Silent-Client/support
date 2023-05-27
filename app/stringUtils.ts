export function cutTags(str: string) {
	return str
		.replaceAll("\n", "")
		.replaceAll("\t", "")
		.replaceAll("<h3>", "")
		.replaceAll("</h3>", " ")
		.replaceAll("<h6>", "")
		.replaceAll("</h6>", " ")
		.replaceAll("<br/>", " ")
		.replaceAll("<br>", " ")
		.replaceAll("</li>", " ")
		.replace(/<\/?[a-zA-Z]+>/gi, "");
}
