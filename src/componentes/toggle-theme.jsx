'use client'
import { useState, useEffect } from 'react'

export default function ToggleTheme() {
	const [theme, setTheme] = useState('dark')

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme) {
			setTheme(storedTheme)
		}
	}, [])

	const HandleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	return (
		<section className='theme-toggle'>
			<button onClick={HandleTheme}>
				<span className='text-2xl'>
					{theme === 'dark' ? '🌙' : '☀️'}
				</span>
			</button>
		</section>
	)
}
