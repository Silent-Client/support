import Article from "./Article";

export default interface Category {
	icon: string;
	name: string;
	description: string;
	link: string;
	articles: Article[];
}
