'use client'
import { OrbitronBlackFont } from '../services/fonts/fonts.js'
import BoxInput from '../componentes/box-input.jsx'
import ToggleTheme from '../componentes/toggle-theme.jsx'
import Footer from '../componentes/footer.jsx'
import { Toaster } from 'sonner'

const Page = () => {
	return (
		<section className={ `${ OrbitronBlackFont.className } box-page` }>
			<Toaster />
			<ToggleTheme />
			<h1 className='h1'>Tasks Manager</h1>
			<BoxInput />
			<Footer />
		</section>
	)
}

export default Page
