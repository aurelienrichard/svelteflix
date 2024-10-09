const config = {
	content: ['src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bg-gradient-1': 'hsl(0, 0%, 8%)',
				'bg-gradient-2': 'hsl(0, 0%, 2%)',
				primary: '#ccc',
				accent: 'hsl(1, 59%, 50%)'
			},
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}

export default config
