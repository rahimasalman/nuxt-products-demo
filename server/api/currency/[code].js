export default defineEventHandler(async (event) => {

	const {code} = event.context.params;
	const {currencyKey} = useRuntimeConfig();
	const uri = `https://api.currencyapi.com/v3/latest?apiKey=${currencyKey}&currencies=${code}`;

	const {data} = $fetch(uri);
	return data;
});