export interface Logo {
	src: string
	srcDark: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'PCCoE IEEE Summer School | Official Website',
	siteDescription:
		'PCCoE IEEE Summer School by IEEE PCCoE Student Branch. Explore technical domains, register by category, and stay updated with event announcements.',
	ogImage: '/og.jpg',
	logo: {
		src: '/favicon.svg',
		srcDark: '/favicon.svg',
		alt: 'PCCoE IEEE Summer School logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
