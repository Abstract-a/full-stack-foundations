import { LiveReload, Scripts } from '@remix-run/react'
import { KCDShop } from './kcdshop.tsx'
import { Links } from '@remix-run/react'
import { type LinksFunction } from '@remix-run/node'
// 🐨 export a links function here that adds the favicon
// 💰 It should have the following properties:
// - rel: 'icon'
// - type: 'image/svg+xml'
// - href: '/favicon.svg'

export default function App() {
	return (
		<html lang="en">
			<head>
				{/* 🐨 Put Remix's <Links /> in here */}
				<Links />
			</head>
			<body>
				<p>Hello World</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: '/favicon.svg',
		},
	]
}
