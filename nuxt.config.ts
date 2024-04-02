// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: true},
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "Nuxt Products Demo",
			meta: [
				{name: "description", content: "Everything about nuxt3, it is a simple Nuxt 3 page about some products"}
			],
			link: [
				{rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
			]
		}
	},
	runtimeConfig: {
		currencyKey: process.env.CURRENCY_API_KEY
	}
});
