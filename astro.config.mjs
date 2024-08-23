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

	}),
	],
});
