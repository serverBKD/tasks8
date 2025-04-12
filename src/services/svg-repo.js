//. export const SVG123 = () => ()

export const SVGStarLike = ({ pulsed }) => (
	<svg
		className={`${pulsed ? 'text-gray-600' : 'text-yellow-400'} w-4 h-4 `}
		aria-hidden='true'
		xmlns='http://www.w3.org/2000/svg'
		fill='currentColor'
		viewBox='0 0 22 20'
	>
		<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
	</svg>
)

export const SVGmercadolibre = () => (
	<svg xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m1378.1 1504.2h1.4v28h-5.3v-24.6c0-.8 1.7-3.4 3.9-3.4zm29 6.2c-2.6 0-4.6 1.1-6 3.3v-9.5h-.6c-2.6 0-4 1.4-4.7 2.6v-.2 16.1c0 6.3 3.3 9.5 9.9 9.5 6.6-.1 9.8-3.7 9.8-10.7 0-7.3-2.8-10.9-8.4-11.1zm-1.6 17.2c-3 0-4.5-2.2-4.4-6.4.2-4.1 1.6-6.1 4.5-6.1s4.3 2 4.5 6.1c0 4.3-1.6 6.4-4.6 6.4zm13.1-6.4c.2-6.8 3.5-10.6 10.6-10.6h1.6v5.5h-2.5c-3 0-4.3 1.9-4.3 5v11h-5.4zm20.6 5.5c.9.8 2.1 1.2 3.7 1.2 1.1 0 2.1-.3 2.9-.9s1.3-1.2 1.5-1.8h5c-.8 2.5-2 4.2-3.7 5.3s-3.6 1.6-6 1.6c-1.6 0-3.1-.3-4.4-.8s-2.4-1.3-3.3-2.2c-.9-1-1.6-2.1-2.1-3.4s-.7-2.8-.7-4.4c0-1.5.3-3 .8-4.3s1.2-2.5 2.1-3.4c.9-1 2-1.7 3.3-2.3s2.7-.8 4.3-.8c1.7 0 3.3.3 4.6 1s2.4 1.6 3.2 2.7 1.4 2.4 1.8 3.9c.4 1.4.5 3 .4 4.6h-14.9c.2 1.9.7 3.2 1.5 4zm6.4-10.8c-.7-.7-1.7-1.1-3.1-1.1-.9 0-1.7.2-2.3.5s-1.1.7-1.4 1.1c-.4.5-.6.9-.8 1.4s-.2 1-.3 1.4h9.2c-.1-1.5-.6-2.6-1.3-3.3zm-60.4-11.7h5.3v4.8h-5.3zm0 7.2h5.3v20.7h-5.3zm96.7-18.3c-.9 1-2.1 1.6-3.6 1.6s-2.7-.6-3.6-1.6-1.2-2.7-1.2-4.7c0-2.1.4-3.6 1.2-4.6.9-1 2.1-1.6 3.6-1.6s2.7.6 3.6 1.6 1.2 2.7 1.2 4.6-.3 3.5-1.2 4.7zm4.2-12.4c-1.6-2.1-4.3-3.3-7.8-3.3-3.4 0-6.2 1-7.8 3.3-1.6 2.1-2.6 4.7-2.6 7.6 0 3 .9 5.6 2.6 7.6 1.6 2.1 4.3 3.2 7.8 3.2 3.4 0 6.2-1 7.8-3.2 1.6-2.1 2.6-4.7 2.6-7.6.1-2.8-.8-5.4-2.6-7.6m-26 12.4c-.7 1-1.9 1.6-3.4 1.6s-2.7-.6-3.3-1.6c-.7-1.2-1-2.7-1-4.7 0-1.8.3-3.2 1-4.3.7-1.2 1.8-1.8 3.4-1.8 1 0 1.9.3 2.7.9 1.2 1 1.9 3 1.9 5.6-.3 1.8-.5 3.3-1.3 4.3zm6.2-21.8s-5.4-.6-5.4 3.7v5.7c-.6-.9-1.3-1.6-2.4-2.3-.9-.6-2.1-.7-3.3-.7-2.7 0-4.8 1-6.5 3-1.6 1.9-2.4 4.8-2.4 8.4 0 3 .7 5.6 2.4 7.3 1.6 1.9 4.8 2.7 7.6 2.7 9.9 0 9.7-8.4 9.7-8.4zm-26.6 19.3c0 1.8-.6 3-1.5 3.7-1 .6-2.1 1-3.2 1-.7 0-1.3-.1-1.8-.6s-.7-1-.7-1.9c0-1 .4-1.8 1.2-2.3.4-.3 1.3-.6 2.4-.7l1.2-.3c.6-.1 1-.3 1.5-.3.3-.1.7-.3 1-.4zm2.7-11.7c-1.8-.9-3.7-1.3-6-1.3-3.4 0-5.9.9-7.3 2.7-.9 1.2-1.3 2.6-1.5 4.3h5.1c.1-.7.4-1.3.7-1.8.6-.6 1.5-.9 2.7-.9s1.9.1 2.6.4c.6.3.9.9.9 1.8 0 .7-.4 1.2-1.2 1.5-.4.1-1.2.3-2.1.4l-1.8.1c-2.1.3-3.6.7-4.7 1.3-1.9 1-2.9 3-2.9 5.4 0 1.9.6 3.4 1.8 4.5 1.2 1 2.7 1.5 4.6 1.6 11.7.4 11.6-6.2 11.6-7.5v-7.6c.1-2.2-.7-4-2.5-4.9m-26.5 3.3c1.3 0 2.3.4 3 1.2.4.6.7 1.3.7 2.1h5.7c-.3-2.9-1.3-5-3-6-1.6-1.2-3.9-1.6-6.6-1.6-3.2 0-5.7.9-7.5 2.9s-2.7 4.7-2.7 8.1c0 3.2.7 5.6 2.4 7.5 1.6 1.9 4.2 2.9 7.6 2.9s6-1.2 7.8-3.4c1-1.5 1.6-3 1.8-4.7h-5.7c-.1 1-.4 1.9-1 2.6-.6.6-1.5 1-2.9 1-1.8 0-3.2-.9-3.7-2.6-.3-.9-.6-2.1-.6-3.6s.1-2.9.6-3.7c.9-1.8 2.1-2.7 4.1-2.7m-11.9-4.5c-11.9 0-11.1 10.5-11.1 10.5v10.6h5.4v-9.9c0-1.6.1-2.9.6-3.6.7-1.3 2.1-2.1 4.3-2.1h.6c.3 0 .6 0 .9.1v-5.4h-.4c-.1-.2-.1-.2-.3-.2m-26.8 5.5c.7-.7 1.8-1.2 3.2-1.2 1.2 0 2.3.3 3.2 1s1.3 1.8 1.3 3.2h-9.2c.3-1.2.7-2.2 1.5-3zm7.2 9.9c-.1.3-.4.6-.7.7-.7.6-1.8.7-3 .7s-2.1-.1-2.9-.7c-1.3-.7-2.1-2.3-2.1-4.2h14.8c0-1.8 0-3.2-.1-4-.3-1.6-.7-3-1.6-4.2-.9-1.3-2.1-2.4-3.4-3s-3-.9-4.8-.9c-3 0-5.4.9-7.2 2.9-1.8 1.9-2.9 4.6-2.9 8.1 0 3.7 1 6.5 3.2 8.1 2.1 1.6 4.5 2.6 7.2 2.6 3.3 0 5.9-1 7.6-3 1-1 1.6-2.1 1.8-3.2zm-16.2 5.6h-5v-12.3c0-1.2-.3-3.7-3.6-3.7-2.1 0-3.7 1.5-3.7 3.7v12.3h-5v-12.3c0-1.2-.3-3.7-3.6-3.7-2.1 0-3.6 1.5-3.6 3.7v12.3h-5v-12.2c0-5.1 3.3-9 8.5-9 2.6 0 4.7 1 6.2 2.9 1.5-1.8 3.6-2.9 6.2-2.9 5.4 0 8.5 3.7 8.5 9zm93.3-71.2c0-17.1-21.3-31.1-47.6-31.1s-47.6 14-47.6 31.1v1.8c0 18.2 18.6 32.9 47.6 32.9 29.1 0 47.6-14.7 47.6-32.9z'
			fill='#2d3277'
		/>
		<path
			d='m1459.8 1427.5c0 16.1-20.5 29.2-45.7 29.2s-45.7-13.1-45.7-29.2 20.5-29.2 45.7-29.2 45.7 13.1 45.7 29.2z'
			fill='#ffe600'
		/>
		<g fill='#fff'>
			<path d='m1398.9 1418.3s-.5.5-.2.9c.7.9 2.9 1.4 5.2.9 1.3-.3 3.1-1.7 4.7-3 1.8-1.4 3.6-2.9 5.4-3.4 1.9-.6 3.1-.3 3.9-.1.9.3 1.9.9 3.6 2.1 3.1 2.3 15.7 13.3 17.9 15.2 1.7-.8 9.5-4.1 20.1-6.5-.9-5.6-4.3-10.8-9.5-15-7.2 3-16.1 4.6-24.8.4 0 0-4.7-2.2-9.4-2.1-6.9.2-9.8 3.1-13 6.3z' />
			<path d='m1438.9 1432.1c-.1-.1-14.8-12.9-18.1-15.4-1.9-1.4-3-1.8-4.1-2-.6-.1-1.4 0-2 .2-1.5.4-3.6 1.8-5.4 3.2-1.9 1.5-3.6 2.9-5.2 3.2-2.1.5-4.6-.1-5.7-.9-.5-.3-.8-.7-1-1.1-.4-1 .4-1.8.5-1.9l4-4.4 1.4-1.4c-1.3.2-2.5.5-3.7.8-1.5.4-2.9.8-4.3.8-.6 0-3.8-.5-4.4-.7-3.7-1-6.9-2-11.7-4.2-5.7 4.3-9.6 9.6-10.7 15.5.8.2 2.2.6 2.7.7 13 2.9 17 5.9 17.8 6.5.8-.9 1.9-1.4 3.2-1.4 1.4 0 2.7.7 3.5 1.8.7-.6 1.8-1.1 3.1-1.1.6 0 1.2.1 1.9.3 1.5.5 2.2 1.5 2.6 2.4.5-.2 1.1-.4 1.8-.4s1.4.2 2.2.5c2.4 1 2.8 3.4 2.6 5.2h.5c2.9 0 5.2 2.3 5.2 5.2 0 .9-.2 1.7-.6 2.4.8.4 2.7 1.4 4.5 1.2 1.4-.2 1.9-.6 2.1-.9.1-.2.3-.4.1-.6l-3.7-4.1s-.6-.6-.4-.8.6.1.9.3c1.9 1.6 4.1 3.9 4.1 3.9s.2.3 1 .5c.7.1 2 0 2.9-.7.2-.2.5-.4.6-.6.9-1.2-.1-2.4-.1-2.4l-4.3-4.8s-.6-.6-.4-.8.6.1.9.3c1.4 1.1 3.3 3.1 5.1 4.9.4.3 2 1.3 4.1-.1 1.3-.9 1.6-1.9 1.5-2.7-.1-1-.9-1.8-.9-1.8l-5.8-5.9s-.6-.5-.4-.8c.2-.2.6.1.9.3 1.9 1.6 6.9 6.2 6.9 6.2.1 0 1.8 1.3 4-.1.8-.5 1.3-1.2 1.3-2.1.1-1.3-1-2.2-1-2.2z' />
			<path d='m1410.6 1439.6c-.9 0-1.9.5-2 .5s0-.4.1-.6 1.3-3.8-1.6-5.1c-2.2-1-3.6.1-4 .6-.1.1-.2.1-.2 0 0-.6-.3-2.4-2.3-3-2.8-.9-4.5 1.1-5 1.8-.2-1.6-1.5-2.8-3.2-2.8-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c.9 0 1.6-.3 2.2-.9v.1c-.1.8-.4 3.7 2.6 4.8 1.2.5 2.2.1 3.1-.5.3-.2.3-.1.3.1-.1.7 0 2.3 2.3 3.2 1.7.7 2.7 0 3.3-.6.3-.3.4-.2.4.2.1 2.1 1.9 3.8 4 3.8 2.2 0 4-1.8 4-4s-1.8-4-4-4z' />
		</g>
		<path
			d='m1439.5 1430.6c-4.5-3.9-14.9-13-17.8-15.1-1.6-1.2-2.7-1.9-3.7-2.1-.4-.1-1-.3-1.8-.3-.7 0-1.5.1-2.3.4-1.8.6-3.6 2-5.4 3.4l-.1.1c-1.6 1.3-3.3 2.6-4.6 2.9-.6.1-1.1.2-1.7.2-1.4 0-2.7-.4-3.2-1-.1-.1 0-.3.2-.5l4-4.3c3.1-3.1 6-6 12.8-6.2h.3c4.2 0 8.4 1.9 8.9 2.1 4 1.9 8 2.9 12.1 2.9 4.3 0 8.7-1.1 13.3-3.2-.5-.4-1.1-.9-1.6-1.3-4.1 1.8-7.9 2.6-11.7 2.6s-7.6-.9-11.3-2.7c-.2-.1-4.8-2.3-9.7-2.3h-.4c-5.7.1-8.9 2.1-11 3.9-2.1 0-3.9.6-5.5 1-1.4.4-2.7.7-3.9.7h-1.5c-1.4 0-8.4-1.7-13.9-3.9-.6.4-1.1.8-1.7 1.2 5.8 2.4 12.9 4.2 15.1 4.4.6 0 1.3.1 2 .1 1.5 0 2.9-.4 4.4-.8.9-.2 1.8-.5 2.7-.7l-.8.8-4 4.4c-.3.3-1 1.2-.6 2.2.2.4.6.8 1.1 1.2 1 .6 2.7 1.1 4.3 1.1.6 0 1.2-.1 1.7-.2 1.7-.4 3.5-1.8 5.3-3.3 1.5-1.2 3.6-2.7 5.2-3.2.5-.1 1-.2 1.5-.2h.4c1.1.1 2.1.5 4 1.9 3.3 2.5 18 15.3 18.1 15.4 0 0 .9.8.9 2.2 0 .7-.5 1.4-1.2 1.9-.6.4-1.3.6-1.9.6-1 0-1.7-.5-1.7-.5s-5.1-4.6-6.9-6.2c-.3-.3-.6-.5-.9-.5-.2 0-.3.1-.4.2-.3.4 0 .9.4 1.2l5.9 5.9s.7.7.8 1.6c0 1-.4 1.8-1.4 2.4-.7.5-1.4.7-2.1.7-.9 0-1.5-.4-1.7-.5l-.9-.8c-1.5-1.5-3.1-3.1-4.3-4-.3-.2-.6-.5-.9-.5-.1 0-.3 0-.4.2-.1.1-.2.4.1.9.1.2.3.3.3.3l4.3 4.8s.9 1.1.1 2l-.2.2-.4.4c-.7.6-1.7.7-2.1.7h-.6c-.4-.1-.7-.2-.9-.4-.2-.3-2.4-2.4-4.2-3.9-.2-.2-.5-.4-.8-.4-.1 0-.3.1-.4.2-.3.4.2 1 .4 1.2l3.7 4s0 .1-.1.3-.6.6-1.9.8h-.5c-1.4 0-2.8-.7-3.6-1.1.3-.7.5-1.5.5-2.3 0-3-2.4-5.4-5.4-5.4h-.2c.1-1.4-.1-4-2.8-5.1-.8-.3-1.5-.5-2.3-.5-.6 0-1.1.1-1.7.3-.6-1.1-1.5-1.9-2.7-2.3-.7-.2-1.3-.3-2-.3-1.1 0-2.1.3-3 1a4.6 4.6 0 0 0 -3.6-1.7c-1.2 0-2.4.5-3.2 1.3-1.1-.9-5.6-3.7-17.7-6.5-.6-.1-1.9-.5-2.7-.8-.1.6-.2 1.3-.3 2 0 0 2.2.5 2.7.6 12.3 2.7 16.4 5.6 17.1 6.1-.2.6-.3 1.2-.3 1.8 0 2.6 2.1 4.6 4.6 4.6.3 0 .6 0 .9-.1.4 1.9 1.6 3.3 3.5 4 .6.2 1.1.3 1.6.3.3 0 .7 0 1.1-.1.3.9 1.1 2 2.9 2.7.6.3 1.2.4 1.8.4.5 0 1-.1 1.4-.3.8 2 2.8 3.4 5 3.4 1.5 0 2.9-.6 3.9-1.7.9.5 2.7 1.4 4.6 1.4h.7c1.9-.2 2.7-1 3.1-1.5.1-.1.1-.2.2-.3.4.1.9.2 1.5.2 1 0 2-.3 3-1.1 1-.7 1.7-1.7 1.7-2.6.3.1.7.1 1 .1 1 0 2.1-.3 3.1-1 1.9-1.2 2.2-2.9 2.2-3.9.3.1.7.1 1 .1 1 0 2-.3 2.9-.9 1.2-.8 1.9-1.9 2-3.2.1-.9-.2-1.8-.6-2.6 3.2-1.4 10.4-4 19-6 0-.7-.1-1.3-.3-2-10.3 2.2-18 5.5-19.9 6.4zm-28.9 16.7c-2 0-3.6-1.6-3.7-3.6 0-.2 0-.6-.4-.6-.2 0-.3.1-.5.2-.4.4-1 .8-1.8.8-.4 0-.8-.1-1.2-.3-2.1-.9-2.2-2.3-2.1-2.9 0-.2 0-.3-.1-.4l-.1-.1h-.1c-.1 0-.2 0-.4.2-.6.4-1.2.6-1.8.6-.3 0-.7-.1-1-.2-2.8-1.1-2.6-3.7-2.4-4.5 0-.2 0-.3-.1-.4l-.2-.2-.2.2c-.6.5-1.3.8-2 .8-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9c1.4 0 2.7 1.1 2.9 2.5l.1.8.4-.7c0-.1 1.2-1.9 3.4-1.8.4 0 .8.1 1.3.2 1.7.5 2 2.1 2 2.7 0 .4.3.4.3.4.1 0 .3-.1.3-.2.3-.3 1-.9 2.1-.9.5 0 1 .1 1.6.4 2.7 1.2 1.5 4.6 1.5 4.7-.2.6-.3.8 0 1h.2c.1 0 .3 0 .5-.1.4-.1.9-.3 1.4-.3 2 0 3.7 1.7 3.7 3.7.1 2.2-1.6 3.8-3.6 3.8z'
			fill='#2d3277'
		/>
	</svg>
)

export const SVGheart = () => (
	<svg
		fill='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-5 h-5'
		viewBox='0 0 24 24'
	>
		<path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
	</svg>
)

export const SVGpdf = () => (
	<svg
		height='164px'
		width='164px'
		fill='#ffff00'
		viewBox='0 0 480 480'
	>
		<g>
			<path
				class='st0'
				d='M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314add3.176v265.514
		c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z
		 M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091add60.591h83.716
		c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z'
			/>
			<path
				class='st0'
				d='M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599
		c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612
		C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23
		c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z'
			/>
			<path
				class='st0'
				d='M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868
		c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856
		C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23
		c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46
		c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z'
			/>
			<path
				class='st0'
				d='M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599
		c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56
		c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733
		c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z'
			/>
		</g>
	</svg>
)

export const SVGplaceholder = () => (
	<svg
		fill='#'
		width='480px'
		height='480px'
		viewBox='0 0 100 100'
	>
		<path
			d='M50.08,57.86a6.77,6.77,0,1,1,6.63-6.77A6.71,6.71,0,0,1,50.08,57.86Z'
			fillRule='evenodd'
			id='path1'
		/>
		<path
			d='M 75.22,46.64 V 26.7 C 75.166439,23.025986 72.203929,20.059048 68.53,20 H 31.47 c -3.677757,0.05918 -6.641794,3.032083 -6.69,6.71 v 19.93 l 0,6.71 V 73.3 c 0.05356,3.674014 3.016071,6.640952 6.69,6.7 h 37.06 c 3.677757,-0.05918 6.641794,-3.032083 6.69,-6.71 V 53.36 Z m -8.5,12.8 -1.17,2 c -0.480699,0.722488 -1.282533,1.166294 -2.15,1.19 -0.302218,-0.01865 -0.59941,-0.08619 -0.88,-0.2 L 59.3,61.14 c -1.362231,1.227516 -2.952338,2.175465 -4.68,2.79 L 54,67.6 c -0.206246,1.192024 -1.230442,2.069307 -2.44,2.09 h -2.4 c -1.209558,-0.02069 -2.233754,-0.897976 -2.44,-2.09 l -0.59,-3.68 c -1.666572,-0.527982 -3.198561,-1.411691 -4.49,-2.59 l -3.41,1.29 c -0.28059,0.11381 -0.577782,0.181354 -0.88,0.2 -0.894325,-0.01967 -1.711785,-0.510146 -2.15,-1.29 L 34,59.44 c -0.604913,-1.065381 -0.355953,-2.411456 0.59,-3.19 l 2.83,-2.39 c -0.187719,-0.884499 -0.284886,-1.785815 -0.29,-2.69 0.0053,-0.871128 0.10255,-1.739262 0.29,-2.59 L 34.63,46.2 C 33.657351,45.436023 33.389528,44.075653 34,43 l 1.17,-2.09 c 0.420673,-0.796682 1.249082,-1.293727 2.15,-1.29 0.302218,0.01865 0.59941,0.08619 0.88,0.2 l 3.41,1.29 c 1.312527,-1.173302 2.836281,-2.086197 4.49,-2.69 L 46.72,35 c 0.174067,-1.197163 1.231958,-2.064287 2.44,-2 h 2.44 c 1.143855,-0.05034 2.157498,0.731014 2.4,1.85 l 0.59,3.58 c 1.657929,0.558 3.192639,1.430611 4.52,2.57 l 3.41,-1.29 c 0.28059,-0.11381 0.577782,-0.181354 0.88,-0.2 0.894325,0.01967 1.711785,0.510146 2.15,1.29 l 1.17,2.09 c 0.55321,1.073547 0.310591,2.385337 -0.59,3.19 l -2.83,2.39 c 0.193012,0.883647 0.29024,1.78552 0.29,2.69 -0.0053,0.871128 -0.10255,1.739262 -0.29,2.59 l 2.83,2.39 c 0.963074,0.8159 1.210703,2.20094 0.59,3.3 z'
			fillRule='evenodd'
			id='path2'
		/>
	</svg>
)

export const SVGChecker = () => (
	<svg
		width='800px'
		height='800px'
		viewBox='0 0 16 16'
		version='1.1'
	>
		<path
			fill='#444'
			d='M7.3 14.2l-7.1-5.2 1.7-2.4 4.8 3.5 6.6-8.5 2.3 1.8z'
		></path>
	</svg>
)

export const SVGresources = () => (
	<svg
		fill='#000000'
		width='800px'
		height='800px'
		viewBox='0 0 100 100'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M43.85,45.44a6,6,0,1,0,12.07,0,6,6,0,1,0-12.07,0Z'
			fillRule='evenodd'
		/>
		<path
			d='M49.91,20A25.4,25.4,0,1,0,75.09,45.5C75.09,31.71,63.85,20,49.91,20ZM66.49,53.69l-1.16,1.93a2.66,2.66,0,0,1-2.13,1.16,2.82,2.82,0,0,1-.87-.19l-3.19-1.26A14,14,0,0,1,54.49,58l-.58,3.58a2.48,2.48,0,0,1-2.42,2H49.08a2.48,2.48,0,0,1-2.42-2L46.08,58a12,12,0,0,1-4.45-2.51l-3.38,1.26a2.82,2.82,0,0,1-.87.19,2.52,2.52,0,0,1-2.13-1.26l-1.16-2a2.41,2.41,0,0,1,.58-3.09l2.8-2.32a12.69,12.69,0,0,1-.29-2.61,11.81,11.81,0,0,1,.29-2.51l-2.8-2.32a2.39,2.39,0,0,1-.58-3.09l1.16-2a2.4,2.4,0,0,1,2.13-1.26,2.82,2.82,0,0,1,.87.19l3.38,1.26a13.82,13.82,0,0,1,4.45-2.61l.58-3.38A2.31,2.31,0,0,1,49.08,28H51.5a2.32,2.32,0,0,1,2.42,1.84l.58,3.48a13.55,13.55,0,0,1,4.45,2.51l3.38-1.26a2.82,2.82,0,0,1,.87-.19,2.52,2.52,0,0,1,2.13,1.26l1.16,2a2.53,2.53,0,0,1-.58,3.09l-2.8,2.32a12,12,0,0,1,.29,2.61,11.81,11.81,0,0,1-.29,2.51l2.8,2.32A2.52,2.52,0,0,1,66.49,53.69Z'
			fillRule='evenodd'
		/>
		<path
			d='M26,64.21H24.73A4.75,4.75,0,0,0,20,68.95v6.31A4.74,4.74,0,0,0,24.73,80H75.27A4.75,4.75,0,0,0,80,75.26V68.95a4.74,4.74,0,0,0-4.73-4.74H73.73a30.15,30.15,0,0,1-47.72,0Z'
			fillRule='evenodd'
		/>
	</svg>
)

export const SVGBells = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='m-auto h-5 w-5 text-gray-600 dark:text-gray-300'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
	</svg>
)

export const SVGMessages = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='m-auto h-5 w-5 text-gray-600 dark:text-gray-300'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
		/>
	</svg>
)

export const SVGLogo = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		width={72}
		height={72}
		className='w-128 h-128 bg-black object-center object-cover'
		{...props}
	>
		<defs>
			<linearGradient
				xlinkHref='#a'
				id='at'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bL'
				x1={-1383.938}
				x2={-408.512}
				y1={2797.057}
				y2={2797.057}
				gradientTransform='matrix(12.5263 -4.90215 -5.6705 -10.829 33538.517 30917.593)'
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient id='a'>
				<stop
					offset={0}
					style={{
						stopColor: '#00f9ff',
						stopOpacity: 1,
					}}
				/>
				<stop
					offset={1}
					style={{
						stopColor: '#ff37ef',
						stopOpacity: 1,
					}}
				/>
			</linearGradient>
			<linearGradient
				xlinkHref='#a'
				id='bK'
				x1={-1383.938}
				x2={-408.512}
				y1={2797.057}
				y2={2797.057}
				gradientTransform='matrix(12.81567 4.5179 4.8435 -11.00906 5112.985 39825.347)'
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='d'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='e'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='f'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='g'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='h'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='i'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='j'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='k'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='l'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='m'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='n'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='o'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='p'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='q'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='r'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='s'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='t'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='u'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='v'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='w'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='x'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='y'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='z'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='A'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='B'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='C'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='D'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='E'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='F'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='G'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='H'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='I'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='J'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='K'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='L'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='M'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='N'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='O'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='P'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='Q'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='R'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='S'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='T'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='U'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='V'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='W'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='X'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='Y'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='Z'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aa'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ab'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ac'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ad'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ae'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='af'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ag'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ah'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ai'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aj'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ak'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='al'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='am'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='an'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ao'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ap'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aq'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ar'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='as'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bJ'
				x1={-1383.938}
				x2={-408.512}
				y1={2797.057}
				y2={2797.057}
				gradientTransform='rotate(-17.601 -86036.074 -36247.82) scale(11.41164)'
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='au'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='av'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aw'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ax'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ay'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='az'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aA'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aB'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aC'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aD'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aE'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aF'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aG'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aH'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aI'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aJ'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aK'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aL'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aM'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aN'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aO'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aP'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aQ'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aR'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aS'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aT'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aU'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aV'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aW'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aX'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aY'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='aZ'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='ba'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bb'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bc'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bd'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='be'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bf'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bg'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bh'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bi'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bj'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bk'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bl'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bm'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bn'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bo'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bp'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bq'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='br'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bs'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bt'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bu'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bv'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bw'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bx'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='by'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bz'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bA'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bB'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bC'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bD'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bE'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bF'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bG'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bH'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='bI'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<linearGradient
				xlinkHref='#a'
				id='c'
				x1={371.383}
				x2={12169.477}
				y1={6150.89}
				y2={6150.89}
				gradientUnits='userSpaceOnUse'
			/>
			<path
				id='b'
				d='M-670.518 1266.202h287.495add44.058h-287.495z'
			/>
			<path
				id='bM'
				d='M166.699 75.616h623.833add82.166H166.699z'
			/>
		</defs>
		<path
			d='M3628 1270.308C3800.762 2743.865 1514.207 3749.95 1514.207 3749.95'
			style={{
				fill: 'none',
				stroke: '#000',
				strokeWidth: '.264583px',
				strokeLinecap: 'butt',
				strokeLinejoin: 'miter',
				strokeOpacity: 1,
			}}
			transform='translate(-7.56 -12.09)'
		/>
		<text
			xmlSpace='preserve'
			style={{
				fontStyle: 'normal',
				fontVariant: 'normal',
				fontWeight: 400,
				fontStretch: 'normal',
				fontSize: '38.6667px',
				lineHeight: 1.25,
				fontFamily: 'Michroma',
				InkscapeFontSpecification: 'Michroma',
				whiteSpace: 'pre',
				shapeInside: 'url(#b)',
				display: 'inline',
				fill: 'url(#linearGradient6303)',
				fillOpacity: 1,
			}}
			transform='matrix(3.52014 0 0 2.5252 2466.48 -2255.976)'
		>
			<tspan
				x={-670.518}
				y={1302.48}
			>
				{'erotika1ve'}
			</tspan>
		</text>
		<g
			style={{
				fill: 'url(#c)',
				fillOpacity: 1,
			}}
			transform='matrix(.0194 -.00284 -.00501 -.01138 430.774 766.985)'
		>
			<path
				d='M5667 11403c-15-53-16-72-6-79 6-3 18 0 26 9 12 12 22 12 51 4 27-9 36-9 40 1 2 7 10 12 17 12s16 7 19 15c7 19-23 33-33 16-11-18-68-2-74 20-6 24-34 25-40 2z'
				style={{
					fill: 'url(#d)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5525 11389c-4-5 0-18 9-28s16-23 16-30c0-22 23-6 33 23 5 15 7 29 6 30-13 11-59 14-64 5z'
				style={{
					fill: 'url(#e)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5290 11362c0-4-10-12-22-17-13-6-32-27-43-47-17-32-18-41-7-58 13-22 6-70-10-70-6 0-7 11-4 26 7 26 6 26-26 20-18-3-36-13-41-21-4-9-13-12-19-9-6 4-14 1-18-6-10-16-70-3-70 15 0 26-20 26-32 1-6-14-17-26-25-26-7 0-13-4-13-8 0-5-16-14-35-22s-35-17-35-22c0-4-12-8-26-8-21 0-25 3-19 18 20 46 18 61-10 72-30 11-45 6-45-16 0-8-8-14-17-15-15 0-14-3 5-16 37-26 27-108-15-116-23-4-24-3-18 34 4 26 3 39-4 39-6 0-11 6-11 14 0 19-46 29-68 15-23-14-41-72-30-93 11-19-1-88-13-80-5 2-19-2-31-10-24-16-68-12-68 6 0 5 9 12 20 15 14 4 20 14 20 35 0 46-25 31-46-27-6-18-8-18-11-2-3 10-14 17-29 17-14 0-24 6-24 15s6 12 17 8 14-3 9 5c-9 14-52 16-61 2-3-5-12-7-19-4-9 3-15-6-19-25-5-22-11-29-22-25-8 3-15 1-15-5s-7-11-15-11-15-4-15-10c0-5-13-10-30-10-16 0-30-4-30-9s-9-11-20-14-20-10-20-16 9-11 20-11 20 7 20 15c0 19 24 20 39 1 15-18 5-43-20-49-10-3-19-14-19-25 0-10-11-31-24-45-22-24-27-25-62-15-28 7-39 7-42-1-7-20-20-12-15 9 4 17 13 20 47 18 38-3 41-1 44 25 3 22-1 27-18 27-23 0-24 4-4 84 5 21 3 31-10 38-9 5-14 13-11 17 9 15-39 21-67 8-15-6-29-21-30-32-2-11-9-20-17-20-16 0-39-55-40-95-1-14-12-33-28-46-30-24-26-54 8-54 19 0 21-4 15-39-7-47 9-63 30-32 12 16 21 20 42 15 34-9 34-8 26-28-4-10-15-16-27-14-22 3-38-20-51-74-5-23-1-29 31-45 20-10 39-25 41-33 3-12 2-12-6-2-7 11-10 11-16-3-3-9-14-15-23-13-10 1-24-1-32-6-11-7-13-3-8 22 4 18 3 32-2 32-14 0-23 63-10 71 8 4 8 9 1 13-12 7-32-23-32-47 0-21-23-37-39-27-9 5-12 17-8 31 3 13 2 28-3 35-14 16-1 74 16 74 8 0 14 7 14 15 0 9-21 20-55 30-70 21-109 7-126-42-17-51-54-44-39 8 9 30-5 52-16 25-9-22-22-20-26 4-3 19-5 19-36-10-25-23-39-29-58-24-14 4-24 2-24-5 0-6-11-11-24-11-35 0-40-15-11-28 25-11 36-39 13-29-7 3-21 8-30 12-11 4-18 3-18-4 0-6 5-11 10-11 6 0 10-6 10-14 0-18 75-37 89-23 6 6 11 17 11 25 0 10 8 12 30 7 19-4 30-3 30 4 0 6 9 11 20 11 13 0 20-7 20-20 0-11-7-20-15-20s-15-9-15-20c0-13-7-20-19-20-23 0-31-31-27-106 4-59 11-75 31-67 8 3 15 1 15-5 0-9-37-25-52-23-5 1-8-3-8-9 0-5-5-10-11-10-7 0-9 9-6 21 4 16-4 30-29 55l-36 33 28-2c23-2 29 3 36 32 11 40-1 56-49 66-26 5-33 3-33-8 0-8 7-17 15-21 13-5 13-9 3-26-18-28-29-25-26 8 2 21-2 28-19 30-13 2-20 8-17 16s-6 18-25 24c-26 9-33 7-56-14-34-31-38-30-30 5 7 35-12 52-30 28-7-10-17-17-24-17-13 0-15-27-1-32 5-1 7-13 3-26-4-15-11-21-20-17-11 3-13 1-9-10 3-9 0-15-10-15-8 0-13 4-10 9 8 12-21 34-34 26-5-3-10-19-10-35 0-24-6-32-35-44-36-15-44-33-23-54 16-16 8-15-36 3-30 13-36 20-31 35 4 14 2 20-9 20-8 0-20-16-26-35s-18-35-26-35-14-5-14-10c0-6 3-9 8-8 4 2 7-1 7-7 0-5-2-9-5-8s-12 4-21 8c-12 4-18-1-23-19-3-14-13-26-21-26s-15-5-15-11-7-9-15-5c-16 6-39-28-32-47 2-7 1-22-4-34-7-19-14-22-37-17-27 6-30 4-36-33-10-63-17-68-71-53-38 11-48 11-55 0-5-8-17-10-34-6-19 5-26 3-26-9 0-8-7-15-15-15s-15-4-15-8c0-5-16-14-35-22s-35-18-35-23-7-7-15-4c-16 7-20 3-29-35-5-22-3-28 10-28 11 0 14-5 10-16-3-9-6-18-6-20s-18-1-39 2c-34 5-40 3-46-15-5-17-14-21-46-21-36 0-41-3-55-35-14-34-29-51-17-18 5 14 1 15-27 10-18-4-36-7-41-7s-9-9-9-21-8-23-20-26c-11-3-20-9-20-14s-6-9-14-9-17-6-19-12c-4-10-8-9-17 2-9 12-13 12-17 2-3-9-16-11-40-6-29 6-35 3-40-15-3-12-13-21-24-21-10 0-27-9-37-21-15-15-26-18-47-13-27 7-28 6-21-30 7-34-5-49-19-26-10 16-35-8-28-26 3-9-1-14-12-14s-15 5-11 15c3 9 0 15-8 15-15 0-38-24-31-32 3-3-8-8-25-11-37-8-60-48-40-72 11-13 8-16-18-21-25-5-31-12-37-41-5-27-10-33-23-28-44 17-72 18-72 2 0-10-6-14-13-11-9 3-18-9-25-35-10-31-16-38-32-34-27 7-49-39-30-62 11-13 8-15-18-15-40 0-47-29-19-83 12-23 25-44 29-47s6-16 3-28c-2-14 2-25 10-28 7-3 11-12 8-20s1-14 11-14c9 0 13-6 10-15-4-9 3-16 21-21 32-8 54 8 38 28-6 7-9 32-6 56 2 27 0 42-7 42-6 0-8 5-5 10 4 6 11 8 16 5 5-4 9-1 9 4 0 6 8 11 19 11 14 0 21 10 26 36 5 32 9 35 31 31 13-2 29 2 35 9 6 8 20 14 31 14s28 10 37 22c10 12 23 18 29 14 17-10 15-26-3-20-10 4-15 0-15-11 0-9-4-14-9-11s-14-1-21-9-16-12-21-9c-14 9-22-46-10-73 6-14 20-27 31-30s20-12 20-19c0-17-5-17-31-1-17 10-23 9-26-1-3-6-9-9-14-6-6 3-15-8-22-25-6-17-17-31-24-31s-13-4-13-9-3-16-6-25c-4-11 2-19 20-26 33-12 34-24 1-16-28 7-37-7-49-79-6-37-5-38 8-21 14 18 17 18 51 2 42-20 52-16 63 27 7 28 27 42 27 20 0-5 9-18 20-30 14-16 22-19 32-12 7 6 26 8 43 4 27-6 31-10 26-30-3-13-2-27 4-30 5-3 10-11 10-18 0-6-7-1-16 11-8 12-22 22-30 22-9 0-14 7-12 18 5 28-26 19-36-11-8-22-7-30 4-37 13-8 13-10-1-10-26 0-31-29-9-52 11-12 20-30 20-40s5-18 10-18c6 0 10-7 10-15s6-15 13-15 23-11 35-25 29-25 38-25 14-7 12-17c-4-21-28-30-28-10 0 16-27 30-41 21-5-3-16-21-24-40-10-24-18-32-29-28-9 3-24 3-33-1-16-6-16-8 6-26 27-22 47-24 84-6 28 12 36 27 15 27-9 0-9 3-1 11s17 7 34-1c21-12 22-13 5-26-21-15-15-44 8-44 16 0 44-50 38-68-5-17-22-15-22 2 0 8-9 18-20 21-13 4-20 15-20 31 0 31-21 40-59 23-24-11-32-23-42-64-6-27-18-61-25-75-13-24-13-24-14 18 0 36-4 44-26 52-40 15-53 12-60-15-3-14-12-25-19-25-17 0-27-41-13-57 8-10 5-13-16-13-20 0-29-7-37-27-11-27-11-27-19-7-8 21-62 40-81 29-4-3-11-22-15-41-4-23-11-33-19-30-7 2-15-4-18-14-6-24 3-33 20-18 18 15 27 4 14-19-15-29-99-23-123 9-22 29-22 35 2 55 25 22 25 30-1 43-16 9-25 8-39-5-21-19-50-14-50 9 0 9 9 20 20 26 20 11 28 40 11 40-5 0-7 9-4 20s11 20 19 20c16 0 30 48 18 60-5 5-20 11-33 12-19 2-26-3-32-22-7-21-7-19-5 10s6 35 27 36c33 1 69 14 69 25 0 5 7 9 15 9 9 0 20 11 25 25 7 18 16 24 32 22 19-2 24 4 26 26 3 22-1 30-17 34-12 3-21 14-21 24 0 13-7 19-22 19-13 0-33 3-45 6-17 5-23 2-23-10 0-9 5-16 10-16 6 0 10-7 10-15 0-27-15-16-33 25-16 38-42 52-61 33-4-5-26-13-49-18-27-7-45-18-52-32-5-12-17-24-27-26-10-3-18-14-18-25 0-17-5-19-45-14-30 3-45 1-45-7 0-6-7-11-15-11s-15-7-15-15 4-15 10-15c5 0 7-13 4-30-5-24-3-30 10-30s15-4 6-19c-5-11-10-29-10-40 0-13-5-19-14-15-7 3-16-2-20-11-3-9-10-14-15-10-6 3-19-24-29-60-16-52-18-70-9-90 7-14 18-25 26-25s11-6 6-17c-4-10-8-23-9-28-1-6-12-21-24-33-26-26-30-77-7-86 17-6 26 10 29 50 1 22 4 25 28 20 15-3 30-1 33 4 15 24 35 9 35-25 0-30-3-35-24-35-13 0-35-6-49-13-19-10-23-17-15-30 5-9 16-17 23-17 8 0 15-7 15-15s11-17 25-21c14-3 25-12 25-19s20-18 45-25 45-19 45-26c0-8 7-14 15-14s15-8 15-19c0-27 70-38 88-13 16 21 12 68-6 64-9-2-11 4-7 18 4 12 2 20-5 20-8 0-10 8-7 21 3 12-3 36-14 55-23 41-23 45-5 38 8-3 16-18 18-32 2-16 12-31 24-36 12-6 28-25 35-43s16-33 21-33c4 0 8-6 8-13s9-18 20-25 20-18 20-25c0-37 66-107 101-107 5 0 9-6 9-14 0-7 7-19 15-26s12-16 9-21c-6-11 0-13 83-30 44-9 65-18 69-31 3-10 14-18 25-18 12 0 37-18 58-40 38-41 67-51 77-26 8 22 51 47 68 40 9-3 13-10 10-15s2-12 11-15c12-5 14-14 10-34-6-26-3-28 32-34 67-12 70-14 65-45-3-23 0-29 20-34 35-10 38-9 38 13 0 11-4 20-10 20-18 0-11 28 11 44 13 9 19 21 16 30-5 12 0 16 23 16s30-4 30-20c0-27 11-25 35 6 19 25 19 25 27 5 4-12 14-21 22-21 7 0 21-11 30-25 20-30 20-36 1-29-8 4-15 2-15-4 0-5-9-12-20-15s-20-13-20-22-7-24-16-33c-15-14-15-17 0-27 28-21 17-100-15-108-11-3-19-9-18-14 4-21-2-31-18-29-13 1-19-8-21-31-2-20-12-37-28-47-27-18-32-36-9-36 8 0 15-4 15-10s-10-5-25 2c-13 6-22 15-19 20s0 16-7 24c-14 17-14 17 26 30 25 8 31 16 39 56 7 38 6 49-7 63-10 9-17 20-17 25 0 15-39 18-51 4-7-8-20-12-30-9-25 8-24-3 3-24 13-11 17-20 11-24-14-9-63 30-63 49 0 16-21 19-36 4-8-8-20-7-40 0-24 9-31 8-41-6-15-21-17-54-3-54 13 0 11-48-3-77-6-13-16-23-23-23s-14-10-16-22c-2-13-9-22-17-20-7 1-19-2-26-8-17-14-65-2-65 16 0 8-4 14-10 14-18 0-11 20 8 21 10 0 12 3 5 6-17 6-17 27 0 20 48-18 56-17 67 3 8 15 8 25 0 34-14 18-72 29-80 16-4-6-18-6-41 0-26 8-36 7-44-3-5-8-15-12-22-10-17 6-28-57-12-69 10-6 0-8-29-5-31 4-44 1-50-10-5-8-13-14-18-13s-16-19-23-45c-12-37-12-50-3-66 15-23 16-56 2-64-5-3-10-17-10-31 0-13-4-24-10-24-5 0-10 5-10 11s-9 23-19 38c-16 23-18 34-11 67 15 64 13 71-29 88-39 15-40 16-26 43 7 15 16 45 19 66 5 31 3 37-12 37-24 0-62-28-62-46 0-8-4-14-10-14-5 0-10 7-10 15s-7 15-15 15-15-4-15-10c0-5-7-10-15-10-9 0-20-11-25-25-8-21-14-24-35-19-19 5-26 2-32-12-11-31-39-53-61-47-11 2-23 0-26-6-10-15-46-14-47 2-1 6-1 19 0 29 3 28-21 33-41 8l-19-23-29 21c-39 30-48 28-67-13-9-19-20-35-24-35-18 0-39 13-39 25 0 16-33 45-52 45-9 0-18-9-21-20s-12-20-21-20-16-7-16-15c0-9-6-12-15-9-8 4-17-1-21-10-3-9-12-16-20-16s-14-5-14-11c0-5-4-7-10-4-5 3-15-5-22-19-6-14-17-26-25-26-7 0-13-4-13-10 0-5-10-10-22-10s-19-3-16-6 0-28-7-55c-12-45-12-51 3-56 17-6 51-42 52-55 0-4-7-5-15-2-9 4-15 0-15-9 0-10-8-13-25-9-20 3-27-1-35-23-14-36-13-58 4-81 12-16 18-17 34-7 11 6 29 9 41 6s21-1 21 6 8 11 17 9c10-2 18 3 18 12 1 15 23 15 38 1 4-5 5-21 1-36-6-26-9-27-50-21-24 3-44 2-44-3s-12-8-26-8c-15 0-30-6-34-12-4-7-13-11-21-9-9 2-15-8-17-29-2-19 1-33 7-33s11-6 11-14c0-23 22-31 34-14 8 11 21 14 39 11 34-7 34-15-1-35-16-10-33-31-39-51-9-30-8-39 11-61 19-24 23-26 48-14 16 7 28 16 28 21 0 4 13 7 28 7 26 0 29 4 38 48 8 43 11 47 38 47 33 0 47 21 19 28-15 4-15 6 5 12 17 6 20 10 11 16-20 12-8 18 24 12 25-5 28-9 23-33-4-24-1-29 22-33 15-3 30-2 35 2 15 15 49 155 38 159-6 2-11 10-11 17 0 8-18 19-41 25-24 7-38 15-33 20s33 1 64-9c41-14 59-16 69-8 27 22 3-84-25-110-35-32-27-52 26-72 37-14 45-22 51-50 4-18 14-40 22-48 11-12 12-22 4-48-13-44-4-64 35-77 30-11 30-12 10-19-12-5-22-13-22-19s-5-8-10-5c-6 3-13 0-16-9-3-8-12-12-20-9s-14-1-14-11c0-9-6-13-14-10-7 3-16-2-20-11-4-13-10-14-26-5-21 11-28 40-10 40 6 0 10-4 10-10 0-5 5-10 11-10 5 0 7 5 4 10-3 6 3 10 13 10 12 0 22 9 26 23 9 32 8 37-9 37-9 0-16 14-20 38-4 20-8 43-11 50-6 20-29 9-32-16-4-24-17-27-57-12-20 8-27 7-31-5-4-8-12-15-20-15s-14-4-14-10c0-5-7-10-15-10-9 0-20-11-25-25s-14-25-20-25c-5 0-10-9-10-20s-6-20-12-20c-8-1-6-6 5-14 23-18 22-46-3-46-11 0-20-4-20-8 0-5-16-14-35-22-63-25-42-83 34-93 27-4 81 19 81 34 0 6 4 8 10 4 5-3 17 6 26 20 12 18 20 23 27 16 8-8 7-15-1-23-16-16-15-28 3-28 8 0 15 5 15 10 0 15 33 12 56-5 17-13 17-14 2-15-11 0-21-12-26-32-7-28-13-33-36-31s-27-2-24-20c2-14 10-22 23-22 12 0 19-6 17-16-5-34 59-74 82-51 4 4 13 7 19 7 7 0 17 16 23 35 8 24 17 34 29 32 9-2 24 3 34 12 18 17 34 11 44-18 7-17 25-19 72-6 6 1 23 2 38 1 20-1 27-6 25-18-3-18 54-40 60-23 4 12 42 13 42 1 0-5-7-11-15-15-8-3-15-11-15-18s-12-21-25-31c-19-14-29-15-45-7-17 9-21 8-26-7-15-46-17-49-21-30-3 9-9 17-14 17s-9 9-9 20c0 21-24 28-35 10-3-6-17-7-30-4-20 5-27 1-35-22-9-24-8-31 6-41 16-12 15-13-12-13-17 0-35-5-41-11s-16-8-22-4c-8 4-6 11 4 21 19 19 19 33 0 40-8 4-12 10-9 15s-2 9-10 9c-9 0-16-3-16-8 0-4-10-12-23-17-13-6-23-21-25-37-2-19-9-28-21-28-23 0-37-70-20-102 9-17 18-19 51-15 22 3 45 13 52 23 8 11 15 13 20 6 10-17-5-42-25-42s-26-24-9-35c6-4 8-11 4-16-3-5 7-15 23-22 19-8 27-18 25-30-2-10 3-24 12-30 8-7 18-25 22-40 5-23 3-29-15-34-27-7-27-33 1-62 19-21 23-22 33-8 7 10 20 13 38 10 20-4 27-1 27 11 0 20 19 21 26 1 4-8 11-12 18-8 6 3 7 2 3-3-5-5-12-9-15-10-28-3-60-26-65-46-10-35-9-39 11-36 11 2 16-3 14-14-1-9 2-19 8-23 5-3 10-17 10-30 0-15 7-26 20-30 12-4 20-15 20-29 0-33 25-53 45-36 13 11 18 10 28-3 14-18 44-23 70-12 21 9 43-8 33-24-4-6-14-11-22-11s-14-4-14-9-9-11-21-14c-16-4-19-10-14-27 6-19 4-21-15-15-18 6-21 3-18-17 3-21 7-23 51-21 43 3 47 1 47-20 0-25 21-77 32-77 3 0 4-9 1-20-5-20-6-20-22 2-9 13-16 27-16 32 0 8-29 24-48 25-4 1-12-9-16-21-10-27 12-58 41-58 11 0 22-9 25-19 6-23 49-33 63-16 8 10 20 11 48 3 40-11 71-32 38-26-14 2-21-5-27-25-6-24-3-29 21-42 15-8 30-12 33-9s10-3 16-15c7-13 8-22 1-26-13-8-13-45 0-45 6 0 10-6 10-14 0-14 21-26 46-26 8 0 14 6 14 14 0 44 61 26 96-27 15-23 33-46 41-50 7-5 11-13 7-18-3-6 10-24 30-41 28-24 35-35 30-54-3-13-2-24 3-24s15-16 23-35 19-35 24-35c6 0 0-9-14-19l-24-19 24-11c14-5 42-13 64-16 26-4 40-12 43-26 5-16 11-18 44-13 37 6 39 5 39-21 0-18 6-28 20-32 11-3 20-14 20-24 0-11 6-19 13-19s5-5-5-10c-21-13-33-67-19-84 6-7 29-18 51-25s38-16 35-22c-4-5 7-14 24-20s28-15 25-20 2-12 10-15c9-3 16-12 16-20 0-17 17-19 22-2 2 6 10 8 16 4 18-11-2-41-37-55-25-11-40-35-41-63 0-5 7-8 16-8 11 0 14-5 10-16-3-9-6-18-6-20s-7-4-15-4-15-5-15-11c0-7-10-9-25-5-18 5-27 1-35-15-15-27-6-49 20-49 12 0 31-11 43-24 12-12 39-26 59-30 21-4 42-15 48-26s34-26 67-35c57-17 57-17 75 7 17 22 19 22 32 6 7-10 18-18 25-18 6 0 11-6 11-14s6-16 13-19c20-7 1-18-42-24-32-4-43-11-47-29-3-12-3-28 1-33 7-12 55-15 55-3 0 14 47 29 68 21 12-5 23-5 25-1 11 20 16 62 7 67-13 8 24 43 55 51 14 3 25 13 25 22 0 11 3 13 11 5 7-7 7-24-2-56-10-41-9-48 10-68 27-30 27-37-4-31-20 3-27-1-35-24-18-46-10-59 33-56 32 3 37 1 37-17 0-13 6-21 18-21 9 0 23-9 30-20s19-20 28-20c12 0 15-6 11-21-10-38 29-77 90-89 32-7 53-17 53-25 0-7 7-15 15-19 8-3 14-9 14-13-3-12 13-47 25-55 16-11 56-10 56 2 0 6 9 10 20 10s20-4 20-10c0-5-7-10-15-10s-15-4-15-10c0-5-6-10-14-10-25 0-27-17-7-50l19-32 18 27c15 23 22 26 51 20 19-3 40-2 46 4 7 5 24 7 40 4 22-4 27-11 27-34 0-16 4-29 10-29 5 0 7-7 4-15-4-8 1-17 10-21 9-3 16-12 16-20 0-7 15-16 34-19 21-4 36-14 39-25s18-20 41-24c22-4 34-11 30-18-4-5 0-14 7-19 19-12 59-11 59 1 0 16 30 11 37-6 3-8 16-19 28-24 18-7 21-14 17-39-4-28-2-31 23-31 20 0 26-4 21-15-3-9 1-18 9-21 8-4 15-12 15-20s7-14 15-14 15 5 15 10c0 6 9 10 20 10 15 0 21 9 26 40 4 22 11 37 16 34 6-4 13-3 17 2 3 5 17 15 30 22 22 13 23 12 18-10-8-32 36-76 58-58 9 7 26 9 45 5 28-6 32-4 47 32 12 27 18 33 21 21 2-10 10-18 18-18 25 0 16-39-10-46-14-3-23-11-20-18 7-17 78-39 82-26 8 22 24 8 18-15-4-14-2-25 4-25 5 0 10-6 10-14 0-20 19-24 47-12 28 13 38 35 19 42-11 4-12 13-4 41 7 27 7 38-3 44-16 9-20 37-7 45 5 3 20-4 32-15 13-12 36-25 50-29 15-4 35-21 44-37 9-17 18-32 20-34 1-2 13 1 26 8 35 19 49 6 41-40-5-27-3-39 5-39 7 0 10-7 6-15-3-10 1-18 11-22 9-4 19-1 21 5 2 7 12 12 22 12 22 0 33 45 15 60-21 17-6 50 22 50 21 0 23-3 18-22-4-13-8-27-9-32 0-4 18-14 42-21 37-11 44-11 49 2 4 9 14 13 27 9 12-3 30 3 44 14 23 19 29 40 12 40-5 0-10 9-10 20 0 13-7 20-20 20-11 0-20 7-20 15 0 9-7 18-15 22-12 4-10 8 10 19 28 14 55 9 55-11 0-7 10-15 23-19 20-5 22-10 19-46-3-33-1-40 13-40 13 0 15-3 7-13-13-15 15-44 63-65 26-11 31-11 42 4 12 17 13 17 13 1 0-18 37-38 57-30 6 2 14 20 17 39 4 20 13 34 21 34s15 5 15 10c0 6 5 10 10 10 6 0 10-7 10-15s5-15 11-15c11 0 10-6-8-62-4-12 3-21 21-28 15-5 26-17 26-29 0-29 27-47 50-34 10 7 28 9 40 6 13-3 25-1 30 7s17 10 34 6c23-6 26-11 26-50 0-31 5-46 16-50 26-10 44-7 44 8 0 17 40 9 40-8 0-6 9-22 20-36 17-22 19-23 25-7 9 21 25 23 25 2 0-34 17-12 29 37 9 41 9 53-1 59-17 11-3 23 18 15 11-4 14-13 10-30-3-14-1-28 5-31 6-4 8-17 5-29-4-16 3-29 31-50 34-28 37-28 49-11 8 10 14 24 14 29 0 6 11-6 25-26 29-43 82-65 101-42 13 17 44 8 44-12 0-32 87-29 124 4 10 9 21 16 25 14 3-2 10 13 14 32 10 39 12 39 95 14 29-9 33-13 28-34-5-20-2-26 19-34 36-14 45-13 45 6 0 11 5 14 16 10 9-3 18-6 20-6s4-11 4-25c0-33 33-51 54-29 9 8 16 20 16 25s6 9 14 9c15 0 26 21 26 51 0 23 15 25 24 4 3-8 11-15 18-15 19 0 38-46 25-59-17-17 10-36 73-50 31-8 62-22 71-34l16-20 31 21c16 12 35 22 41 22s11 5 11 10c0 6 9 10 19 10 11 0 21 5 23 12 5 13 40-3 39-18 0-5 22-16 49-24 28-8 50-20 50-26 0-7 7-15 16-18 24-9 74-7 74 3 0 5 15 5 34-1s34-16 33-22c-1-5 14-15 33-22 19-6 36-19 38-28s8-16 13-16 9-7 9-15 9-15 20-15 20 5 20 11c0 7 11 8 30 4 22-5 30-3 30 7 1 8 6 6 16-7 12-16 18-17 33-8 10 7 28 9 40 6 13-3 21-1 21 7 0 9 9 10 33 5 90-20 106-18 117 9 8 23 13 25 29 16 24-12 61-13 61-1 0 4 19 5 43 0 23-4 45-8 49-9 4 0 5-7 2-15-5-12 4-14 55-10 39 4 68 1 80-7 16-10 25-9 48 2 15 8 30 17 33 20 19 19 56 30 81 25 19-4 29-3 29 5 0 7 12 9 35 4 24-4 35-3 35 6 0 8 9 10 24 6 17-4 28-1 34 9 7 14 13 14 51 0 54-19 61-19 61 0 0 9 6 12 15 9 8-4 15-1 15 5s13 11 29 11 31 6 34 13c3 9 11 9 38-1 28-10 36-10 44 2 7 9 21 12 38 9 16-3 27-1 27 6 0 16 31 14 76-5 29-12 43-13 56-5 10 6 29 11 42 11s26 4 28 10 17 6 43-1c29-8 40-8 43 0 2 6 10 11 18 11s14 7 14 15c0 11 7 13 29 9 24-5 30-2 36 16 7 23 4 23 91 3 15-3 23 1 27 16 3 14 13 21 29 21 13 0 29 5 35 11 9 9 23 9 54 1 50-13 66-4 71 36 3 28 12 31 62 18 21-5 27-2 32 19 7 28 12 29 48 16 18-7 28-6 36 4 7 8 16 12 21 9s12 2 15 11c4 10 14 15 25 12 24-6 69 14 69 30 0 7 7 10 15 7 8-4 15-1 15 6 0 9 13 10 45 6 32-5 45-4 45 4 0 7 7 10 15 6 22-8 38 56 17 68-23 14 36 36 66 25 56-21 82-7 82 43 0 14 6 19 23 16 12-2 21-9 19-17-4-18 58-7 73 13 6 7 16 11 23 9 6-3 12 0 12 6s13 11 29 11c21 0 30 6 35 22 9 34 8 38-10 38-11 0-14 5-10 16 3 9 6 18 6 20s11 4 24 4c15 0 26-7 29-20 3-14 14-20 31-20 14 0 26 5 26 11s12 9 27 7c22-2 28 2 35 27 4 18 4 31-2 33-21 7-9 38 21 51s44 9 44-12c0-19 55-34 65-18 5 9 17 11 34 7 21-5 27-2 32 19 3 14 12 25 20 25s14 5 14 10c0 6 5 10 11 10 5 0 7-5 4-10-5-9 34-31 53-30 22 1 54 44 61 82 5 28 12 42 21 40 17-4 30 17 30 51 0 15 5 27 10 27 6 0 10-7 10-16 0-12 7-15 24-12 15 3 27 0 30-8 6-16 66-19 66-4 0 6 6 10 14 10s17 7 20 16c7 18-14 74-26 74-5 0-8 10-8 22 0 21 0 22 18 2 10-10 21-26 24-35 9-22 69-32 84-13 6 7 13 11 16 9 3-3 11 1 18 10 7 8 19 15 26 15 8 0 14 7 14 15s-9 15-20 15-20-4-20-10c0-5-4-10-10-10-5 0-7 13-3 30 3 19 1 30-6 30-6 0-11 5-11 10 0 16 19 11 37-10s43-27 43-10c0 6 7 10 15 10s15 4 15 9c0 12 39 23 73 21 19-1 27 3 27 14 0 9 7 16 16 16s13 5 10 13c-3 6-9 20-12 30-4 9-10 17-15 17s-9 5-9 10c0 6 7 10 15 10s15 3 15 8c0 12 50 31 66 25 8-3 14-11 14-18 0-24 49-27 80-5 15 11 33 20 39 20s11 5 11 11 15 8 44 4c39-6 44-5 49 17 4 12 7 33 7 45s9 27 19 33c11 5 26 29 34 52 12 37 18 43 40 40 23-2 27 2 33 33 3 20 14 40 24 45 10 6 22 20 26 32 10 33 39 58 68 58 28 0 33 5 40 41 2 13 10 46 17 73 10 39 10 51 0 54-9 3-7 7 4 16 9 6 22 40 31 76 15 63 41 103 66 98 17-4 16 84-1 90-16 5-14 22 4 22 8 0 15 9 15 19 0 12 14 26 38 38 27 13 38 25 40 46 2 15-1 27-7 27s-11 9-11 20-5 20-10 20c-6 0-8 10-5 23 4 16-1 31-17 48-13 14-22 31-20 37 2 7-6 12-17 12s-25 9-31 20-25 23-43 28c-17 5-32 12-32 18-1 16-37 64-49 64-33 0-66-27-72-57-4-19-12-33-20-33s-17-7-20-15c-4-8-11-12-16-9-14 9-28-15-28-47 0-18-6-28-20-32-36-9-18-97 20-97 11 0 20-6 20-12 0-30-13-56-29-61-10-2-21-18-24-36-4-18-13-31-22-31-8 0-15-4-15-10 0-5-5-10-11-10s-8 7-5 16c8 21-11 44-35 44-12 0-21-10-25-25-8-32-16-31-31 1-13 29-7 54 13 54 17 0 32 52 16 58-17 5-15 22 3 22s20 26 3 36c-7 5-4 10 10 15 13 5 22 17 22 28 0 18 16 41 68 96 28 29 36 82 14 94-19 11-23 80-8 139 7 27 6 32-8 32-10 0-14 5-11 10 3 6 3 10-2 11-4 0-17 2-27 4-47 9-126 8-138-2-7-6-23-14-36-17-31-10-46-40-30-65 9-15 9-28-2-60-7-23-19-41-26-41-23 0-34-65-12-72 6-2 9-12 5-21-7-19-15-21-37-7-12 7-12 15-3 42 23 67 26 98 9 98-9 0-16 7-16 15 0 16-29 21-31 5-1-5-2-14-3-20 0-5-4-10-8-10-44 0-42-1-22 20 10 12 29 30 41 42 12 11 20 25 17 29-2 4 4 14 14 21 11 7 22 22 25 33s8 29 11 41c7 23-19 30-28 7-7-18-33-16-106 6-52 16-62 17-67 5-3-8-11-14-19-14s-14-4-14-10c0-5-7-7-15-4-8 4-15 1-15-5s-4-11-10-11c-19 0-10 32 10 37 11 3 20 9 20 14s7 9 15 9 15 5 15 10c0 6 7 10 15 10s15 5 15 10c0 6 8 10 17 10 15 0 14 2-4 15-12 8-28 12-37 9-10-4-16-1-16 8 0 8-11 24-25 36-22 19-25 20-33 5-8-14-10-14-16 5-4 12-12 22-18 22-5 0-8 6-5 13 2 6-6 20-19 30-22 17-24 17-35-4-16-31-22-76-9-84 15-9 12-25-4-25-11 0-14-11-11-41 1-22 5-43 9-46 8-8-24-43-39-43-16 0-25-32-15-51 15-28 19-89 6-89-14 0-20-56-7-65 6-3 7-13 4-21-5-14 1-34 28-86 13-25 11-31-6-24-11 4-19-3-25-19-7-18-17-25-35-25-14 0-25-4-25-10 0-5-5-10-11-10-7 0-9 10-5 25 4 17 2 27-7 31-9 3-12 14-9 29 5 29-22 75-44 75-12 0-15 7-12 25 4 17 0 29-11 35-24 13-10 18 27 8 28-7 32-13 30-36-4-37 22-36 40 2 13 25 12 33-9 74-19 36-24 61-24 118 1 64-2 73-19 78-29 8-38-3-31-35l7-29h-55c-42 0-56-4-61-16-7-18 14-74 26-74 5 0 8-4 8-10 0-5-6-10-14-10s-17-6-19-12c-4-8-8-5-12 8-5 15-19 23-53 30l-47 9 3 43c3 32 0 42-12 42-13 0-32-47-41-99-1-8-7-17-13-19-7-2-7 7 1 33 8 28 8 38-2 44-9 6-10 20-5 46 8 42-3 55-48 55-17 0-33-8-40-20-16-25-38-26-38-1 0 12 12 25 30 33 17 7 30 16 30 20 0 17 34 7 63-18 25-21 33-23 42-12 24 29 50 37 94 25 37-10 41-14 36-34-4-18 0-24 20-29 29-7 55 10 55 37 0 14 7 19 26 19s28 8 40 35c8 20 12 40 9 45-8 13-35 13-35 0 0-20-15-9-28 18-19 43-20 106-2 107 8 0 18 15 23 37 7 31 5 42-13 68-13 18-19 37-15 49 9 29-29 47-61 30-21-11-27-10-45 9-11 12-24 22-29 22-6 0-10 6-10 14s-7 16-15 20c-8 3-14 11-13 18 2 7-28 20-77 33-103 27-106 28-95 67 12 39 7 46-34 54-22 4-36 13-39 25-3 11-14 19-25 19-12 0-22 9-25 22-8 30 2 37 19 13 20-27 93-49 101-29 3 8 11 14 18 14 27 0 19 71-9 91-5 4-6 19-2 33 4 15 2 26-3 26-6 0-18 16-27 35-15 31-44 49-44 26 0-5-9-11-20-14s-19-11-18-17c2-7-3-15-9-17-9-3-13 5-13 22 0 34-21 28-33-10-7-19-6-34 2-47 9-14 8-18-3-18-8 0-16-6-19-14-7-19-55-8-70 15-13 21-37 26-37 8 0-6-7-8-15-5-9 3-18-1-22-10-4-11-13-14-32-9-35 9-39 19-33 71 3 33 1 48-11 57-8 7-17 21-19 32-3 16-11 20-48 21-25 0-60 4-78 8-22 5-38 4-47-4-12-10-15-9-15 9 0 17-6 21-37 22-21 1-72 2-113 4-41 1-78-1-81-6-3-6-27-5-58 2-29 6-61 9-72 6-10-3-19 0-19 6 0 7-6 3-12-7-9-16-7-22 10-34 12-8 22-19 22-25 0-5 8-16 18-23 15-12 13-13-20-14-36 0-37-1-47-51-9-39-8-55 0-66 9-10 9-17 1-25-9-9-12-8-12 4 0 9-5 18-11 20-8 3-8 14-1 41 8 30 8 37-4 37-8 0-14 7-14 15 0 9-11 20-24 25-18 7-22 14-19 34 4 21 0 26-21 32-15 3-40 4-56 0-19-3-30-1-30 6 0 17-42 49-58 43-7-3-16-5-18-5-9 0-4-39 6-42 5-1 7-14 3-26-5-20-10-23-34-18-21 4-29 2-29-9 0-7-5-17-11-21-9-5-10 9-5 49 4 31 5 60 2 65-9 15-158-8-188-30-17-11-36-17-47-13-11 3-22 1-26-5-10-17-42-11-48 9-5 22-51 33-72 17-18-14-32-76-17-76 6 0 9-6 6-14s2-16 13-19c14-3 9-8-18-20-43-19-56-43-28-52 25-8 25-25 0-25s-37-18-18-26c9-3 12-14 10-29-4-16 1-27 16-34 27-15 27-41 1-41-15 0-20 7-20 25 0 14-8 29-21 36-17 9-20 17-15 41 5 26 1 37-26 64-18 19-41 34-50 34-15 0-16 4-8 25 8 20 6 27-6 32-8 3-13 12-10 19 4 10-4 14-29 14-38 0-56-29-35-55 10-12 9-15-4-15-10 0-27 5-38 11-17 9-24 8-32-2-23-29-49-36-92-25-25 7-39 16-37 23 3 7-2 16-11 19s-16 12-16 19c0 18-43 27-55 11-5-7-15-11-21-9-17 6-27-59-12-69 9-5 6-8-9-8-14 0-23 6-23 15 0 8-4 15-10 15-5 0-10 6-10 14s-4 17-10 21c-10 6-50-13-62-29-4-6-15-1-25 11-14 17-23 19-40 13-13-5-23-17-23-26 0-12-6-15-22-11-12 4-27 2-34-3-16-14-74-1-68 15 3 7-2 15-10 18-9 4-16 13-16 22 0 18-43 20-58 2-20-24-25-64-8-70 12-5 14-12 6-31-7-20-6-27 8-35 9-6 13-11 8-11s-1-9 8-19c10-11 15-25 11-31s-1-17 5-25c7-8 9-26 6-40-4-16-2-25 5-25s9-12 5-35c-6-32-4-36 19-45 31-12 45-6 45 20 0 10 5 22 10 25 6 3 10 1 10-4 0-6 7-11 16-11 8 0 12-4 9-10-3-5-1-18 4-28 8-14 6-19-5-19-7 0-14 5-14 11-1 16-30-25-30-41 0-30 34-50 78-45 23 2 42 8 42 13s6 9 14 9 17 11 20 25c4 14 11 23 16 20 6-3 15 6 20 21 9 21 7 31-7 47-14 15-15 19-3 15 8-3 22 1 30 8 31 26 44 1 43-85 0-78 1-82 25-88 14-3 27-1 32 6 4 8 17 10 33 5 21-5 27-3 27 11 0 29 19 5 26-33 4-20 11-40 17-43 6-4 4-15-5-28-18-25-30-17-22 15 4 15 2 24-5 24-6 0-11-4-11-9s-9-11-20-14c-12-3-20-14-20-27 0-19-4-21-30-15-19 4-30 3-30-4 0-6-8-11-19-11-23 0-36-59-14-67 7-3 13-12 13-20 0-11 7-13 26-9 22 6 25 4 20-9-3-9-6-19-6-21s-7-4-15-4c-19 0-19-14 0-30 21-17 8-32-15-18-10 7-17 15-14 19 2 4 0 10-5 13-5 4-15-10-21-29-13-40-30-47-22-9 5 25 4 25-29 11-41-16-68-74-43-93 8-6 14-16 14-23 0-6 5-11 11-11 5 0 7-4 4-10-3-5-16-10-28-10-17 0-26-10-37-42-17-47-39-61-47-29-3 12-10 22-17 22-6 1-18 2-26 3-8 0-18-3-21-8-4-4-16 1-28 13-11 11-25 21-31 21-17 0-11 18 12 40 28 25 38 25 38-1 0-16 5-20 28-17 22 2 29 11 40 45 8 24 18 43 23 43s14 11 19 24c11 29-15 91-33 82-7-4-19-9-29-12-9-3-19-21-22-40-4-18-11-36-15-39-14-8-41 6-41 21 0 8-5 14-11 14s-8 8-4 19c12 39 14 61 4 67-15 9-37-15-41-43-4-32-38-41-45-13-3 11-14 22-24 25-12 4-19 16-19 30 0 13-5 27-11 30-5 4-8 12-6 18 5 16-38 57-61 57-16 0-24-9-30-32-9-34 0-58 22-58 11 0 36-44 36-63 0-6 8-16 17-23 10-7 15-16 11-20-10-9-77 37-75 51 1 5-7 10-18 10-16 0-22-10-28-47-6-31-15-48-27-51-10-3-21-18-25-36-4-17-13-31-20-31-17 0-38-73-29-102 4-15 2-19-7-16-15 5-16 35-3 107 7 43 7 44-19 37-25-6-25-5-15 30 10 38 7 46-19 50-9 2-27 5-40 9-14 3-23 1-23-6s-9-9-23-6c-29 8-44-2-52-36-6-21-4-27 9-27 9 0 13-6 10-13-3-10 11-18 48-28 50-14 53-16 50-43-2-16 2-32 8-36 14-9 2-40-16-40-17 0-19-27-1-33 8-3 5-10-10-22-13-9-23-26-23-38s-9-49-19-82c-11-33-22-78-25-100-4-22-16-69-27-105-18-58-18-66-4-76 9-7 14-18 13-25-2-8 7-15 20-17 12-2 22-7 22-11s-13-6-30-3c-22 3-30 0-30-11 0-9 5-19 10-22 7-4 8-24 4-51-4-32-3-44 6-44 8 0 10-8 6-24-4-15-1-26 7-29 9-3 7-8-5-18-28-23-41-69-25-88 9-10 11-25 6-41-12-41-10-50 10-50 11 0 22-4 25-9 9-14-4-41-19-41-26 0-34-84-9-94 27-10 44-7 44 9 0 8 6 15 14 15 11 0 13-15 11-62-2-69-23-148-38-148-5 0-6 7-3 16 19 50 18 64-3 64-12 0-21-4-21-10 0-5-6-10-12-10-7 0-26-11-43-24-31-26-32-25 19-40 11-4 11-14 3-56-7-37-7-54 1-59 12-7 2-71-20-125-10-25-9-31 8-43 18-14 18-15-8-37-16-12-28-27-28-33 0-7-8-16-17-21-19-11-46-105-32-110 5-2 9-13 9-24 0-17-4-19-32-13-18 4-35 9-37 11-2 1 4 23 12 48 14 42 14 47 0 55-13 7-14 14-4 42 9 27 9 36-2 44-12 8-12 18-2 57 9 39 9 50-2 61-11 10-11 20-3 42 6 15 8 31 4 34s-9 0-11-6c-3-7-11-13-18-13-11 0-10 9 5 43 11 23 20 54 20 69 0 23-6 29-32 36-23 6-33 14-33 28 0 12 6 18 16 16 23-3 33 28 14 42-18 13-11 46 10 46 17 0 27 41 13 57-6 7-8 24-6 38 3 14 1 28-4 31s-6 21-2 41c4 23 3 38-6 43-16 10-3 70 15 70 16 0 35 49 42 110 6 56-22 130-50 130-10 0-20 7-24 16-3 8-16 19-29 24-21 8-22 12-13 44 8 31 7 39-11 58-11 13-20 32-18 43 4 29-10 45-37 45-24 0-38-26-49-95-13-72-18-86-31-81-8 3-16-6-20-22-3-15-15-58-26-95-18-62-22-67-42-61-12 4-31 17-42 29-45 48-47 53-35 75 9 16 8 21-5 26-8 3-15 11-15 18 0 6-13 20-30 31-16 11-31 29-32 40-4 24-49 33-65 13-16-19-33-121-22-132 5-6 9-15 9-21 0-13-56-38-69-31-5 3-14-1-21-9-8-9-21-13-35-9-20 5-24 1-30-26-5-23-3-35 6-41 10-6 8-9-7-9-26 0-38-44-17-61 7-7 11-20 7-31-3-10-1-24 4-31s12-27 15-45c6-31 5-33-20-30-15 2-28-1-28-7-1-5-7-36-15-68-11-48-11-60 0-67 10-6 10-15 2-39-9-25-8-34 4-46 14-13 13-15-3-15-17-1-17-1 0-14 19-15 21-24 8-45-8-12-12-12-25-2-13 11-16 11-16-3 0-9-7-16-15-16-24 0-36-42-18-62 14-15 14-22-1-58-9-22-15-44-15-48 4-23-3-42-15-42-8 0-20-17-26-38-13-39-30-65-30-45 0 7 4 23 10 38 30 78 46 275 22 275-8 0-10 8-6 25 3 14 2 31-4 38-15 18-3 64 18 70 23 6 30 48 10 64-13 11-13 12 2 13 23 0 34 55 15 74-8 8-18 11-23 6s-17-3-27 5c-15 11-16 17-8 34 6 11 17 18 25 15 9-3 17 10 26 43 7 26 24 61 37 76 31 38 29 44-14 64-21 10-39 18-41 19-8 4 12 34 23 34 19 0 27 46 13 69-10 17-8 23 15 45 30 27 36 56 12 56-8 0-15 7-15 16 0 28-33 10-42-22-7-26-12-31-32-27-16 3-23 10-19 19 3 8 0 14-7 14s-10 7-6 15c3 9 0 15-9 15-18 0-19 5-1 64 17 55 16 51 16 75 0 11 6 18 16 17 25-2 28 21 4 34-16 9-28 8-50-2-23-10-31-23-41-60-6-29-17-48-25-48-20 0-17-37 4-57 9-10 16-29 14-44-3-22 2-27 37-37 36-11 39-14 32-40-6-21-14-28-39-30-18-2-32-8-32-14 0-5-7-8-15-4-10 3-17-3-21-19-7-27-24-34-24-10 0 8-5 15-10 15-16 0-25-31-11-39 8-5 7-20-5-55-14-41-14-50-3-57 11-8 11-11-5-20-29-17-56-47-57-64-1-8-3-19-4-25-1-5-3-21-4-35-1-18-7-25-21-25-13 0-20-7-20-20 0-11-5-20-11-20-7 0-9 9-5 23 3 12 9 41 13 65 5 34 11 46 31 53 14 5 22 12 19 15-10 10 15 79 35 95 17 13 20 23 14 53-4 20-13 36-20 36-8 0-11 10-8 30 4 29-12 43-21 18-2-7-8-10-12-6s-2 14 5 23c10 12 10 18 0 30-11 13-7 14 32 9 40-6 47-4 66 21 22 28 30 85 12 85-5 0-10 7-10 15 0 18-12 19-28 3-15-15-24-6-16 16 3 9 14 16 23 16 15 1 15 2 0 13-9 7-14 17-12 24 2 6-6 15-19 19-32 10-51 36-35 49s60 164 62 215c2 26 16 48 34 53 20 5 35 65 20 83-14 18 2 54 28 60 29 8 49 50 33 70-10 11-8 57 4 95 2 8 7 26 10 41 5 20 13 28 27 28 11 0 29 5 40 10 13 7 19 7 19 0 0-19 32-10 37 10 3 11 12 20 19 20 16 0 19 26 4 35-22 14 19 64 54 65 16 0 18 6 13 39-4 31 0 47 20 76s22 39 13 51c-14 16-60 19-60 4 0-5-7-10-15-10s-15-4-15-9-9-11-20-14c-13-3-20-14-20-30 0-14-5-29-10-32-12-8-13 26-1 58 5 13 12 41 15 62 4 21 13 59 22 84 14 41 14 46-1 57-24 17-2 26 33 13 27-9 34-8 56 13 13 13 26 34 28 48 2 20 8 24 27 22 13-1 30 3 37 9 11 9 14 8 14-5 0-8 11-18 25-22 14-3 25-12 25-20s9-14 20-14c13 0 20 7 20 20 0 20 16 26 37 12 9-6 8-15-4-40-8-17-19-32-24-32-12 0-12-47 0-54 14-9 22 6 10 20-7 8-7 14 1 19 5 3 13-1 16-9 3-9 12-16 20-16s14-7 14-15 11-17 24-21c13-3 26-14 29-23 3-12 18-21 42-25 45-9 50-5 38 31-6 17-7 38-1 52 5 15 4 28-3 37-6 8-9 20-6 28s0 19-7 26c-11 8-11 20-4 53 5 23 11 49 13 57 12 59 27 99 37 97 20-4 32 58 17 92-11 24-23 32-63 42-38 9-51 9-54 0-2-6-10-11-17-11-23 0-28-21-9-35 17-13 17-14 2-15-9 0-21-7-26-16s-13-16-18-16c-29-3-45-13-50-34-4-15-13-24-26-24-10 0-16-4-13-10 3-5-6-19-20-32-14-12-25-28-25-35 0-21-41-15-47 6-3 12-17 21-40 26-29 5-34 10-30 26 3 12 0 22-9 26-8 3-14 12-14 20 0 15 2 15 68-3 16-5 22-2 22 10 0 23 17 20 23-4 3-14 14-20 31-20 21 0 26 5 26 26 0 33-17 64-36 64-8 0-17 7-21 16-8 22-44 33-64 21-26-16-47-2-42 27 7 35-24 36-33 2-4-16-11-23-20-19-8 3-14 0-14-6s-9-11-20-11c-24 0-63 37-55 50 4 6 3 16-2 23-4 6-8 21-8 32 0 14-10 23-31 29-29 9-32 14-36 58-6 56-20 77-40 60-14-11-79-9-99 4-6 3-15 1-19-6-9-15-50-4-50 13 0 7-10 17-21 22-12 6-21 15-21 20 2 14-50 26-63 15-7-6-26-7-44-4-19 4-37 2-46-6-12-10-23-9-57 5-35 14-44 14-53 3-14-18-53-11-68 13-6 10-17 19-24 19-16 0-16 5-1 30 10 15 10 24 1 39-8 12-8 22-1 29 12 12-111 14-127 2-17-14-67 2-72 21-3 11-9 19-14 19s-9 6-9 14c0 9-20 19-51 26-42 10-50 16-48 34 2 37 0 44-22 49-12 3-22 0-26-9-7-18-33-18-33 0 0 8-7 17-16 20-8 3-12 11-9 17 4 6 1 9-6 8-22-5-129 33-129 45-1 6-7-4-15-21-19-45-53-45-57-1-2 26-9 33-33 40-16 4-36 16-43 25-10 15-14 15-21 4-6-9-18-11-34-7-15 3-27 1-29-5s-14-8-30-4c-17 5-25 12-21 21 3 8 0 14-6 14s-11 11-11 24c0 20-8 27-44 39-25 8-47 13-49 10-3-2-15 1-27 7-17 9-24 9-30 0-5-8-12-7-24 5-11 11-23 14-34 9-9-4-20-8-24-8-3-1-10-4-14-8-16-16-21-7-18 31 3 37 2 39-31 45-22 4-35 13-35 22 0 8-4 13-9 10s-41 5-80 19l-71 24-6-25c-5-18-11-23-23-18-34 13-101 17-101 5 0-7-5-9-11-5-6 3-15 0-20-7-8-12-11-11-19 3-6 9-28 19-50 23-23 4-44 14-50 25-5 10-20 20-32 23-13 3-41 11-63 17s-62 17-90 24c-28 8-49 19-47 25 1 6-5 14-13 17-8 4-15 12-15 19 0 23-34 53-66 58-23 5-37 1-54-15l-23-21-17 24c-10 13-16 27-14 31 3 4-2 8-11 8-12 0-15 6-10 20 4 13 2 20-7 21-7 0-21 2-31 4-18 3-41-27-29-40 4-4-17-4-47 0-42 6-52 5-46-6 6-9 4-11-8-6-9 3-20 1-24-6-23-35-92-40-100-6-3 10-10 19-17 19-6 0-3 5 7 11 22 13 21 28-2 58-25 33-17 63 15 55 19-5 26-1 34 20 5 14 16 26 25 26 8 0 15 4 15 9 0 6 10 8 22 6 12-3 27 0 34 6 8 6 19 9 26 7 7-3 18 2 24 10 9 12 17 13 43 4 17-6 38-9 45-6 21 8 28 47 11 60-12 9-10 13 11 23 14 6 41 9 59 5 28-5 34-2 40 15 8 26-9 58-51 96-19 17-34 36-34 43 0 6-4 12-9 12-6 0-6 12 0 32 16 59 12 76-23 87-85 26-91 25-117-21l-25-43-8 34c-11 39-36 81-49 81-5 0-15-11-21-25s-17-25-23-25c-20 0-26-53-8-67 17-13 28-73 14-73-5 0-16-3-25-6-12-5-16 0-16 19 0 16-7 26-20 30-11 3-20 12-20 21s-6 16-12 16c-34 1-38 15-21 73 8 31 22 57 29 57s18 16 24 36c10 30 16 35 35 30 20-5 24-1 30 25 5 21 3 34-5 39-7 4-10 12-6 18 3 5-1 12-9 16-25 9-18 36 10 36 15 0 25-6 25-15 0-8 14-17 35-21 19-3 45-16 57-28 31-30 57-39 64-22 6 15-27 96-38 96-5 0-8 9-8 20 0 14 7 20 24 20 13 0 31 3 40 6 13 5 14 1 5-28-7-25-6-36 4-43 7-5 16-18 20-27 3-10 13-18 22-18 8 0 18-1 23-2 4-2 7 9 7 24 1 34 8 41 35 33 13-4 19-12 16-21-3-8 1-17 8-20 8-3 16-14 19-25 6-23 57-27 57-4 0 8-5 15-12 15-9 0-9 3-1 11 7 7 22 7 52-1 35-9 40-14 36-33-3-13 3-31 14-44 18-21 20-22 50-7 24 12 31 22 31 46 0 30 0 30 45 24 29-5 45-4 45 3 0 6 9 11 19 11 11 0 21 5 23 11 3 8 14 8 41 1 30-8 37-8 37 4 0 22 41 17 47-6 5-17 7-18 20-4 9 8 22 13 29 10 8-3 14-1 14 4 0 6 7 10 15 10 22 0 18 19-7 40-20 16-21 20-8 35 13 16 14 15 22-4 10-28 22-26 36 4 11 23 16 25 46 20 29-6 35-4 41 15 4 12 3 26-3 32-13 13-3 48 14 48 16 0 18-12 4-26-6-6-6-15 0-24 8-13 11-13 19-1 6 9 18 11 35 7 19-5 26-3 26 9 0 18 14 19 41 5 15-8 21-7 25 4s14 13 35 9c18-3 29-1 29 6 0 6 12 10 26 9 32-3 89-79 81-109-3-10-1-19 4-19s9-7 9-15c0-9 11-20 25-25s25-16 25-25c0-13 18-20 43-16 4 0 7-8 7-19s5-20 10-20c6 0 10-6 10-14 0-19 92-47 102-32 12 17 9 24-9 29-15 4-15 6 5 12 24 8 29 21 10 27-6 2-8 10-4 16 10 16 26 15 26-1 0-17 73-41 78-27 2 6 17 10 33 10s29 5 29 10c0 6 5 10 10 10 6 0 10-6 10-14s11-17 25-20c27-7 49 0 41 13-3 4-1 12 3 19 10 17 48 3 55-21 6-22 7-22 21-3 8 11 15 16 15 12s8-3 17 2c18 10 29 3 49-33 8-14 22-20 45-20 32 0 35 3 52 55 18 58 17 80-7 80-19 0-49 48-43 69 3 13-5 21-28 30-18 6-36 19-39 27s-11 12-16 9c-16-10-40 14-33 33 3 9 13 22 21 29 12 10 13 15 2 28-14 17-50 21-50 5 0-5-11-10-25-10-31 0-48-35-31-63 9-16 7-22-11-34-13-9-23-21-23-29 0-7-5-16-10-19-12-7-9 19 11 83 14 49 2 74-23 48-22-21-28-10-15 25 9 22 17 29 33 27 42-5 70 26 83 93 9 44 10 64 2 67-6 2-8 20-4 48 3 27 2 44-5 44s-7 13 1 41c7 30 7 47-1 60-9 13-9 26-1 46 7 20 7 33-2 50-9 16-9 33-1 65 34 133 37 151 24 156-6 2-12 10-12 17s-4 15-9 17c-9 3-1 57 20 141 12 44 34 51 24 7-4-19-3-30 4-30s9-14 6-37c-3-22 2-50 12-71 13-28 14-42 6-73-8-30-7-41 3-50 8-6 14-18 14-26s5-11 12-7c7 5 9 2 5-9-3-8 0-21 8-27 12-10 12-18 0-58-8-25-13-47-12-48s19-9 39-19c21-9 35-22 32-27-4-6-10-6-17 1-14 14-37 14-37 1s37-50 50-50c5 0 7-7 4-15-5-11-10-13-19-5-24 20-25-7-1-33 13-14 21-29 18-32-4-4 1-11 10-16s14-17 11-28c-3-10 0-22 6-25 16-10 13-26-4-26-8 0-15-5-15-11s-7-9-15-6c-16 7-20 3-28-34-5-19-1-33 16-51 12-13 22-26 22-28 1-15 33-47 53-52 18-5 22-2 22 18 0 16 6 24 18 24 23 0 42-19 35-36-3-7 4-26 14-41 11-15 26-43 34-60 13-31 49-47 49-23 0 6 7 10 15 10s17 11 21 25c7 28 25 32 44 10 7-8 18-15 24-15 21 0 36-22 26-40-5-9-11-30-13-46-3-22 2-31 21-41 13-7 25-13 27-13 3 0 23 71 36 128l11 54 37-7c44-8 41-6 35-32-5-18-10-20-29-13-28 11-42-2-47-45-4-38 35-61 77-45 36 14 75 3 75-21 0-13 7-19 23-19 12 0 32-3 45-6 18-5 24-2 29 15 3 11 12 21 19 21 8 0 14 7 14 16 0 11 5 14 18 9 9-4 23-8 30-8 8 0 21-11 29-24 18-27 51-30 59-5 17 52 23 60 43 55 12-3 21-12 21-19 0-21 28-17 35 6 3 11 15 20 25 20 9 0 20-9 23-20 3-13 14-20 30-20 14 0 29-5 33-11 9-16-18-30-33-17-15 12-15 10-33-69-14-64-9-75 29-60 15 5 36 7 45 4 15-6 17-15 11-60-12-86-20-100-55-92-31 7-87 53-82 68 1 4-3 7-8 7-6 0-10 9-10 20 0 28-41 36-74 14-15-9-24-22-21-28s8-19 11-28c4-10 12-18 19-18 28 0 35-25 19-76-14-47-14-50 7-66 19-16 41-23 62-19 5 1 11-8 14-19 5-19 14-24 39-21 6 1 32-5 57-13 26-8 47-10 47-6s7 11 16 14c8 3 12 2 9-4s1-7 9-4c9 3 14 10 11 14s4 10 15 13c10 3 21 0 24-7 2-6 5-4 5 5 1 8 17 21 36 29 34 13 46 35 25 42-16 5 0 68 17 68 7 0 16 8 20 18 3 9 14 24 25 32 10 9 21 31 24 51 6 34 5 35-33 44l-38 10 38 23c21 14 37 32 37 42 0 30 11 49 24 44 8-3 18 16 29 53 13 48 13 59 2 66-10 5-11 15-4 39 5 20 5 36-2 44-7 9-6 15 4 21 17 10 32 52 48 133 6 36 16 73 21 83s11 36 14 57c3 22 11 57 19 79 15 43 9 55-30 63-19 3-19 5 6 28 15 14 30 40 33 58 4 17 12 32 17 32s6-12 3-26c-4-17-2-29 6-34 11-7 10-20-4-72-27-101-30-118-16-118 8 0 11-9 7-29-3-15-1-33 6-40 8-8 7-11-5-11-13 0-21-20-34-77-9-43-17-85-17-93s-3-19-7-25c-4-5-18-52-30-104-17-71-20-98-12-111 6-10 8-27 5-39s-1-21 6-21c8 0 9-17 5-52-5-48-5-51 9-34 21 29 41 11 21-20-13-19-20-22-30-13-8 7-14 7-14 1 0-21 31-35 67-29 46 8 64 24 43 40-22 17-13 58 18 84 24 19 26 24 14 43-7 11-10 25-7 29 3 5-2 11-10 15-8 3-15 12-15 20s-4 16-9 18-6 18-4 36c4 22 11 32 23 32 19 0 35 49 20 64-11 11 13 36 34 36 9 0 16 5 16 10 0 18 22 11 46-15 17-18 19-25 8-25-8 0-19-11-24-25-8-20-16-25-37-23-25 3-28-1-31-28-3-29 0-32 43-44 58-16 65-28 31-55-23-18-25-23-12-28 9-4 16-13 16-21 0-22 28-27 60-11 41 21 43 29 20 77-24 50-24 49-6 42 7-3 16 2 19 11 5 11 14 14 32 9 15-4 25-2 25 5 0 20 15 11 28-16 16-37 15-56-3-49-9 3-15 0-15-9 0-8-6-15-14-15-28 0-39-27-25-60 8-16 19-30 26-30 8 0 11-10 7-29-5-25-3-29 23-34 15-4 38-9 50-13 18-5 25-1 33 20 6 16 15 24 24 20 10-4 18 5 25 32 6 20 8 41 5 46-7 11-34 10-34-2 0-5-6-10-13-10s-17-10-22-22c-6-13-17-23-25-23s-16 10-18 23c-2 14 2 22 11 22 16 0 52 112 44 134-3 7-20 16-37 20-32 6-32 7-26 48 4 24 3 44-3 47-6 4-1 43 13 101 17 71 27 96 40 98 11 2 19-4 23-17 4-14 13-21 30-21 22 0 24-3 18-29-4-18-2-32 5-36s9-18 6-31c-4-14-2-24 4-24 5 0 10-9 10-20s7-20 15-20 22-9 33-20c10-11 36-23 57-28 45-9 61-40 27-49-12-3-22-16-25-31s-9-39-13-54c-5-24-2-29 22-39 29-11 29-11 7-20-14-5-23-17-23-29 0-11-7-20-15-20s-15-4-15-10c0-5-6-10-14-10-19 0-29-29-16-45 8-10 7-16-6-23-14-8-14-10-1-15 11-4 17 2 22 24 4 16 13 29 21 29 12 0 12-4 4-20-9-17-8-20 9-20 11 0 22 9 26 19 5 17 18 24 50 29 5 1 10-8 10-21 0-15 7-23 23-25 16-3 21-9 18-20-2-9-7-27-11-40-4-15-2-24 10-28 10-4 14-13 10-22-3-9-3-13 1-9s15 0 25-9c16-14 18-14 29 5 7 14 7 21 0 21-5 0-10 7-10 15s7 15 15 15c10 0 15 10 15 30 0 22-5 30-18 30-10 0-21 3-25 6-11 11 5 34 24 34 12 0 19 7 19 19 0 10 10 26 23 35 20 14 21 17 5 29-11 9-13 18-8 28 5 9 11 33 13 54 2 23 11 41 22 47 12 7 16 7 11 0-3-5 1-12 9-16 8-3 12-12 9-20-3-9-12-12-21-9-11 4-14 2-9-5 4-7 20-12 37-12 22 0 29 5 29 19 0 37 11 51 35 45 15-4 24 0 28 10 4 9 11 16 18 16 6 0 9-7 5-15-3-8-1-15 4-15 6 0 10 5 10 10 0 6 6 10 14 10s17 11 20 25c6 22 9 24 28 14 17-9 24-8 33 4 6 8 20 15 30 14 11-1 24 8 32 23 12 24 13 23 13-23 0-41-3-49-24-57-20-7-26-19-32-57-4-26-15-77-25-112s-16-67-14-71c3-4 19-10 36-14 19-4 33-13 36-26 3-11 13-20 22-20 24 0 30-8 24-31-7-25-33-25-40 1-5 20-43 29-43 9 0-5-5-7-12-3-6 4-17 0-23-10-12-16-45-13-45 5 0 4 7 6 17 2 14-5 15-1 10 27-4 18-7 41-7 51 0 22-36 35-55 19-8-6-15-24-17-38-2-19-8-26-20-24s-18-4-18-18c0-11 5-20 10-20 6 0 10-9 10-20 0-15-7-20-25-20-22 0-25 3-19 24 4 18-1 32-20 52-14 16-27 26-30 23s-8-23-12-46c-6-39-5-42 19-48 17-5 24-12 20-21-3-9 1-14 12-14s15-6 11-17c-3-10-8-35-11-55-8-48 18-53 31-7 5 17 11 29 14 27 3-1 19 6 35 17 69 47 130 59 130 26 0-16 28-29 63-30 20-1 22 2 16 38-6 37-5 39 14 34 22-5 102 25 102 39 0 4-5 8-11 8s-9 7-5 15c3 9 0 15-9 15-8 0-15 6-15 14s-5 16-11 18c-18 6 4 62 24 66 10 2 17-3 17-11 0-9 13-18 28-22l29-6-14-57c-27-113-38-142-50-142-7 0-13-4-13-9s-7-11-16-13c-22-4-49-88-28-88s17-17-6-23c-14-3-20-14-20-31 0-14 4-26 9-26s11-9 14-20c4-16 14-20 46-20 34 0 42 4 46 23 9 33 13 60 14 79 1 9 12 30 26 46 13 16 34 66 47 112 15 55 28 84 40 87 19 6 31 53 14 59-14 5-15 94-1 94 6 0 12 10 12 23 4 42 13 67 27 67 8 0 21 19 29 43 14 37 16 39 16 14 1-15 6-36 13-46 10-17 8-24-13-45-14-13-31-48-38-77-14-52-14-53 14-76 15-13 24-30 22-38-3-7-1-16 6-18 21-8-1-19-23-12-14 5-19 12-15 25 5 17-17 35-29 23-10-11-7-41 5-45 17-6 1-68-18-68-12 0-13-3-4-14 10-11 8-16-6-24-11-7-23-38-35-92-19-89-17-100 13-100 10 0 19-4 19-9 0-17-47-62-61-59-8 2-15-8-17-22-1-14-8-38-14-53-9-23-8-31 3-38 8-4 14-13 14-19s6-15 14-19c19-12 4-51-20-51-23 0-25-18-4-26 10-4 13-13 10-25-7-22 21-69 41-69 8 0 18-8 21-17 4-10 11-21 17-25 17-12 61-9 74 4 9 9 12 8 12-4 0-21 16-32 33-21 6 4 35 8 62 8 48 0 50 1 60 33 6 21 15 32 27 32 11 0 18 7 18 20s7 20 20 20c11 0 20 4 20 9s9 11 20 14c29 7 27 53-2 61-23 5-78-13-78-26 0-4-15-2-32 3-23 6-40 6-55-2-17-9-29-9-48-1-22 10-23 14-14 42 6 16 15 27 20 24 14-8 31 47 24 76-3 14-6 37-5 53 0 15-4 27-10 27s-8 10-4 24c3 13 1 27-5 30-16 10-13 26 4 26 8 0 15 5 15 10 0 6 8 10 18 8 13-2 18 5 20 35 2 22 8 37 15 35 7-1 24 6 40 16 33 22 37 62 7 71-24 7-27 25-5 25 16 0 65-46 65-61 0-5-6-9-13-9-8 0-19-22-26-52-29-121-29-121-72-114-41 7-58-6-39-29 7-8 9-26 5-43-8-41 11-54 68-46l47 7-6 38c-5 31-3 39 9 39 8 0 25 11 38 25 13 13 30 25 37 25 6 0 12 5 12 12 0 9 3 9 11 1s8-17-1-32c-9-17-8-22 5-27 8-3 15-12 15-20 0-7 12-17 26-20 21-5 24-11 20-30-5-18-2-26 11-31 9-4 19-1 21 5 6 19 30 14 42-8 6-11 17-20 24-20 8 0 16-9 19-20 3-13 10-18 21-14 12 5 16 1 14-17s3-25 20-27c12-2 22-10 22-18s6-14 14-14c9 0 13 8 9 23-4 20-3 21 10 5 11-14 16-15 26-5 10 9 14 9 21-3 27-47 36-53 57-40 29 19 52 7 46-23-6-31 27-55 49-34 7 6 20 12 28 12s17 11 20 25 12 25 20 25 16 10 18 23c2 12 7 22 12 22 11 0 50-41 50-52 0-4 6-7 13-5 14 2 14-3 3-55-5-24-13-35-21-32-7 3-15-5-19-20-3-14-13-26-21-26s-15-5-15-10c0-6-19-9-42-8-40 3-43 1-46-23-2-19 2-28 16-31 11-3 25-20 33-37 21-47 79-56 79-12 0 10 9 21 20 24s20 12 20 21 7 16 15 16 15 5 15 10c0 6-4 10-10 10-5 0-10 7-10 15s7 15 16 15c13 0 14 3 4 15-18 22-5 45 26 45 17 0 28 6 31 20 8 30 23 24 23-10 0-32 23-42 34-14 10 26 7 44-8 44-9 0-12 8-8 25 5 31 26 32 46 4 16-24 46-20 46 6 0 8 5 15 10 15 6 0 16 11 22 25s17 25 24 25 16 16 20 35c4 24 12 35 23 35 13 0 21 14 29 51 17 74 16 77-25 81-20 2-38 9-41 16-3 9 3 11 22 6 15-3 32-1 41 6 8 6 18 9 24 6 17-11 19 19 2 38-15 18-15 18 17 11 19-4 32-3 32 3 0 5 8 12 19 15 13 3 20 18 25 52 7 46 8 47 37 41 22-4 29-2 29 10 0 9 7 14 18 12 13-2 18 5 20 29 3 29 0 32-32 39-20 3-36 11-36 16 0 6 11 7 24 4 29-7 46 9 46 44 0 7 6 7 19 0 28-15 29-14 42 29 10 35 35 56 61 52 4 0 10 10 14 23 3 13 14 26 25 29s19 14 19 25c0 40 41 152 55 152 8 0 15 7 15 15s7 15 15 15 15 5 15 10c0 6 6 10 14 10s16 7 20 15c3 8 1 15-4 15-9 0-8 33 4 88 7 31 15 42 32 42 8 0 14 9 14 19 0 30 11 51 26 51 8 0 14 5 14 10 0 6 7 10 15 10 9 0 20 11 24 24 5 13 16 26 23 28 8 3 20 30 27 59 8 30 24 64 37 76 27 25 30 41 10 49-17 7-9 44 10 44 7 0 18 18 24 39 5 21 16 41 23 44 7 2 21 30 30 61 11 34 24 56 33 56 7 0 14 5 14 10 0 6 6 10 14 10s19 20 26 48c16 57 26 72 51 72 12 0 23 10 29 25 5 14 16 25 25 25 8 0 15 9 15 20 0 12 9 24 23 29 22 9 22 9-5 21-47 22-34 42 18 30 31-7 36-6 44 16 5 13 16 24 24 24 7 0 17 11 20 25 4 14 10 23 15 21 5-3 21 6 35 19 31 29 36 30 36 10 0-8 5-15 11-15s9-7 5-15c-3-8 1-18 8-22 7-5 17-19 21-31 6-21 4-23-13-18-16 5-23-1-35-33-20-48-30-55-78-52-27 1-41-4-51-17-7-10-20-21-29-24-9-4-19-19-22-35-3-17-17-35-37-46-39-23-54-57-31-73 26-20-3-44-44-37-31 5-36 3-45-23-6-15-14-47-17-72-4-26-12-46-22-50-30-11-71-63-71-88 0-17-7-28-20-31-11-3-20-12-20-21 0-8-12-26-26-39-21-19-25-30-20-53 3-16 1-32-3-35-5-3-15-28-22-55-7-29-18-50-26-50s-16-7-19-15c-4-8-12-15-19-15s-15-10-19-22c-9-35-8-38 15-38 12 0 23-8 26-20 3-11 9-20 14-20 18 0 8-32-11-37-23-6-25-16-8-42 9-15 9-25 0-46-7-14-17-23-22-20-6 3-10-1-10-10 0-13-6-15-30-10s-31 3-36-12c-4-10-16-26-28-36-19-15-19-19-6-30 24-18 13-42-26-57-23-10-36-22-40-39-12-53-17-66-33-78-14-11-14-12-1-13 12 0 11-4-4-15-16-12-17-17-6-30 10-12 10-15-4-15-9 0-16-4-16-9s-8-11-19-14c-12-3-20-17-25-46-3-24-13-44-22-48-23-8-37-52-23-69 17-20 4-41-29-49-31-6-33-11-49-104-3-22-12-35-25-39-11-3-21-17-25-35-4-17-14-32-25-35-26-6-19-36 10-40 24-4 31-22 7-22s-18-37 8-44c34-9 67-7 67 4 0 18 29 11 40-10 6-11 17-20 25-20 7 0 17-5 21-12 5-8-4-9-35-4-39 6-42 4-53-21l-11-28-6 34c-6 35-31 56-31 26 0-12-5-15-16-11-9 3-20 6-25 6-4 0-6 6-3 14 3 7-2 16-11 19-11 5-14 14-9 32 3 14 2 25-4 25-16 0-33-27-39-63-4-29-1-38 16-49 11-7 21-18 21-25 0-6 19-16 42-20 23-5 43-14 46-21 3-10-5-12-33-6-32 6-37 4-42-15-8-29-19-26-18 6 0 14-5 28-12 30-16 6-28-44-14-60 8-10 7-19-5-33-13-15-15-16-10-2 7 25-15 76-37 82-16 4-16 7-5 26 11 17 11 22-2 30-8 6-22 9-30 7-18-3-33-69-17-79 6-4 8-11 3-15s-11-2-13 5c-3 6-11 12-19 12s-11-6-8-15c7-17-21-21-31-5-8 13-45 13-45 0 0-5-3-9-7-8-5 1-21-6-37-17s-38-19-49-20c-16 0-24-12-39-60-20-68-15-78 41-90 29-6 33-5 27 10-19 51-19 65 3 65 12 0 21 5 21 12 0 20 17-4 24-34 5-21 3-28-8-28s-9-6 7-23c27-27 69-47 102-47 14 0 29-8 35-20s21-20 36-20c17 0 28-7 31-19s17-21 39-25c18-4 40-17 49-29 8-12 15-19 15-16 0 4 37-3 83-15 105-27 163-24 171 10 4 13 12 23 18 21 7-1 17 8 23 21 8 19 16 22 38 18 20-4 27-2 27 10 0 11 6 13 23 8 12-4 30-7 40-6 13 1 17-7 17-33 0-36 6-40 70-47 16-2 24-9 23-18-2-10 13-20 45-30 43-14 47-17 45-45-2-24 4-35 33-54 20-14 48-41 62-60 15-20 29-38 32-41 9-8 60-119 60-130 0-6 4-10 9-10s12-9 16-19c3-11 19-22 35-26 40-9 52-27 49-75-3-31 1-44 14-51 21-12 63 13 70 41 6 25 32 25 78 2 35-18 36-18 80 5 24 12 65 28 91 34 30 8 50 20 53 31 5 13 13 16 36 11 19-4 29-1 29 7s8 10 25 6c30-8 52 10 75 58 12 25 20 30 43 28 15-2 27 1 27 7s12 8 30 5c17-4 30-3 30 2 0 14 55 35 73 28 12-4 18 2 23 20 4 19 13 26 31 26 25 0 85 28 91 43 2 4 12 7 23 7 14 0 19 7 19 25s5 25 19 25c13 0 21 8 23 23 2 16 9 21 23 19 26-5 27-6 19-26-3-9-12-16-20-16-7 0-16-11-20-25-3-14-12-25-20-25s-14-4-14-8c0-5-16-14-35-22-22-9-31-16-23-21 22-14-12-41-43-35-37 7-79-25-62-46 11-13 10-35-3-77-4-11-7-11-20 0-14 11-18 10-30-6-16-21-19-61-5-70 5-3 12-1 16 5 9 15 25 12 25-5 0-8 5-15 10-15 6 0 10-5 10-10 0-6-12-9-27-8-20 2-28-2-28-12 0-19 203-63 222-48 13 10 57-8 49-20-3-5 9-9 25-10 20-2 29 2 29 12 0 22 34 38 49 23 9-9 14-9 20 2 7 11 12 9 21-9 11-20 14-21 24-9 12 17 41 31 69 34 10 1 24 11 32 22 14 20 75 37 75 21 0-4-4-8-9-8s-11-9-14-20c-3-13-14-20-29-20-26 0-89-35-101-56-5-9-14-11-31-4-13 5-26 6-30 3-9-9 14-43 30-43s95-47 106-63c4-6 10 1 13 15 8 31 40 42 91 32 20-4 34-2 34 4 0 5 9 12 20 15 15 4 18 10 13 24-7 17-6 17 11 1 24-24 77-23 110 3 14 11 31 17 36 14 6-4 17-1 25 5s23 9 34 5c21-6 47 25 33 40-4 5 1 5 11 2 11-4 20-1 23 8 4 8 12 15 20 15s14 5 14 10c0 11 30 13 54 4 9-3 16-15 16-25 0-27 10-24 52 16 20 19 41 35 47 35s11 4 11 10c0 5 21 20 48 32 26 12 48 26 50 30s10 8 18 8 14 5 14 10c0 6 9 19 21 31 27 27 19 45-23 54-32 8-32 8-10 18 13 6 22 19 22 33 0 13 9 28 21 34 15 9 19 18 15 35-4 14 0 27 9 35 21 18 19 51-5 57-10 3-22 14-25 24-4 10-13 19-20 19-8 0-16 4-19 9-9 14 4 41 20 41 8 0 14 7 14 16s9 18 20 21c24 6 24 5 1 54-13 27-18 51-14 74 4 24 2 35-7 35-7 0-10 6-7 14s-1 17-9 20c-10 4-13 13-8 30 6 25-20 66-43 66-19 0-24 16-12 46 8 23 7 31-6 40-12 9-13 17-5 40 9 23 7 36-11 71-13 26-31 46-45 49-22 6-35 29-39 69-4 32-17 65-26 65-5 0-9 4-9 10 0 15-42 60-57 60-7 0-13 11-13 26 0 48-17 65-56 58-27-5-34-3-34 10 0 9-5 16-11 16-8 0-9 15-5 45 5 29 4 45-3 45-6 0-11 7-11 16 0 13-7 15-40 9-26-4-40-3-40 4 0 6 7 8 15 5 18-7 19 12 3 49-7 14-22 28-33 29-15 2-20 11-20 32 0 27-5 31-42 40-44 12-67 26-40 26 25 0 49 101 27 115-6 4-8 11-5 16 4 5-1 12-9 15-9 3-16 12-16 19 0 8-9 16-19 20-10 3-21 14-24 24-3 13-18 20-51 25-36 6-46 11-46 27 0 10-4 19-10 19-5 0-10 6-10 14s-6 16-12 19c-9 3-8 9 5 18 15 12 16 18 5 41-7 16-18 28-25 28-8 0-6 15 5 51 11 34 13 52 6 57-6 4-17 22-25 40-8 17-18 32-23 32s-6 14-2 30c3 17 1 30-4 30-6 0-10 14-10 30 0 17-4 30-10 30-5 0-10 6-10 14 0 15-45 30-60 21-6-4-10-13-10-22 0-11-5-9-18 8-17 21-18 26-5 71 18 60 12 84-15 67-29-18-56-4-48 26 21 84 21 78-8 73-14-3-26-1-26 4 0 4-11 14-25 20-22 10-25 16-20 40 5 21 3 28-9 28-18 0-40-36-30-51 4-8 0-8-14 0-11 6-29 11-40 11s-22 9-25 20c-3 14-14 20-31 20-14 0-26-5-26-11 0-5-5-7-11-3-6 3-15 0-20-7-13-20-11-29 6-29 11 0 12-5 5-26-12-31-6-44 21-44 11 0 18-4 15-8-10-16-64-1-62 16 1 10-8 18-21 20s-23 7-23 12c0 20 13 40 26 40 8 0 14 6 14 14 0 7 10 20 23 29 18 12 20 18 10 28-7 7-13 21-13 30 0 10-6 19-12 22-10 4-10 7-1 18 9 9 22 10 50 3 37-9 38-10 35-52-3-40 9-55 24-31 3 6 17 9 30 6 28-5 42 9 25 26-16 16-14 30 4 23 9-3 19 3 25 15 10 17 7 20-20 26-20 3-29 10-26 19 3 7-2 15-10 18-9 3-13 10-9 15 3 6-1 13-8 18-8 4-22 23-31 42-13 24-21 30-29 22-6-6-19-11-28-11-12 0-19-12-24-40-4-22-11-37-16-34-6 3-7 14-4 23 3 10-1 23-8 30-8 6-12 22-9 36 3 16 0 25-8 25-7 0-10 7-7 15 8 19-11 31-26 16-14-14-28-14-24 0 2 13-51 31-65 23-17-10-8-53 12-59 23-7 27-25 5-25-8 0-15-4-15-10 0-5-7-10-15-10s-15-5-15-10c0-7-13-8-35-4s-41 2-50-6c-19-15-20-1-5 50 9 30 8 37-10 52-32 26-26 50 13 46 20-2 32-8 32-18 0-8 8-16 18-18s17 3 17 12c0 8 9 21 21 29 11 8 28 41 39 76 16 53 16 62 3 69-12 7-13 16-3 52 12 44 5 60-32 72-5 2-3 18 3 37 9 27 9 35-2 42-27 17-54 5-63-28-6-17-17-34-27-36-9-3-19-19-23-41-6-30-10-35-24-27-9 5-36 12-59 16-34 5-43 11-43 27 0 17 6 19 42 16 34-2 43 0 46 15 2 9-2 17-9 17-17 0-56 44-51 58 2 7-2 12-8 12-8 0-11 10-7 30 5 22 2 32-11 39-9 6-14 11-9 11 4 0 0 11-9 26-22 33-77 31-82-3-2-13 1-23 7-23s11-9 11-20 5-20 10-20c6 0 10-8 10-17 1-17 2-17 14 0 19 25 28 6 13-26s-25-37-55-26c-22 8-23 13-17 58 6 44 4 51-14 61-29 15-29 54-1 45 30-9 50 12 50 51 0 24-5 34-15 34-8 0-15-5-15-12 0-6-3-8-6-5-10 10-58-32-64-56-5-21-50-39-50-20 0 10 27 131 36 161 5 16 2 22-10 22-9 0-16 4-16 10 0 17-34 90-42 90-5 0-8 6-8 14s-7 17-16 20c-22 9-54 7-54-2 0-15 25-62 33-62 4 0 7-7 7-15s6-15 13-15c22 0 38-16 31-33-3-9-12-17-20-17s-14-4-14-10c0-5-5-10-11-10s-17-7-25-15c-17-17-44-20-44-5 0 6 6 10 14 10 20 0 30 32 13 42-9 5-13 18-10 35 3 20 2 24-5 15-8-12-13-12-31 0-12 7-20 20-19 28 2 8-6 20-17 26s-19 16-18 22c2 7-2 12-7 12-6 0-10 9-10 19 0 12-9 21-25 25s-22 11-19 21c4 11-4 16-34 21-33 5-41 11-53 41-11 28-17 33-36 28-13-3-23-1-23 5 0 5-7 10-15 10s-15 5-15 10c0 6 9 10 20 10s20 5 20 10c0 6 7 10 15 10 17 0 20 26 5 35-6 4-8 15-5 26 4 10 3 24-2 31-4 7-8 24-8 38 0 21-5 26-32 28-20 2-33-1-33-8 0-6-4-9-9-6s-14-1-21-9c-16-19-40-8-40 20 0 32-20 42-37 19-8-10-17-17-21-16-4 2-11-10-17-27-11-36-28-42-19-7 9 38-12 65-56 72-29 5-40 11-38 22 4 21-51 36-59 16-7-20-20-17-26 6-3 11-12 20-21 20s-16 8-16 20c0 11-3 19-7 18-5-1-25 2-45 6-39 8-59-3-87-49-9-14-11-15-7-3 3 10-2 22-12 27-14 9-13 10 10 11 28 0 52 28 40 47-4 6-17 13-29 17-19 6-25 2-33-18-5-14-16-26-25-26-8 0-15-4-15-10 0-5-7-10-15-10s-15-5-15-11c0-7-11-9-29-6-24 5-30 2-35-16-3-12-1-26 4-31s5-19-1-34c-7-19-6-27 7-36 18-14 16-67-4-74-7-2-10 2-6 11 3 8-1 17-9 20-9 3-13 14-10 30 4 19 0 27-16 32-12 3-25 14-30 24-6 11-32 23-66 30-36 8-64 22-78 37-11 13-31 24-43 24-13 0-26 5-29 10-3 6 1 10 9 10s18 9 21 20c7 22 21 26 27 8 5-13 87-40 100-32 4 3 8 18 8 33 0 20-6 30-20 34-11 3-20 12-20 21s-4 16-10 16c-5 0-10 7-10 16 0 13-6 15-27 10-16-4-33-13-38-21-7-8-21-11-38-8-16 3-27 1-27-6 0-6-7-11-15-11-7 0-18-7-23-16-6-11-11-13-16-5-4 6-13 11-20 11-16 0-28-62-14-71 5-3-2-13-16-23-23-14-26-15-26-1 0 18-46 39-68 30-7-3-23 2-35 10-29 20-34 19-41-7-3-13-19-29-37-37-30-13-33-12-51 10-13 16-21 20-25 12-7-18-53-16-53 2 0 17-29 34-47 28-7-2-15-20-19-39-7-38-7-38-50-25-27 7-36 5-57-15-30-28-37-30-37-9 0 20-41 36-57 23-7-6-13-19-13-30 0-14-5-18-16-14-9 3-19 6-24 6-4 0-7 8-6 18 1 12-8 18-28 20-23 3-27 0-23-12 4-11-1-18-18-22-14-3-25-10-25-15 0-10-49-34-63-31-4 1-10-5-13-13-4-8-12-15-20-15s-14-4-14-9c0-16 25-29 84-41 48-10 60-10 68 2 7 9 8 4 4-15-5-19-2-29 9-33 8-3 12-10 9-16-3-5 1-15 11-21 13-10 14-18 6-40-6-15-15-27-21-27s-8 4-5 10c22 35-143 104-185 78-21-14-105 6-95 23 4 5-1 12-9 15-9 3-16 12-16 20s-8 14-19 14c-14 0-21-10-25-35-7-34-26-49-26-20 0 8-5 15-11 15-7 0-8 11-4 30 6 25 3 31-17 39-25 10-48-2-48-25 0-8-4-14-9-14s-4 20 1 46c6 29 7 49 1 53-5 3-13 14-16 25-6 15-13 17-40 12-17-4-42-7-54-8-17 0-25-9-33-37-6-24-6-37 0-39s10-11 10-19c0-9 8-22 18-29 15-11 13-12-17-11-31 2-35-1-43-30-10-38-24-41-88-18-23 8-46 12-52 9-5-3-12 3-15 15s-9 21-14 21-9 9-9 19c0 11-5 21-12 23-8 3-8 12 1 38 8 23 8 36 1 38-5 2-10 14-10 26 0 13-11 28-27 38-30 17-32 18-63 18-13 0-18 5-14 15 7 17-21 21-31 5-3-5-12-7-19-4s-16-2-19-10c-5-12-12-13-37-5-16 6-30 15-30 20 0 4 7 6 15 3 8-4 15-1 15 5s7 11 15 11c19 0 38 69 23 87-8 10-7 13 2 13 7 0 19 8 27 18 13 16 14 15 8-5-8-28 25-47 90-52 6-1 4-5-3-9-9-6-6-12 13-20 21-10 27-9 31 2 10 26-1 51-24 54-12 2-19 8-16 14 4 6 2 13-4 17-8 4-8 20-1 50 5 25 8 50 5 58-6 15-36 18-36 3 0-5-7-10-15-10-9 0-12-6-9-15 4-9 1-15-7-15-20 0-34 12-42 33-4 10-15 17-24 15-14-2-19 5-21 30-3 32-15 41-27 22-10-16-22-12-28 10-3 12-14 20-26 20-15 0-19 4-14 16 4 10 0 20-10 26-9 4-14 14-11 22 3 7-2 19-11 26-13 11-22 10-55-8-40-21-56-18-40 8 15 25-7 39-43 29-40-11-37-12-37 5 0 8-16 20-36 26-30 10-34 14-20 22 46 26-17 60-114 62-44 1-45 1-26 20 14 14 17 28 13 59-3 22-11 44-19 48-7 5-13 14-13 21s-17 17-37 22c-30 8-36 13-35 34 2 21-4 27-32 34-42 11-59-3-68-55-6-39-4-41 79-70 24-9 12-37-16-37-12 0-60 10-106 21-59 15-85 18-88 10-2-6-10-11-18-11s-14-4-14-10c0-5-9-10-20-10s-20-4-20-10c0-5-7-10-15-10s-15-4-15-10c0-5-4-10-10-10-24 0-7 30 27 47 49 26 63 70 30 95-12 9-22 20-22 25 0 4-11 19-24 32-16 16-26 20-30 12-6-8-16-8-40 0-24 9-35 9-44 0-6-6-19-11-28-11-13 0-19-10-21-32-3-29-7-33-35-36-33-3-42-15-22-27 6-4 8-13 5-21s1-14 8-14c8 0 16-8 20-17 3-10 9-24 12-30 3-7 1-13-4-13s-12 9-15 20c-6 23-57 29-57 6 0-7-6-19-13-25-10-8-19-4-35 18-20 28-21 32-7 77 8 26 14 50 13 53-2 20 4 31 17 31 9 0 18 6 21 14 4 11 12 13 30 6s26-5 33 8c8 14 14 15 40 5 30-11 32-10 47 25 8 20 13 41 10 48-7 18-57 24-63 8-3-8-11-14-18-14s-15-4-17-9c-5-16-98 8-98 25 0 20-13 17-30-6-18-25-34-25-51-1-16 22-59 38-59 22 0-6-9-11-20-11s-20-3-21-7c-3-31-11-59-20-68-7-7-8-2-4 16 5 19 1 33-11 48-19 22-44 28-44 11 0-5-6-7-14-4-7 3-16-2-19-10-8-21-37-9-37 14 0 10-7 21-15 24-13 4-14 10-5 26 7 13 7 20 0 20-5 0-10-3-10-8zm360-102c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-240-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm202-30c19 0 24-15 10-24-11-7-52 22-52 37 0 8 3 8 12-1 7-7 20-12 30-12zm-243-19c24-18 22-41-4-41-7 0-15-7-19-15-6-17-36-9-36 10 0 21 19 65 27 65 5 0 19-9 32-19zm131-31c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm320-30c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-537-17c-7-2-19-2-25 0-7 3-2 5 12 5s19-2 13-5zm677-18c7-9 10-18 7-21-10-10-47 7-47 22 0 19 24 18 40-1zm-120-25c0-5-6-10-14-10s-18 5-21 10c-3 6 3 10 14 10 12 0 21-4 21-10zm-740-17c0-7-33-32-42-33-12 0-9 25 3 37 11 11 39 7 39-4zm200-24c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm195-8c-7-23-25-29-25-8 0 14 21 39 28 33 2-3 1-14-3-25zm-538 5c4-7 24-22 43-32 27-14 31-19 17-22-10-2-29 3-42 12s-31 16-39 16c-18 0-29 16-21 30 9 14 33 12 42-4zm396-52c-10-7-24-14-30-14-7 0-13-4-13-10 0-5-6-10-14-10-21 0-8 34 17 46 12 5 30 8 40 6 17-4 17-5 0-18zm-183 6c0-5-9-10-20-10s-20 5-20 10c0 6 9 10 20 10s20-4 20-10zm86-36c-3-7-1-16 4-19 12-7 13-25 2-25-5 0-16 6-26 13-16 11-17 17-7 36 13 23 36 19 27-5zm361-1c20-30 18-81-2-102-12-13-18-11-39 12-29 31-51 34-64 10-6-10-16-14-26-10-20 8-21 47-1 47 9 0 18 7 21 15 4 8 10 12 15 9s12 2 15 11c4 9 12 14 19 11 8-3 16 2 19 10 8 21 24 17 43-13zm143-8c0-8 7-15 15-15s15 5 15 10c0 6 9 10 20 10 28 0 29-69 1-77-26-7-35-45-14-60 16-13 16-14-9-17-6 0-22-21-35-46-23-43-43-63-43-42 0 15 34 72 43 72 4 0 7 7 7 15s-7 15-16 15c-8 0-13 4-9 9 3 6-2 14-11 19-16 9-15 11 3 20 26 14 35 48 18 62-8 6-11 18-8 26 7 19 23 18 23-1zm-1313-6c8-8 6-22-6-50-9-21-18-39-21-39s-10 12-17 26c-20 44 14 93 44 63zm1503-4c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm252-10c6-14 15-25 19-25s5-9 2-21c-4-15-11-19-26-15-26 7-47-10-47-37 0-16-3-18-12-9-21 21-38 13-38-18 0-36 27-52 45-27 15 21 29 22 44 3 9-10 8-16-4-26-24-20-10-26 59-28 52 0 64 2 59 14-3 8 0 14 6 14s12-10 12-22c1-17 2-19 6-5 5 19 18 22 28 7 3-5 21-10 38-10 23 0 35-6 42-22 6-12 17-22 26-24 9-1 26-5 38-9 13-4 21-2 21 5s14 10 38 7c28-2 36-7 34-20-2-9 2-17 8-17 5 0 2-8-9-19-12-12-27-17-45-14-17 4-26 1-26-7 0-9-10-11-31-6-17 3-39 1-50-4-17-10-19-7-19 20 0 16-4 30-10 30-5 0-10 7-10 15 0 13-7 15-35 9-27-5-35-3-35 9 0 8-14 20-30 26-25 8-32 7-37-4-3-8-11-15-19-15s-14-3-14-7c0-5-11-13-25-19-20-10-25-9-27 5-2 9-12 16-23 16-16 0-19 6-17 32 3 24-1 33-16 37-11 4-24 6-28 5-20-3-34 2-51 19-23 23-73 45-73 32 0-6 7-10 15-10 18 0 19-14 4-41-11-21-34-16-25 6 3 8 0 15-7 18-9 3-9 10 1 31 10 22 9 28-3 32-8 4-15 13-15 21 0 11-7 13-25 9-23-6-25-4-25 29 0 19 4 35 10 35 5 0 7-6 4-14-6-15 5-20 69-31 23-4 37-2 37 5 0 5 7 10 15 10s15 5 15 11 7 9 15 5c9-3 15 0 15 10 0 12 6 15 23 10 13-3 36-1 52 3 44 13 44 13 57-14zm-1108-16c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm571 12c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-1055-21c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm100-8c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm691-35c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-766-17c-10-11-13-20-8-20 10 0 23-32 20-47-1-4-12-6-24-5-13 2-23-1-23-7s-7-11-15-11-17-11-21-25c-3-14-12-25-20-25s-14-10-14-24c0-19-4-23-20-19-11 3-20 0-20-6 0-12-29-15-54-5-9 3-16 12-16 20s-9 14-19 14c-19 0-38 17-29 25 2 3 21-1 43-8 30-9 39-9 43 1 2 7 10 12 18 12s14 5 14 10c0 6 7 10 15 10s15 4 15 9 7 11 17 13c9 2 21 18 28 37 7 22 23 41 45 53 44 23 47 23 25-2zm513-12c-6-18-28-21-28-4 0 9 7 16 16 16s14-5 12-12zm77-5c8-22 4-29-15-24-20 4-21 6-14 25 8 21 20 20 29-1zm368-21c7-36-5-47-27-23-11 12-15 27-11 40 8 27 32 17 38-17zm-1238-2c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm2095-6c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-2139-7c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm509 3c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1530 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-2075-16c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm1095-4c0-9-9-14-20-13-25 2-26 14-2 20 9 3 18 5 20 6 1 0 2-5 2-13zm-606-31c-4-8 1-17 10-21 9-3 16-12 16-20s5-14 10-14c6 0 10-7 10-16 0-8-5-12-10-9-6 4-18 1-27-7-15-12-16-10-10 14 6 21 3 30-13 38-16 9-18 15-10 30 12 23 32 27 24 5zm799-5c-5-19-36-44-56-45-4 0-12-6-16-14-7-11-15-11-41-2-28 9-35 8-46-7-8-10-13-12-14-4 0 6-7 12-16 12s-14 6-11 13c2 7 20 12 44 11 32 0 40 3 36 14-5 11-1 13 16 7 14-4 23-2 27 9 3 8 12 12 20 9s14 0 14 6 11 11 24 11c19 0 23-4 19-20zm997 10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-1704-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm135 4c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm115 14c-6-10 49-61 65-61 5 0 9-6 9-14s6-16 13-19c20-7 0-19-21-13-11 4-23 17-26 29-6 21-7 21-20 5-19-26-45-22-56 8-13 33-13 34 4 34 7 0 16 9 19 20s8 20 12 20c3 0 4-4 1-9zm1524-1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2360-34c0-22 19-30 35-16 12 10 15 9 15-3 0-34-11-47-31-37-15 9-20 6-25-15-7-26-19-31-44-15-13 8-12 10 3 10 23 0 33 26 17 45-10 12-10 18 0 30 16 19 30 19 30 1zm-100-6c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm460-10c0-13-11-13-30 0-12 8-11 10 8 10 12 0 22-4 22-10zm304-21c14-7 23-16 20-21s-1-15 6-22c8-11 5-17-18-29-51-25-75 3-50 58 13 29 10 28 42 14zm393-14c9-20 8-25-2-25-15 0-45 27-45 41 0 20 36 8 47-16zm-1147 5c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1520 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm214 2c2-4 1-14-4-22-7-11-12-12-21-3-6 6-8 16-5 22 8 13 23 14 30 3zm806 4c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-40-14c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-1092-35c2-12-3-17-17-17-15 0-21 6-21 21 0 25 33 22 38-4zm-1771-13c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm740 1c-7-14-17-25-24-25-8 0-8 6 0 25 7 14 17 25 24 25 8 0 8-6 0-25zm912 16c7-5 9-11 5-14-10-5-54 9-54 18 0 8 34 6 49-4zm176-1c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm645 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-109-19c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm64 4c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-1485-11c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1197-30c3 0 3-6 0-14-3-7-2-17 3-22 10-11-5-54-19-54-5 0-13 20-16 44-5 32-12 46-26 49-10 3-19 10-19 16 0 8 12 6 36-4 20-8 39-15 41-15zm-1572 0c-4-12-1-27 5-35 10-12 9-15-4-15-9 0-16-3-17-7-1-8-3-20-14-80-3-18-10-35-14-38-14-8-41 6-41 21 0 8-5 14-11 14-8 0-9 11-4 33 14 64 12 72-17 75-16 2-28-2-28-8 0-7-8-9-20-5-27 9-26-8 2-20 12-6 24-16 26-24 3-8-12-4-39 13-37 22-43 30-41 53 2 16 6 30 8 32 3 3 38-2 79-11 41-8 75-12 75-9 0 6 38 27 53 30 5 0 5-8 2-19zm1460-20c8-12-25-13-44-1-21 14-4 33 19 21 10-6 22-15 25-20zm347-6c-4-34-16-49-31-40s-14 49 1 64c19 19 33 8 30-24zm-2366 11c18-17 10-55-11-55-17 0-27 27-20 51 8 23 12 23 31 4zm1245-8c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm164-44c0-28-5-39-18-41-16-3-17-1-7 17 12 23 6 41-13 41-7 0-7-4 2-9 12-8 9-11-12-16-15-4-24-11-21-16s-3-12-13-16c-10-3-27-14-38-24-17-15-23-16-39-4-17 13-18 15 0 55 17 39 21 42 51 37 27-5 36-1 49 18 15 22 18 23 38 10 16-11 22-24 21-52zm-586 48c10-7 11-13 2-30-15-27-35-28-28-1 3 11 1 20-5 20-5 0-6 5-3 10 7 12 16 12 34 1zm738-37c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm683 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm440 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm196-17c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-2117 3c10-12 8-17-8-25-27-15-31-14-31 7 0 33 20 42 39 18zm431 6c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-310-12c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm570 1c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-1846-54c-7-20-18-21-45-7-28 15-24 33 6 26 16-4 25-2 25 6s3 9 10 2c6-6 8-18 4-27zm3131 17c22-15 25-15 31-1 5 13 10 14 30 5 43-20 32-29-41-32-12-1-21-9-23-23-2-15-8-19-23-16-22 6-26 23-4 23 17 0 20 25 5 35-10 6-14 25-5 25 3 0 17-7 30-16zm-2860-4c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm1705 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-730-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm197-7c7-19-11-21-29-3-17 16-17 17 4 15 12-1 23-6 25-12zm146-35c18-11 1-21-22-13-24 7-27 25-8 44 10 10 13 9 16-6 2-10 8-21 14-25zm829 27c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm-1882-10c0 4 11 0 25-9 22-15 25-15 33 1 8 13 12 10 27-20 16-35 16-37-5-65l-22-30-34 20c-38 22-44 38-14 38 11 0 20 7 20 15s-4 15-8 15c-12 0-52 35-52 45 0 4 7 2 15-5s15-9 15-5zm500 7c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm2260-14c0-16-41-78-51-78-12 0-11 7 2 31 7 15 7 24-1 34-7 8-9 18-6 23 7 12 56 3 56-10zm-323 0c14-18-12-78-33-78-10 0-14 6-11 14 3 7 1 18-5 24s-5 17 4 31c15 24 31 27 45 9zm2443-28c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5508-32c-15-15-24-6-16 16 5 12 10 14 17 7 8-8 8-14-1-23zm918 7c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1141-18c-8-8-11-7-11 4 0 20 13 34 18 19 3-7-1-17-7-23zm513 0c-7-18-24-23-24-8 0 22 13 42 22 33 5-5 6-16 2-25zm-1246 4c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm1832 9c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm55-19c-7-23-25-29-25-8 0 14 21 39 28 33 2-3 1-14-3-25zm-2370-1c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm1960 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm2535 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-4097-7c4-3-1-12-11-20-9-8-11-12-4-8s24-1 38-10c30-20 46-11 18 10-13 10-15 14-5 15 26 0 40-31 28-64-13-39-11-38-30-30-9 3-13 12-11 19 3 8-10 24-33 39-21 14-32 26-25 26 6 0 12 7 12 15 0 16 12 20 23 8zm647-9c0-17-22-14-28 4-2 7 3 12 12 12s16-7 16-16zm1076-11c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-2772 11c23-9 20-24-4-24-11 0-20 7-20 15 0 17 2 18 24 9zm1386 0c0-15-22-44-31-39-11 7 7 45 21 45 6 0 10-3 10-6zm762-16c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm2616 4c2-7-3-12-12-12s-16 7-16 16c0 17 22 14 28-4zm-2273-2c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-175-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm389 1c8-5 11-16 6-30-8-27-35-28-28-1 3 12 0 20-6 20-7 0-9 5-6 10 8 12 16 12 34 1zm-3034-11c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1322-4c-3-8 1-17 9-20 9-3 12-10 9-16-8-13-18-13-40 4-16 12-17 16-6 30 17 20 35 21 28 2zm513 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4242-23c-2-9 2-17 8-17 5 0 10-7 10-15s6-15 14-15c9 0 12-7 9-20-4-15 0-20 15-20 12 0 24-5 28-11 5-8-1-10-18-6-28 7-45-7-45-36 0-10 10-20 24-23 13-4 22-11 20-18-5-12-11-12-39-1-12 5-17 0-20-17-2-15-10-23-23-23-14 0-19 6-17 20 2 11 6 44 9 73 5 49 4 52-17 52-18 0-21 4-17 21 3 12 1 29-5 39-6 9-9 24-5 33 8 22 73 7 69-16zm-5481 0c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm1459-17c-8-15-15-19-22-12s-6 17 2 32 15 19 22 12 6-17-2-32zm4070 19c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-624-16c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-3861 7c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm599-16c3-9 0-14-7-13-6 1-25-3-40-9-35-15-57-15-57-2 0 6 10 10 23 10 12 0 28 9 35 20 13 21 37 18 46-6zm2810 1c20-9 34-20 31-25-8-13-35-13-35 0 0 6-3 9-7 8-15-3-43 14-37 23 7 11 5 12 48-6zm-4234-5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1736-37c-6-6-56 16-56 25 0 20 15 21 37 0 12-12 21-23 19-25zm285 14c-8-8-11-7-11 4 0 20 13 34 18 19 3-7-1-17-7-23zm2752 2c9-10 16-24 15-31-2-7 7-17 20-23 12-5 22-14 22-20 1-22 50-55 99-67 38-9 51-16 51-30 0-10 6-18 14-18s21-3 30-6c11-4 19 2 26 21 13 34 47 31 42-4-2-13 1-27 6-30s6-26 3-51c-6-44-7-45-39-42-18 2-32-1-32-7 0-13-27-15-34-2-3 5-3 24 1 42 6 30 7 31 14 11 10-28 25-28 39-1 18 32 5 47-47 55-26 4-59 11-72 16-15 5-28 5-36-2-12-10-54-7-97 6-10 3-18 1-18-3 0-5-7-18-16-29-15-18-15-18-10 7 7 32-19 62-30 35-3-9-12-16-19-16s-15-9-18-20c-6-23-27-27-27-5 0 17-27 20-32 4-3-8-15-9-37-4-29 6-32 9-26 36 4 18 3 29-4 29-6 0-11 4-11 9s9 7 20 4 20-11 20-19c0-21 22-28 32-10 5 9 16 16 23 16 8 0 15 4 15 9 0 4 20 4 44-2 24-5 52-7 61-3 16 6 16 8 2 24-9 9-16 22-16 27 0 6-13 14-30 19-27 8-31 13-31 45 0 21 5 42 11 48 14 14 49 5 72-18zm-5219 0c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm3421 11c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-3730-10c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm70 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm2275 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2555-19c3-5 1-12-4-15s-11 1-15 9c-6 16 9 21 19 6zm1155 1c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm1254-6c-3-8-12-12-20-9s-14 0-14-6-4-11-9-11c-6 0-9 9-8 20 1 15 8 20 29 20 20 0 26-4 22-14zm-1542-21c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm2478 9c0-13-21-44-30-44-14 0-12 24 2 38 13 13 28 16 28 6zm273-19c-3-8-11-15-19-15s-14-4-14-10c0-5-4-10-10-10-18 0-10 29 12 44 24 17 40 13 31-9zm1625 19c12-4 22-12 22-20 0-7 23-20 52-29 47-14 54-14 64 0 9 12 16 12 42 3 18-7 32-18 32-25s4-13 10-13c11 0 9-34-3-37-21-7-66 11-70 29-8 27-31 17-35-15-3-23-6-25-30-17-15 5-44 11-64 15-27 4-36 10-32 20 4 9-3 16-21 21-21 5-25 11-21 28 3 11 6 27 6 34 0 13 13 15 48 6zm-1332-20c-3-9-6-18-6-20s-7-4-15-4c-13 0-13 3-3 20 15 24 33 27 24 4zm2744-9c0-16-6-25-16-25-11 0-14 5-10 16 3 9 6 20 6 25s5 9 10 9c6 0 10-11 10-25zm-6000-5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2593-36c-3-8-8-14-13-14-14 0-42 39-35 49 9 16 55-17 48-35zm535 38c9-6 10-16 3-33l-9-24-11 28c-16 40-12 47 17 29zm2152-2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3838-32c-6-6-15-9-18-5-4 3-4 14 0 23 5 13 9 15 18 6s9-15 0-24zm478 18c0-15-18-31-26-23-7 7 7 37 17 37 5 0 9-6 9-14zm1290 6c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-3032-37c-11-25-28-34-28-15 0 17 23 49 32 44 4-3 2-16-4-29zm1979-5c1-19-3-30-11-30-22 0-34 23-25 47 11 31 34 20 36-17zm238 30c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1215 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm1830-2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5357-6c7-7-13-54-23-54-15 0-18 13-8 36 11 24 20 29 31 18zm307-9c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm5097-4c15-24 6-33-18-20-10 5-16 16-13 24 8 20 17 19 31-4zm-5582-11c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm3825-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-4480-16c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm182-9c6 0 8-13 6-30-3-20 0-30 9-30 16 0 17-34 1-61-11-17-10-22 5-30 20-12 23-39 3-39-8 0-20 14-28 30-7 17-16 30-20 30-5 0-8 7-8 15s-4 15-10 15c-5 0-10 7-10 15s-4 15-10 15c-5 0-10 5-10 10 0 6 6 10 14 10 12 0 17 10 31 63 6 20 8 21 12 5 2-10 9-18 15-18zm1715 4c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm693 16c0-5-6-10-14-10s-18 5-21 10c-3 6 3 10 14 10 12 0 21-4 21-10zm-1570-10c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm3110 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm2524 4c11-4 14-13 10-29s0-26 13-33c29-16 11-22-28-9-34 12-38 22-24 65 5 14 7 14 29 6zm-6052-19c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm1452-6c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm2336 11c0-5-6-10-14-10s-18 5-21 10c-3 6 3 10 14 10 12 0 21-4 21-10zm-3904-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm448 6c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm590 6c11-8 17-18 14-21-11-10-48 7-48 22 0 18 10 17 34-1zm606 5c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm1584-5c-4-8-10-12-15-9-14 8-10 24 6 24 9 0 12-6 9-15zm-214-6c0-6-5-19-10-30-9-15-15-17-30-9-26 14-26 30 0 30 11 0 20 5 20 10 0 6 5 10 10 10 6 0 10-5 10-11zm-2845-17c-3-3-11 0-18 7-9 10-8 11 6 5 10-3 15-9 12-12zm375 8c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2570-4c0-7-8-20-17-27-15-12-16-12-10 4 4 10 7 23 7 28s5 9 10 9c6 0 10-6 10-14zm1035 6c6-4 11-22 12-40 1-31-1-33-23-28-18 5-24 2-24-10 0-10-3-14-7-11-3 4-15-1-26-10-17-16-19-16-16-1 2 9-7 25-19 37-27 23-22 42 8 34 11-3 20 0 20 6s9 11 19 11c11 0 23 5 26 10 7 12 16 12 30 2zm146-15c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm311-29c-7-24-11-29-16-17-4 8-2 29 5 45 15 37 23 16 11-28zm-2652 32c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2410 3c0-5-4-15-10-23-11-18-25-7-17 15 6 15 27 21 27 8zm640-3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1031 0c6 0 8-4 5-9-8-12-46-2-46 11 0 6 7 7 16 4s20-6 25-6zm-6587-24c-3-8 0-17 5-21 11-6 6-25-7-25-4 0-16 7-26 15-19 14-19 15-1 35 19 21 38 18 29-4zm2776 14c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2384-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm144 12c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm3596-1c-3-9-6-21-6-27 0-12-29 23-30 36 0 4 9 7 21 7 15 0 19-4 15-16zm128-5c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm1586 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4994-44c-2-6-10-9-17-7-8 3-29 4-46 4-32-2-32-1-17 22s16 24 50 8c19-10 33-22 30-27zm1574 34c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm270 1c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm2270-5c0-16-24-38-33-30-8 9 11 44 23 44 6 0 10-6 10-14zm-3965-6c3-5 2-10-4-10-5 0-13 5-16 10-3 6-2 10 4 10 5 0 13-4 16-10zm929-52c20-11 21-28 1-28-8 0-15 7-15 15 0 9-11 20-24 26-17 8-22 17-18 31 4 18 6 17 23-8 10-15 25-31 33-36zm2511 37c0-11 4-26 8-33 5-7 5-25 1-40s-6-32-5-38c2-17-47-46-71-42-28 4-36-22-9-29 23-6 27-18 10-28-14-9-49 24-49 46 0 10 5 30 10 45l11 27 15-22c10-13 24-21 37-19 24 3 36 28 14 28-26 0-33 85-10 123 9 15 38 2 38-18zm620 15c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-5236-9c8-5 9-11 3-15-13-8-42 3-42 15 0 11 21 11 39 0zm121-6c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm2141-15c5 0 9 6 9 13 1 13 30-21 30-35 0-10-29-5-54 9-14 8-17 16-11 29 7 18 8 18 12 2 3-10 9-18 14-18zm4319 15c0-8 9-15 20-15 13 0 20-7 20-20 0-15 7-20 25-20s25-5 25-19c0-11 6-22 13-24 6-3 0-6-15-6-15-1-30-5-33-11-10-15-25-12-19 4 4 10-6 18-33 25-50 14-53 14-53-5 0-11-6-14-22-8-33 10-34 13-11 29 12 8 24 28 28 44 5 26 16 35 48 40 4 0 7-6 7-14zm-6064-11c-3-9-6-20-6-25s-7-9-15-9c-18 0-19 4-3 30 15 24 33 27 24 4zm1079 6c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm850-11c11-10-9-12-42-3-13 4-20 10-17 16 6 9 43 2 59-13zm102-5c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm443 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm57-27c-21-22-32-11-17 17 9 16 15 19 23 11s7-16-6-28zm1658 26c12-19-3-22-27-5l-22 16h21c12 0 25-5 28-11zm-3285-14c0-8-4-15-10-15-5 0-7 7-4 15 4 8 8 15 10 15s4-7 4-15zm2189-8c6-8 8-17 5-20-7-7-44 14-44 25 0 13 27 9 39-5zm2591 3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2285-30c-18-35-19-57-2-63 8-3 7-10-7-26-26-28-32-27-40 10-4 22 1 42 17 70 27 47 56 56 32 9zm600 16c17-12 17-13-8-18-21-4-27-1-27 13 0 22 10 24 35 5zm1031 0c7-1 17-6 21-10 4-5-11-5-34-1-36 6-43 4-53-14-6-12-17-21-25-21-19 0-19 10 1 38 13 19 22 22 46 17 17-4 37-8 44-9zm924 4c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-3605-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-2596-24c15-26 8-46-15-46-8 0-14-4-14-10 0-5-5-10-12-10-6 0-8 3-5 7 4 3 0 15-10 25-14 16-14 18 0 18 9 0 19 9 22 20 8 26 19 25 34-4zm5781 20c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-6040-27c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm3090 11c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1350-9c0-15-27-44-33-34-10 17 4 52 19 46 8-3 14-8 14-12zm2360-6c0-7 6-15 12-17 10-4 10-10 1-29-9-18-12-20-12-6-1 9-5 17-11 17-5 0-10 9-10 20s-4 20-10 20c-5 0-10 4-10 9s9 7 20 4 20-11 20-18zm-6740 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3627-16c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm453 11c17-20 11-25-18-14-13 5-20 13-17 19 9 14 21 12 35-5zm1740-38c0-15-7-18-32-15-41 4-51 38-16 53 26 12 47-6 48-38zm40 38c0-8-7-15-15-15-9 0-12 6-9 15 4 8 10 15 15 15s9-7 9-15zm-5520-5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1160-9c0-12-24-38-45-49-18-10-18-11 12-28 37-22 52-74 21-74-10 0-18-4-18-10 0-5-4-10-10-10-5 0-7 6-4 14 3 7-7 21-21 30-29 19-28 30 11 100 17 30 30 43 40 39 8-3 14-8 14-12zm870 4c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm126-12c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-756 3c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm2166-35c-16-30-36-42-36-21 0 6 7 25 16 42 10 20 19 27 26 20 6-6 4-20-6-41zm1028 28c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm505 12c9-6 10-11 2-15-13-8-31 1-31 15 0 11 11 11 29 0zm-5009-11c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm650-5c0-9-6-12-15-9-8 4-15 10-15 15s7 9 15 9 15-7 15-15zm1894 0c-4-8-10-12-15-9-14 8-10 24 6 24 9 0 12-6 9-15zm3931 5c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-3975-4c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm547-29c7-5 11-13 8-18-4-5-11-7-16-4-5 4-12-1-15-9-5-12-10-13-25-5-23 12-25 39-4 39 9 0 19 8 22 17 5 14 8 14 11 2 3-7 11-18 19-22zm533 17c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm1020 0c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm1409-13c-15-5-22 6-14 19 6 9 10 9 16-1 5-8 4-15-2-18zm-5139 9c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1900 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm3040-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm720-12c0-13-23-5-28 10-2 7 2 10 12 6 9-3 16-11 16-16zm80 3c0-10-8-21-17-25-10-3-23-9-30-12s-10 2-6 15c3 12 12 21 19 21 8 0 14 5 14 10 0 6 5 10 10 10 6 0 10-8 10-19zm-6730-6c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm5794-5c23-8 25-13 16-30-12-22-32-27-29-7 3 26-2 37-16 37-8 0-15 5-15 11 0 5 4 8 9 5 4-3 20-10 35-16zm-5434-20c0-13-7-13-31 1-11 5-17 14-14 20 7 11 45-7 45-21zm150 20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1788-1c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm2802-12c-1-28-17-39-38-28-23 12-19 43 4 34 8-3 14 0 14 7 0 6 5 8 10 5 6-3 10-12 10-18zm-2272-22c-6-13-16-21-24-18-13 5-11 14 9 40 15 21 27 4 15-22zm2342 19c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-5560-4c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm576-1c7-12-22-46-32-37-8 9 5 48 16 48 5 0 12-5 16-11zm1244-10c0-4-7-6-15-3-8 4-15 10-15 15 0 4 7 6 15 3 8-4 15-10 15-15zm-95 1c3-5 2-10-4-10-5 0-13 5-16 10-3 6-2 10 4 10 5 0 13-4 16-10zm1225-11c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm1684 6c-6-16-24-21-24-7 0 11 11 22 21 22 5 0 6-7 3-15zm651 5c8-13-14-42-26-34-5 3-9 14-9 25 0 20 24 26 35 9zm1734-5c2-2 0-12-4-22-6-16-8-16-16 5-5 13-13 21-18 17-5-3-13 0-17 6-5 9 1 10 22 5 16-4 31-9 33-11zm-6862-10c-4-8-2-17 4-20 5-4 7-11 4-16-4-5 1-12 10-16 13-4 15-13 11-34-4-23-2-29 12-29 10 0 27-7 38-15 18-14 18-16 1-26-9-5-15-14-12-20 11-16 24-10 39 19 8 15 15 21 16 13 0-8 8-20 18-27 16-12 15-13-5-14-13 0-23-4-23-10 0-5-7-10-15-10s-15-4-15-10c0-5-5-10-11-10s-9 7-5 15c3 9 0 15-9 15-8 0-15 7-15 15s-4 15-9 15-11 8-13 18c-4 12-21 23-49 30-32 8-47 19-56 39-18 37-16 56 2 49 11-4 19 3 25 19 7 18 17 25 36 25s25-4 21-15zm193-10c0-28-3-29-31-14-15 7-24 7-35-1-7-7-21-9-31-6-14 6-12 9 12 22 15 8 36 12 47 9 10-4 18-2 18 4s5 11 10 11c6 0 10-11 10-25zm1654 19c20-8 21-24 2-24-8 0-16 7-20 15-6 17-4 18 18 9zm2892-10c-8-8-22-11-30-8-26 10-18 21 14 22 26 1 28-1 16-14zm1637 0c11-4 16-12 13-20s1-14 8-14c17 0 49-47 41-60-4-6 1-13 9-16 9-3 16-12 16-19s6-16 13-18c6-3 2-6-10-6-13-1-23 5-23 12 0 13-60 37-94 37-9 0-16 5-16 10 0 6 9 10 19 10 27 0 36 30 11 37-11 3-17 9-15 14 3 4-11 18-32 29l-38 21 40-6c22-3 48-8 58-11zm-6718-24c-5-8-11-8-17-2s-7 16-3 22c5 8 11 8 17 2s7-16 3-22zm6205 14c0-17-22-14-28 4-2 7 3 12 12 12s16-7 16-16zm-5630-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-680-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm166-14c10-8 16-17 12-21-8-8-48 13-48 25 0 14 13 12 36-4zm1184 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm130 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2850 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-3330-9c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm1390 0c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm2630-21c0-13-7-13-31 1-11 5-17 14-14 20 7 11 45-7 45-21zm2473 10c-3-11-9-17-15-14-5 3-4 12 3 20 16 19 18 18 12-6zm-6343-5c8-9 8-15 2-15-18 0-42 12-42 21 0 14 26 10 40-6zm1191 2c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm1199 3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2880-11c0-5-7-9-15-9s-15 7-15 15c0 9 6 12 15 9 8-4 15-10 15-15zm-5195 2c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm841-16c-4-17-2-27 8-31 12-5 11-16-5-76-18-64-18-72-4-88 8-9 12-19 9-22s-12-32-20-63c-9-32-24-65-34-74s-25-45-33-81c-15-59-15-66 0-82 15-17 14-18-8-18-19 0-29 11-47 50-24 50-23 70 5 70 12 0 15 8 10 38-4 36-3 39 19 34 13-2 24 0 24 6 0 5 8 12 18 15 22 5 37 64 22 82-7 9-7 21 0 40 6 15 8 30 6 33-3 2 0 14 6 25 9 18 6 24-17 43-27 21-27 22-7 33 13 7 23 25 27 51 4 22 11 40 17 40s8-11 4-25zm-1782 9c25-10 19-22-9-16-14 2-25 8-25 13 0 10 12 11 34 3zm636-4c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1960 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2675 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1175-4c0-8 9-18 21-21 17-6 19-12 14-33-8-35-18-44-38-37-12 5-14 12-5 35 6 20 6 35-2 49-7 14-7 21 0 21 5 0 10-6 10-14zm276-13c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-4036 1c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm1260 6c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1680-24c-14-14-22-2-14 18 5 14 9 15 15 4 4-7 4-17-1-22zm1064-38c-8-25-17-22-31 9-11 23-10 29 4 46 17 18 18 18 25-10 4-15 5-36 2-45zm-6204 52c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm750 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3555 0c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm65-5c0-9-6-12-15-9-8 4-12 10-9 15 8 14 24 10 24-6zm1020 8c-1-14-27-43-39-43-6 0-11-4-11-10 0-5-4-10-9-10s-7 9-4 20 0 27-7 35c-11 13-7 15 29 15 22 0 41-3 41-7zm1005-3c3-5-1-10-9-10s-18 5-21 10c-3 6 1 10 9 10s18-4 21-10zm-4735-4c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-2515-16c3-5 2-10-4-10-5 0-13 5-16 10-3 6-2 10 4 10 5 0 13-4 16-10zm4260 1c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm1190-1c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm1289-32c3-16 3-28-1-28-19 1-32 17-28 35 2 11 4 24 4 30 2 16 18-8 25-37zm-5829 22c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm3142-12c-4-12-1-28 5-35 8-10 4-15-17-23-14-5-28-10-31-10-9 0-3 33 11 60 18 35 40 40 32 8zm917-26c-4-20-13-32-22-32-12 0-13-3-4-12 26-26 9-37-22-15-15 11-16 17-7 35 7 13 17 19 26 16 10-4 15 0 15 13 0 19 10 36 17 30 2-2 0-18-3-35zm-3904 18c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm914-11c-7-11-34-12-34-1 0 14 11 21 26 15 8-3 11-9 8-14zm3216 5c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm441 3c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-3233-37c3-9-1-11-13-6-10 3-24 1-31-5-15-13-17-6-8 29 6 21 9 21 27 9 12-8 23-20 25-27zm1812 30c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1190 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-5295-17c10-14 1-21-19-13-9 3-13 10-10 15 7 12 21 11 29-2zm3215 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm800-27c0-7-4-13-8-13-13 0-43 36-36 43 9 9 44-16 44-30zm414 4c-3-9-12-17-20-17-17 0-17 5-3 32 13 24 33 10 23-15zm-3014 2c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm-1192-11c21-7 23-12 17-49-6-34-4-41 12-45 10-3 26-16 36-30 17-23 17-24-3-24-11 0-20 7-20 15s-16 27-35 42-35 33-35 40c0 6-13 14-30 18-34 7-44 19-36 40 5 15 43 12 94-7zm42 18c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1655-6c8-13-5-13-25 0-13 8-13 10 2 10 9 0 20-4 23-10zm883-13c2-12-3-17-17-17-12 0-21 6-21 13 0 31 32 34 38 4zm3441 2c-16-10-23-4-14 10 3 6 11 8 17 5 6-4 5-9-3-15zm-5934 1c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm415 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2240 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm4745 0c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-8085-10c8-5 12-12 8-15-9-9-48 4-48 16s21 11 40-1zm2790-11c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-315 1c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-1737-17c5-18-10-16-34 2-18 15-18 15 5 13 14-2 26-9 29-15zm2652 7c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm2294-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm754 10c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm907 1c3-6-1-7-9-4-11 4-16 0-16-10 0-9-4-16-10-16-5 0-10 9-10 20 0 21 33 29 45 10zm-6978-26c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm64 3c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm579 2c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm4942 6c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm-5773-39c-11-19-26-37-34-40-21-7-19-2 11 44 32 48 51 44 23-4zm5979 33c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm1406-23c-4-11-7-27-7-33 0-7-9-13-19-13s-18-4-18-9-8-8-17-7c-10 2-18 9-18 17 0 7-10 16-23 19-27 6-30 25-4 25 9 0 23 4 30 8 6 5 17 5 22 2 6-3 13 0 16 8 3 9 13 13 25 10 15-4 18-11 13-27zm246 24c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4098-45c2-16 9-35 17-41 10-8 11-13 3-18-12-7-95 34-93 47 1 4 1 14 1 22 0 9 9 15 25 15 14 0 25 5 25 12 0 24 19-7 22-37zm1213 25c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-5041-11c13-6 22-17 19-24-2-8 4-22 14-32s17-27 15-37c-3-16-8-14-38 15-27 26-36 30-48 20-13-11-14-9-12 11 3 24 15 58 22 58 2 0 14-5 28-11zm184-6c5-18-10-16-34 2-18 15-18 15 5 13 14-2 26-9 29-15zm992 7c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1921-3c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm4309 3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm574-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-3524 3c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm150-25c0-16-35-1-38 16-3 16-1 17 17 5 12-7 21-17 21-21zm1232 18c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm378 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1855 1c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-6975-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm693-37c-5-12-9-12-27 0-11 7-27 17-34 21s-10 11-7 16c9 15 74-21 68-37zm1717 37c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm705 0c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm3547-12c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm-6322 2c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2025 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm2505-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4791-14c8-9 8-16 2-20s-15 3-21 14c-12 23 2 27 19 6zm1181-5c0-11-9-21-22-25-19-5-21-8-8-16 12-8 11-10-7-10-20 0-21 3-12 32 5 18 9 34 9 35 0 2 9 3 20 3 13 0 20-7 20-19zm-2066-12c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm1023-5c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm763 11c8-9 8-15 2-15-18 0-42 12-42 21 0 14 26 10 40-6zm1570 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2700-10c8-5 11-12 8-16-10-9-38 3-38 16 0 12 10 13 30 0zm3610 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3867-16c9-3 12-14 9-32-5-24-3-25 10-14 21 17 31 0 15-22-13-17-47-13-47 6 0 5-6 16-12 23-40 44-40 45-14 45 13 0 31-2 39-6zm7462-2c6-4 10-36 10-72 1-70 22-110 58-110 13 0 17-5 14-14-3-8-9-31-13-50-6-35-24-51-24-21 0 8-11 17-24 21-22 5-23 8-14 36 11 32 0 64-34 102-21 23-21 27-6 77 11 40 16 44 33 31zm-5989-27c-3-9-11-13-16-10-8 5-7 11 1 21 14 18 24 11 15-11zm684 4c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm-1830 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2670-5c0-8-4-15-9-15s-14 7-21 15c-10 13-9 15 9 15 12 0 21-6 21-15zm3420 5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-5809-11c28-15 13-31-16-17-25 11-34 28-14 28 6 0 19-5 30-11zm2219 3c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-1135-24c-3-13-9-24-15-26-5-2-10-10-10-18s-4-14-10-14c-5 0-10 7-10 15s-4 15-10 15c-5 0-10 5-10 10 0 6 8 10 19 10 10 0 24 7 31 15 17 20 20 19 15-7zm5149 12c26-10 33-33 17-58-11-19-66 31-57 53 6 18 7 18 40 5zm-7044-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2920 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm3254 2c7-12-36-72-52-72-9 0-10 5-3 19 6 10 7 21 4 25-4 3 2 13 13 21 22 17 31 18 38 7zm56-2c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm650 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-5904-18c-3-9-6-18-6-20 0-3-4-3-10 1-11 7-2 35 12 35 6 0 7-7 4-16zm5524-3c0-20-17-37-27-28-7 8 7 47 18 47 5 0 9-9 9-19zm938 2c-2-9-8-18-15-20-7-3-9 3-6 16 6 25 26 28 21 4zm-6938-3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2270 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-3167-20c-6-21-24-23-30-3-2 6 4 13 14 16s19 5 20 6c0 0-1-8-4-19zm722 10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm505 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm380 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm196-16c-3-9-6-18-6-20s-7-4-15-4c-18 0-19 12-3 28 17 17 31 15 24-4zm2030 0c-3-9-6-18-6-20s-7-4-15-4c-13 0-14 4-5 20 13 24 35 27 26 4zm1550-11c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-5446 7c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm2030 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm810 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm650 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm4557-20c-11-18-33-29-24-12 2 4 7 15 10 25 4 10 11 16 17 12s5-13-3-25zm234 3c-8-15-10-15-11-2 0 17 10 32 18 25 2-3-1-13-7-23zm-8636 6c10-14 1-21-19-13-9 3-13 10-10 15 7 12 21 11 29-2zm2645 1c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2990 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1013-36c-3-10-11-16-18-14-7 3-15-2-18-10-9-22-69-1-65 23 3 12 13 15 41 13 27-3 39 1 43 13 9 22 23 0 17-25zm-5675 12c3-9-2-13-14-10-9 1-19 9-22 16-3 9 2 13 14 10 9-1 19-9 22-16zm3602 8c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-3769-23c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm244 3c-5-15 2-32 21-57 21-28 23-35 10-30-10 4-22 7-27 7-6 0-7 5-4 10 3 6-1 13-9 16-18 7-20 27-6 55 14 25 23 24 15-1zm3872-27c-17-18-22-8-11 22 5 12 10 13 17 6 8-8 6-16-6-28zm323 27c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm265 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm2469-5c3-8 1-15-4-15-6 0-10 7-10 15s2 15 4 15 6-7 10-15zm-7212-25c5-31-9-39-30-18-7 7-8 17-1 30 14 27 26 22 31-12zm878 18c0-19-18-43-25-36-9 9 4 48 16 48 5 0 9-6 9-12zm4640-3c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm440 5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm528-34c-6-15-16-22-24-19-16 6-18 19-4 28 5 3 6 13 3 21-5 14-3 15 15 5s20-15 10-35zm1442 34c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-5630-8c0-5-6-17-14-28-19-25-31-12-14 15 13 21 28 28 28 13zm1460-2c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-878-52c-6-6-15-2-25 13-22 31-10 46 15 19 14-14 17-25 10-32zm3678 48c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm211-39c-8-8-11-5-11 9 0 27 14 41 18 19 2-9-1-22-7-28zm-7146 20c11-9 14-16 7-21-15-9-42 4-42 20 0 18 11 18 35 1zm1570-16c-3-12-13-21-21-21-18 0-18 9 3 32 20 22 27 17 18-11zm-1995-2c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm4231 8c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm939-24c0-17-12-16-35 0-25 19-11 41 15 24 11-6 20-17 20-24zm450 27c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1530 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-5940-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1390 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm6152-12c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm-6832 2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1830 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2295 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm579-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm1456 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3220-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1900 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2170-1c0-21-23-94-33-104-7-7-8-6-4 1s0 14-8 18c-22 8-18 37 5 43 13 3 20 14 20 29 0 13 5 24 10 24 6 0 10-5 10-11zm-7972-11c-2-6-10-14-16-16-7-2-10 2-6 12 7 18 28 22 22 4zm4272-12c0-17-28-41-37-32-10 9 16 58 27 51 6-3 10-12 10-19zm2000 20c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm360-14c0-22-26-59-35-50-6 6 24 68 32 68 2 0 3-8 3-18zm315 8c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm931-27c-11-11-17 4-9 23 7 18 8 18 11 1 2-10 1-21-2-24zm-8073 21c9-3 13-13 10-24-5-17-6-17-22-2-24 23-17 38 12 26zm-83-19c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1476-21c-2-6 1-17 7-23 17-17 3-23-27-11-32 12-43 35-26 55 9 11 16 12 31 2 11-7 17-17 15-23zm6522-3c-14-5-31 15-23 29 5 8 11 6 20-7 9-11 10-19 3-22zm-6716 14c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm1332 9c9-3 16-12 16-20 0-11-5-11-25-2-39 18-31 37 9 22zm121-4c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm105 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm5221-33c-8-8-11-5-11 9 0 27 14 41 18 19 2-9-1-22-7-28zm-3710 10c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm-4831-7c0-11-4-20-10-20-5 0-10 9-10 20s5 20 10 20c6 0 10-9 10-20zm250-6c0-16-5-24-12-21-7 2-18-3-25-12-11-14-12-13-13 7 0 13 6 22 15 22s18 7 21 15c9 22 14 18 14-11zm790 5c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm2910 11c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1260 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm223-13c19-11-6-21-28-11-13 6-22 15-19 19 4 7 25 4 47-8zm1057 2c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-5190-5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm3445-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm510 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-3795-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2678-1c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm-3568-29c0-6-6-10-12-10-22 0-41 17-34 29 8 13 46-3 46-19zm480 15c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm1014-6c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm2646 11c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1967 4c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm1368-9c19-15 19-15-1-35-17-17-22-18-38-7-16 12-17 16-5 35 16 26 18 26 44 7zm-6215-5c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm4700-11c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-5260-5c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm3051-7c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm4239 13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6070-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm65 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm55 0c12-8 11-10-7-10-13 0-23 5-23 10 0 13 11 13 30 0zm2050-10c0-5-7-7-15-4-8 4-12 10-9 15 6 11 24 2 24-11zm-2275 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-415-15c0-8-7-15-15-15-16 0-20 12-8 23 11 12 23 8 23-8zm2210 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm200 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-3472-37c-6-14-15-25-20-25-12 0-10 34 4 48 18 18 28 4 16-23zm762 24c0-6 6-9 12-7 15 5 43-20 34-29-8-9-76 29-70 39 7 12 24 10 24-3zm2155 2c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm775-12c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm542-1c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm788 1c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm2630 11c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-7070-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2996-5c18-15 18-15-5-13-14 2-26 9-29 16-5 17 10 15 34-3zm2659 5c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-6785-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm70-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1390 6c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm591-2c28-14 13-31-22-24-25 6-30 3-39-20-15-40-12-62 10-68 11-3 20-12 20-21s5-16 10-16c6 0 10-5 10-11 0-5-4-8-9-5s-14-1-21-9-16-12-21-9-9-2-9-10c0-9-5-16-11-16-25 0-78 41-79 62 0 4 12 6 27 5 23-2 28 3 36 38 7 28 7 40-2 43-6 2-11 8-11 13 0 6 3 8 8 5 4-2 23 9 42 25 41 33 36 32 61 18zm4799 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5422-18c2-7-3-12-12-12s-16 7-16 16c0 17 22 14 28-4zm1680-10c2-7-3-12-10-12-15 0-38 19-38 32 0 11 43-7 48-20zm931 15c14-18 5-26-20-20-20 5-24 15-12 26 10 10 19 8 32-6zm806 3c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm635 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2728-14c-3-15 0-27 8-30 16-6 6-46-12-46-8 0-18 8-21 18-4 9-11 20-17 24-7 5-7 8 2 8 7 0 17 11 22 25 12 32 24 32 18 1zm62 20c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-7530-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1460 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-1786-19c19-20 9-35-14-21-15 9-23 40-11 40 4 0 16-9 25-19zm2966-2c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm170 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm810 3c0-5-4-15-10-23-11-18-25-7-17 15 6 15 27 21 27 8zm335-3c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-4654-23c-1-4-3-7-6-7h-14c-5 0-11 7-14 14-5 11-1 13 14 7 11-4 20-10 20-14zm1564 13c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-2065-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1867-16c22-21 12-26-25-12-41 16-54 43-16 34 15-4 33-14 41-22zm1468 12c17 0 30-5 30-11 0-5-4-9-9-7s-12-2-16-8c-8-13-75-18-86-8-3 4-3 16 1 28 5 17 12 20 28 15 12-4 36-8 52-9zm1345 4c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm700 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-3838-32c-15-15-26-4-18 18 5 13 9 15 18 6s9-15 0-24zm807 18c13-16 9-20-31-30-16-3-28-11-28-17s-5-7-11-4c-6 4-17-1-25-11-14-18-14-18-12 6 2 19 10 26 31 28 15 2 32 12 37 23 13 23 23 24 39 5zm-739-15c0-11 6-21 13-24 22-8-7-42-34-39-32 5-31 4-14 45 16 40 35 49 35 18zm4265 10c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm1255-1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6374-28c-22-5-30 3-21 18 5 8 11 7 22-2 15-12 14-13-1-16zm444 7c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm70 6c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm1250 6c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm1041-14c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-416-18c0-9 6-23 13-31 6-8 9-18 5-22s-1-11 6-15c7-5 11-14 7-20-5-7-18-5-41 6-38 18-41 24-24 56 9 16 9 22 0 25-20 7-11 23 12 20 12-2 22-10 22-19zm4995 11c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-6385-9c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm3869-6c-4-8-10-15-15-15s-9 7-9 15 7 15 15 15c9 0 12-6 9-15zm376 5c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-490-16c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-4882-19c-6-13-14-22-19-20-12 8 2 45 17 45 11 0 11-5 2-25zm3122 15c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3812-15c-4-21-9-24-26-19-28 8-28 8-20 28 3 9 16 16 29 16 18 0 21-4 17-25zm-7326 1c10-8 15-18 11-22s-17 2-29 14c-25 25-13 30 18 8zm1644 2c-1-18-27-51-33-41-7 12 11 53 23 53 5 0 10-6 10-12zm306-15c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm4504 17c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-2770-10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm-3400-10c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm1250 3c0-14-19-38-25-32-8 8 5 39 16 39 5 0 9-3 9-7zm4339-6c6-8 8-16 5-20-10-9-34 4-34 19 0 18 14 18 29 1zm-2724-7c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm3865 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-5220-15c5 3 16-3 26-12 24-25 0-29-31-5-13 11-21 22-17 26 3 4 8 2 10-3 2-6 7-9 12-6zm2270 5c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm3618-9c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm-7021-38c-3-15-6-13-14 7-8 18-7 27 1 32 12 8 20-13 13-39zm693 37c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm940 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1168-27c14-11 11-13-16-13-18 0-32 5-32 10 0 6 5 10 10 10 6 0 10 8 11 18 0 13 2 14 6 2 3-8 12-21 21-27zm1742 27c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4850-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1560-10c-6-11-15-20-21-20s-6 7 1 20c6 11 15 20 21 20s6-7-1-20zm915 1c-3-6-11-8-17-5-6 4-5 9 3 15 16 10 23 4 14-10zm2475 4c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1325 5c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm823-7c-4-24-48-31-48-8 0 9 4 14 9 10 5-3 12-1 16 5 10 17 27 11 23-7zm1302-3c0-13-7-20-20-20-19 0-19 1-2 19 22 25 22 25 22 1zm-1660 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6654-36c-3-8-10-12-16-9-7 4-6 14 2 28 12 24 24 8 14-19zm747 0c-3-9 0-19 7-24 8-5 3-12-18-23-25-12-34-13-48-3-22 17-10 53 19 59 42 8 46 7 40-9zm1224-10c-7-7-37 7-37 17 0 6 9 5 21-1 11-7 19-14 16-16zm233 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm5205-19c-7-23-25-29-25-8 0 14 21 39 28 33 2-3 1-14-3-25zm-5928-7c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm870 4c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm383 6c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-1110-10c0-2-7-4-15-4s-15 4-15 10c0 5 7 7 15 4 8-4 15-8 15-10zm6155-5c0-8 4-17 10-21 20-14-11-31-34-19-18 10-19 15-9 36 12 26 33 29 33 4zm550 11c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-7335-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3730 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm583-4c4-10 1-13-9-9-7 3-14 9-14 14 0 14 17 10 23-5zm1810-2c40-21 40-21 33-33-9-14-76 18-76 36 0 17 4 16 43-3zm-5436-17c4-6 0-8-11-4-10 4-19 1-22-8-7-17-44-21-44-5 0 6 7 10 15 10s15 6 15 14c0 16 36 11 47-7zm2662 7c1-1 0-7-3-13-5-7-15-7-31 1-29 13-22 32 8 22 12-3 24-8 26-10zm2371 6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm960 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-6260-53c0-17-4-16-43 3-40 21-40 21-33 33 9 14 76-18 76-36zm5640 37c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1090 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-4661-16c2-2 2-7-2-10-8-9-47 6-47 17 0 9 37 3 49-7zm1941 10c0-13-21-44-30-44-14 0-12 24 2 38 13 13 28 16 28 6zm1756-21c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-2241 7c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-5425-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm65 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm89-21c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm576-14c-24-29-37-10-16 23 6 10 11 11 19 3 7-7 6-15-3-26zm176 19c-3-7 2-15 9-18 25-9 6-31-30-33-26-1-32 2-28 13 3 8 0 20-6 28-14 17-9 21 29 22 21 1 30-3 26-12zm1564 2c0-15-18-31-26-23-7 7 7 37 17 37 5 0 9-6 9-14zm910 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1590 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1390 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-5358-22c-12-12-35-1-27 12 3 5 13 6 21 3 10-4 12-9 6-15zm3578-16c0-10-5-23-12-30-9-9-9-12 0-12 7 0 12-7 12-15 0-17-9-19-29-6-13 8-22 75-13 94 6 13 42-13 42-31zm-2735 18c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1015 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2340-9c0-5-7-11-15-15-8-3-15-12-15-21 0-8-4-15-10-15-15 0-12 13 8 38 18 23 32 28 32 13zm3050 5c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm2450-67c-7-16-12-40-12-54s-5-25-10-25-7 12-4 28c4 15 9 41 12 57 2 17 8 39 12 50 6 19 7 18 10-3 2-13-2-37-8-53zm1540 61c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm950 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-7390-9c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-1050-22c0-5-7-9-15-9-9 0-12 6-9 15 6 15 24 11 24-6zm2192-4c-4-25-13-31-25-19-6 7 14 44 24 44 3 0 4-11 1-25zm3528 4c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm110 11c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-4895-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm915-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1390 5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm65 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm375 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3520-25c0-14-4-25-9-25s-11 11-13 25c-4 17-1 25 8 25 8 0 14-11 14-25zm1324 19c9-3 16-17 16-30s5-24 11-24c5 0 7-4 4-10-7-12-75 19-75 35 0 9 19 35 26 35 1 0 9-3 18-6zm3926-4c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm1650 2c0-4-9-13-20-20-18-11-20-10-20 8 0 13 7 20 20 20 11 0 20-3 20-8zm580-7c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-5295-25c-5-8-11-8-17-2s-7 16-3 22c5 8 11 8 17 2s7-16 3-22zm3665 20c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm2572-10c24-23 19-35-11-25-12 3-19 14-18 25 2 25 3 25 29 0zm-8470 1c-10-6-10-10 3-21 8-7 15-16 15-20 0-10-39 0-46 12-7 11 14 38 30 38 7 0 6-3-2-9zm1558-6c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm1556-2c0-12 7-19 22-21 12-2 22-7 22-12 0-8-57 4-67 13-6 6 8 37 17 37 4 0 7-8 6-17zm1664 9c0-15-28-47-35-40-8 8 13 48 25 48 6 0 10-4 10-8zm-3516-28c3-8 2-13-2-11s-15 7-25 10c-10 4-16 11-12 16 8 13 32 3 39-15zm5806 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5560-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1490-14c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1350-10c0-14-28-42-35-34-2 2-2 14 2 26 6 24 33 31 33 8zm1384-7c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm1016 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6000-9c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm310-6c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm7884-6c-8-14-24-10-24 6 0 9 6 12 15 9 8-4 12-10 9-15zm-8874-4c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm1390 9c0-3-5-14-10-25-9-15-15-17-30-9-23 12-27 35-5 27 8-4 17-2 20 3 7 11 25 14 25 4zm3355-4c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm2125-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1750 0c0-5-6-10-14-10s-18 5-21 10c-3 6 3 10 14 10 12 0 21-4 21-10zm-9430-20c0-13-38-18-49-7-8 8-11 7-11-5 0-15-49-32-60-22-9 9 18 39 33 36 9-1 18 1 21 6 6 10 66 3 66-8zm1175-1c-4-5-13-9-22-9-13 0-13 3-3 15 13 15 35 11 25-6zm6218-1c7-26 3-32-17-25-9 4-12 14-9 26 7 27 19 27 26-1zm1507 18c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-865-15c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-6985-11c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm170-16c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm2405 6c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm245 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm5035-16c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-4659-8c5-4 10-17 10-29 0-26-33-32-42-8-4 8-11 12-16 9-6-4-5 3 1 15 12 22 28 26 47 13zm636-6c10-7 15-16 12-19-9-8-44 11-44 23 0 13 12 12 32-4zm1723-24c-21-5-40 12-30 28 5 8 13 6 27-7 18-16 19-18 3-21zm433 26c-2-6-10-14-16-16-7-2-10 2-6 12 7 18 28 22 22 4zm436-9c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm2031 12c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-4865-15c0-20-19-31-32-18-6 6-7 15-4 21 10 16 36 13 36-3zm1100-16c0-16-20-12-26 5-4 8-11 12-17 8-6-3-7-1-3 5 8 14 46-2 46-18zm-4109-13c-8-8-11-7-11 4 0 20 13 34 18 19 3-7-1-17-7-23zm506 11c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm184-18c5 0 9-5 9-11 0-7-10-9-27-5-17 5-29 3-34-6-7-10-9-9-9 5 0 9-7 17-16 17-8 0-12 5-8 11 3 6 16 8 29 5 16-4 25-1 31 12 7 15 8 14 11-5 3-13 9-23 14-23zm3289 26c0-16-28-42-36-33-8 7 14 47 26 47 6 0 10-6 10-14zm1728-3c-2-9-8-18-15-20-7-3-9 3-6 16 6 25 26 28 21 4zm426-16c-3-9-13-17-21-17s-12 3-10 8c2 4 7 16 11 26 4 13 10 16 17 9 5-5 7-17 3-26zm446 23c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-5250-10c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm3044-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm3584 2c18-7 31-18 30-23-4-11-4-11-45 4-18 7-33 19-33 26 0 8 3 12 8 10 4-3 22-10 40-17zm-5697-14c-1-4-1-11-1-16s-7-11-14-14c-10-4-13-1-9 9 3 8 0 21-7 29-11 13-10 14 9 7 13-4 22-11 22-15zm-1297-34c6-18 4-20-14-16-13 4-19 11-16 20 3 8 6 20 6 26 0 16 16-4 24-30zm1566 22c0-8-7-15-16-15-14 0-14 3-4 15 7 8 14 15 16 15s4-7 4-15zm965 2c13-10 15-16 6-21-12-8-41 10-41 25 0 13 13 11 35-4zm50-6c-3-6-11-8-17-5-6 4-5 9 3 15 16 10 23 4 14-10zm4130 9c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-1830-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-7590-10c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm1325 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3417 4c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm1083-9c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm3250 0c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm435 5c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-8629-10c8 0 19-12 24-26 8-21 7-29-7-39-15-11-19-9-32 19-9 17-19 33-23 34-15 7-8 24 8 18 9-3 22-6 30-6zm89 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm190-10c-4-13-1-22 9-26 23-9 20-33-4-27-23 6-53 49-45 63 3 6 15 10 26 10 16 0 19-5 14-20zm1005 10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm155-10c0-22-29-18-33 3-3 14 1 18 15 15 10-2 18-10 18-18zm285 10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2230 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1460 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm3280-2c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm80 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-8990-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm9210-5c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm-8540-16c0-5-7-9-15-9-9 0-12 6-9 15 6 15 24 11 24-6zm4433-4c-5-13-23-22-23-11 0 15 14 35 21 31 4-3 6-12 2-20zm284 5c13-20 7-54-8-44-5 3-7 10-4 15 4 5 0 12-9 15-8 3-12 12-9 20 7 19 16 18 30-6zm533 10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-4170-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2600-21c-6-10-15-19-20-19-13 0-13 6 2 29 15 25 31 16 18-10zm380 21c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm310 1c-1-15-27-36-47-38-23-3-27 4-18 29 5 13 65 21 65 9zm2100-1c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm-3730-10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm130 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2293-31c3-11 9-19 14-19s9-7 9-16 9-18 20-21 20-12 20-19c0-8 5-14 10-14 6 0 10-6 10-14 0-7 11-25 25-40l24-26-54 3c-30 2-59-1-65-7-7-7-10-5-10 6 0 9-7 18-15 22-8 3-12 12-9 21 3 8 1 15-5 15s-11 14-11 30c0 17-5 30-11 30-5 0-7 5-4 11 4 6-1 16-11 24-15 10-16 16-6 28 16 19 63 10 69-14zm793 21c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm4004-5c-4-8-10-15-15-15s-9 7-9 15 7 15 15 15c9 0 12-6 9-15zm546 0c0-13-4-14-20-5-11 6-20 13-20 15 0 3 9 5 20 5s20-7 20-15zm1720 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6945-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm65 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm83-4c10-8 14-17 9-20-15-9-42 4-42 20 0 17 10 17 33 0zm627-7c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm6660 7c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm-7075-6c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm4232-16c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm-5822 6c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm3045 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1213-10c-3-11-9-20-13-20-5 0-6 9-3 20s9 20 13 20c5 0 6-9 3-20zm172 10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-2365-53c0-5-9-5-20-2-14 5-20 2-20-9 0-9-4-16-10-16-5 0-10 6-10 14s5 18 10 21c6 3 10 16 10 28 0 22 1 22 20-3 11-14 20-29 20-33zm1890 38c0-9-6-12-15-9-8 4-12 10-9 15 8 14 24 10 24-6zm3795 5c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-5445-10c0-6-9-18-20-27-25-22-25-37 1-54 17-12 19-18 10-42-6-16-16-25-21-22-6 4-8 11-5 16 4 5 1 9-4 9-6 0-11 7-11 15 0 9-9 25-20 37-24 26-25 38-5 38 8 0 15 4 15 10 0 5 6 7 14 4 7-3 16 2 19 10 7 18 27 22 27 6zm3203 4c6-7-13-54-22-54-3 1-16 6-28 13-15 8-19 17-14 26 5 7 13 11 19 7 6-3 13-2 17 4 7 11 19 13 28 4zm607-4c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-4669-40c11 0 17-5 14-10-8-12-55-2-74 15-7 7-10 18-7 24 4 6 14 3 26-9 11-11 29-20 41-20zm2084 23c-4-10-10-26-12-35-3-10-12-18-19-18-17 0-17 0 2 38 16 33 42 46 29 15zm-3792-10c-3-7 6-17 20-22 19-8 24-15 20-35s0-28 18-35c13-5 18-10 12-10-7-1-13-6-13-12s7-9 14-6c10 4 13 1 9-9s7-19 36-31c22-9 38-20 35-24-3-5 4-19 15-31 26-27 26-35 4-40-14-3-11-9 15-25 19-11 29-24 23-27-21-13-77 35-117 101-35 58-48 70-83 81-43 15-51 26-26 36 17 6 21 56 5 56-5 0-10 7-10 15s-4 15-10 15c-5 0-10 4-10 9s11 8 24 7c14 0 22-6 19-13zm717 7c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm145-10c14-15 15-20 4-20-22 0-42 17-35 29 9 14 10 14 31-9zm1380 10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-2756-16c3-3 0-9-5-14-7-7-17-3-30 11-19 22-19 22 6 14 14-4 27-9 29-11zm1561 2c0-7-7-19-15-26-12-10-15-9-15 7 0 11 3 23 7 26 11 12 23 8 23-7zm1077-11c-4-8-11-15-17-15-7 0-7 6 0 21 13 23 26 19 17-6zm-1752 5c-4-6-2-17 5-25 13-16-1-28-24-19-25 9-21 54 5 54 11 0 17-4 14-10zm3575-4c0-8-4-17-9-21-12-7-24 12-16 25 9 15 25 12 25-4zm2005 4c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-6705-10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2801-13c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm309 19c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm606-33c-11-11-19 6-11 24 8 17 8 17 12 0 3-10 2-21-1-24zm-516 11c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-1215-4c4-6-5-10-19-10s-26 5-26 10c0 6 9 10 19 10 11 0 23-4 26-10zm2805 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm510 0c0-5-4-10-9-10s-13-9-16-20-11-20-16-20c-14 0-11 14 9 38 18 23 32 28 32 12zm2609-2c-1-7 1-21 6-31 11-25 2-30-29-16-32 15-33 23-4 43 27 19 29 20 27 4zm1391 2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm705 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-8256-50c22-6 43-15 47-21 4-7-1-9-15-5-11 3-29 8-40 11s-21 0-24-8c-3-9-16-12-35-9-26 3-30 1-36-28-3-18-6-42-6-53 0-22 43-67 66-67 7 0 23-9 34-20 23-23 16-55-9-44-39 16-86 22-97 13-13-10-61-3-81 13-7 6-9 23-6 43 5 30 2 36-21 44-14 6-24 16-22 23 3 7 12 37 21 67l17 53 54-7c36-4 54-3 54 4 0 6 6 11 14 11s17 8 21 18c6 15 8 15 15-5 6-14 23-26 49-33zm91 40c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm810 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3246-17c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm3364 7c0-5-7-7-15-4-8 4-12 10-9 15 6 11 24 2 24-11zm-3513-1c14-14 6-39-13-39-16 0-19-26-4-35 16-10 12-25-5-19-9 4-16-3-21-20-3-14-10-26-15-26s-7 11-3 25c12 49 10 60-13 63-13 2-23 7-23 11 0 15 29 33 44 28 8-3 17 1 20 9 6 17 18 18 33 3zm2081-6c-1-10 1-24 6-31 14-23-2-25-35-6-31 18-38 41-11 38 6-1 12 2 12 7s7 9 16 9 14-7 12-17zm1322 7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm635 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm379-5c-4-8-10-12-15-9-11 6-2 24 11 24 5 0 7-7 4-15zm-7214-5c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm4434-5c-4-8-10-12-15-9-14 8-10 24 6 24 9 0 12-6 9-15zm1016 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1080 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5090-17c21-12 28-23 27-42-2-22 2-25 20-23 20 3 22 0 14-20-4-13-16-23-25-23-22 0-38-26-25-41 13-16 0-46-17-40-8 3-14-1-14-10 0-8-5-12-10-9-6 4-8 11-5 16 4 5-1 9-9 9-9 0-14 8-13 20 1 11 4 20 8 20 13 0 39 31 39 45 0 8-9 17-20 20s-20 15-20 25c0 11-9 24-20 30s-18 15-15 21c4 5 10 7 15 4s11-1 15 5c9 14 23 13 55-7zm380-3c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm1450 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6196-6c9-3 16-12 16-20 0-12-4-12-20-2-30 19-27 34 4 22zm3879-15c-4-13-9-17-15-11-11 11-3 32 12 32 4 0 6-9 3-21zm1982 1c14-15 15-20 4-20-22 0-42 17-35 29 9 14 10 14 31-9zm3345 4c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-2850-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2592-37c-6-31-20-37-47-19-21 14-24 20-15 31 7 8 9 19 5 24-3 6 9 4 27-4 23-9 32-19 30-32zm1228 22c0-32-12-32-27 0-10 22-9 25 8 25 14 0 19-7 19-25zm-7280 6c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm6910-1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-9680-15c0-8 3-15 8-15 12 0 31-50 25-66-11-28-48-6-39 24 4 11 2 23-4 27-13 8-13 45 0 45 6 0 10-7 10-15zm5200 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2800-14c41-12 43-14 23-24-17-10-28-8-52 6-29 16-41 32-23 32 4 0 27-6 52-14zm5030 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5180-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm346-27c-11-11-17 4-9 23 7 18 8 18 11 1 2-10 1-21-2-24zm3274 22c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm3930 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7900-8c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm1765-2c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm243-7c-2-9-8-18-15-20-7-3-9 3-6 16 6 25 26 28 21 4zm673-39c-9-33-8-40 10-57 16-15 18-26 13-68-5-34-3-49 5-49 18 0 13-30-6-37-10-4-21-11-25-17-13-20-23 6-22 60 0 45-3 54-17 54-10 0-21 4-24 10s1 7 9 4c15-6 21 6 17 30-2 9 28 104 37 121 11 19 13-15 3-51zm2006 21c20-15 6-66-18-72-11-3-19-14-19-24s-4-21-10-24c-5-3-10 3-10 14 0 12-4 21-10 21-18 0-11 22 15 46 15 13 25 35 26 51 0 16 3 22 6 13 4-8 13-20 20-25zm193 26c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-4610-9c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm2470-2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3490 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1015 0c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-8806-48c-21-8-37 7-32 29l6 22 18-24c10-13 14-26 8-27zm2721-6c5-5 6-15 3-23-10-27-34 23-26 54l7 28 4-25c2-14 7-29 12-34zm2848 24c3-7 0-10-6-6-12 7-21-5-27-36-6-29-25-48-25-25 0 9-5 17-11 17s-9 10-7 23c2 12 10 22 18 22s19 6 23 13c10 15 29 11 35-8zm2002 10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm724-45c-7-17-30-20-39-5-3 5-3 20 1 34 6 24 6 24 25 5 10-10 16-25 13-34zm26 45c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm980-4c0-8 4-16 9-18 14-5 1-58-15-58-7 0-17-7-22-16s-13-15-18-14c-5 0-10-6-12-14-2-9 1-16 7-16s11-4 11-10c0-5-7-10-15-10s-17-11-21-24c-3-13-14-26-24-29-16-4-18-11-13-40 3-21 1-37-7-42-17-10-25 2-11 19 9 11 9 16 0 21-6 4-14 4-18-1-3-5-16-15-28-22-21-11-23-10-23 8 0 13 6 20 14 18 14-3 66 46 66 63 0 5 6 9 14 9 17 0 32 53 17 58-13 4-14 41-2 60 5 8 17 11 34 7 23-6 26-4 32 29 7 35 25 51 25 22zm437-12c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm-9557-4c0-11 4-20 8-20 5 0 15-12 23-27 8-16 18-31 24-35 5-4 7-10 4-13-9-9-39 6-39 19 0 7-14 31-31 54-29 39-29 42-10 42 14 0 21-6 21-20zm318 8c19-19 14-30-8-18-11 6-20 15-20 20 0 14 14 12 28-2zm2157 2c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm6948-4c3-8-4-21-18-30-13-9-25-28-27-42-2-17-11-30-26-35-21-8-22-7-18 29 6 52 13 66 39 78 31 16 44 16 50 0zm-8093-6c4 0 6-9 3-20s-13-20-23-20-21-8-23-17c-4-14-5-12-6 5 0 12-5 22-11 22-5 0-10 5-10 11 0 5 5 7 10 4 6-3 13 1 16 10 4 9 13 14 21 11s18-6 23-6zm2230 0c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2120-20c0-13-7-13-31 1-11 5-17 14-14 20 7 11 45-7 45-21zm2960 20c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-7990-61c-14-25-33-25-25 1 5 15 2 20-12 20-15 0-14 4 7 20 25 19 25 19 32-1 5-11 3-29-2-40zm4595 41c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm325-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1290-9c0-10-22-31-32-31-9 0-11 34-2 43 7 7 34-2 34-12zm2662-3c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm-4853-2c12-14 5-43-15-63-18-18-21-16-28 13-13 50 15 84 43 50zm1201-7c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm-3290-4c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm190 5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2402-48c-6-27-6-44 1-51 6-6 8-13 5-16-9-9-38 7-38 21 0 8-5 14-10 14-17 0 1 54 24 72 26 21 29 13 18-40zm1198 48c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4590-15c7-9 10-18 7-21-7-8-47 14-47 26 0 15 26 12 40-5zm3534-29c-3-9-10-16-15-16-6 0-5 9 1 21 13 24 24 20 14-5zm635 4 23-19-41 2c-38 1-51 13-34 30 11 12 29 8 52-13zm1361 13c0-5-4-15-10-23-11-18-25-7-17 15 6 15 27 21 27 8zm-7900-13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2164-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm816 5c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm1090 6c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm320 0c8-5 12-12 8-15-9-9-48 4-48 16s21 11 40-1zm1996-5c-6-17 5-20 21-4 7 7 13 7 17 1 3-5-1-15-9-22s-15-23-15-36-4-24-10-24c-5 0-10 6-10 14s-5 16-11 18c-14 5-2 68 13 68 6 0 8-7 4-15zm1979 5c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm-7076-14c14-16 4-49-13-39-8 4-8 3 0-6 6-6 9-25 6-41-3-24-9-30-28-30-29 0-32 16-4 23 11 3 20 10 20 17 0 6-8 9-18 6-16-6-19 0-20 39 0 40 2 45 23 45 12 0 28-6 34-14zm2031 6c0-15-28-47-35-40-8 8 13 48 25 48 6 0 10-4 10-8zm3434-7c-4-8-1-15 5-15s11-9 11-20c0-20-16-26-37-12-15 9-5 62 13 62 8 0 11-6 8-15zm1461-5c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-6476-17c35-20 35-21 17-46-13-17-15-17-50-1-38 19-44 32-24 52 16 16 21 15 57-5zm7106-3c6-10-5-40-15-40-4 0-10 8-14 18-3 9-9 22-12 29-6 13 33 6 41-7zm549-4c-3-8-1-17 5-21 16-9 14-25-3-25-23 0-35 23-25 48 5 13 13 21 18 17 6-3 8-12 5-19zm506 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-8025-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm126-3c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-1321-7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2370-10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm4410-21c0-12-27-11-35 1-11 17 5 32 21 19 8-6 14-15 14-20zm-4320 6c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm5631-18c-8-8-11-7-11 4 0 9 3 19 7 23s9 2 11-4c3-7-1-17-7-23zm1315-7c7 0 16-5 19-11 4-6 0-9-11-7-13 2-20-6-27-34-9-37-27-52-27-23 0 8-4 15-9 15-12 0-9 71 4 87 8 9 13 7 24-7 7-11 19-20 27-20zm-6818 5c-13-28-16-29-40-11-24 17-23 24 5 29 47 9 47 9 35-18zm1532 15c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm4290-15c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-7720-9c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm6198-52c-11-24-28-23-28 2 0 8-4 14-10 14-5 0-7 6-4 14 4 12 11 12 29 4 20-9 22-14 13-34zm-1348 26c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1020-6c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-2624-39c-7-18-26-20-26-2s24 41 28 27c2-6 1-17-2-25zm2608 15c29-11 34-28 10-37-16-6-58 30-47 41 8 8 7 8 37-4zm2744-20c10 0 12-3 7-9-11-10-75-3-75 8 0 3 10 11 23 16 16 7 23 7 25-2 2-7 11-13 20-13zm-3773 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm1784-3c6-8 8-17 4-20-7-8-33 11-33 24s16 11 29-4zm-6939-27c0-14-14-12-28 2-19 19-14 30 8 18 11-6 20-15 20-20zm4610 20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3840 1c0-4-11-20-25-35s-25-31-25-37c0-5-7-9-15-9s-15-6-15-14c0-7-7-19-15-26-18-15-18-12-4 29 6 17 17 31 25 31 13 0 18 15 17 48-1 8 6 10 18 7 11-4 19-2 19 4s5 11 10 11c6 0 10-4 10-9zm-820-21c8-5 12-12 8-15-10-10-49 5-43 16 8 11 16 11 35-1zm-8250-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm270-6c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm9160 6c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-2376-25c11-5 21-3 26 6 12 19 20 8 14-18-4-13-11-20-20-16-8 3-14 0-14-6s-4-11-10-11c-5 0-10 7-10 15 0 9-11 20-24 25-35 13-43 31-9 20 16-4 36-11 47-15zm-154 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1390-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm897-15c-4-8-11-15-17-15-7 0-7 6 0 21 13 23 26 19 17-6zm-1617 5c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm60 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2103 3c3-5 1-17-3-28s-2-28 4-37c8-14 6-22-12-38-12-12-27-18-32-15-6 4-13-1-16-9-3-9-12-16-20-16s-14-4-14-10c0-5-4-10-9-10s-8 8-7 17c1 12-11 20-38 26-33 8-41 7-53-9-7-10-13-14-13-9s-5 4-12-3c-16-16-28-15-28 2 0 8-5 16-12 18-7 3-9 12-5 22 6 15 14 17 47 11 47-8 80 1 80 21 0 8 5 12 11 9 6-4 13 2 16 13s10 19 16 16c7-2 23 5 37 16 26 20 55 26 63 13zm-1473-7c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-7485-26c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm8692-12c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm-2637-4c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-6646-15c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm316 10c0-14-26-40-33-32-8 8 11 43 23 43 6 0 10-5 10-11zm245-27c14-7 25-18 25-27 0-8 3-14 8-14 4 1 18 1 31 0 22-1 23-4 18-46-6-56-8-59-46-50-27 6-30 10-25 31 5 18 2 24-10 24-10 0-15 8-13 23 1 12-3 21-10 20-23-5-34 23-22 53 9 21 13 24 16 13 2-9 15-21 28-27zm5275 28c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm635 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-5995-20c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm6530 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-990-16c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm3050 1c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-2340 1c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm710-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7382-12c7-7 12-18 12-25 0-10-5-10-24-2-14 7-22 17-19 25 6 17 15 18 31 2zm602 2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm7360-16c0-8 5-14 10-14 6 0 10-5 10-11 0-7-10-9-24-5-14 3-28 2-31-4-11-18-27-11-20 9 3 11 1 22-5 26-21 13-9 21 25 17 21-3 35-10 35-18zm-7615-14c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm6242-8c7-4 10-17 6-30-6-26-23-29-23-4 0 10-5 23-12 30-9 9-9 12 3 12 7 0 19-4 26-8zm1268-13c-4-5 3-9 14-9 14 0 21-6 21-20 0-11 5-20 10-20 6 0 10-6 8-14-2-7 8-23 22-34 33-27 21-36-36-27-45 6-46 8-40 36 5 28 0 34-31 30-19-3-16 26 5 54 16 21 40 25 27 4zm723 9c13-13 16-38 5-38-17 1-45 29-38 39 8 14 18 14 33-1zm92 8c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1020-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1570-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4095-9c7-12-12-24-25-16-11 7-4 25 10 25 5 0 11-4 15-9zm2705-1c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1754-21c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-1274-29c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm829 1c7-5 9-11 4-14-6-4-19 0-29 8-15 11-16 14-4 15 8 0 21-4 29-9zm825-13c-8-28-12-33-20-25-9 8 6 47 17 47 6 0 7-10 3-22zm-2628-1c14 5 20-12 6-21-10-6-43 20-35 28 4 4 9 3 11-3 2-5 10-7 18-4zm1437-6c-3-11-13-21-24-24-18-5-18-4-1 19 21 28 32 31 25 5zm1790-9c-6-23-23-31-19-9 2 16 17 39 22 35 2-2 1-14-3-26zm-783-7c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-7731-26c-11-22-40-22-47-1-2 7 5 12 17 12s21 5 21 11c0 5 5 7 10 4 7-4 6-13-1-26zm7595-6c-4-15-7-34-7-41s-18-21-39-30c-31-14-38-22-38-44 0-18-8-31-22-39-13-7-29-18-36-26-15-15-52-113-52-139 0-12-6-14-32-9-18 4-37 8-43 9-5 0-11-9-13-21-2-13-9-23-16-23-15 0-39-47-31-61 4-5-5-13-19-19-14-5-26-15-27-22 0-7-2-20-4-28-16-79-16-87-1-93 9-4 19 0 24 9 5 8 15 12 24 9 15-6 14-9-4-27-16-16-19-29-15-62 2-22 3-35 0-28s-16 17-29 22c-20 8-23 14-18 39 6 28 4 29-36 36-24 4-45 3-49-2-3-5-13-12-21-15s-21-26-28-52c-13-50-22-54-79-34-23 9-36 9-41 2-4-6-15-13-24-17-10-3-18-16-18-27s-4-20-9-20-16-3-24-6c-10-3-17 3-21 20-8 34 2 55 30 62 13 3 24 10 24 15s7 9 15 9c9 0 19 8 22 18 4 9 17 27 30 39s23 34 24 50c1 39 14 68 30 68 8 0 15 10 17 21 2 12 12 24 24 27 11 3 17 10 14 16-4 5-2 12 4 16 5 3 10 1 10-4 0-6 5-11 10-11 6 0 10 7 10 15s7 15 15 15 15 4 15 10c0 5 7 7 15 4 9-4 16 3 21 20 3 14 12 26 20 26s14 5 14 10c0 6 9 10 20 10s20 5 20 10c0 6 7 10 15 10s15 5 15 10c0 6 6 10 14 10s16 10 18 23 10 22 20 21 19 8 22 22c4 15 14 24 26 24 14 0 20 7 20 21 0 12 8 23 20 26 11 3 20 10 20 15s5 6 11 3c6-4 13 2 16 13 3 12 11 18 19 15s16 5 20 21c3 14 12 26 20 26s14 4 14 9 9 11 20 14 20 12 20 21 5 16 10 16c6 0 8-11 4-27zm-2854 2c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm3881 3c39-11 53-28 23-28-8 0-12-4-9-10 3-5-3-10-14-10-12 0-21-5-21-11 0-7-11-8-30-4-20 4-30 3-30-5s-9-10-24-6c-17 4-28 1-34-10-12-21-32-10-32 17 0 17 5 18 40 13 37-6 39-5 46 22 12 50 18 53 85 32zm179-9c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm-2650 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm518-26c1-16 8-39 14-51 15-30 4-53-21-46-12 3-21 10-21 15 0 6 7 8 15 4 17-6 22 29 6 38-5 3-7 15-4 25s0 22-6 25c-15 10-14 29 2 24 6-3 13-18 15-34zm492-19c0-2-9-1-20 2-19 5-27 33-13 46 5 5 33-36 33-48zm543 36c31-16 32-22 12-62-16-29-40-32-28-4 3 8 0 15-6 15s-11 9-11 20-4 20-10 20c-5 0-7 7-3 15 3 9 8 14 12 13 3-2 18-10 34-17zm1322-1c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-9377-10c8 0 12-9 10-22-2-18-8-22-27-20-13 2-27-1-31-7-10-17-40-2-40 20 0 10 7 19 15 19s15 5 15 11c0 7 9 9 23 5 12-3 28-6 35-6zm8462-9c0-17-18-21-24-6-3 9 0 15 9 15 8 0 15-4 15-9zm-1300-21c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1603-4c10-8 14-17 9-20s-17 3-27 14c-21 23-9 26 18 6zm452-6c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm59-41c-6-11-24-2-24 11 0 5 7 7 15 4 8-4 12-10 9-15zm-9189 1c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm5915 0c8-5 12-12 8-15-9-9-48 4-48 16s21 11 40-1zm1328 4c13-4 21-12 19-18s3-16 12-23c14-11 13-12-6-13-32 0-53 10-53 26 0 8-4 14-10 14-5 0-10 5-10 10 0 11 15 12 48 4zm-1448-14c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-86-6c9-3 16-12 16-19s6-15 13-18c6-2 9-7 5-11-3-4-16-3-27 4-17 9-22 8-27-5-10-25-22-17-16 11 3 16-1 30-9 35-11 7-9 9 8 9 12 0 28-3 37-6zm356 2c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm2470 0c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm570 0c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-8822-31c3-3 3-8-1-11-8-8-47 5-47 16 0 9 38 5 48-5zm6602-5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6765-14c8-7 12-16 9-19-10-9-44 5-44 19 0 18 18 18 35 0zm6990-6c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm281-4c14-15 19-36 8-36-16 0-44 23-44 35 0 19 17 19 36 1zm1414-8c0-5-4-7-9-3-5 3-12 1-16-5-8-13-45-13-45 1 0 5 4 8 9 5s14 1 21 9c12 14 40 10 40-7zm340 12c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2787-76c-21-16-40-18-47-5-3 5 4 11 16 14 12 4 19 9 15 13s-1 14 5 21c10 13 13 11 20-7 6-17 4-26-9-36zm2637 46c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-9506-14c-7-19-28-26-45-15-11 7-9 9 9 9 12 0 22 5 22 10 0 6 4 10 10 10 5 0 7-6 4-14zm5732-13c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm974-4c10-18 9-20-7-17-10 2-19 11-21 21-5 24 15 21 28-4zm2544-4c-3-7-12-16-20-19s-13-2-11 2 7 15 10 25c4 10 11 16 16 12 6-3 8-12 5-20zm-1319 5c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1010 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm755 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-3150-25c0-10-11-30-25-45s-25-32-25-38c0-7-7-3-15 8-8 10-15 27-15 38 0 15 5 17 30 13 17-4 31-2 31 3 1 6 3 15 4 20 1 6 3 12 4 15 3 13 11 3 11-14zm1335 9c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm447-5c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm-1706-22c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm1024 18c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-7210-11c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm5270-14c0-15-18-31-26-23-7 7 7 37 17 37 5 0 9-6 9-14zm3410-18c0-11-22-10-39 1-7 5-11 14-7 20 7 11 46-7 46-21zm70 25c-1-28-15-53-30-53-10 0-21-6-23-12-3-8-6-6-6 4-1 10 8 22 19 28s20 17 20 25 5 15 10 15c6 0 10-3 10-7zm100-13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-9620-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm8830-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-8200-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm8430 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-8742-32c16-16 15-28-2-28s-38 24-29 33c9 10 17 9 31-5zm5747 2c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm-6458-36c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm7553-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6954-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-546 2c0-18-24-30-40-20-8 5-5 11 7 21 24 18 33 17 33-1zm888-16c-17-23-19-31-9-43 9-11 10-24 1-57-10-38-10-45 6-56 10-7 26-13 36-13 13 0 18-8 18-29 0-23 5-30 27-35 16-5 29-3 33 5 4 6 13 8 19 5 6-4 11-2 11 3 0 6 4 11 9 11s4-17-1-40c-6-23-16-40-25-40-7 0-16-7-19-15-4-8-12-15-20-15s-14-4-14-10c0-5-4-10-10-10-5 0-7 7-3 16 4 12 1 15-13 12-13-2-19-12-19-28 0-21 5-26 31-28 26-3 32-8 40-40 7-27 15-38 32-40 12-2 22 1 22 7s7 11 15 11 15 5 15 10c0 6 13 10 29 10 23 0 33-7 45-30 13-28 13-36-3-84-17-52-17-54 4-80 23-29 45-34 45-11 0 12 4 13 19 5 15-7 23-6 34 4 8 9 24 12 37 9 12-3 25-1 29 5 10 16 51 3 44-14-3-8 5-16 21-20 14-3 26-13 26-21s6-13 13-10c6 2 25-2 41-11 17-8 53-16 80-17 35-2 51-7 51-16 0-8-4-13-10-12-55 8-69 7-79-9-8-13-8-23 1-38 10-15 10-25 1-45-9-21-8-28 6-44 18-20 19-53 1-51-5 1-8 9-7 18 3 14 1 15-9 5-7-7-22-13-34-13s-25-4-31-9c-5-6-24-4-49 4-72 25-87 24-99-12-15-43-19-45-33-16-10 20-9 24 2 19 22-8 29 48 10 77-17 27-87 47-93 28-2-6-8-11-14-11s-8 6-5 14-1 17-9 20-14 12-14 20c0 19-50 28-57 10-3-8 0-21 7-29 10-12 9-15-8-15-14 0-22-8-24-22-2-13-9-22-15-21-7 2-17-15-23-36-6-24-17-41-29-44-13-3-20-18-25-50-5-31-12-46-25-50-12-3-20-18-25-48-4-24-16-74-28-111-17-53-26-68-41-68-17 0-18 5-13 36 4 21 3 41-4 49-8 9-6 14 9 18 14 3 22 17 26 43 12 74 15 82 33 86 13 4 21 18 26 46 3 23 14 45 23 50 23 13 45 89 28 95-16 7-7 67 11 67 8 0 14 5 14 10 0 6 9 10 20 10 13 0 20 7 20 19 0 23-64 39-86 20-8-6-14-8-14-4 0 5-8 1-18-8-17-16-19-15-32 18-14 37-34 46-44 20-3-8-12-15-21-15-8 0-15-6-15-14s-5-18-11-22c-8-5-9 6-4 35 5 33 3 46-16 73-13 17-18 28-12 25 7-4 15-1 20 6 4 7 16 16 26 20s17 17 17 32c0 34-33 31-38-3-2-12-10-22-18-22s-14-4-14-10-3-9-7-9c-5 1-10 0-13-1s-16-4-30-6-39-6-56-10l-32-6 10 49c6 26 11 67 12 91 0 23 6 42 11 42 6 0 17 27 24 60 14 61 44 96 74 84 8-3 18-1 22 5 3 6 15 11 26 11 10 0 20 5 20 10 1 6 2 16 3 23 1 6-2 18-7 25-11 14-57 16-57 2 0-5-6-9-12-7-8 1-14-10-16-26-3-23-7-26-27-21-13 3-30 2-37-2-7-5-22-7-33-6-13 2-24-6-30-20-8-17-17-22-37-20-16 2-28-1-28-7s-9-11-20-11-20-3-20-7c0-15-53-34-64-23-7 7-4 10 7 10 9 0 17 5 17 12 0 37 44 168 56 168 8 0 14 5 14 10 0 18 18 10 23-10 3-14 14-20 31-20 14 0 26 5 26 10 0 6 5 10 11 10 7 0 9-10 5-25-5-20-2-27 16-34 42-16 88 20 88 70 0 12 7 19 20 19 19 0 26 19 21 57-2 19 16 24 43 12 32-15 56 2 56 41 0 33 4 38 35 38h24zm9663-10c-5-19-10-26-10-16-1 10-8 20-17 24-12 4-11 8 8 18 30 15 31 14 19-26zM857 6975c-5-11 0-13 23-8 33 6 36-1 20-41-6-18-17-26-34-26-38 0-51 30-32 73 10 21 31 23 23 2zm453 5c0-5-9-10-21-10-11 0-17 5-14 10 3 6 13 10 21 10s14-4 14-10zm268-10c6 0 12-6 12-14 0-23 20-30 33-11 17 22 47 9 47-20 0-12-14-36-30-54-36-37-37-37-36-10 1 16-8 25-34 34-19 6-36 19-38 28-2 10-7 17-12 17-4 0-6 9-3 21 4 15 11 19 27 15 11-3 27-6 34-6zm-934-15c-4-8-10-12-15-9-11 6-2 24 11 24 5 0 7-7 4-15zm1081 6c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm240-1c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm9636-33c-17-17-24-1-10 25 12 21 14 21 17 4 2-10-1-23-7-29zm-2065-12c-1-25-2-45-4-45-14 0-62 33-62 43 0 22 16 38 32 32 9-4 19-2 23 4 10 18 12 13 11-34zm784 25c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm360-26c0-14-3-14-15-4-8 7-15 14-15 16s7 4 15 4 15-7 15-16zm-8300-4c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm6760-21c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm2224-3c-3-9-12-16-20-16-11 0-10 4 4 18 20 22 25 21 16-2zm181 15c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-10320-11c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm505 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm7681-10c10 0 19-4 19-10 0-15-34-12-56 6-17 14-17 15-1 10 10-3 27-6 38-6zm1789-3c0-14-20-37-32-37-4 0-2 11 4 25 12 27 28 34 28 12zm-8845-9c26-11 36-45 11-35-7 3-18 1-24-5-14-14-32-1-32 21 0 16 8 31 16 31 2 0 15-5 29-12zm-1504-21c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm139-2c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm290-5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-705-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm205-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm435-5c-3-6 2-14 10-19 20-10 9-42-14-42s-44 16-47 34c-1 10 5 16 17 16 10 0 19 5 19 10 0 6 5 10 11 10 5 0 8-4 4-9zm10791-18c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-1158-9c2-1-9-1-23-1-25 0-31 7-18 20 3 4 13 1 22-5 9-7 17-13 19-14zm303 16c5 0 9-5 9-11 0-15-43-7-48 10-3 10 0 12 12 8 10-4 22-7 27-7zm-2161-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2802-22c-5-21-6-21-12-2-8 21-3 37 10 29 4-3 6-15 2-27zm-8972 2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm6393-10c-6-22-23-38-23-21s12 41 20 41c5 0 6-9 3-20zm-6235-9c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm8362 3c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-10256-9c-7-17-30-20-39-6-4 8 9 15 37 20 4 0 5-6 2-14zm2096 7c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm5814-8c12-5 13-10 5-25-14-28-39-24-39 6 0 26 7 29 34 19zm-7867-30c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm334 9c36-21 38-36 4-27-15 4-25 2-25-5 0-6 7-11 15-11 10 0 14-8 11-22-1-13-6-22-9-20-4 1-14 2-22 2-11 0-14 12-12 50 1 27 4 50 5 50 2 0 17-8 33-17zm1469 10c0-5-5-15-10-23-8-12-10-11-10 8 0 12 5 22 10 22 6 0 10-3 10-7zm6240-15c0-27-14-29-26-3-10 20-9 23 7 22 11-1 19-9 19-19zm-8150 2c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1770-4c0-7-7-19-15-26-13-11-15-8-13 14 2 26 28 38 28 12zm8126-12c-3-7 0-16 5-20 8-4 8-9 0-17-7-7-15-6-25 2-12 10-13 18-4 36 11 25 34 24 24-1zm669 16c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-1565-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1665 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-10430-20c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm10365 0c12-8 11-10-7-10-13 0-23 5-23 10 0 13 11 13 30 0zm-10391-15c5-3 7-14 4-26s-2-24 3-28c5-3 15-16 22-28 10-19 10-23-3-23-22 0-32-50-12-65 23-17 0-47-33-43-19 2-26-2-28-20-2-12-11-26-21-31-10-6-23-28-30-50-11-38-32-53-45-32-8 12 14 72 24 66s15 1 24 38c5 20 3 27-9 27-17 0-18 2-9 24 3 9 12 16 19 16 8 0 16 9 20 20 3 10 22 29 41 41 19 11 33 26 31 33-5 16-45 20-63 5-12-10-14-4-12 39l2 51 33-4c19-2 37-7 42-10zm8615-6c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm211-15c19-47 19-47-9-40-15 4-26 1-28-6-2-6-10-8-17-4-7 5-10 14-7 22 3 7 1 16-4 19-18 11-10 27 11 22 12-3 22 0 26 9 8 21 11 18 28-22zm-6985 11c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm6230-6c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm-6649-2c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-236-7c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm9463-17c-2-22 2-29 20-31 14-2 22-10 22-23 0-10 5-19 10-19 6 0 8-16 4-41-5-27-3-44 5-48 15-10 3-41-15-41-17 0-18-22-2-38 7-7 8-12 2-12-13 0-36 39-29 50 4 6 0 10-7 10-36 0-42 98-6 108 26 6 18 36-10 40-16 3-22 8-18 19 3 8 6 23 6 34 0 10 5 19 10 19 6 0 9-12 8-27zm-9138 7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm6674-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm1326 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-8030-15c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm7550-6c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm1515-8c-7-23-25-29-25-8 0 14 21 39 28 33 2-3 1-14-3-25zm-8295 4c0-9-6-12-15-9-8 4-12 10-9 15 8 14 24 10 24-6zm7860 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-9490-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1106-6c34-16 41-39 13-39-8 0-17-4-21-9-8-11-72 26-67 39 2 6 9 9 16 7s13 2 13 8c0 14 6 13 46-6zm8100-10c-3-9-6-18-6-21s-7 0-15 7c-13 11-13 15-3 21 21 13 31 10 24-7zm-9926-10c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm260-4c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm8461-23c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm379 19c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-8610-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm8100-10c0-21-24-28-35-10-8 14 3 30 21 30 8 0 14-9 14-20zm-5970-3c0-19-27-53-36-45-9 10 12 58 26 58 5 0 10-6 10-13zm5510 3c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2720 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-11261-9c7-5 9-11 4-14-6-4-19 0-29 8-15 11-16 14-4 15 8 0 21-4 29-9zm706-1c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm8520-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-6515-21c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm7990 7c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-9863-36c3 0 12 8 20 18 12 15 13 12 7-26-3-24-14-72-23-105-15-58-18-62-46-62-17 0-30-6-31-12-1-7-2-17-3-23-2-14-31-12-35 3-3 6-7 26-10 42-5 24-4 26 4 13 22-36 49-13 41 35-1 4 7 10 16 14 10 4 22 12 26 20 4 7 15 13 22 13 8 0 15 4 15 9s3 16 6 25c4 10 1 16-9 16-21 0-30 17-21 38 7 16 7 16 11 0 3-10 7-18 10-18zm-1127 0c0-5-7-7-15-4-8 4-12 10-9 15 6 11 24 2 24-11zm3360 10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm8009-3c6-8 8-17 5-20-8-7-54 14-54 25 0 13 36 9 49-5zm-10011-9c-6-18-28-21-28-4 0 9 7 16 16 16s14-5 12-12zm8022-8c0-11-7-20-15-20s-15 9-15 20 7 20 15 20 15-9 15-20zm-6240 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm520 1c0-14-18-23-30-16-6 4-8 11-5 16 8 12 35 12 35 0zm6238 3c29-8 28-22-2-17-19 4-25 0-30-21-3-14-13-26-21-26s-15-5-15-10c0-6-8-10-17-8-13 2-19-5-21-23-2-21-7-26-23-22-13 4-19 0-19-11 0-27-31-15-43 17-4 10-18 18-34 19-15 0-34 2-42 2-20 1-26 26-7 26 9 0 16 5 16 11 0 7 11 8 30 4s30-3 30 4c0 6 7 11 15 11 7 0 19 8 24 18 6 9 11 13 11 8s7-3 15 4 24 10 35 7 23-1 26 4c6 10 39 12 72 3zm857-4c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm380 0c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zM879 6466c10-12 9-14-6-11-10 2-21 4-25 4-5 1-8 6-8 11 0 15 26 12 39-4zm2546-6c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm8015-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7940-26c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm250 6c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-52-25c-11-26-19-30-31-18-8 7 21 43 34 43 5 0 3-11-3-25zm-2732-7c-3-13-6-30-6-37 0-10-3-11-9-5-12 11-2 64 11 64 6 0 8-10 4-22zm250-26c-11-10-15 4-8 28l7 25 3-23c2-13 1-26-2-30zm3144 3c0-8-7-15-15-15-16 0-20 12-8 23 11 12 23 8 23-8zm-584-14c9-12 7-18-9-32-20-16-22-15-34 8-7 14-11 28-8 32 8 13 40 8 51-8zm-2492 3c24-9 19-21-11-27-35-7-46 0-30 18 14 16 19 17 41 9zm2146-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm410-11c0-5-7-9-15-9-9 0-12 6-9 15 6 15 24 11 24-6zm234 0c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-991-19c-3-11-9-20-14-20-10 0-12 24-2 33 13 13 21 7 16-13zm577 10c0-18-40-90-50-90-13 0-32 38-25 50 3 6 14 10 24 10s21 9 24 20c5 21 27 28 27 10zm713 4c13-13-14-45-36-42s-32 33-10 33c6 0 15 3 19 8 9 9 19 9 27 1zm5977-13c0-24-13-33-34-25-20 8-21 24-1 24 8 0 15 5 15 10 0 6 5 10 10 10 6 0 10-9 10-19zm1270 9c13-8 13-10-2-10-9 0-20 5-23 10-8 13 5 13 25 0zm-8079-40c5 0 8-12 5-27-2-16-5-34-5-41-1-7-6-10-11-7-6 4-8 10-5 15s-6 17-20 28c-28 22-32 32-11 32 8 0 17 8 21 18 8 16 8 16 12 0 3-10 9-18 14-18zm6609-2c0-11-17-10-41 3-28 15-13 31 16 17 14-6 25-15 25-20zm-6816 1c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm8380 15c9-3 16-10 16-15 0-14-26-10-40 6-13 16-3 20 24 9zm-8719-24c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1015 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2934-27c20-25 20-30 8-76-7-27-15-52-18-55-9-9-7 24 3 51 7 19 5 35-10 63-21 43-22 44-12 44 4 0 17-12 29-27zm10828 11c9-3 13-10 10-15s2-12 10-15c25-10 19-22-8-17-13 3-27 0-30-6-14-22-26-11-20 17 11 44 13 46 38 36zm-10574-18c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm185 4c-3-5-14-10-23-10-15 0-15 2-2 10 20 13 33 13 25 0zm1545 7c0-11-30-140-33-143-8-9-37 8-37 22 0 13-20 21-63 28-23 3-43 24-32 33 4 5 10 2 12-4 5-15 43-17 43-3 0 6 6 10 14 10s17 12 21 28c5 18 9 22 13 12 12-34 42-34 42 1 0 10 5 19 10 19 6 0 10-1 10-3zm-1655-28c0-7-8-15-17-17-18-3-25 18-11 32 10 10 28 1 28-15zm9655 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7142-11c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm7477 1c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-7975-20c0-11-4-20-9-20s-7 9-4 20 7 20 9 20 4-9 4-20zm-1900 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm100-5c8-9 8-15 2-15-18 0-42 12-42 21 0 14 26 10 40-6zm2085 5c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1035-17c-1-18-18-35-24-24-4 6-4 16-1 21 7 12 25 13 25 3zm-1365-13c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm375 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm6294-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm233-9c-4-16-2-32 3-35 14-9 12-25-2-25-7 0-21 7-31 15-26 19-15 75 15 75 17 0 20-5 15-30zm1033 20c16-9 18-14 8-35-11-25-34-24-24 1 3 7 1 16-4 19-11 7-14 25-4 25 3 0 14-5 24-10zm-10080-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1652-8c15-6 14-9-7-19-22-10-25-9-25 8 0 20 5 22 32 11zm784-21c-4-6-14-11-22-11s-14-4-14-10c0-5-9-10-20-10s-20-5-20-12c0-6-3-9-6-5-3 3-3 19 1 36 6 27 9 30 36 24 20-4 29-2 29 8 0 9 3 10 11 2 6-6 8-16 5-22zm6804 19c12-8 11-10-7-10-13 0-23 5-23 10 0 13 11 13 30 0zm105-19c18-22 18-24 2-18-11 4-20 1-23-8-8-19-25-9-19 10 13 41 16 48 18 44 1-2 11-15 22-28zm-8604 6c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm1807-2c32-5 42-11 42-26 0-10 7-19 15-19 12 0 14-7 9-27-4-16-9-31-11-35-7-14-33-8-40 8-3 8-16 20-29 24-20 8-23 14-18 40 6 26 4 30-14 30-12 0-24 5-28 11-4 7 0 9 12 6 11-3 38-9 62-12zm-1444-26c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm7746 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm820 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm578-27c2-15-2-21-12-19-22 3-29 13-22 31 8 22 30 14 34-12zm-10688-3c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm220-4c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1961-26c5 0 9-4 9-10 0-5-7-10-15-10s-15-6-15-14c0-7-3-28-7-46-6-30-4-33 15-28 12 4 25 2 28-4 3-5-3-12-15-15s-21-9-21-14c0-4-19-7-42-6-32 2-43-2-43-13 0-9 9-15 23-14 12 0 22-3 22-8 0-4-7-8-15-8s-15-7-15-15c0-17-18-19-55-5-19 7-27 6-29-3-16-53-16-53-33-18-14 27-14 38-4 66 9 27 9 38-1 55-12 20-10 24 12 38 13 10 32 25 42 34 14 14 23 16 45 7 34-13 71 5 86 41 8 20 11 22 14 8 3-10 9-18 14-18zm1494 11c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm7550-1c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zM810 6060c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm726-6c-3-9-6-18-6-20s-6-4-14-4-16-5-18-12c-3-9-6-9-11-1-4 7 3 21 15 32 26 25 43 27 34 5zm1619-15c-5-14 0-22 22-30 16-6 29-6 31-1 1 5 9 18 17 28 14 18 14 16 9-13-4-22-3-33 5-33 6 0 11-7 11-15s4-15 9-15 11-9 14-20c6-23 45-28 65-8 9 9 12 8 12-4 0-24 16-31 40-16 18 11 23 10 39-12 17-21 21-22 35-11 9 8 19 12 21 9 9-8-6-38-16-32-12 7-33-41-26-60 4-9 15-16 25-16 15 0 18-5 14-25-3-20 0-25 17-25 11 0 21 4 21 9s5 22 10 37c10 25 12 26 26 12 12-12 14-20 6-34-6-11-14-18-19-16-8 3-22-43-26-83-2-15 3-19 21-18 12 2 22-2 22-7 0-6-7-10-15-10s-15-7-15-15-6-15-14-15c-15 0-26-21-26-51 0-17 11-24 33-20 4 0 7-3 7-9 0-13-16-13-60 0-22 6-38 6-44 0s-18-10-29-10c-10 0-15-4-12-10 14-22-31-8-48 15l-18 25h31c35 0 49 23 32 51-16 24-15 30 2 23 7-3 16 2 19 10 4 9 13 16 22 16 8 0 15 7 15 15s9 19 20 25c30 16 26 58-7 71-37 14-57 8-61-19-2-14-9-22-20-20s-18-7-22-27c-5-25-51-85-65-85-2 0 1 15 6 32 15 52 11 68-18 79-20 8-33 7-47-1-24-15-47 3-28 22 33 33-4 83-76 101-38 10-56 11-66 3-21-18-56-73-56-88 0-18-34-51-43-41-14 13-6 50 13 68 11 10 20 24 20 32 0 7 7 13 16 13 18 0 64 44 64 62 0 5 7 8 15 4 8-3 15-1 15 5s9 18 21 27c12 11 23 34 26 60 5 38 3 44-16 49-24 6-29 23-6 23 8 0 15 5 15 11 0 5 5 7 10 4 6-4 8-15 5-26zm475 21c13-8 12-10-3-10-10 0-21-8-24-17-4-10-16-25-27-34-17-14-18-19-7-33s11-16-3-16c-9 0-16-4-16-10 0-5-7-10-16-10-12 0-15-6-10-25 4-14 2-25-3-25-14 0-20 39-11 68 4 15 13 47 20 72 11 40 13 43 21 23 11-30 27-29 41 2 12 28 16 29 38 15zm6388-9c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm-6648-7c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm8220 9c0-14-15-28-45-43-16-8-33-19-37-25-4-5-8 1-8 14 0 17 4 22 15 17 9-3 18 1 21 9 4 8 12 15 20 15s14 5 14 10c0 6 5 10 10 10 6 0 10-3 10-7zm-10420-23c0-12-61-41-72-34-5 3 6 16 24 29 32 22 48 24 48 5zm200 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-474-37c-3-3-13-3-22 1-16 6-15 8 2 21 16 12 19 12 22-1 2-9 1-18-2-21zm2394 27c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm8560 0c13-8 13-10-2-10-9 0-20 5-23 10-8 13 5 13 25 0zm-8350-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1820-13c0-5-4-14-9-22-11-17-32-5-24 14 5 15 33 21 33 8zm4774-26c-3-9-10-17-15-17-11 0-12 34-2 43 11 12 24-8 17-26zm1166 7c0-8 5-14 10-14 6 0 10-4 10-10 0-17-18-11-40 12-25 28-26 38 0 31 11-3 20-12 20-19zm380 10c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm-9604-8c15-12 17-19 8-32-16-27-38-31-30-6 4 11 2 23-4 27-12 7-14 25-2 25 5 0 17-6 28-14zm3034-7c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-45 2c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-3490-21c-3-5-1-11 5-15 18-11 10-26-11-20-15 5-22 2-26-13-3-12-11-18-18-15-9 3-18-9-26-39-10-39-12-41-20-20-10 25-22 28-39 8-13-17-40-10-40 10 0 7 9 18 20 24s19 14 19 18c-4 25 4 32 33 30 28-3 34 1 36 20 3 20 7 22 34 17 23-6 29-4 23 5-5 9-4 11 4 6 6-4 9-11 6-16zm696-23c-6-6-17-4-30 5-27 19-16 30 15 16 15-7 21-15 15-21zm149 23c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2740 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm238-2c-6-18-28-21-28-4 0 9 7 16 16 16s14-5 12-12zm-1602-14c-3-9-6-20-6-25 0-18-15-9-27 16-10 23-9 25 14 25 19 0 24-4 19-16zm-636-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1150 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm125 1c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-1982-19c-4-19-55-46-74-40-6 2 6 16 27 30 47 32 54 34 47 10zm-135-27c-12-27-28-34-28-12 0 14 20 37 32 37 4 0 2-11-4-25zm-1158-6c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm1570 11c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1105-19c-9-16-25-3-18 15 4 10 9 12 15 6s7-15 3-21zm7905 25c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-7334-33c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm-2336 7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2920 0c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm90-17c0-9-6-13-14-10-7 3-18 1-24-5s-15-7-22-3c-8 5-7 12 5 25 18 20 55 16 55-7zm-2372-35c-14-24-41-49-46-43-9 8 11 45 24 45 8 0 14 5 14 10 0 6 5 10 10 10 6 0 5-9-2-22zm962 12c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm210-8c0-5-9-17-20-27-16-14-20-15-20-4 0 16 19 39 32 39 4 0 8-4 8-8zm-2265-12c3-5-1-10-9-10s-18 5-21 10c-3 6 1 10 9 10s18-4 21-10zm3435-11c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-3156-12c-2-7 12-22 33-35 21-12 32-22 24-22s-20-8-28-17c-11-14-16-15-20-5s-8 9-17-4c-11-14-16-15-35-4-12 6-20 17-18 25 3 7 0 18-6 24-8 8-8 11 1 11 7 0 12 7 12 16s6 14 13 12c6-3 12-10 12-15 0-6 3-14 6-18 4-3 6 2 6 12 0 35 3 44 13 38 5-3 7-11 4-18zm9456 2c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm-8816-11c-8-29-10-31-23-23-8 4-8 12-1 26 15 27 33 24 24-3zm1526 6c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm1154 7c3-5-1-11-9-15-15-6-29 7-18 18 9 9 21 8 27-3zm-2854-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1793 4c6-7-14-44-24-44-3 0-4 11-1 25 4 25 13 31 25 19zm1262-4c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-3605-41c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14zm1113 1c-3-11-9-20-14-20-10 0-12 24-2 33 13 13 21 7 16-13zm201-1c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-777-11c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm-717 8c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm640-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2095 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm440 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-1638-16c3-9-3-23-16-35-11-11-21-24-21-29 0-6-4-10-10-10-5 0-10 7-10 15s-4 15-10 15c-5 0-10 9-10 20 0 13 7 20 20 20 11 0 20 5 20 10 0 16 30 11 37-6zm1363-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm508-1c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm-2286-38c-24-19-37-57-22-66s12-45-4-45c-8 0-20-17-27-37-22-70-40-79-63-33-14 28-13 30 2 28 11-2 18 5 20 18 2 12 11 24 21 27 13 3 21 18 26 48 7 42 56 108 64 86 2-5-5-17-17-26zm-1862 19c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3930 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3520-14c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm2360-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2695-9c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm949-12c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm96-9c0-13-7-13-31 1-11 5-17 14-14 20 7 11 45-7 45-21zm350 21c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm2540-12c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm370 11c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-3464-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm1904 17c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm1703-19c17-29 18-29 47-14 17 8 30 19 30 24 0 6 5 7 10 4 6-4 8-10 5-15-7-11 27-30 53-30 33 0 44-67 21-126-6-18-13-24-17-17-4 6-21 13-37 15-25 2-31-1-33-19-4-25-22-32-22-8 0 8-4 15-10 15-5 0-10 9-10 21 0 14-5 19-17 17-13-2-18-13-18-33 0-23 5-31 22-33 13-2 20-9 17-16s6-24 20-38l24-27-19-57c-11-31-19-63-19-69 0-7-9-15-20-18-31-8-24-25 20-47 47-24 53-43 11-35-24 4-30 1-39-23-6-15-13-44-17-64-3-21-11-38-18-38-17 0-39 16-37 26 1 5-12 13-29 18-32 9-38 26-25 74 5 16 14 22 35 22 16 0 29 5 29 10 0 6 8 10 18 8 25-4 21 25-5 37-13 5-23 16-23 23s-7 15-15 18c-8 4-12 11-9 16 8 12-14 28-38 28-35 0-76-52-48-62 6-2 8-16 4-35-4-22-13-32-30-36-19-3-24 0-24 17 0 12-5 27-10 32-8 8-8 19 0 38 14 38 13 46-9 46-12 0-21-9-25-26-5-20-12-25-33-22-24 3-28-1-39-47-9-32-10-53-4-59 14-14 12-26-4-26-14 0-29-37-31-80-1-14-5-31-9-38-9-15 40-35 71-29 12 2 24-1 27-8 6-18 74-29 91-15 10 8 19 8 33 1 11-6 22-8 25-5s13-8 23-25 26-34 36-37 18-10 18-15c0-16-25-10-43 11-11 13-27 20-45 18-15-1-34 2-41 6-8 5-17 3-22-5-12-20-11-69 2-69 6 0 9-6 6-12-2-7 4-25 15-40 19-27 19-27-2-48-11-11-20-31-20-44 0-14-10-32-22-41-18-12-20-17-9-24 10-7 10-10 1-16-7-4-16-1-21 6-8 12-10 12-18 0-5-7-14-10-20-7-6 4-14 0-17-9-4-9-16-14-32-13-21 3-27-2-34-29-5-19-15-33-23-33s-15-4-15-10c0-5-9-10-20-10s-20-1-20-2c-10-63-10-81-1-92 8-10 5-16-15-24-37-17-54-15-54 8 0 11-4 20-10 20-5 0-10 6-10 14 0 23-73 31-104 11-29-20-33-33-11-41 8-4 15-12 15-18 0-7 17-17 38-23l37-10-31-2c-70-3-94-12-94-38 0-17-5-23-17-21-13 2-19-5-21-25-3-21-8-27-19-23-11 5-13 2-9-10 7-19-11-57-24-49-5 3-7 12-3 20 3 8 1 15-5 15-11 0-32-53-32-81s-22-69-37-69c-7 0-13-4-13-9s-10-11-21-14c-16-4-20-11-16-27 7-28-10-67-32-73-16-4-46-107-39-137 2-10-6-13-32-11l-35 2-21-78c-12-45-26-77-32-76-6 2-14-8-18-22-7-28-11-29-49-15-25 10-27 13-20 48 5 20 8 48 9 62 1 16 10 29 27 37 19 9 29 24 33 48 4 20 13 35 21 35 12 0 35 55 35 86 0 7 9 14 20 17 14 3 20 14 20 31 0 14-4 26-10 26-5 0-10 5-10 10 0 6 9 10 20 10s19 3 18 8c-6 21 15 83 32 92s40 82 56 175c11 65 32 96 68 99 5 1 14 10 20 21 13 23 48 51 59 47 4-1 10 6 14 15 3 10 14 26 25 36 20 19 24 37 8 37-5 0-10 7-10 15s-6 15-14 15c-9 0-12 7-9 20 4 15 0 20-13 21-14 0-15 2-4 6 23 8 40 34 40 60 0 13 5 23 11 23s8-9 4-20c-4-12-1-27 5-35 14-17 60-20 60-5 0 6 6 10 14 10s17 11 20 25c4 14 13 25 20 25 16 0 31 50 18 59-4 3-11 14-15 24s-10 16-15 13c-11-6-24 4-39 31-13 22-12 23 34 16 43-6 46-5 38 13-4 10-10 30-13 44-2 14-9 31-15 38-7 8-5 12 7 12 9 0 18 12 22 28 10 39 21 50 48 45 20-4 24 0 30 31 6 32 10 36 34 34 24-3 29 2 43 45 9 26 24 53 34 61 10 7 19 22 20 32 4 46 18 84 30 84 8 0 21 26 32 63 23 75 50 87 45 20-1-24 2-43 7-43s11-9 14-20c6-21 51-29 62-10 4 6 11 8 16 5 15-10 22 24 9 40-17 21-6 45 19 38 14-3 19-13 18-31-2-21 3-28 21-30 15-2 22-9 20-20-3-18 31-28 59-18 14 6 14 9-2 26-10 11-14 20-9 20s2 5-6 10-15 15-15 22-12 14-28 16c-24 3-26 7-21 30 10 47 14 53 25 46 6-3 15 0 20 7 4 8 14 14 21 14 12 0 25 32 27 66 1 22-44 42-57 26-5-7-11-19-13-28-3-12-10-14-36-7-18 5-33 13-33 19s5 7 10 4c6-4 18 10 26 32 10 24 27 44 47 55 42 22 40 22 60-11zm-4483 13c0-15-22-44-31-39-11 7 7 45 21 45 6 0 10-3 10-6zm175-4c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1990 0c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1675-10c8-5 12-12 8-15-9-9-48 4-48 16s21 11 40-1zm-3810-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1101-13c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm496-24c2-4-2-15-7-23-8-12-14-13-47-1-20 8-43 20-50 27-11 10-8 15 14 27 25 12 31 12 58-4 16-10 31-22 32-26zm-1312 27c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm526-1c11-5 17-14 14-20-7-11-45 7-45 21 0 13 7 13 31-1zm2049-26c0-7 5-13 10-13 6 0 10-7 10-15s5-15 10-15c6 0 10-4 10-10 0-5-6-10-14-10-18 0-22-6-30-47-6-28-4-34 21-47 20-11 23-15 11-16-10 0-18-4-18-10 0-5-10-10-23-10-43 0-76-23-83-58-4-20-1-38 6-47 10-12 9-15-3-15-9 0-21 9-27 19-5 11-24 22-40 26-47 10-36 40 15 40h39l17 60c16 52 16 61 4 75-8 9-15 22-15 28 0 7-4 12-9 12s-7 9-4 20 12 20 19 20c8 0 14 4 14 9s7 16 15 25c13 12 21 13 40 4 14-6 25-17 25-25zm5230 22c0-8 5-15 11-15s9-14 7-32c-2-28 1-34 20-36 12-2 22-10 22-18s5-14 10-14c6 0 10-5 10-11 0-17-63-2-78 19-8 11-11 30-7 53 4 22 2 40-4 44-14 8-14 25-1 25 6 0 10-7 10-15zm-7905-25c18-7 23-16 23-40-1-35-10-38-38-10-11 11-27 20-35 20-19 0-19 6 3 35 9 13 19 19 21 13 2-5 14-13 26-18zm3425 20c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm159 4c26-5 30-10 25-29-3-13-1-26 5-29 17-11 13-24-6-22-13 1-19-8-21-33-2-23-9-35-23-38-10-3-19-9-19-14 0-18-32-8-37 11-8 29-37 25-50-7l-11-28-1 25c-1 39 12 52 49 47 70-12 123 55 65 81-14 6-25 18-25 27 0 17 4 18 49 9zm-2879-18c0-16-24-39-32-30-3 3-4 14-1 25 6 22 33 26 33 5zm2127-22c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm1063 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2246-15c11-8 17-17 14-21-8-8-48 14-48 26 0 14 12 12 34-5zm-1479-12c-2-10-4-21-4-25-1-4-7-5-15-2s-17 1-21-5c-3-6-17-11-30-11-20 0-41-23-37-42 4-16-19-59-27-53-5 3-12 1-16-5-3-5-15-10-26-10-25 0-25 30 1 37 11 3 20 9 20 14s7 9 15 9 17 14 21 35c5 29 10 35 33 35 14 0 37 9 51 20 31 24 39 25 35 3zm7355 13c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-6609-29c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm249 13c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm1010 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm5320 0c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm-6454-37c-5-12-10-13-18-5s-8 15 3 28c15 18 25 4 15-23zm7160 21c-3-9-6-20-6-25s-9-9-20-9-20-5-20-11c0-5-5-7-11-4-5 4-15-6-21-23-11-27-14-29-40-20s-39 28-19 28c5 0 15 16 21 35 11 34 13 35 50 29 23-4 40-2 44 5 11 17 29 13 22-5zm-4211-4c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm91-6c-3-9-6-18-6-20s-5-4-11-4c-8 0-9 4 0 13 6 8 8 17 4 20-3 4-1 7 6 7 8 0 11-6 7-16zm-3391-35c0-8 4-17 10-21 20-14-5-20-39-8-38 12-42 20-25 51 9 19 13 19 32 6 12-8 22-21 22-28zm2499 35c22-9 20-24-3-24-11 0-21-4-23-10-2-5-9-6-17-1-12 8-12 11 0 25 16 17 21 18 43 10zm-375-46c-5-18-9-34-9-34 0-1-9 0-20 3s-20 9-20 13c0 5-3 15-6 23-4 12 0 14 14 10 11-2 23 0 26 6 15 23 24 10 15-21zm1054 0c-8-43-11-45-27-23-14 19-36 13-36-11 0-8-4-14-10-14-5 0-10 8-10 18s17 26 43 38c23 12 43 22 44 23 1 0 0-14-4-31zm-3283 12c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1750-11c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm4456 6c-3-9 1-18 9-22 13-5 13-7-2-19-26-20-34-17-27 10 4 17 0 27-13 35-16 9-15 10 11 11 21 0 27-4 22-15zm-6416-5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1553-7c14-8 7-31-16-46-22-14-35-57-16-57 5 0 9-4 9-10 0-12-27-13-34-1-3 4-1 22 3 39 7 22 6 34-4 42-7 6-11 20-8 30 4 16 11 18 32 14 14-4 29-9 34-11zm-589-8c21-9 35-21 33-28-3-7-10-11-17-9-7 1-18-2-25-8-15-13-28 2-33 38-3 26-4 26 42 7zm1566 5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm815 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-105-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3159-23c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm579 7c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm2090 7c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-840-11c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-2416-21c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm951 11c3-5 2-10-4-10-5 0-13 5-16 10-3 6-2 10 4 10 5 0 13-4 16-10zm65 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2540-11c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm3800 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1417 2c8-5 2-12-18-21-23-10-34-10-42-2s-7 11 6 11c9 0 17 5 17 10 0 12 20 13 37 2zm-6667-6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1220-31c0-7 6-16 13-18 7-4 6-6-4-6-9-1-24 10-33 24-21 32-20 38 4 25 11-6 20-17 20-25zm516 21c17-13 18-16 3-31-19-19-49-10-49 14 0 33 16 39 46 17zm3934 4c12-8 9-10-12-10-16 0-28 5-28 10 0 13 20 13 40 0zm-7548-15c0-5-5-11-11-13s-11 4-11 13 5 15 11 13 11-8 11-13zm338-10c0-8-6-12-14-9s-12 12-9 20c6 17 23 9 23-11zm1793 5c-4-13 1-26 13-36 18-14 18-15-3-9-17 5-23 2-23-9 0-9 1-17 2-18 3-6-24-50-28-46-2 3 3 26 11 51 8 26 15 49 15 52v20c0 8 4 15 9 15s7-9 4-20zm1357 4c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm2757-10c-7-7-37 7-37 17 0 6 9 5 21-1 11-7 19-14 16-16zm-4827 1c0-8-9-19-20-25s-20-18-20-26c0-9-8-23-19-32-10-10-26-49-35-93-11-48-24-79-36-86-21-14-63-6-57 11 4 11 8 11 36 4 9-2 21 20 36 70 13 40 30 81 39 91 9 9 21 33 28 52 15 45 48 68 48 34zm1470-37c0-10-6-18-14-18-16 0-31-34-21-50 12-19 68-27 97-12 16 7 28 18 28 23 0 6 6 7 17 1 24-14 25-52 1-52-10 0-18-7-18-15s5-15 11-15c5 0 7-5 4-11-4-6 0-16 9-22 14-10 14-17 4-44-10-28-10-35 7-54 20-22 20-22-2-17-13 4-23 2-23-3s-6-9-14-9c-22 0-28-31-9-46 16-12 16-13 2-14-23 0-41 24-33 44 3 9 1 23-6 31s-9 15-4 15 1 5-8 11c-13 7-16 17-11 39 3 19 1 30-6 30-6 0-11 7-11 15 0 34-43 6-47-32-4-30-45-75-64-71-7 2-16-13-21-34-6-22-17-38-29-41s-19-14-19-29c-1-41-26-123-39-123-6 0-15-5-19-12-4-6-20-15-35-18-34-9-47-34-24-47 10-5 17-16 17-23 0-24 51-19 57 5 3 11 14 20 24 20 25 0 24-6-6-34-29-27-32-41-9-50 29-11 55-6 76 14 30 28 41 25 33-9-5-26-3-29 26-35 25-5 30-9 21-18-17-17-15-48 4-48 8 0 12-4 9-10-3-5 5-22 19-37 15-15 26-34 26-41 0-8 6-11 13-8 6 3 20 9 30 12 9 4 17 10 17 15 0 12 37 12 44 0 3-5-4-11-15-14-17-5-21-12-17-36 4-25 1-31-13-31-10 0-22-7-26-15-10-17-56-9-50 9 5 16-64 38-80 24-20-16-16-49 7-55 11-3 20-9 20-14s-12-4-26 1c-14 6-37 10-51 10-15 0-36 11-49 25-15 16-34 25-55 25-29 0-31-2-25-26 6-23 4-25-15-19-13 5-25 2-31-6-7-10-8-6-4 13s1 30-11 37c-16 9-16 10-2 11 11 0 20 15 28 44 11 45 31 71 31 42 0-10 9-16 25-16 18 0 25-5 25-19 0-21 57-38 74-21 7 7 5 10-4 10s-6 7 8 20c32 30 27 48-15 57-39 7-47 9-60 12-5 1 2 6 15 11 25 11 30 40 7 40-10 0-15 7-13 18s-4 18-18 20c-12 2-24 12-27 23-7 26-53 26-62-1-3-11-3-29 0-40 5-14 2-20-9-20-15 0-21-17-17-48 1-8-7-16-19-19-17-4-20-11-16-29 5-17 2-24-9-24-8 0-15-7-15-15s-7-15-15-15-15-9-15-20-7-20-15-20c-19 0-30-23-44-91-13-64-34-99-50-84-13 14-2 65 15 65 21 0 27 20 10 38-9 11-13 27-9 40 3 14 1 22-7 22-7 0-3 8 8 18 24 20 38 77 23 87-19 11 8 48 30 42 12-3 19 0 19 9 0 8 6 11 15 8 8-4 17 1 21 10 3 9 12 16 20 16 22 0 29 49 9 63-23 18-4 57 38 78 34 17 46 51 27 74-8 10-5 19 15 40 14 16 25 32 25 36 0 5 7 9 15 9 15 0 40 74 30 90-3 6-16 10-28 11-12 0-16 3-9 6s17 16 22 29 16 24 25 24c8 0 15 6 15 14s8 13 17 12c11 0 19 7 21 20s16 26 38 35c20 7 31 15 25 17s-11 19-11 38c0 27 4 34 20 34 11 0 20 5 20 10 0 6 6 10 14 10 19 0 23 7 31 60 4 25 9 48 12 53 7 11 32-24 33-45zm-2766 26c9-3 16-12 16-19s12-16 28-20c26-8 25-8-17-16-24-5-49-16-57-26-7-10-14-15-14-10 0 17-4 23-19 34-15 12-13 14 19 17 8 0 16 11 18 24 4 24 4 25 26 16zm1901-4c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-1635-10c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2960-5c0-8 5-15 10-15 6 0 10-7 10-15s5-15 11-15c7 0 8-14 4-40-6-36-5-41 19-50 14-5 33-7 42-3 13 5 15 2 9-15-4-13-2-22 4-22s11-4 11-10c0-18-29-11-40 10-11 20-40 28-40 11 0-5-9-11-20-14-12-3-20-14-20-26s-6-21-14-21-20-16-27-37c-10-31-9-38 5-48 24-18 9-24-30-12-28 9-37 8-44-3s-15-12-37-4c-25 9-28 14-25 47 2 22-2 37-8 37s-8-4-5-10c3-5-1-10-9-10-13 0-14 4-4 26 9 20 9 27 0 33-10 6-10 18 0 56 9 35 10 49 2 52-6 2-20 11-30 19-16 13-17 15-2 10 10-3 21 1 26 10 6 11 11 6 22-21 8-19 19-35 26-35s10-8 7-20c-3-11-12-20-19-20-24 0-27-28-7-50 19-19 21-19 51-4 32 15 41 41 22 60-14 14 9 93 31 105 11 5 19 16 19 24 0 13 26 34 43 35 4 0 7-7 7-15zm2692-5c-1-7 2-18 8-25 15-19-3-27-25-11-12 9-15 19-10 35 7 22 32 24 27 1zm389 9c12-6 18-17 15-25s-1-14 4-14c6 0 10-7 10-15 0-19-4-19-43 1-42 22-40 19-27 43 12 24 14 25 41 10zm1312 4c-7-2-19-2-25 0-7 3-2 5 12 5s19-2 13-5zm-6700-48c1-5-10-12-25-17-22-8-35-5-63 12-35 22-39 46-5 35 10-3 21-1 25 5 7 11 65-19 68-35zm1647 35c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm774-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm236 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4130-11c0-10-12-11-34-3-9 3-14 10-11 14 6 10 45 1 45-11zm-4170 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4710-6c0-6-10-18-22-26-19-13-21-18-10-30 8-10 9-23 4-37-8-22-8-22-35 8-15 17-26 36-25 43 2 7-7 14-19 16-15 2-23 10-23 22 0 17 7 19 65 17 40-1 65-6 65-13zm-1647 0c14-5 13-8-1-23-9-9-25-15-34-13-22 5-24 22-3 22 8 0 15 5 15 10 0 12 3 12 23 4zm-6013-8c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1584-18c-8-29-10-31-23-23-8 4-8 12-1 26 15 27 33 24 24-3zm5150 1c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-5694-10c9-17 8-23-7-35-28-21-32-17-20 21 6 19 12 35 13 35 2 0 8-9 14-21zm910-5c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm1083 10c3-3-3-20-13-37-11-17-17-34-14-39 3-4 0-8-5-8-6 0-11 10-11 23s-6 29-12 36c-11 11-10 13 4 8 9-3 19 0 22 9 6 15 18 18 29 8zm3287-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6540-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1576-17c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm4444 17c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6488-32c-2-10 2-18 8-18 5 0 10-4 10-10 0-5-7-7-15-4-8 4-15 12-15 20s-10 14-25 14c-14 0-25 5-25 11s14 9 33 7c24-2 31-7 29-20zm1568 12c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-830-30c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1420-4c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm-2230-6c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm1590 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm5556-31c35-33 36-37 21-52s-17-15-26 9c-5 14-14 27-19 29-10 4-27 49-18 49 2 0 21-16 42-35zm-5066 5c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm240 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm156-32c0-21-4-38-8-38s-12-18-18-40c-10-36-13-39-30-28-20 13-17 28 6 28 18 0 18 19 0 26-20 8-8 41 17 48 20 6 21 7 5 17-25 14-22 27 6 25 21-1 24-6 22-38zm-1011 22c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm2300-10c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-2135-9c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-1439-24c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm2119 13c13-8 12-11-5-24-11-9-14-16-7-16 19 0 14-17-8-23s-23-3-14 42c7 33 11 36 34 21zm-2187-22c-13-12-25-19-29-15-10 10 16 37 34 37 13 0 12-4-5-22zm617 7c10-12 16-13 27-4 10 9 17 9 25 1 7-7 10-12 8-13-8-1-34-7-50-10-8-2-14 2-12 9 4 20-17 14-44-13-24-24-64-27-64-5 0 26 14 39 35 34 13-3 26-1 29 5 10 16 31 14 46-4zm1330-6c0-14-5-19-14-16-8 3-17-1-20-9-7-19-35-18-43 2-7 18 13 35 33 27 6-2 15 0 19 6 11 18 25 12 25-10zm-1470 1c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm-550-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1215-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm5809 1c11-4 15-10 10-13-13-8-64 2-64 13s27 11 54 0zm-194-23c0-5 6-16 14-24 8-7 16-19 18-26 4-10 8-10 22 1s26 12 77 1c45-10 63-10 68-2 9 15 51 3 45-13-5-13 40-30 55-21 5 3 11 19 14 36 4 16 10 30 15 30s7-11 4-25c-3-16 0-25 8-25s11-9 7-29c-5-23-1-35 17-52 13-13 22-28 19-35-2-6 9-14 26-17 22-5 32-14 41-41 6-18 19-36 30-39 20-5 40 10 40 30 0 7 10 13 23 13s28 5 34 11c20 20 52 1 50-29-2-22 3-28 23-30 25-3 25-2 25 70v73l-36 3c-23 2-40-2-49-12-19-24-40-19-40 10 0 20 12 56 25 72 1 1 22-5 46-13 40-15 45-14 56 2 11 14 13 15 13 1 0-9 7-18 15-22 8-3 12-12 9-21-4-10 0-15 15-15 12 0 21 5 21 10 0 6 5 10 10 10 6 0 10-7 10-15s5-15 10-15c6 0 10-8 8-17-5-27 25-22 39 7 7 14 13 21 13 16s8-2 19 8c29 27 50 11 48-37-2-36 1-42 20-45 14-2 23 3 28 17 4 15 15 21 36 21 23 0 32 6 39 26 6 14 8 29 5 34s-1 11 5 15c5 3 10-3 10-14 0-12 5-21 10-21 6 0 10-7 10-15s12-18 27-21c25-7 25-8 8-20-11-8-31-14-46-14-19 0-30-6-34-20-3-11-12-20-19-20-16 0-39-84-31-111 4-10 13-19 21-19 16 0 56 20 65 34 4 5 15 6 24 2 29-11 75 15 75 42 0 16 5 22 17 20s20 8 27 37c9 32 15 40 30 37 14-3 17-10 12-32-3-19-1-30 9-34 8-3 15-12 15-21 0-8 4-15 10-15 5 0 9-6 7-12-1-7 8-14 21-16 12-2 22-9 22-16 0-8 6-19 14-25 11-9 12-19 4-45-9-29-8-37 11-57 11-12 21-29 21-37s8-12 18-10c14 3 17 13 15 51-3 46-2 47 27 47 17 0 30 5 30 11 0 5 4 8 9 5 4-3 19 6 31 19 23 25 24 25 42 5 10-11 25-20 32-20 8 0 16-9 19-20 6-23 32-27 40-6 4 11 14 12 52 3 33-8 44-15 40-25-3-7-5-17-5-22 0-4-8-7-17-6-11 0-19-7-21-19-3-20-32-37-84-49-15-3-33-13-42-21-8-8-19-15-25-15-11 0-26-64-18-78 6-9-27-42-43-42-6 0-10-7-10-16 0-10-6-14-15-10-21 8-45-3-45-21 0-12 3-13 14-4s16 9 21 0c4-6 2-15-5-19-9-6-9-9 0-15 6-4 9-17 6-30s-1-27 4-30c13-8 8-47-19-145-13-51-15-72-7-78 6-4 17-18 24-31 13-21 12-23-3-17-9 3-21 6-26 6s-9 6-9 14-5 16-11 18c-9 3-9 9 0 25 9 18 8 24-4 30-11 7-13 16-6 39 5 17 5 37 0 46-6 10-4 20 6 28 11 9 12 16 2 33-7 12-14 24-17 27-17 17-30 54-25 71 4 12 1 21-9 25-9 3-16 12-16 20s-7 14-15 14-15-4-15-10c0-5-5-10-11-10-7 0-8 14-4 41 4 24 3 44-3 48-5 3-12 16-16 29-6 17-3 22 9 22 27 0 13 32-24 57-39 26-98 30-127 8-10-8-27-15-36-15-14 0-16 6-11 30 3 19 1 30-6 30-6 0-11 7-11 15s-4 15-10 15c-5 0-10 6-10 14 0 23-15 27-48 11-34-17-47-49-26-66 20-17 17-35-8-51-27-17-58-13-58 8 0 8-6 14-14 14s-13 8-12 18c1 12-7 18-26 20-24 3-28-2-39-38-27-90-57-70-40 26 8 41 8 60 0 65-6 3-9 17-7 30 2 17-3 27-19 34-13 5-23 15-23 22s-9 13-21 13-23 8-26 19c-4 15-22 24-71 35-71 16-87 11-136-43-17-19-18-24-5-49 8-15 16-29 19-32 17-17 30-54 25-71-4-11-2-19 4-19s11-9 11-19c0-12 9-21 25-25 29-7 30-14 11-77-15-48-8-69 21-69 8 0 13-12 13-29 0-16 5-31 11-33 7-2 7-12 1-29-18-45-23-101-11-115 6-7 8-18 4-23-3-6 5-27 18-46l24-36-23-82c-23-76-23-83-7-94 14-11 15-17 4-40-19-41-31-116-20-129 5-7 4-33-3-68-9-47-9-59 2-66s11-14 2-35c-10-21-9-27 3-32 10-3 13-12 9-25-3-10 0-25 6-33 10-12 10-25 0-62-8-33-8-49-1-51 6-2 11-16 11-31s6-33 13-40c10-10 8-12-8-9-16 2-21-6-31-52-9-38-10-58-2-67 6-7 7-13 2-13-13 0-41 20-29 20 6 0 2 7-8 14-17 13-17 17 2 87 11 41 22 86 25 102 3 15 8 36 11 48 4 11 2 26-5 33-6 8-9 20-8 27 2 8-3 13-10 11-10-2-12 5-6 30 12 55 10 62-21 78-71 37-69 34-51 68 9 18 23 32 32 32 8 0 12-4 9-10-4-6 1-7 11-3 13 5 16 3 11-10-10-27 9-20 21 8 9 20 8 26-4 33-13 7-14 15-6 45 8 29 7 39-4 45s-12 15-4 42 7 36-5 43c-9 4-13 12-10 17s1 11-5 15c-5 3-10 17-10 29 0 13-10 31-22 39-19 13-20 16-5 16 9 1 17 6 17 11 0 6 6 10 14 10s18 18 24 40c8 33 7 40-5 40-11 0-13 7-8 30 4 16 3 35-1 42s-7 29-5 49c2 31-1 38-19 44-12 4-27 2-33-4-14-14-30-14-22 0 4 6-1 17-11 25-18 14-18 14 1 12 15-2 21 4 23 25 2 17-1 27-10 28-7 0-2 5 12 10 23 9 23 11 7 20-12 7-16 17-12 29 3 11-2 31-11 45-29 44-54 89-60 107-3 9-16 19-29 22s-30 9-39 12c-10 4-19-2-26-18-12-24-52-48-82-48-20 0-21-4-12-37 4-13 13-23 20-23 17 0 17-1 4-34-7-19-6-27 4-33 9-5 12-18 9-35-6-31-18-36-27-13s-25 18-37-12c-8-22-7-30 7-40 16-12 15-13-12-13-39 0-56 17-43 42 8 15 5 20-16 30-30 13-32 33-6 47 21 12 50 126 35 141-5 4-22 10-39 12-24 2-32-2-42-23-7-15-13-37-12-50 2-75 6-116 13-133 7-14 4-23-13-35-18-14-22-25-19-56 2-31-1-40-14-43s-18 3-18 22c0 14-4 27-9 31-5 3-8 19-6 35 2 17-1 30-7 30s-8 11-5 29c5 25 3 30-19 35-33 9-29 41 6 41 15 0 26 7 28 18 2 12-3 17-18 17-13 0-24 9-30 26-13 34-14 34 22 24 33-10 58 1 58 25 0 7 7 15 15 19 25 9 18 36-9 36-19 0-23 4-19 20 6 24-21 28-34 5-23-41-43 33-28 102 7 29 5 33-19 39-14 3-24 10-21 14 3 5-6 21-20 36-24 26-25 29-8 35 23 8 53 111 34 117s-12 39 9 45c13 3 20 14 20 29 0 13 5 29 11 35 13 13 39 6 39-9zm-6400 8c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-224-39c11-11-45-8-67 4-32 16-12 28 26 15 19-7 38-15 41-19zm2344 23c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4048-6c13-4 22-14 22-25 0-14-7-19-30-19-16 0-30-5-30-11s-6-9-14-6c-20 8-53-112-38-140 6-11 8-29 5-41-3-13-1-22 6-22 6 0 11-7 11-15 0-9 7-18 15-21 10-4 12-15 8-35-3-18-1-29 5-29s9-7 7-15c-15-47-16-49-23-38-4 6-24 18-44 26-27 12-36 20-32 32 4 8 1 21-5 28-11 14-7 56 10 100 9 20 8 31-1 42-10 12-10 15 3 15 9 0 18 12 21 30 3 17 9 44 12 61s13 33 21 36 19 16 24 29c9 26 12 27 47 18zm1672-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1810-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4540-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-480-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm370 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1572-16c-2-14-12-28-21-32-9-3-21-13-28-21-11-14-12-14-13 0 0 15 48 76 61 78 3 1 4-11 1-25zm4278 6c0-11-6-20-14-20-18 0-29 16-21 30 11 18 35 11 35-10zm898 7c8-10 6-13-9-14-10-1-19 5-19 13 0 17 14 18 28 1zm141-21c16-29 8-46-19-39-22 6-23 8-14 41 8 28 17 28 33-2zm-7169 4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1525 0c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm375 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4528-10c11-18 10-20-8-20-13 0-20 7-20 20 0 11 3 20 8 20 4 0 13-9 20-20zm-5558-11c0-5-7-9-15-9s-15 7-15 15c0 9 6 12 15 9 8-4 15-10 15-15zm6000 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7130-20c0-23-10-26-28-8s-15 28 8 28c13 0 20-7 20-20zm1625 14c12-3 25-15 30-27 8-18 6-24-13-34-30-16-54-6-46 19 3 10 0 25-6 33-14 17-2 19 35 9zm-775-24c0-21-35-41-68-39-12 0-13 2-4 6 7 3 17 16 22 29 12 30 50 33 50 4zm235 11c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm175-1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4200 2c0-5-7-17-15-28-15-19-20-8-9 20 6 17 24 22 24 8zm-3657-22c4-16 0-20-19-20-22 0-23 3-14 20 6 11 15 20 19 20 5 0 11-9 14-20zm807 10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm4963-20c-7-28-13-25-13 6 0 14 4 23 9 20s7-15 4-26zm-8668-20c3-5 15-10 26-10s22-6 24-12c9-29 9-44 0-48-5-3-11 5-13 16-2 15-12 24-33 28-17 3-29 12-29 21 0 17 16 20 25 5zm2159-23c-3-9-15-17-26-17-10 0-17-4-14-8 3-5 0-25-6-45-9-29-8-42 1-61 16-29 0-66-29-66-16 0-18 5-13 35 5 32 3 35-30 51s-43 42-11 30c22-8 27 14 8 35-16 18-16 19 0 19 9 0 19-7 22-15 10-26 33-16 42 18 5 17 14 31 21 29 6-1 14 5 18 14 3 9 9 12 15 6 5-5 6-16 2-25zm-644 13c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1150 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm5160 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm-6969-23c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm785-2c-6-22-1-28 29-42 35-17 43-41 11-35-9 2-16-2-16-9 0-6-8-9-20-6-11 3-22 1-25-3s-14-6-26-3c-17 5-20 11-15 34 3 16 1 29-6 31-16 6 34 58 56 58 14 0 17-5 12-25zm4596 3c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm-3571-21c10-11 15-27 12-34s2-13 11-13 16-5 16-11-9-8-20-4c-12 4-27 1-35-5-22-18-69-3-87 28-18 32-14 52 13 52 10 0 19 5 19 10 0 17 53-1 71-23zm-1141 13c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm1844 4c16-6 23-34 9-34-11 1-43 26-43 34s14 8 34 0zm-2014-14c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1613-35c14-7 22-19 22-35 0-17 6-26 20-28 26-5 37-23 24-39-7-7-22-10-40-6-18 3-29 1-29-6 0-19-32-12-37 8-3 11-11 22-18 25-11 4-11 13 0 51 18 58 28 76 33 55 1-9 13-20 25-25zm277 21c0-17-14-29-23-20-8 8 3 34 14 34 5 0 9-6 9-14zm3222-21c6-31-5-40-33-25-20 11-20 12-3 31 23 25 31 24 36-6zm2058-6c0-11-4-18-10-14-5 3-7 12-3 20 7 21 13 19 13-6zm216-4c22-17 3-21-27-5-15 8-19 7-19-5 0-15-21-21-33-8-9 8 23 32 44 33 8 0 24-7 35-15zm-6471-5c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm860-15c-16-49-17-50-26-20-6 20-5 32 3 36 16 10 28 1 23-16zm155 15c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2335-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-671-51c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm635 12c10-7 11-13 2-30-7-12-16-19-22-16-5 4-7 10-4 15s1 11-5 15c-14 9-13 25 3 25 6 0 18-4 26-9zm621-1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1120-31c-10-33-20-50-20-32 0 28 13 72 20 68 5-3 4-19 0-36zm-790 17c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm6755 5c-3-6 2-14 11-19 21-11 12-42-12-42-9 0-18 9-21 20s-10 20-16 20-2 7 9 15c22 16 38 20 29 6zm-7751-28c-9-37-14-44-24-38-11 7 8 65 21 65 5 0 6-12 3-27zm326 17c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm6935 0c8-13-5-13-25 0-13 8-13 10 2 10 9 0 20-4 23-10zm-6205-20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-110-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm916-7c9-10 40-25 68-33 42-13 52-20 54-40 7-60 12-70 37-70 16 0 25 6 25 16 0 8 4 13 9 10s7-15 4-26c-4-15-11-18-34-13-31 6-89 53-89 72 0 5-27 15-60 22-33 6-63 15-65 20-6 9 15 59 26 59 4 0 15-8 25-17zm-1771-3c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm730-13c12-10 14-16 7-21-13-8-52 10-52 24s23 12 45-3zm1564-31c-5-5-15-4-24 4-16 13-15 15 1 27s19 11 25-4c4-10 3-22-2-27zm2481 29c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm-4276-10c-7-17-7-17-29-9-13 5-14 8-3 15 21 14 38 10 32-6zm416 11c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm6625-6c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-8065-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3485-19c-7-23-25-29-25-8 0 14 21 39 28 33 2-3 1-14-3-25zm1695-1c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm3090 0c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm490-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-6920-5c12-8 11-10-7-10-12 0-25 5-28 10-8 13 15 13 35 0zm6150 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-5500-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-2780-10c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm626-22c-9-12-16-17-16-10 0 14 23 42 29 37 1-2-4-14-13-27zm454 22c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm675-7c9-12 10-27 3-52-12-43-33-70-23-30 4 16 2 30-4 33-18 12-12 66 7 66 3 0 10-8 17-17zm1988-13c7 0 4-7-6-14-10-8-20-24-22-37-3-13-15-63-27-111-17-66-27-88-39-88-17 0-29-37-29-86 0-33-20-73-34-68-7 3-17-13-23-38-11-37-10-45 5-56 16-12 15-15-10-36-16-12-28-28-28-35 0-32-33-121-45-121-7 0-16-12-19-27-21-86-28-103-41-103-18 0-20-26-3-36 7-5 4-10-10-15-13-5-22-17-22-29 0-11-7-20-15-20-16 0-21-25-6-34 4-3 0-40-10-83-13-52-15-81-8-89 14-18 0-61-22-67-11-3-19-14-19-25s-8-22-18-25c-12-2-22-17-26-38l-6-33-16 23c-14 19-14 29-5 64 14 48 19 75 20 100 1 10 9 17 21 17 18 0 24 10 21 32 0 3 7 30 15 59 14 48 14 53 0 61-12 7-14 14-6 28 6 11 16 19 23 17 6-1 13 8 15 21s10 22 21 22c15 0 20 11 25 51 5 33 3 56-5 65-16 19 6 46 35 42 16-2 24 7 38 46 18 47 18 50 1 69s-17 20 0 14c23-9 22 10-3 25-11 7-20 18-20 24 0 7 8 10 20 7 11-3 20 0 20 6s5 11 10 11c6 0 10-7 10-15 0-23 21-18 28 8 7 27 5 32-10 32-7 0-12 10-11 23 2 12-2 22-7 22-6 0-10 7-10 15s-4 15-10 15c-16 0-12 15 13 42 14 15 33 24 52 24 24-1 31 4 33 22 2 12 8 19 14 16 13-8 28 14 28 44 0 15 7 26 19 29 20 5 36 46 26 63-4 6-15 10-27 10-18 0-20 4-14 31 3 17 6 40 6 50 0 12 7 19 20 19 11 0 20 5 20 10 0 6 7 10 15 10 12 0 42 39 37 48-1 1-1 8-1 15 1 6 3 4 6-5 2-10 10-18 16-18zm2625 12c2-7-3-12-12-12s-16 7-16 16c0 17 22 14 28-4zm-6078-7c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm3500 5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-2940-42c0-11-27-10-34 1-4 5-3 17 1 27 6 16 7 16 20-2 7-10 13-21 13-26zm5455 13c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-429-36c-3-8-9-22-12-30-4-10 0-15 10-15 12 0 14-7 10-30-5-20-3-30 6-30 8 0 10-8 7-21-5-19 18-73 45-106 5-7 6-32 3-57-5-28-3-51 3-59 7-8 7-18 2-27-8-12-10-11-10 5 0 11-4 27-10 35-8 12-11 12-27-2-28-26-40-9-40 60-1 34-6 69-13 77-8 10-9 24-1 52 14 49 14 93 0 93-6 0-8 9-4 20 4 12 1 27-5 35-10 13-8 15 15 15 20 0 26-4 21-15zm252-7c2-10 9-18 14-18s8-6 5-12c-2-7 2-18 10-23 7-6 16-28 20-50 3-22 15-48 25-59 22-24 23-36 3-36-8 0-15-4-15-9 0-14-62-22-95-12-24 6-30 13-28 34 1 21-3 27-18 27-31 0-36 30-9 50 20 15 22 21 11 34-16 19-6 55 21 77 27 21 50 20 56-3zm366 1c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm736-9c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-6995-30c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm1765 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm4290-3c0-5-5-15-10-23-8-12-10-11-10 8 0 12 5 22 10 22 6 0 10-3 10-7zm-5351-25c-16-32-15-31-38-18-27 14-27 34-1 27 11-3 20-1 20 4s7 9 15 9c13 0 14-4 4-22zm6772-8c5 0 9-11 9-25s-1-25-3-25c-1 0-18 4-36 10-24 7-39 6-48-2-19-15-21-8-11 30 7 27 12 31 32 26 15-3 27 0 32 8 7 10 9 9 12-4 2-10 8-18 13-18zm1749 25c0-3-9-15-20-27-21-23-28-7-7 17 12 14 27 20 27 10zm-8872-41c-7-15-15-21-21-15-5 5-4 17 3 30 15 30 32 16 18-15zm1317 26c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1059 4c20-8 21-24 2-24-8 0-17-6-19-12-3-7-6-1-6 15-1 29 0 30 23 21zm2293-23c-3-16-1-33 6-40 9-10 7-12-13-9-14 1-25 8-25 15 0 6-3 15-7 18-6 6 28 44 41 45 2 0 1-13-2-29zm351 1 32-29-28-14c-15-8-30-18-33-23-4-5-15-6-24-2-14 5-16 13-11 38 5 26 22 58 30 58 2 0 17-13 34-28zm-4878 8c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm8320-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-1571-19c9-6 11-16 7-27-7-18-8-18-22 0-23 32-16 46 15 27zm-7152-37c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm3223 16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm65 0c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm5323 4c23-7 30-28 12-39-6-4-23-4-39 0-22 5-28 10-24 26 6 20 14 22 51 13zm-8033-14c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm195 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm4243-2c4-10 7-10 18 0 18 17 30 15 23-3-4-10 0-15 12-15 9 0 14-3 10-7s-19-7-33-8c-36 0-38-16-9-48 26-28 25-57-1-57-11 0-13-9-8-42 4-25 2-56-5-73-8-21-8-31-1-33 6-2 11-16 11-31s4-31 8-36c15-17-7-92-28-98-14-3-20-14-20-31 0-14 5-26 10-26 6 0 10-8 10-18s5-23 12-30c8-8 9-15 2-22-6-6-18 4-34 27l-24 35 22 85 21 84-21 29c-15 21-19 35-13 57 4 15 9 41 12 56 2 16 10 48 18 72 9 31 10 46 2 54-12 12-17 91-6 91 4 0 9-6 12-12zm2047-19c0-13-7-19-23-19-33 0-40 10-21 31s44 14 44-12zm-4489-26c-9-16-10-15-11 8 0 14 3 29 8 33 12 12 14-22 3-41zm-1571 27c0-5-7-10-16-10-8 0-12 5-9 10 3 6 10 10 16 10 5 0 9-4 9-10zm305 0c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm-1185-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm5080-6c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm2174-5c-4-10 0-15 16-15 11 0 18-4 15-10-8-13-45-13-45-1 0 5-7 17-16 25-14 15-13 16 10 16 18 0 24-4 20-15zm-7473-18c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm8299 13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7920-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm2202-21c-6-36-19-40-14-4 2 16 8 29 12 29s5-11 2-25zm3200 3c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm-5172-1c8-7 21-23 28-35 11-20 10-23-13-32-14-5-28-17-31-25-4-10-13-13-25-10-11 4-19 2-19-4s-4-11-10-11c-17 0-11 28 18 80 30 54 30 55 52 37zm1895 3c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm4696-13c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm-5461-23c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm440 9c0-5-5-15-10-23-8-12-10-11-10 8 0 12 5 22 10 22 6 0 10-3 10-7zm276-1c6-4 13-15 17-24 4-11 17-18 33-18 24 0 25-3 21-36-6-41-24-68-23-33 1 16-8 25-34 34-19 6-33 15-32 20 2 5-3 12-12 17-13 7-14 13-6 29 11 20 19 23 36 11zm5484-11c0-10-7-34-15-52l-16-34 6 33c5 25 3 32-9 32-18 0-19 2-10 24 9 23 44 20 44-3zm-7455-1c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm2735-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm3360 7c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm53-17c-3-10 1-15 12-15 9 0 15-5 13-11-4-12-11-11-53 7-19 8-23 13-12 14 10 0 20 7 23 15 4 8 10 13 15 10 4-3 6-12 2-20zm367-5c0-11-4-20-10-20-5 0-10 9-10 20s5 20 10 20c6 0 10-9 10-20zm-5039-55c-9-30-20-55-26-55-5 0-21-9-35-20s-29-20-35-20c-5 0 0 7 12 15 11 8 26 35 32 59 11 44 46 90 61 81 4-3 0-29-9-60zm6429 55c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm-3180-14c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm-3500-6c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm4060-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-4540-4c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm800-25c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm6090-7c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-7652-5c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11zm602-19c0-6-6-10-12-10-22 0-41 17-34 29 8 13 46-3 46-19zm650 20c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm645 0c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm-2035-14c0-16-18-31-27-22-8 8 5 36 17 36 5 0 10-6 10-14zm4600-7c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm2470 0c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm196-16c-11-11-17 4-9 23 7 18 8 18 11 1 2-10 1-21-2-24zm-1586 17c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4461-9c18-11 5-51-17-51-9 0-23 4-30 9-12 7-12 12-1 30 15 23 26 26 48 12zm3658-18c3-7-3-9-16-6-12 3-21 10-21 15 0 13 32 6 37-9zm371-12c-2-9 3-15 10-13 6 1 12-2 12-8 0-5-7-10-15-10-7 0-18-8-24-17-14-26-25-8-10 18 9 17 9 24 0 27-20 7-12 30 9 25 12-3 19-12 18-22zm592 19c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm270-5c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9zm325 4c9-13 7-15-28-23-26-6-27-5-17 14 12 22 35 27 45 9zm1325-9c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1450-22c0-11-22-10-39 1-7 5-11 14-7 20 7 11 46-7 46-21zm-8262-34c-13-12-38 11-38 33v26l21-27c12-15 19-29 17-32zm4242 50c0-8-19-13-24-6-3 5 1 9 9 9s15-2 15-3zm1590 2c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-5653-28c16-13 6-31-13-24-8 3-14 1-14-4 0-12-20-13-39-1-8 5-11 16-6 31 6 18 12 20 33 15 15-4 32-11 39-17zm5103 12c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2597-12c-3-8-6-5-6 6-1 11 2 17 5 13 3-3 4-12 1-19zm-3688-59c-25-91-37-174-27-180 6-4 8-18 4-33-5-22-2-28 16-35 31-12 46 2 60 56 7 28 15 42 23 39s15 7 18 24c6 27 8 28 40 18 29-9 33-14 32-44-1-18-7-40-14-48-11-13-10-17 2-22 12-4 15-14 10-34-5-25-2-30 21-36 21-5 25-10 20-29-8-31 7-38 43-20 25 12 32 24 40 66 10 48 9 51-14 62-17 8-27 7-35-1-22-22-37-11-20 15 12 19 84-4 105-33 18-24 18-25 1-22-13 2-20-10-32-59-13-56-13-65 2-96 10-22 14-46 10-65-6-31-9-32-61-16-14 4-23 2-23-5 0-6-6-11-12-11-7 0-24-9-37-19-18-14-22-23-16-37 14-31 11-49-7-46-11 2-18-8-23-30-11-48-14-51-34-27-14 18-15 28-7 54 6 19 14 31 19 28s13 1 18 8c11 17 12 59 2 59-5 0-18 3-30 6-17 5-22 1-25-18-2-18-10-23-35-25-18-1-35 3-39 8-3 5 0 9 6 9 7 0 9 8 5 20-5 14-2 20 9 20 9 0 16 7 16 15s-4 15-10 15c-5 0-6 9-1 22 11 30-24 78-55 78-30 0-38-29-18-69 15-30 15-33-2-47-17-13-18-15-3-27 11-8 14-19 9-32-9-25-4-35 19-35 15 0 17-10 17-82-1-45-2-74-4-65s-10 17-17 17c-11 0-13 8-8 30 3 19 1 30-6 30-6 0-11 7-11 15s-5 15-11 15c-7 0-9 10-7 25 3 14-1 30-8 36s-10 17-7 25 0 14-6 14-11 7-11 15-5 15-11 15c-7 0-9 12-5 36 5 22 3 41-4 49-16 19-3 78 16 71 9-4 17 8 25 37 8 30 8 42 0 45-6 2-11 12-11 23 0 10-4 19-10 19-5 0-10 4-10 10 0 5 7 7 15 4 9-4 15 0 15 10 0 9 6 16 14 16 19 0 23 7 31 53 6 29 4 37-8 37-13 0-13 8 4 62 29 97 27 94 45 76 13-13 14-22 3-59zm406 61c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-4032-32c-8-46-23-59-23-20 0 18-5 32-11 32-5 0-7 5-4 10 3 6 15 10 25 10 17 0 19-5 13-32zm747 28c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm3451-29c-8-8-11-7-11 4 0 20 13 34 18 19 3-7-1-17-7-23zm472-19c8-5 8-15 1-35-12-35-49-44-57-14-7 29-23 26-35-6l-10-28-1 28c-1 41 16 69 42 65 15-2 25 4 32 20l10 23 4-23c1-13 8-26 14-30zm-4408 32c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm2853-36c-10-9-41 24-33 35 5 9 11 7 22-9 8-12 13-23 11-26zm-3187 26c10-6 19-15 19-21s-4-8-9-5-8-2-7-11c0-9-4-18-11-20-15-6-35 31-27 51 7 19 9 19 35 6zm465-27c-11-11-19 6-11 24 8 17 8 17 12 0 3-10 2-21-1-24zm4064 13c0-17-14-29-23-20-8 8 3 34 14 34 5 0 9-6 9-14zm-3365-6c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm5347-20c-2-16-8-30-13-30-10 0-12 21-3 44 10 27 21 18 16-14zm-433-12c-5-21-5-36 1-42 13-13 13-46-1-46-5 0-8 4-4 9 3 5 1 12-5 16-18 11-10 95 10 95 5 0 4-14-1-32zm746 10c5-13 9-32 11-43s6-32 10-47c3-16 2-28-2-28-21 1-34 18-32 41 2 18-2 25-19 27-13 2-23 9-23 15 0 31 14 57 30 57 10 0 21-10 25-22zm-8105-4c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm561-27c-17-17-24-1-10 25 12 21 14 21 17 4 2-10-1-23-7-29zm3939 33c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm757-20c-5-22-3-30 8-30 8 0 15-4 15-10 0-14-22-60-29-60-11 0-36 20-26 20 6 0 2 7-9 15-21 16-15 45 9 45 8 0 15 8 15 18 0 18 8 32 18 32 2 0 2-13-1-30zm3878 20c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-4078-12c-2-7 10-18 27-25 30-11 30-12 9-19-13-3-23-10-23-14 0-5-9-6-20-3-23 6-24 13-8 48 11 26 23 35 15 13zm-3377-8c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1366-21c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm441 11c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm835 0c0-5-9-10-21-10-11 0-17 5-14 10 3 6 13 10 21 10s14-4 14-10zm185 1c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm6426-24c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm379 13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-6075-9c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-2625-31c0-11-7-20-15-20-17 0-18 2-9 24 9 23 24 20 24-4zm1985 10c4-7-3-8-20-4-30 7-45-6-45-43 0-31-13-35-54-18-39 16-49 31-15 22 15-4 22 1 29 18 5 12 15 25 22 28 23 10 77 7 83-3zm-175-19c0-32-11-51-29-51-26 0-30 8-18 41 13 33 47 41 47 10zm884 4c-4-8-1-15 5-15s11-4 11-8c0-5-13-7-30-4-35 5-37 10-12 28 23 18 33 17 26-1zm-2654-5c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm400-11c0-5-7-9-15-9-9 0-12 6-9 15 6 15 24 11 24-6zm2000 5c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm2226-11c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm1982 7c11-18 10-20-8-20-13 0-20 7-20 20 0 11 3 20 8 20 4 0 13-9 20-20zm1489-20c-13-34-47-42-47-11 0 18 39 52 52 45 3-2 1-18-5-34zm1103 19c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-125 1c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-1143-47c10-13 2-53-11-53-5 0-6 12-3 26s-1 29-7 33c-7 5-9 15-4 27 7 18 8 18 11-1 2-11 9-25 14-32zm-5882 33c0-2-11-11-25-20-24-16-25-16-25 4 0 15 7 20 25 20 14 0 25-2 25-4zm2860-6c0-5-6-10-14-10s-18 5-21 10c-3 6 3 10 14 10 12 0 21-4 21-10zm2638-3c-1-2 3-11 10-20 14-17 7-83-10-93-5-3-6 5-3 19 5 17 2 26-9 30-12 5-13 12-4 41 6 20 13 34 16 32 2-2 2-6 0-9zm1006 7c20-8 21-24 2-24-8 0-17-13-21-30-7-32-32-40-42-15-3 9 2 22 13 30 11 7 20 18 20 24 3 24 4 24 28 15zm-6074-8c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1320-6c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1871-1c11-5 17-14 14-20-7-11-45 7-45 21 0 13 7 13 31-1zm222 0c33-9 36-13 31-34-5-19-1-26 12-31 61-19 68-24 52-40-11-11-25-14-52-9-20 4-36 11-36 16s-16 32-35 59c-37 53-34 57 28 39zm3121-10c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-8984-19c-6-11-15-20-19-20-5 0-7 9-4 20s12 20 20 20c11 0 11-4 3-20zm850 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm1782-14c-7-7-12-8-12-2s3 14 7 17c3 4 9 5 12 2 2-3-1-11-7-17zm-1567 2c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1505 0c0-5-7-10-15-10s-15 5-15 10c0 6 7 10 15 10s15-4 15-10zm4840 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4415-9c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-2335-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3350 1c0-22-13-39-25-34-11 4-12 9-2 24 12 20 27 25 27 10zm-3830-20c0-12-29-35-36-28-11 10 5 37 21 37 8 0 15-4 15-9zm60-1c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm280-21c0-10-4-19-10-19-5 0-10 12-10 26s4 23 10 19c6-3 10-15 10-26zm2464-3c-8-26-31-52-40-43-4 3-3 22 0 41 5 28 10 33 27 29 15-4 18-11 13-27zm763 18c8-21-13-42-28-27-13 13-5 43 11 43 6 0 13-7 17-16zm-450-12c1-9 3-23 5-31 2-7-3-16-9-18-7-3-13 1-13 8 0 6-8 18-17 25-17 13-17 13 0 14 9 0 17 5 17 10 0 18 16 11 17-8zm2949 10c6-4 15-22 19-39 5-26 3-33-9-33-10 0-13-6-9-16 6-15 4-15-19 0-30 20-41 52-27 78 10 19 26 23 45 10zm2704-1c0-5 3-16 6-25 7-17-3-20-24-8-7 5-10 16-6 25 7 18 24 23 24 8zm-4720-10c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm-90-30c0-10-10-25-21-33-12-7-22-24-23-36 0-12-4-22-8-22h-23c-12 0-11 4 5 20 11 11 21 29 21 40 1 11 3 25 4 30 1 6 3 12 4 15 0 3 10 5 21 5 13 0 20-7 20-19zm-1499-1c29-16 7-54-26-46-14 4-25 1-28-7-3-7-6-5-6 6-1 20 20 57 32 57 5 0 17-5 28-10zm419 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm567-7c4-10 11-21 17-25 7-5 3-8-8-8-17 0-45 25-46 43 0 15 31 6 37-10zm73 7c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm3360 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm562-23c-1-15 2-27 8-27 5 0 10-6 10-13 0-8 11-24 24-36 27-25 25-56-5-72-11-5-19-16-19-24 0-17-26-20-35-5-3 6-1 10 5 10s15 12 21 27c8 21 7 28-5 35-8 5-13 15-10 23 4 10 0 15-11 15s-15 5-12 14c3 8 0 16-7 18-21 5 1 70 22 66 12-3 16-12 14-31zm-2037 3c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm3565-16c13-33 4-47-21-34-22 12-25 30-7 48 16 16 17 16 28-14zm40 16c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-8120-25c19-23-15-47-47-32-26 12-28 18-11 35s43 15 58-3zm692-13c-19-6-64 7-57 18 3 5 19 4 37-2s27-13 20-16zm2088 18c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-620-15c0-9-6-12-15-9-8 4-15 10-15 15s7 9 15 9 15-7 15-15zm310 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm220 6c0-2-7-6-15-10-8-3-15-1-15 4 0 6 7 10 15 10s15-2 15-4zm-2290-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2662-12c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm1389 1c21-7 36-16 33-20-2-5-16-3-29 3-19 8-28 8-40-2-13-10-15-9-15 9 0 24 1 25 51 10zm189-4c0-8 5-15 10-15 6 0 10-7 10-15s4-15 8-15c5 0 16-6 26-13 17-13 17-17-4-91-24-86-22-106 12-107h23l-22-16c-16-10-26-33-34-74-6-32-16-59-21-59-6 0-8 6-5 14s-1 17-9 20c-9 3-12 10-9 16s0 13-8 16c-12 4-13 12-6 37 19 66 30 149 21 160-9 13-9 15 3 70 5 25 4 42-4 50-14 14-14 37-1 37 6 0 10-7 10-15zm421 2c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm1199 3c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm-7160-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1474-5c6-17 4-18-18-9-20 8-21 24-2 24 8 0 16-7 20-15zm302-23c-9-9-37 8-31 18 5 8 11 7 21-1 8-6 12-14 10-17zm3704 18c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4854-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm754 17c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm3128-31c-6-16-8-33-4-36 3-4 6-1 6 5 0 7 3 12 8 12 4 0 7-29 8-65l1-65-26 7c-35 8-36 9-16 29 15 16 15 18 1 26-9 5-16 16-16 23 0 8-4 15-10 15-5 0-7 7-4 15 4 8 1 15-5 15s-11 5-11 10c0 6 10 8 24 4 19-4 25-1 30 21 4 14 11 23 16 20s4-18-2-36zm3362-24c16-19-4-32-21-15-12 13-13 23-5 51l10 34 4-30c2-16 8-35 12-40zm-7739 28c-9-32-28-41-38-17-4 11 0 22 12 30 28 20 34 17 26-13zm2304 7c14-15 15-20 4-20-22 0-42 17-35 29 9 14 10 14 31-9zm253-12c-3-18 0-41 6-51 9-16 7-22-11-34-13-9-23-21-23-29 0-7-5-16-10-19-13-8-6 39 17 113 19 59 28 68 21 20zm5658 20c5-8 2-9-9-5-9 3-19 2-21-2-9-13 18-61 37-67 21-7 22-20 2-28-8-3-15-12-15-21 0-17-25-21-35-5-3 6 1 10 10 10 12 0 14 6 9 28-4 15-14 32-23 38-13 10-13 16-3 38 12 27 36 34 48 14zm-1203-40c-8-44-26-63-20-21 5 31 14 53 22 53 3 0 2-15-2-32zm-628-5c-8-31-13-39-20-31-9 9 6 58 17 58 6 0 7-11 3-27zm-6063-14c5-3-1-18-15-32-23-26-40-27-32-4 20 58 28 71 33 57 3-8 9-18 14-21zm7608 21c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-6445-10c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm6915 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-8610-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3070-7c0-5-5-15-10-23-8-12-10-11-10 8 0 12 5 22 10 22 6 0 10-3 10-7zm-945-13c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1865 1c11-2-18-19-42-25-22-5-25-3-21 13 5 18 12 19 63 12zm2852-5c10-7 15-16 12-19-9-8-44 11-44 23 0 13 12 12 32-4zm-6018-17c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm3036 11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-200-14c0-8 5-16 12-18 19-7 0-38-23-38-17 0-20 4-15 23 3 12 6 28 6 35 0 6 5 12 10 12 6 0 10-6 10-14zm-584-61c-10-28-21-41-36-43-14-2-20 0-15 7 3 6 10 9 15 6 4-2 13 16 19 42 7 28 16 42 21 37 6-6 4-25-4-49zm-2612 10c-7-18-8-18-14 1-9 23-1 39 11 27 6-6 6-18 3-28zm7408 13c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm383 12c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-8235-7c0-5-4-15-10-23-11-18-25-7-17 15 6 15 27 21 27 8zm820-7c0-8-4-18-10-21-5-3-10 3-10 14 0 12 5 21 10 21 6 0 10-6 10-14zm1595 4c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-1870-10c3-5 15-10 25-10 15 0 17-5 11-27-9-35-46-40-46-6 0 11-3 25-7 29-5 4-8 11-8 16 0 11 18 10 25-2zm810 0c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm7545 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-8670-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm4950 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm3684-17c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-8726 2c9-5 11-17 6-34-7-31-13-32-38-14-15 11-17 17-7 35 13 24 19 26 39 13zm802 5c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm2639-59c-7-12-11-23-10-25 2-2 0-6-3-9-3-4-6 1-6 9 0 9-7 19-16 22-8 3-13 10-9 15 3 5 0 13-5 16-7 5-5 11 6 19 14 11 20 10 36-6 15-15 16-22 7-41zm4231 48c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-6843-27c-3-7-5-2-5 12s2 19 5 13c2-7 2-19 0-25zm4573 24c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-5760-12c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1080 0c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm635 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm445 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm6296-16c-4-9-9-15-11-12-3 3-3 13 1 22s9 15 11 12c3-3 3-13-1-22zm-8196 7c0-5-7-12-16-15-14-5-15-4-4 9 14 17 20 19 20 6zm2316-6c18-15 18-15-5-13-14 2-26 9-29 16-5 17 10 15 34-3zm1337-16c-5-17-2-20 18-18 31 4 49-7 49-32 0-13-7-19-21-19-12 0-27-7-34-17-8-10-19-14-30-10-17 7-17 39 1 100 8 24 23 21 17-4zm5142 12c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-8476-34c-16-30-15-30-38-17-23 12-20 33 3 24 7-3 16 2 20 11 3 9 10 13 16 10 7-4 6-14-1-28zm1352 0c-16-16-26 0-10 19 9 11 15 12 17 4 2-6-1-17-7-23zm-511 3c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2690 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm902 4c3-3 4-13 1-23-3-13-12-16-34-13s-29 0-29-12c0-9-4-16-10-16-16 0-5 42 15 56 19 14 47 18 57 8zm1048-10c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-2954-6c5-8 2-9-9-5-12 5-19-3-27-31-13-48-13-89 1-94 15-5 0-38-17-38-8 0-17-14-21-30-3-17-14-36-23-43-10-7-24-31-30-55-9-30-19-42-32-42-23 0-22 6 1 99 11 42 25 101 33 131 7 30 18 55 23 56 24 2 47 19 56 40 9 25 33 32 45 12zm1701-20c-3-7-5-2-5 12s2 19 5 13c2-7 2-19 0-25zm-3727 18c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm1091-28c23-29 24-36 2-34-14 1-19-8-21-39-2-22-7-44-11-50-5-5-11-21-14-35-4-14-19-31-34-37-40-19-50-16-25 7 12 11 26 20 32 20 5 0 10 9 10 20s-4 20-9 20c-17 0 1 38 20 43 21 6 26 46 9 63-12 12-3 44 12 44 5 0 18-10 29-22zm-531-3c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm6840 5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-7831-48c-6-18-17-32-25-32s-14-4-14-10c0-5-6-10-14-10s-16-6-19-12c-2-7-7-10-11-7-10 10 5 39 20 39 8 0 14 5 14 10 0 6 7 10 15 10 9 0 20 12 26 26 14 38 21 24 8-14zm198 7c-11-17-37-27-37-13 0 18 22 42 35 38 11-5 12-10 2-25zm2948-17c2-12 0-24-6-27-5-4-9 0-9 7s-3 24-6 38c-5 19-4 22 5 14 6-6 13-20 16-32zm1528-29c-3-30-1-32 42-38 45-7 75-35 75-70 0-23-41-19-47 5-4 16-9 18-24 9-20-10-26-44-9-54 6-3 10-11 10-17s-3-8-7-5c-3 4-15 0-25-10-20-18-22-12-9 33 7 24 4 35-11 54-13 16-18 36-17 61 2 21 0 41-4 45-13 13-7 25 11 22 12-3 16-12 15-35zm908-6c-5-5-17-4-30 3-30 15-16 32 15 18 15-7 21-15 15-21zm1299 23c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1470-25c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm2030-5c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-4180-7c0-5-7-21-16-38-13-26-13-31-1-39s12-17 2-58c-11-40-11-49 1-56 11-6 11-15-2-57-8-28-14-52-14-55 1-2-3-6-9-8s-8 3-5 12c4 10 1 16-7 16-31 0-17 147 26 278 5 13 25 17 25 5zm1317-25c-8-24-12-28-15-15-5 23 4 47 17 47 6 0 5-13-2-32zm-2362 12c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm5525 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-6895-16c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm6470 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-1800-20c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm-4549-27c-10-10-19 5-10 18 6 11 8 11 12 0 2-7 1-15-2-18zm4195-9c-9-28-9-29-10-3-1 14 2 29 6 32 11 12 13 2 4-29zm-4941 17c0-14-18-23-31-15-8 4-7 9 2 15 18 11 29 11 29 0zm1777-27c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm2213-4c12-8 12-10 1-10-8 0-20-8-28-17-14-17-14-17-9 0 3 10 6 23 6 28 0 12 11 11 30-1zm-3975-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm3115-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2610 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm940-6c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm270 1c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm1045 0c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-5588-27c-9-9-28 6-21 18 4 6 10 6 17-1 6-6 8-13 4-17zm3083 16c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm1090 6c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-5540-37c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm-1190 1c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3360 0c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-454-37c-5-12-10-13-18-5s-8 15 3 28c15 18 25 4 15-23zm4434 18c0-21-13-41-26-41-11 0-11 5-2 25 11 24 28 34 28 16zm-7220-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1330 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm3630-16c0-10-31-23-38-15-8 7 19 35 29 29 5-3 9-9 9-14zm-5130 2c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm1010-2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm3144-85c-3-25-10-45-15-45-12 0-11 13 1 46 8 19 8 30 0 38-5 5-10 19-10 30 0 20 1 20 16-2 11-16 13-34 8-67zm-3729 65c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm265-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm5450 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1180-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1080-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-5760-4c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1010-6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm5014-5c-4-8-10-12-15-9-11 6-2 24 11 24 5 0 7-7 4-15zm1280-6c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-7584-3c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm4635-6c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm1459-17c-1-16-3-29-3-31-1-1-10 2-21 8-17 9-18 14-7 30 17 29 33 25 31-7zm506 17c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm130 0c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm445 0c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm-2145-10c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2475 0c3-5-1-10-10-10s-13 5-10 10c3 6 8 10 10 10s7-4 10-10zm358 3c-7-2-19-2-25 0-7 3-2 5 12 5s19-2 13-5zm-5983-13c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2100 1c0-6-4-13-10-16-5-3-10 1-10 9 0 9 5 16 10 16 6 0 10-4 10-9zm1083-44c-7-4-13-14-13-22s-5-17-11-20c-7-5-8 5-4 32 11 64 15 70 29 43 10-20 10-26-1-33zm-4523 11c-1-30-16-41-40-28l-22 12 23 13c31 17 39 18 39 3zm1154 4c2-4-8-30-23-56-16-27-31-43-35-37s-2 19 4 30c5 11 7 27 4 35-4 11-1 16 10 16 9 0 16 5 16 10 0 12 17 13 24 2zm4946-13c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm370 7c0-7-7-19-15-26-12-10-15-9-15 7 0 11 3 23 7 26 11 12 23 8 23-7zm-4300-6c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm3180 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-150-26c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-5120-4c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2410 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-820-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2430-10c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2481-33c-1-12-15-9-19 4-3 6 1 10 8 8 6-3 11-8 11-12zm-6461-7c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2850 6c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm2428-15c3-8-1-12-9-9-7 2-15 10-17 17-3 8 1 12 9 9 7-2 15-10 17-17zm-4408-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm5246-6c-3-9-6-18-6-20s-7-4-15-4c-18 0-19 12-3 28 17 17 31 15 24-4zm-4271-4c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm1960 0c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-3081-21c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm371 11c3-5-1-10-9-10-9 0-16 5-16 10 0 6 4 10 9 10 6 0 13-4 16-10zm963-10c-7-10-14-18-15-16-6 6 9 36 18 36 5 0 4-9-3-20zm-1818-5c0-8-6-15-14-15s-21-3-30-6c-25-9-19 12 7 24 31 15 37 14 37-3zm170 5c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm200-5c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm-240-11c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm2410 6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1341-76c-6-16-13-24-16-17-5 13 16 58 23 50 3-2-1-17-7-33zm501 22c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-2140-10c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm1040-12c0-15-22-44-31-39-11 7 7 45 21 45 6 0 10-3 10-6zm2124-12c2-4-2-16-10-27-13-18-14-18-14 8 0 25 13 36 24 19zm1256-2c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1854-47c-11-11-19 6-11 24 8 17 8 17 12 0 3-10 2-21-1-24zm-1676 13c0-24-18-28-30-6-9 17-8 20 10 20 11 0 20-6 20-14zm5550 10c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-6380-22c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm1770 6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1536-4c10-8 16-17 12-21-7-7-48 16-48 27 0 12 14 9 36-6zm3551-12c10-22 10-25-3-20-9 3-18 6-20 6s-4 9-4 20c0 28 13 25 27-6zm-6587 10c0-15-22-44-31-39-11 7 7 45 21 45 6 0 10-3 10-6zm5880-22c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm-6069-25c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm5699 19c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-4920-12c0-13-21-44-30-44-14 0-12 24 2 38 13 13 28 16 28 6zm-420-24c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm2860-5c7-9 8-15 2-15-5 0-12 7-16 15-3 8-4 15-2 15s9-7 16-15zm-2340-4c0-5 3-16 6-24 4-12 0-14-15-10-21 5-28 23-14 36 9 10 23 9 23-2zm5780-1c0-5-4-10-9-10-6 0-13 5-16 10-3 6 1 10 9 10 9 0 16-4 16-10zm-45-10c-3-5-11-10-16-10-6 0-7 5-4 10 3 6 11 10 16 10 6 0 7-4 4-10zm-4641-27c-8-32-24-55-24-32 0 26 12 59 21 59 5 0 6-12 3-27zm1416 17c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1284-11c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-3584-50c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm-610-10c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-285-8c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm1755-25c0-3-4-8-10-11-5-3-10-1-10 4 0 6 5 11 10 11 6 0 10-2 10-4zm-36-31c-4-8-10-13-15-10-4 3-6 12-3 20 4 8 10 13 15 10 4-3 6-12 3-20zm2976 15c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-3970-8c0-13-12-22-22-16s-1 24 13 24c5 0 9-4 9-8zm500-4c0-7-4-19-9-27-11-17-23 1-15 23 7 19 24 21 24 4zm1044-19c-3-5-10-7-15-3-5 3-7 10-3 15 3 5 10 7 15 3 5-3 7-10 3-15zm-444 1c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm271-13c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm509 8c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm2370-9c0-11-19-15-25-6-3 5 1 10 9 10 9 0 16-2 16-4zm-2960-16c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10zm2610 0c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm-1015-49c0-14-6-26-14-29-10-3-12 0-8 11 3 9 2 19-3 22-17 10-11 27 8 23 10-2 17-12 17-27zm-540 0c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-964-47c-9-28-9-29-10-3-1 14 2 29 6 32 11 12 13 2 4-29zm1439 28c0-5-6-16-13-27-16-20-31-7-21 19 6 16 34 23 34 8zm-1305-11c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm400-10c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm-645-16c0-8-4-15-10-15-5 0-10 7-10 15s5 15 10 15c6 0 10-7 10-15zm2420-31c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm-410-15c0-6-4-7-10-4-5 3-10 11-10 16 0 6 5 7 10 4 6-3 10-11 10-16zm1390 0c0-5-4-9-10-9-5 0-10 7-10 16 0 8 5 12 10 9 6-3 10-10 10-16zm-764-20c3-5 0-18-6-29-9-16-8-25 1-36 6-8 9-15 5-15-3-1-9-2-13-3-5-1-13-5-20-9-6-4-23-2-37 4l-25 12 26 47c20 35 31 46 45 42 10-2 21-8 24-13zm-383-14c-8-22-22-18-16 5 3 11 9 17 14 15 4-3 6-12 2-20zm557 15c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm200-6c0-8-5-12-10-9-6 4-8 11-5 16 9 14 15 11 15-7zm310 6c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm95-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-1545-30c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-1935-9c3-5 1-12-5-16-5-3-10 1-10 9 0 18 6 21 15 7zm575-11c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm793-41c-15-26-33-38-33-24 0 18 32 65 41 60 5-4 2-18-8-36zm-921-1c-7-7-12-8-12-2 0 14 12 26 19 19 2-3-1-11-7-17zm608-8c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm2065-10c-3-5-10-10-16-10-5 0-9 5-9 10 0 6 7 10 16 10 8 0 12-4 9-10zm-1723-42c-9-9-12-7-12 12s3 21 12 12 9-15 0-24zm418 16c0-8-4-12-10-9-5 3-10 10-10 16 0 5 5 9 10 9 6 0 10-7 10-16zm180 6c0-5-9-10-21-10-11 0-17 5-14 10 3 6 13 10 21 10s14-4 14-10zm-420-18c0-10 3-22 7-25 11-12 8-67-4-72-7-2-13-15-13-29 0-35-18-42-31-13-8 18-8 30 0 45 6 11 11 34 11 51 0 35 9 61 21 61 5 0 9-8 9-18zm580-39c0-16-6-23-19-23-28 0-32 12-19 48 11 27 13 29 25 14 7-9 13-27 13-39zm-1222 34c6-7 9-23 5-35-3-13-1-22 6-22 6 0 11-9 11-19 0-11 6-21 13-24 6-2 9-7 5-11-3-4-20 0-38 9-25 13-35 14-46 4-18-15-18-5 1 59 16 54 25 61 43 39zm1754-22c4-17 1-25-9-25-8 0-11 5-7 12 5 8 2 9-10 5-14-6-15-3-6 13 14 27 27 25 32-5zm-966-59c-5-19-13-26-29-25-17 1-18 2-4 6 11 3 17 14 17 36 0 23 3 28 11 20 7-7 9-23 5-37zm1400 9c-3-19-24-41-32-33-7 8 14 48 25 48 5 0 8-7 7-15zm-1736-15c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10zm1161-53c-13-13-26-3-16 12 3 6 11 8 17 5 6-4 6-10-1-17zm-546-7c3-5 2-10-4-10-5 0-13 5-16 10-3 6-2 10 4 10 5 0 13-4 16-10zm705-10c0-5-2-10-4-10-3 0-8 5-11 10-3 6-1 10 4 10 6 0 11-4 11-10zm-375-60c3-5 1-10-4-10-6 0-11 5-11 10 0 6 2 10 4 10 3 0 8-4 11-10zm-455-30c0-5-5-10-11-10-5 0-7 5-4 10 3 6 8 10 11 10 2 0 4-4 4-10z'
				style={{
					fill: 'url(#f)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2244 6499c-7-12 17-67 31-73 6-2 23 9 38 24l28 28-45 15c-28 10-48 12-52 6z'
				style={{
					fill: 'url(#g)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2346 6323c-4-4-13-8-19-8-7 0-13-7-15-17-2-11 8-20 33-28 43-14 58-5 53 31-3 24-36 38-52 22z'
				style={{
					fill: 'url(#h)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3185 5951c-8-15 3-31 21-31 9 0 14 7 12 17-4 20-24 28-33 14z'
				style={{
					fill: 'url(#i)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5330 5436c0-10 9-16 21-16 24 0 21 23-4 28-10 2-17-3-17-12z'
				style={{
					fill: 'url(#j)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4990 4873c0-5-13-8-29-5-26 4-29 1-35-32-6-32-11-36-36-36s-30-4-36-36c-7-41 0-51 44-63 36-11 35-12 52 51 7 26 17 45 22 42 4-3 13 8 19 24 10 29 12 29 45 19 39-12 68 3 47 24-14 14-93 24-93 12z'
				style={{
					fill: 'url(#k)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3975 5230c-3-5-4-10-1-10 2 0 11-3 20-6 11-4 16-1 16 10 0 18-25 22-35 6z'
				style={{
					fill: 'url(#l)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3857 5074c-13-13-7-24 14-24 11 0 19 5 17 12-5 14-22 21-31 12z'
				style={{
					fill: 'url(#m)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4513 5307c-19-24-23-64-8-77 12-10 16-8 25 15 18 48 6 93-17 62z'
				style={{
					fill: 'url(#n)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1790 5130c0-5 5-10 11-10 5 0 7 5 4 10-3 6-8 10-11 10-2 0-4-4-4-10z'
				style={{
					fill: 'url(#o)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8240 4999c0-24 23-21 28 4 2 10-3 17-12 17-10 0-16-9-16-21z'
				style={{
					fill: 'url(#p)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8307 4963c-11-10-8-53 3-53 6 0 10-5 10-10 0-18 52-90 66-90 7 0 14 10 16 23 5 32-20 77-43 77-25 0-25 16 1 23 27 7 25 23-2 31-30 8-43 7-51-1z'
				style={{
					fill: 'url(#q)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8837 4894c-13-13-7-24 14-24 11 0 19 5 17 12-5 14-22 21-31 12z'
				style={{
					fill: 'url(#r)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8867 4808c-3-12-4-25-1-30 6-10 34-11 34 0 0 4 3 17 6 30 5 17 2 22-14 22-12 0-22-9-25-22z'
				style={{
					fill: 'url(#s)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8325 4789c-4-5-19-9-33-7-24 3-28-2-36-34-6-22-16-38-28-41-10-3-18-13-18-22 0-13-6-16-25-13-14 3-29 0-33-7-4-6-15-14-24-18-11-4-15-12-12-21 8-21 70-32 89-16 8 6 19 9 25 5 17-10 69 18 72 39 2 11 18 26 35 35 45 22 56 57 27 88-24 26-30 28-39 12z'
				style={{
					fill: 'url(#t)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8127 4772c-20-22-6-42 31-42 20 0 23 4 20 27-4 34-28 41-51 15z'
				style={{
					fill: 'url(#u)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9150 4675c0-14 7-28 15-31 20-8 45 13 45 37 0 14-7 19-30 19-25 0-30-4-30-25z'
				style={{
					fill: 'url(#v)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8934 4609c-10-17 13-36 27-22 12 12 4 33-11 33-5 0-12-5-16-11z'
				style={{
					fill: 'url(#w)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9494 4594c-5-18 0-32 17-50 12-13 25-24 29-24 3 0 11 19 17 42 13 47 6 58-34 58-16 0-25-8-29-26z'
				style={{
					fill: 'url(#x)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9415 4499c-9-41-1-46 40-23 42 22 44 31 9 44-38 15-42 13-49-21z'
				style={{
					fill: 'url(#y)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3977 4873c-15-14-6-31 18-35 34-7 53 17 26 31-23 13-35 14-44 4z'
				style={{
					fill: 'url(#z)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7190 3845c-25-30 15-70 45-45 19 16 19 25-1 44-19 20-28 20-44 1z'
				style={{
					fill: 'url(#A)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7265 3840c-4-12-1-27 5-35 7-8 10-22 6-30-7-18 41-95 58-95 13 0 36 55 36 88 0 12-8 23-20 27s-20 14-18 23c7 42-55 61-67 22z'
				style={{
					fill: 'url(#B)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5431 11351c-18-12-7-28 24-33 30-6 50 13 33 30-14 14-37 15-57 3z'
				style={{
					fill: 'url(#C)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6033 11352c-7-4-14-19-15-32-2-19 2-25 17-25s21 8 23 33c3 32-3 38-25 24z'
				style={{
					fill: 'url(#D)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5085 11276c-32-26-27-33 25-38 22-3 25 1 28 30 4 39-11 42-53 8z'
				style={{
					fill: 'url(#E)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6185 11280c-11-17 5-32 21-19 7 6 11 15 8 20-7 12-21 11-29-1z'
				style={{
					fill: 'url(#F)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5888 11255c-8-18-8-29-1-36 16-16 33-2 33 26 0 34-18 40-32 10z'
				style={{
					fill: 'url(#G)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6002 11238c-6-6-12-20-12-30 0-36 58-79 61-45 7 64 3 82-16 85-11 1-26-3-33-10z'
				style={{
					fill: 'url(#H)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4490 11095c-18-22-8-50 19-50 32 0 49 28 32 49-17 20-35 20-51 1z'
				style={{
					fill: 'url(#I)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3950 10855c0-10 7-15 18-13 21 4 19 22-2 26-10 2-16-3-16-13z'
				style={{
					fill: 'url(#J)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9017 10584c-9-9 19-60 37-67 16-6 23 6 22 42-1 18-7 25-27 28-14 2-28 0-32-3z'
				style={{
					fill: 'url(#K)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8980 10450c0-5-6-10-14-10-27 0-27-30 0-40 14-6 29-10 34-10s14-9 20-20c14-27 28-25 42 6 10 22 9 27-5 36-10 5-15 13-12 18 6 10-1 15-37 24-17 4-28 2-28-4z'
				style={{
					fill: 'url(#L)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9296 10444c-10-27-7-44 9-44 13 0 35 36 35 56 0 12-39 2-44-12z'
				style={{
					fill: 'url(#M)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7244 10419c-7-12 12-29 34-29 6 0 12-9 12-21 0-17 5-20 33-17 26 2 33 8 35 29 3 24-2 28-42 38-56 14-63 14-72 0z'
				style={{
					fill: 'url(#N)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9366 10394c-8-30-2-38 32-49 16-4 24-2 29 10 3 10 2 20-4 24-5 3-12 14-16 24-10 26-34 21-41-9z'
				style={{
					fill: 'url(#O)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7116 10364c-8-20-8-19 26-28 33-8 48 12 23 31-25 18-42 17-49-3z'
				style={{
					fill: 'url(#P)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8940 10365c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15z'
				style={{
					fill: 'url(#Q)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9467 10338c-3-12-4-25-1-30 6-10 34-11 34 0 0 4 3 17 6 30 5 17 2 22-14 22-12 0-22-9-25-22z'
				style={{
					fill: 'url(#R)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7155 10300c-4-6-11-8-16-5-5 4-12-1-15-9-3-9-13-16-21-16-27 0-8-34 24-43 17-5 33-17 36-27 6-22 56-33 64-14 3 8 11 14 19 14s14 9 14 20-5 20-11 20c-5 0-7 5-4 10 3 6 0 13-8 16s-17 14-20 25c-6 21-51 27-62 9z'
				style={{
					fill: 'url(#S)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7647 10184c-13-13-7-24 14-24 11 0 19 5 17 12-5 14-22 21-31 12z'
				style={{
					fill: 'url(#T)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2727 10153c-4-3-7-19-7-35 0-36 25-38 34-3 9 36-7 58-27 38z'
				style={{
					fill: 'url(#U)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9817 10053c-4-18-1-32 9-39 8-6 14-16 14-21 0-18 51-22 57-6 3 8 0 18-6 23-7 4-13 11-13 16-1 17-30 54-43 54-7 0-15-12-18-27z'
				style={{
					fill: 'url(#V)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1420 9010c0-11 5-20 10-20 6 0 10-7 10-15s5-15 10-15c6 0 10-7 10-15 0-26 28-16 38 14 10 27 8 29-19 35-17 3-29 12-29 21 0 8-7 15-15 15s-15-9-15-20z'
				style={{
					fill: 'url(#W)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1670 8750c0-11 4-20 9-20 13 0 32 26 24 33-13 14-33 6-33-13z'
				style={{
					fill: 'url(#X)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1395 8709c-4-6 2-13 13-16 13-3 18-11 15-23-3-13 3-19 24-23 36-7 55 11 29 27-10 6-26 19-35 29-18 19-37 22-46 6z'
				style={{
					fill: 'url(#Y)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1512 8453c5-25 28-28 28-4 0 12-6 21-16 21-9 0-14-7-12-17z'
				style={{
					fill: 'url(#Z)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M880 8435c0-10 7-15 18-13 21 4 19 22-2 26-10 2-16-3-16-13z'
				style={{
					fill: 'url(#aa)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1355 8301c-8-15 3-31 21-31 9 0 14 7 12 17-4 20-24 28-33 14z'
				style={{
					fill: 'url(#ab)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1407 8252c-23-25-1-58 31-48 26 9 30 51 6 60-21 8-19 9-37-12z'
				style={{
					fill: 'url(#ac)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6480 8025c-14-42-1-70 22-47 7 7 20 12 31 12 15 0 18 6 15 33-2 26-8 33-30 35-22 3-28-2-38-33z'
				style={{
					fill: 'url(#ad)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6553 7954c-3-8-11-14-18-14-19 0-37-89-17-91 4 0 15-2 25-4 9-2 17 3 17 10 0 10 7 12 29 5 22-6 31-5 35 6 3 8 12 14 21 14 17 0 20 16 5 25-6 4-9 13-8 22 4 22-81 48-89 27z'
				style={{
					fill: 'url(#ae)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M11397 7924c-10-10-9-52 2-58 11-7 28 13 33 39 3 19-21 33-35 19z'
				style={{
					fill: 'url(#af)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4830 7885c0-8 9-15 20-15s20 7 20 15-9 15-20 15-20-7-20-15z'
				style={{
					fill: 'url(#ag)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4735 7860c-3-5-17-10-31-10-15 0-24-6-24-15 0-8 4-15 10-15 5 0 7-7 4-15-4-10 0-15 11-15s15-5 12-15c-4-8-2-17 3-20 6-4 10-14 10-24 0-29 24-71 39-69 8 2 19 17 24 33 6 17 18 36 29 43 26 19 23 50-7 58-21 5-24 10-19 31 4 16 2 28-7 34-19 12-46 11-54-1z'
				style={{
					fill: 'url(#ah)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7078 7800c-19-58-11-68 36-46 54 26 55 96 1 96-17 0-25-11-37-50z'
				style={{
					fill: 'url(#ai)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3485 7820c3-5 10-10 16-10 5 0 9 5 9 10 0 6-7 10-16 10-8 0-12-4-9-10z'
				style={{
					fill: 'url(#aj)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4867 7783c-4-3-7-12-7-20 0-15 26-18 34-4 7 11-18 33-27 24z'
				style={{
					fill: 'url(#ak)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5110 7754c-14-37 5-58 26-29 8 11 13 26 12 34-5 26-28 23-38-5z'
				style={{
					fill: 'url(#al)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5454 7769c-10-17 13-36 27-22 12 12 4 33-11 33-5 0-12-5-16-11z'
				style={{
					fill: 'url(#am)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6943 7774c-21-9-16-55 7-61 11-3 20-12 20-19 0-8 9-14 20-14s20 5 20 10c0 6 6 10 14 10 21 0 26 37 7 54s-69 28-88 20z'
				style={{
					fill: 'url(#an)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M4907 7743c-3-16-1-33 3-38 16-19-24-34-63-25-33 7-37 6-45-19-7-20-4-32 11-53 12-16 29-28 39-28 11 0 15-5 12-15-6-15 0-19 49-29 15-4 25-11 22-16-4-6 7-16 24-23s28-16 25-20c-4-3 5-11 20-16 14-6 26-16 26-24 0-12 83-38 170-52 73-13 126 36 55 49-19 4-35 13-35 20 0 8-7 16-15 20-8 3-12 12-9 21 4 8 1 15-6 15-8 0-11 9-8 25 3 14 0 29-7 33-6 4-15 15-18 25-5 12-15 17-29 15-17-2-26-14-36-52-14-48-15-49-31-29-9 11-29 23-44 27-21 5-27 11-23 24 12 37 17 92 8 92-4 0-14 16-22 35s-17 35-22 35c-4 0-8 7-8 15 0 28-37 17-43-12z'
				style={{
					fill: 'url(#ao)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6222 7748c-32-40-8-104 33-88 13 5 25 7 28 4 2-3 8 7 11 21 5 21 1 32-19 51-30 27-38 29-53 12z'
				style={{
					fill: 'url(#ap)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2534 7669c-6-11 20-39 37-39 9 0 33 29 28 34-13 11-59 14-65 5z'
				style={{
					fill: 'url(#aq)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6556 7671c-19-7-19-8 2-13 15-4 22-2 22 8 0 8-1 14-2 13-2 0-12-4-22-8z'
				style={{
					fill: 'url(#ar)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5280 7605c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15z'
				style={{
					fill: 'url(#as)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6666 7613c5-5 12-12 16-18s8-2 8 8c0 9-7 17-17 17-9 0-12-3-7-7z'
				style={{
					fill: 'url(#at)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2792 7548c-18-18-15-36 8-50 14-9 20-24 20-49 0-38 20-65 43-56 8 3 18 28 24 55 9 45 8 53-11 76-25 30-66 42-84 24z'
				style={{
					fill: 'url(#au)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6888 7516c-10-7-18-16-18-20 0-12 27-35 34-29 3 4 6 1 6-5 0-19 24-14 38 8 10 17 10 21-3 26-8 4-15 12-15 20 0 17-20 18-42 0z'
				style={{
					fill: 'url(#av)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2965 7470c-4-6-16-10-28-8-17 2-23-3-25-25-5-41 21-44 73-6 32 23 42 35 33 41-18 11-46 10-53-2z'
				style={{
					fill: 'url(#aw)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7145 7424c-21-25-21-54-2-66 17-11 67-10 67 2 0 5 7 7 15 4 10-4 15 1 17 15 0 12 1 26 2 33s-17 17-39 24c-37 10-42 9-60-12z'
				style={{
					fill: 'url(#ax)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2133 7418c-15-21-9-43 12-43 14 0 21 8 23 28 4 29-17 38-35 15z'
				style={{
					fill: 'url(#ay)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2053 7323c-4-9-1-19 5-21 7-2 12-10 12-17 0-13 40-28 50-19 3 3-3 11-12 18-11 8-15 20-11 34 4 18 1 22-16 22-12 0-25-8-28-17z'
				style={{
					fill: 'url(#az)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M2825 7230c-10-16 4-30 30-30 32 0 40 16 16 29-25 14-38 14-46 1z'
				style={{
					fill: 'url(#aA)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7900 7094c0-9 7-14 17-12 25 5 28 28 4 28-12 0-21-6-21-16z'
				style={{
					fill: 'url(#aB)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M730 7029c0-5 5-7 10-4 6 3 10 8 10 11 0 2-4 4-10 4-5 0-10-5-10-11z'
				style={{
					fill: 'url(#aC)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8192 6946c-22-11-40-51-28-63 3-3 20-2 38 3 27 8 33 15 33 39 0 32-10 37-43 21z'
				style={{
					fill: 'url(#aD)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3199 6889c-9-17-8-23 2-30 21-13 52-11 45 4-3 6-9 20-12 30-8 23-21 22-35-4z'
				style={{
					fill: 'url(#aE)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7986 6878c-11-42-7-48 29-48 37 0 44 10 20 30-8 7-15 19-15 26 0 23-27 16-34-8z'
				style={{
					fill: 'url(#aF)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M3260 6807c-9-32-9-42 2-49 18-12 99-3 108 12 4 7 17 10 29 7s21-2 21 2c0 10-30 25-96 49l-52 19z'
				style={{
					fill: 'url(#aG)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8340 6832c0-5-15-17-34-26-29-13-35-22-40-61-4-24-12-48-18-51-8-5-9-1-5 10 8 21-18 33-37 17-7-6-24-10-37-9-19 3-25-4-34-36-7-24-14-35-19-28-10 17 15 92 30 92 17 0 30 48 16 62-6 6-12 6-16-1-4-6-17-11-30-11-35 0-75-23-78-45-2-11-9-20-16-20s-16-6-20-12c-6-10-17-10-42-3-19 6-36 10-37 10-13 0 2-37 21-55 30-28 163-60 181-45 9 7 27 7 56 1 58-14 54-15 69 17 12 26 13 26 20 6 7-19 60-41 60-25 0 10 52 31 78 31 13 0 20 4 17 10s0 10 8 10c21 0 38 25 31 44-4 9-20 20-37 23-17 4-32 14-34 25-3 10-8 18-12 18s-7 12-6 27c0 18-6 29-17 31-10 2-18-1-18-6z'
				style={{
					fill: 'url(#aH)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M527 6204c-9-10 2-24 19-24 8 0 14 7 14 15 0 15-21 21-33 9z'
				style={{
					fill: 'url(#aI)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5257 6144c-8-8 1-24 14-24 5 0 9 7 9 15 0 15-12 20-23 9z'
				style={{
					fill: 'url(#aJ)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10637 5976c-4-9-13-16-22-16-8 0-15-5-15-12 0-6 3-9 6-5 4 3 22 0 42-9 40-17 38-17 47 19 6 21 4 27-8 27-8 0-22 3-30 6s-17-2-20-10z'
				style={{
					fill: 'url(#aK)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10178 5883c-10-2-18-12-18-21 0-11 3-13 8-6 4 6 16 16 27 22 20 12 14 13-17 5z'
				style={{
					fill: 'url(#aL)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5647 5874c-8-8 1-24 14-24 5 0 9 7 9 15 0 15-12 20-23 9z'
				style={{
					fill: 'url(#aM)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5865 5749c-8-23 7-45 24-35 6 4 11 18 11 32 0 30-26 32-35 3z'
				style={{
					fill: 'url(#aN)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M11464 5746c-8-22 3-33 18-18 9 9 9 15 0 24s-13 7-18-6z'
				style={{
					fill: 'url(#aO)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7710 5728c0-11 5-18 13-16 18 7 20 35 2 35-8 0-15-9-15-19z'
				style={{
					fill: 'url(#aP)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7775 5661c-7-12 12-24 25-16 11 7 4 25-10 25-5 0-11-4-15-9z'
				style={{
					fill: 'url(#aQ)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6400 5504c-16-42-12-63 14-70 47-11 61 24 30 71-21 32-32 31-44-1z'
				style={{
					fill: 'url(#aR)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7990 5516c0-10 9-16 21-16 24 0 21 23-4 28-10 2-17-3-17-12z'
				style={{
					fill: 'url(#aS)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6677 5484c-5-29 19-46 34-23 15 24 10 49-10 49-12 0-20-9-24-26z'
				style={{
					fill: 'url(#aT)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6542 5488c-14-14-16-58-2-58 6 0 10-7 10-15s11-17 25-21c31-8 31-7 40 28 6 24 3 29-19 38-14 5-25 15-24 21 4 17-16 21-30 7z'
				style={{
					fill: 'url(#aU)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5704 5439c-8-14 11-33 25-25 11 7 4 36-9 36-5 0-12-5-16-11z'
				style={{
					fill: 'url(#aV)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M9887 5363c-3-5-8-22-11-39-7-30-5-32 36-42 32-8 44-8 50 1 5 8 12 6 23-8 15-20 15-20 30-1 8 11 15 16 15 11s9 1 20 13c26 27 26 28-11 41-23 8-36 8-45 0-17-14-54-2-54 17 0 15-45 20-53 7z'
				style={{
					fill: 'url(#aW)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5810 5301c0-5-9-11-20-14-30-8-27-55 4-67 47-18 59-16 66 10 4 17 0 34-14 53-20 27-36 35-36 18z'
				style={{
					fill: 'url(#aX)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6653 5273c-4-10-15-24-25-31-21-15-24-32-5-32 6 0 19-15 27-33 17-36 50-47 70-22 11 13 11 20 0 39-6 13-9 33-5 45s2 21-4 21-11 7-11 15c0 21-39 19-47-2z'
				style={{
					fill: 'url(#aY)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10090 5250c0-5 5-10 11-10 5 0 7 5 4 10-3 6-8 10-11 10-2 0-4-4-4-10z'
				style={{
					fill: 'url(#aZ)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5985 5210c-8-24 1-40 21-40 9 0 14 11 14 30 0 35-25 42-35 10z'
				style={{
					fill: 'url(#ba)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5772 5186c-63-31-19-115 60-116 22 0 35 45 18 65-6 8-9 23-5 35 4 14 2 20-9 20-8 0-20 2-28 4-7 2-23-2-36-8z'
				style={{
					fill: 'url(#bb)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6474 5152c-11-9-26-31-33-48-10-25-17-30-36-26-21 4-25-1-35-38-9-34-9-45 2-51 10-7 10-19-3-68-12-49-13-63-3-73 10-11 8-31-13-105-15-52-32-93-39-93-14 0-23-22-31-74-4-29 0-45 16-67 12-15 21-33 21-39 0-5 4-10 8-10s6-16 4-35c-3-26-9-35-23-35-10 0-19-4-19-9s-8-11-18-14c-18-4-32-43-32-90 0-19 42-67 59-67 5 0 6-11 3-25-5-28 21-44 46-28 24 15 35 66 17 79-8 6-11 14-7 18s-1 12-10 17c-14 8-14 14-5 46 9 28 9 37-1 41-29 9-8 17 46 17 50 0 57 2 57 20 0 13-8 21-22 23-13 2-23 7-23 12 0 20 13 38 24 34s46 92 46 126c0 7 3 10 7 7 3-4 12-2 20 4 16 14 18 56 2 61-7 2-7 18 1 52 8 36 8 52-1 62-14 17-5 44 16 44 17 0 20 16 5 25s-12 25 5 25c8 0 15 5 15 10 0 6 7 10 15 10 20 0 31 46 15 65-9 11-9 22-1 46 6 18 11 33 11 34 0 2-11 6-25 9-14 4-25 13-25 21s-5 15-10 15c-7 0-8 17-4 45 6 50-5 58-42 27zm-9-133c11-17 0-20-21-4-17 13-17 14-2 15 9 0 20-5 23-11z'
				style={{
					fill: 'url(#bc)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7167 5058c-7-25-1-38 17-38 14 0 29 38 20 52-10 16-32 8-37-14z'
				style={{
					fill: 'url(#bd)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10208 5048c-8-21 2-38 21-38 27 0 33 12 14 32-19 21-29 23-35 6z'
				style={{
					fill: 'url(#be)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10277 4979c-10-35-9-39 8-39 16 0 18 14 6 44-7 18-8 18-14-5z'
				style={{
					fill: 'url(#bf)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M7050 4920c-12-23-6-40 15-40 13 0 25 21 25 46 0 21-28 17-40-6z'
				style={{
					fill: 'url(#bg)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5710 4905c-5-14-15-54-21-89-9-46-17-66-30-69-9-3-20-18-23-34-5-22-16-33-41-43-34-13-45-33-25-45 15-9 12-45-4-45-20 0-30-18-18-33 16-20 10-47-10-47-25 0-22-26 7-57l24-27 10 27c6 15 15 27 21 27 17 0 32 50 20 65-8 10-3 16 20 26 16 8 30 17 30 20 0 4 8 9 18 11 13 4 22 22 31 62 8 35 19 60 31 66 25 13 38 79 19 91-11 7-12 14-1 41 10 28 10 35-3 44-8 6-15 16-15 23 0 21-31 11-40-14z'
				style={{
					fill: 'url(#bh)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6711 4906c-12-14-5-26 16-26 15 0 18 26 4 34-5 3-14 0-20-8z'
				style={{
					fill: 'url(#bi)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5967 4901c-11-23 15-71 42-77 45-10 52-14 46-23-3-5 0-13 6-16 16-11 38 16 42 51 4 30 3 31-65 51-38 11-70 18-71 14z'
				style={{
					fill: 'url(#bj)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6615 4891c-14-45-14-62 1-68 21-8 34 14 34 55 0 36-24 45-35 13z'
				style={{
					fill: 'url(#bk)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M10305 4870c-7-11 2-30 15-30 4 0 10 6 13 14 6 16-19 30-28 16z'
				style={{
					fill: 'url(#bl)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6702 4848c-27-27 5-73 38-53 20 12 4 65-20 65-3 0-11-5-18-12z'
				style={{
					fill: 'url(#bm)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5503 4833c-3-8-1-19 5-25 14-14 46-6 50 13 4 22-47 33-55 12z'
				style={{
					fill: 'url(#bn)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6152 4703c2-22 8-28 28-28s25 5 25 25-6 26-28 28c-26 3-28 1-25-25z'
				style={{
					fill: 'url(#bo)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5442 4708c-7-7-12-22-12-35 0-17 7-23 34-29 19-3 39-3 45 1 14 8 14 35 1 35-5 0-10 7-10 15s-4 15-9 15-15 2-23 5c-7 3-19 0-26-7z'
				style={{
					fill: 'url(#bp)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5948 4653c-28-14-37-46-18-58 6-4 17-2 23 4 7 5 22 8 34 5 25-7 39 12 23 31-6 8-9 19-5 25 9 14-25 11-57-7z'
				style={{
					fill: 'url(#bq)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6100 4630c0-5-6-10-14-10-19 0-27-13-32-55-4-32-2-35 32-44 30-8 41-7 60 7 23 17 32 42 15 42-5 0-12 12-16 27-8 34-45 61-45 33z'
				style={{
					fill: 'url(#br)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6628 4596c-9-21-9-29 1-39 10-9 15-8 27 8 8 11 13 26 12 34-5 25-27 23-40-3z'
				style={{
					fill: 'url(#bs)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5384 4506c-3-15-11-23-19-20-11 5-25-23-25-53 0-7 18-17 40-23 36-10 42-9 66 14 23 20 26 29 20 59-5 24-13 37-29 41-38 10-46 7-53-18z'
				style={{
					fill: 'url(#bt)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5866 4498c-7-36-9-33 27-42 30-7 34 4 17 48-13 36-36 33-44-6z'
				style={{
					fill: 'url(#bu)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5465 4391c-3-5 2-16 10-24 8-9 15-23 15-31 0-20 26-21 34-1 3 8 12 15 21 15 31 0 14 29-22 39-46 13-50 13-58 2z'
				style={{
					fill: 'url(#bv)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5380 4380c0-5-6-10-14-10s-17-11-20-25c-4-14-13-25-21-25-17 0-20-26-4-36 6-3 9-17 6-30-2-13 1-25 6-27 18-6 57 17 63 38 4 11 15 26 25 33 24 16 24 46 2 72-18 21-43 27-43 10z'
				style={{
					fill: 'url(#bw)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6202 4368c7-19 38-22 38-4 0 10-9 16-21 16s-19-5-17-12z'
				style={{
					fill: 'url(#bx)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5573 4313c-39-22-58-53-33-53 6 0 10-7 10-15s4-15 10-15c5 0 7-13 4-30-4-19-2-30 5-30 6 0 11-11 11-24 0-56 55-56 66 0 7 40-3 104-16 104-6 0-10 5-10 10 0 6 7 10 15 10 18 0 19 9 5 44-11 31-13 31-67-1z'
				style={{
					fill: 'url(#by)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6107 4314c-9-10 2-24 19-24 8 0 14 7 14 15 0 15-21 21-33 9z'
				style={{
					fill: 'url(#bz)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5875 4290c-3-5-19-10-36-10-26 0-29-3-29-31v-32l52 7c28 4 55 9 60 12 15 10 8 43-11 54-24 12-28 13-36 0z'
				style={{
					fill: 'url(#bA)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5954 4269c-8-14 11-33 25-25 6 4 11 11 11 16 0 13-29 20-36 9z'
				style={{
					fill: 'url(#bB)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M1634 4258c-7-12 21-38 42-38 22 0 28 23 9 37-23 16-41 17-51 1z'
				style={{
					fill: 'url(#bC)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5905 4164c-18-18-16-33 7-47 35-22 66 21 36 51-16 16-23 15-43-4z'
				style={{
					fill: 'url(#bD)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M11015 4070c-14-23 31-45 56-29 11 8 10 12-5 24-23 17-42 19-51 5z'
				style={{
					fill: 'url(#bE)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M6030 4014c-11-29-7-54 8-54 5 0 7-11 4-25-3-18 0-25 12-25 23 0 38 42 20 56-8 6-14 23-14 37 0 37-18 43-30 11z'
				style={{
					fill: 'url(#bF)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5552 3673c2-11 14-19 31-21 22-3 27 1 27 17 0 17-6 21-31 21-24 0-30-4-27-17z'
				style={{
					fill: 'url(#bG)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M5580 3329c0-5 5-7 10-4 6 3 10 8 10 11 0 2-4 4-10 4-5 0-10-5-10-11z'
				style={{
					fill: 'url(#bH)',
					fillOpacity: 1,
				}}
			/>
			<path
				d='M8514 909c-10-17 13-36 27-22 12 12 4 33-11 33-5 0-12-5-16-11z'
				style={{
					fill: 'url(#bI)',
					fillOpacity: 1,
				}}
			/>
		</g>
		<path
			d='M6762.657 239.589a5565.61 5565.61 0 0 0-1635.43 268.387 5565.61 5565.61 0 0 0-2508.678 1670.64C1916.033 1999.83 1492.547 1402.505 1057.907 821.9c234.819 879.907-85.832 2077.223 739.736 2619.558a5565.61 5565.61 0 0 0-260.983 4063.549 5565.61 5565.61 0 0 0 6991.146 3602.01 5565.61 5565.61 0 0 0 3613.447-6985.248l-11.128-34.687a5565.61 5565.61 0 0 0-232.118-573.95l25.608 28.802c1054.485-479.9 672.217-1780.8 922.869-2720.034-475.856 635.662-938.329 1291.396-1768.268 1395.933A5565.61 5565.61 0 0 0 6762.657 239.59Zm157.3 975.452a4590.44 4590.44 0 0 1 4282.598 3173.004l9.168 28.606a4590.44 4590.44 0 0 1-2980.318 5761.334A4590.44 4590.44 0 0 1 2465.2 7207.094a4590.44 4590.44 0 0 1 2961.453-5771.056 4590.44 4590.44 0 0 1 1493.303-220.997Z'
			style={{
				fill: 'url(#bJ)',
				fillOpacity: 1,
				fillRule: 'evenodd',
				strokeWidth: 11.4116,
			}}
			transform='translate(31.182 49.78) scale(.07186)'
		/>
		<path
			d='m2742.52 4615.844 3412.694 1178.51a1829.71 1584.84 5.617 0 1-2280.378 745.593l-11.188-3.944a1829.71 1584.84 5.617 0 1-1121.112-1920.2Z'
			style={{
				fill: 'url(#bK)',
				fillOpacity: 1,
				fillRule: 'evenodd',
				strokeWidth: 12.766,
			}}
			transform='translate(31.182 49.78) scale(.07186)'
		/>
		<path
			d='m7587.552 5803.287 3315.534-1322.74a1834.135 1585.613 0 0 1-961.095 1966.023l-10.935 4.28a1834.135 1585.613 0 0 1-2343.527-647.605Z'
			style={{
				fill: 'url(#bL)',
				fillOpacity: 1,
				fillRule: 'evenodd',
				strokeWidth: 12.7845,
			}}
			transform='translate(31.182 49.78) scale(.07186)'
		/>
		<text
			xmlSpace='preserve'
			style={{
				fontStyle: 'normal',
				fontVariant: 'normal',
				fontWeight: 400,
				fontStretch: 'normal',
				fontSize: '42.6667px',
				fontFamily: 'Michroma',
				InkscapeFontSpecification: 'Michroma',
				letterSpacing: 0,
				wordSpacing: 0,
				whiteSpace: 'pre',
				shapeInside: 'url(#bM)',
				display: 'inline',
				opacity: 0.548387,
				fill: '#000',
				stroke: '#fffe00',
				strokeWidth: 0,
				strokeDasharray: 'none',
			}}
			transform='translate(-501.816 -144.358)'
		>
			<tspan
				x={166.699}
				y={115.645}
			>
				<tspan
					style={{
						stroke: '#0f0',
					}}
				>
					{'michroma'}
				</tspan>
			</tspan>
		</text>
	</svg>
)

export const SVGFolder = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			className='fill-current text-gray-300 group-hover:text-cyan-300'
			fillRule='evenodd'
			d='M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2addH8a3 3 0 00-3 3add.5a1.5 1.5 0 01-3 0V6z'
			clipRule='evenodd'
		/>
		<path
			className='fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400'
			d='M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z'
		/>
	</svg>
)

export const SVGReports = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			className='fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400'
			fillRule='evenodd'
			d='M2 5a2 2 0 012-2h8a2 2 0 012 2add0a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
			clipRule='evenodd'
		/>
		<path
			className='fill-current text-gray-300 group-hover:text-cyan-300'
			d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'
		/>
	</svg>
)

export const SVGSettings = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='#164e63'
	>
		<path
			className='fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
			d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'
		/>
		<path
			className='fill-current text-gray-300 group-hover:text-cyan-300'
			d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'
		/>
	</svg>
)

export const SVGFinances = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-5 w-5'
		viewBox='0 0 20 20'
		fill='currentColor'
	>
		<path
			className='fill-current text-gray-300 group-hover:text-cyan-300'
			d='M4 4a2 2 0 00-2 2addh16V6a2 2 0 00-2-2H4z'
		/>
		<path
			className='fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400'
			fillRule='evenodd'
			d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
			clipRule='evenodd'
		/>
	</svg>
)

export const SVGLogout = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M17 16l4-4m0 0l-4-4m4 4H7m6 4adda3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3add'
		/>
	</svg>
)

export const SVGSearch = () => (
	<svg
		xmlns='http://ww50w3.org/2000/svg'
		className='w-4 fill-current'
		viewBox='0 0 35.997 36.004'
	>
		<path
			id='Icon_awesome-search'
			data-name='search'
			d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
		></path>
	</svg>
)

export const SVGChat = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='my-auto h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M4 6h16M4 12h16M4 18h16'
		/>
	</svg>
)

export const SVGNotify = () => (
	<svg
		xmlns='http://ww50w3.org/2000/svg'
		className='mx-auto w-4 fill-current text-gray-600 dark:text-gray-300'
		viewBox='0 0 35.997 36.004'
	>
		<path
			id='Icon_awesome-search'
			data-name='search'
			d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
		></path>
	</svg>
)

export const SVGMenu = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-8 w-8 text-2-color'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M4 6h16M4 12h8m-8 6h16'
		/>
	</svg>
)

export const SVGCheck = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2.5'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<path d='M20 6L9 17l-5-5'></path>
	</svg>
)

export const SVGPulse = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6  '
		viewBox='0 0 24 24'
	>
		<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
	</svg>
)

export const SVGScissors = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<circle
			cx='6'
			cy='6'
			r='3'
		></circle>
		<circle
			cx='6'
			cy='18'
			r='3'
		></circle>
		<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
	</svg>
)

export const SVGPerson = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
		<circle
			cx='12'
			cy='7'
			r='4'
		></circle>
	</svg>
)

export const SVGMoon = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'></path>
	</svg>
)

export const SVGFlag = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'></path>
	</svg>
)

export const SVGShield = () => (
	<svg
		fill='currentColor'
		//currentColor
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='0'
		className='w-10 h-10'
		viewBox='0 0 24 24'
	>
		<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
	</svg>
)

export const SVGArrow = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		className='w-6 h-6'
		viewBox='0 0 24 24'
	>
		<path d='M5 12h14M12 5l7 7-7 7'></path>
	</svg>
)

export const SVGTwitter = () => (
	<svg
		fill='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		//* className='w-24 h-24'
		viewBox='0 0 24 24'
	>
		<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
	</svg>
)

export const SVGFacebook = () => (
	<svg
		fill='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		//* className='w-24 h-24'
		viewBox='0 0 24 24'
	>
		<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
	</svg>
)

export const SVGInstagram = () => (
	<svg
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		//* className='w-24 h-24'
		viewBox='0 0 24 24'
	>
		<rect
			width='20'
			height='20'
			x='2'
			y='2'
			rx='5'
			ry='5'
		></rect>
		<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
	</svg>
)

export const SVGLinkedin = () => (
	<svg
		fill='currentColor'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='0'
		// className='w-24 h-24'
		viewBox='0 0 24 24'
	>
		<path
			stroke='none'
			d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
		></path>
		<circle
			cx='4'
			cy='4'
			r='2'
			stroke='none'
		></circle>
	</svg>
)
