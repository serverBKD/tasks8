import { OrbitronBlackFont } from '../services/fonts/fonts.js'

export default function BoxWord( { Phrase } ) {
	return (
		<section>
			<h2 className={ `${ OrbitronBlackFont.className } box-phrase` }>
				{ Phrase }
			</h2>
		</section>
	)
}
