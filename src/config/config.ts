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
	siteTitle: 'PCCOE Summer School',
	siteDescription:
		'Official PCCOE IEEE Summer School. Join expert-led technical domains, participate in hands-on learning, and earn prestigious certification at PCCOE Student Branch.',
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
