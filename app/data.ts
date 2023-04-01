import partner_program from "./articles/general/partner_program";
import Category from "./types/Category";

export function getData() {
	return [
		{
			name: "General Information",
			icon: "/assets/icons/categories/general.svg",
			description: "Partnerships, staff applications, and FAQs.",
			link: "general",
			articles: [partner_program],
		},
		{
			name: "Account Management",
			icon: "/assets/icons/categories/account.svg",
			description: "Registering and Managing the Silent Client Account.",
			link: "account",
			articles: [],
		},
		{
			name: "Support Center",
			icon: "/assets/icons/categories/support.svg",
			description:
				"Payment Support, Technical Support, and Vanilla Minecraft Problems.",
			link: "support",
			articles: [],
		},
		{
			name: "Silent+ Help",
			icon: "/assets/icons/categories/plus.svg",
			description: "Silent+ and Its Features and Custom Capes.",
			link: "plus",
			articles: [],
		},
		{
			name: "Silent Client Settings",
			icon: "/assets/icons/categories/settings.svg",
			description: "Launcher Settings, Silent Client Settings and Cosmetics.",
			link: "settings",
			articles: [],
		},
		{
			name: "Mods and Features",
			icon: "/assets/icons/categories/mods.svg",
			description: "Simple and Complex Mods and Other Features.",
			link: "mods",
			articles: [],
		},
	] as Category[];
}
