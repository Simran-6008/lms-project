import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';


export default defineConfig({
	integrations: [react(),
	starlight({
		title: 'Sajhe Sapne Learning Platform',
		sidebar: [
			{ label: 'Dr. Racket', autogenerate: { directory: 'racket/' } },
			{ label: 'Front-end', autogenerate: { directory: 'html' } },
		],
		components: {
			Sidebar: './src/overrides/Sidebar.astro',
			Pagination: './src/overrides/Pagination.astro',
			SocialIcons: './src/components/PageCom.astro',
		},
import react from '@astrojs/react'; // React Integration import kiya
// https://astro.build/config
export default defineConfig({
	integrations: [
		react(), // React ko integrations me add kiya
		starlight({
			title: 
			'Self-Learning',
			logo: {
				src: '/src/assets/logo.png'
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			sidebar: [
				{ label: 'Dr. Racket', autogenerate: { directory: 'racket/' } },
				{ label: 'Front-end', autogenerate: { directory: 'html' } },
				{ label: 'Pehalwaani', autogenerate: { directory: 'umang' } },
				{ label: 'CSS', autogenerate: { directory: 'css' } },
			],
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				Pagination: './src/overrides/Pagination.astro',
				SocialIcons: './src/components/PageCom.astro',
			},
			customCss: [
				'/src/styles/custom.css'
			]

	}),
	],
});
