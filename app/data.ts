import change_data from "./articles/account/change_data";
import change_password from "./articles/account/change_password";
import register from "./articles/account/register";
import client_mod_application from "./articles/general/client_mod_application";
import custom_mods from "./articles/general/custom_mods";
import faq from "./articles/general/faq";
import partner_program from "./articles/general/partner_program";
import tester_application from "./articles/general/tester_application";
import custom_capes from "./articles/premium/custom_capes";
import premium_and_plus from "./articles/premium/premium_and_plus";
import cosmetics_menu from "./articles/settings/cosmetics_menu";
import fps_boost_settings from "./articles/settings/fps_boost_settings";
import general_settings from "./articles/settings/general_settings";
import render_settings from "./articles/settings/render_settings";
import turning_cosmetics from "./articles/settings/turning_cosmetics";
import adding_ram from "./articles/support/adding_ram";
import bug_report from "./articles/support/bug_report";
import game_no_sound from "./articles/support/game_no_sound";
import multiplayer_issues from "./articles/support/multiplayer_issues";
import updating_windows from "./articles/support/updating_windows";
import Article from "./types/Article";
import Category from "./types/Category";

export function articleFormatter(article: Article): Article {
	return {
		...article,
		body: article.body.replaceAll("\n", "").replaceAll("\t", ""),
	};
}

export function getData() {
	return [
		{
			name: "General Information",
			icon: "/assets/icons/categories/general.svg",
			description: "Partnerships, staff applications, and FAQs.",
			link: "general",
			articles: [
				articleFormatter(partner_program),
				articleFormatter(custom_mods),
				articleFormatter(faq),
				articleFormatter(client_mod_application),
				articleFormatter(tester_application),
			],
		},
		{
			name: "Account Management",
			icon: "/assets/icons/categories/account.svg",
			description: "Registering and Managing the Silent Client Account.",
			link: "account",
			articles: [
				articleFormatter(register),
				articleFormatter(change_data),
				articleFormatter(change_password),
			],
		},
		{
			name: "Support Center",
			icon: "/assets/icons/categories/support.svg",
			description:
				"Payment Support, Technical Support, and Vanilla Minecraft Problems.",
			link: "support",
			articles: [
				articleFormatter(adding_ram),
				articleFormatter(game_no_sound),
				articleFormatter(bug_report),
				articleFormatter(updating_windows),
				articleFormatter(multiplayer_issues),
			],
		},
		{
			name: "Premium Rank Help",
			icon: "/assets/icons/categories/premium.png",
			description: "Silent Premium and Its Features and Custom Capes.",
			link: "premium",
			articles: [
				articleFormatter(premium_and_plus),
				articleFormatter(custom_capes),
			],
		},
		{
			name: "Silent Client Settings",
			icon: "/assets/icons/categories/settings.svg",
			description: "Silent Client Settings and Cosmetics.",
			link: "settings",
			articles: [
				articleFormatter(general_settings),
				articleFormatter(render_settings),
				articleFormatter(fps_boost_settings),
				articleFormatter(cosmetics_menu),
				articleFormatter(turning_cosmetics),
			],
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
