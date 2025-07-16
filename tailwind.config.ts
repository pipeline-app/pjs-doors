import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* Retro Color Extensions */
				'chocolate-brown': 'hsl(var(--chocolate-brown))',
				'warm-orange': 'hsl(var(--warm-orange))',
				'vintage-yellow': 'hsl(var(--vintage-yellow))',
				'retro-green': 'hsl(var(--retro-green))',
				'cream': 'hsl(var(--cream))',
				/* Tuscany Color Palette */
				'tuscany': {
					'50': '35 77% 97%',
					'100': '33 73% 91%',
					'200': '32 69% 83%',
					'300': '29 65% 73%',
					'400': '26 70% 61%',
					'500': '22 65% 53%',
					'600': '19 70% 47%',
					'700': '17 65% 40%',
					'800': '16 58% 34%',
					'900': '15 54% 28%',
					'950': '14 60% 15%',
				},
				/* Wheatfield Color Palette */
				'wheatfield': {
					'50': '43 67% 96%',
					'100': '43 65% 89%',
					'200': '49 69% 77%',
					'300': '46 69% 65%',
					'400': '44 67% 56%',
					'500': '38 66% 50%',
					'600': '33 66% 44%',
					'700': '26 63% 37%',
					'800': '23 57% 31%',
					'900': '22 54% 26%',
					'950': '21 64% 14%',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'retro': ['Impact', 'Arial Black', 'sans-serif'],
				'display': ['Bebas Neue', 'Impact', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-section': 'var(--gradient-section)',
				'gradient-cta': 'var(--gradient-cta)',
			},
			boxShadow: {
				'retro': 'var(--shadow-retro)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--warm-orange) / 0.4)' 
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--warm-orange) / 0.8)' 
					}
				},
				'slide-up': {
					'0%': { 
						transform: 'translateY(30px)', 
						opacity: '0' 
					},
					'100%': { 
						transform: 'translateY(0)', 
						opacity: '1' 
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
