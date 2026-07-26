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
			fontFamily: {
				'fredoka': ['Fredoka', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					soft: 'hsl(var(--surface-soft))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					soft: 'hsl(var(--primary-soft))',
					glow: 'hsl(var(--primary-glow))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					soft: 'hsl(var(--secondary-soft))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					soft: 'hsl(var(--accent-soft))',
				},
				// Fun colors for variety
				purple: 'hsl(var(--purple))',
				orange: 'hsl(var(--orange))',
				pink: 'hsl(var(--pink))',
				lime: 'hsl(var(--lime))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))',
					hover: 'hsl(var(--card-hover))',
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))',
				},
				selected: 'hsl(var(--selected))',
				hover: 'hsl(var(--hover))',
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				info: 'hsl(var(--info))',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-soft': 'var(--gradient-soft)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'card': 'var(--shadow-card)',
				'button': 'var(--shadow-button)',
				'glow': 'var(--shadow-glow)',
				'secondary': 'var(--shadow-secondary)',
				'accent': 'var(--shadow-accent)',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'playful': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'ken-burns': {
					'0%, 100%': { transform: 'scale(1) translate(0, 0)' },
					'50%': { transform: 'scale(1.08) translate(-1.5%, -1%)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-8px) rotate(-6deg)' }
				},
				'float-slower': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(6deg)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.15)' }
				},
				'heartbeat': {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.15)' },
					'50%': { transform: 'scale(1)' },
					'75%': { transform: 'scale(1.1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'ken-burns': 'ken-burns 18s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-slower': 'float-slower 7s ease-in-out infinite',
				'sparkle': 'sparkle 2.5s ease-in-out infinite',
				'heartbeat': 'heartbeat 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
