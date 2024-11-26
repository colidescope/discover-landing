export function goToPage(url: string, delay: number = 0) {
	if (typeof window !== 'undefined') {
		setTimeout(() => {
			window.open(url, '_blank');
		}, delay);
	}
}
