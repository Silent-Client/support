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

export function getQueryVariable(variable: string) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (decodeURIComponent(pair[0]) == variable) {
			return decodeURIComponent(pair[1]);
		}
	}
	return null;
}
