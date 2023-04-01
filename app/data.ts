import change_password from "./articles/account/change_password";
import register from "./articles/account/register";
import custom_mods from "./articles/general/custom_mods";
import faq from "./articles/general/faq";
import partner_program from "./articles/general/partner_program";
import tester_application from "./articles/general/tester_application";
import bug_report from "./articles/support/bug_report";
import Category from "./types/Category";

export function getData() {
	return [
		{
			name: "General Information",
			icon: "/assets/icons/categories/general.svg",
			description: "Partnerships, staff applications, and FAQs.",
			link: "general",
			articles: [partner_program, tester_application, custom_mods, faq],
		},
		{
			name: "Account Management",
			icon: "/assets/icons/categories/account.svg",
			description: "Registering and Managing the Silent Client Account.",
			link: "account",
			articles: [register, change_password],
		},
		{
			name: "Support Center",
			icon: "/assets/icons/categories/support.svg",
			description:
				"Payment Support, Technical Support, and Vanilla Minecraft Problems.",
			link: "support",
			articles: [bug_report],
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