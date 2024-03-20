export function twoDigits(n: number) {
	return (n < 10 ? "0" : "") + n;
}

export const generateSlug = (text: string) => {
	return text.toLocaleLowerCase().replaceAll(" &", "").replaceAll("&", "").replaceAll(" ", "-");
};
