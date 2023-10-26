/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'#001514': '#001514',
					'#003433': '#003433',
					'#003C3B': '#003C3B',
					'#013433': '#013433',
					'#235F5E': '#235F5E',
					'#364444': '#364444',
					'#4D6060': '#4D6060',
					'#8FB3AF': '#8FB3AF',
					'#AEEAE9': '#AEEAE9',
					'#EBFAF9': '#EBFAF9',
					'#EBFAFA': '#EBFAFA',
					'#DAE2E2': '#DAE2E2',
				},
				secondary: {
					'#F8AE80': '#F8AE80',
					'#F8D881': '#F8D881',
				},
				gray: {
					'#F9FBFB': '#F9FBFB',
					'#F1F4F4': '#F1F4F4',
					'#F6FAFD': '#F6FAFD',
					'#F0F7FB': '#F0F7FB',
					'#BDC8D5': '#BDC8D5',
					'#98A4A4': '#98A4A4',
					'#A6B4C4': '#A6B4C4',
					'#748394': '#748394',
					'#435265': '#435265',
					'#001024': '#001024',
				},
			},
			fontFamily: {
				Beautiste: ['Beautiste', 'sans-serif'],
			},
			
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				gradOne:
					'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 33.33%, rgba(0, 0, 0, 0) 66.67%, rgba(0, 0, 0, 0.1) 100%)',
			},
		},
	},
	plugins: [],
};
