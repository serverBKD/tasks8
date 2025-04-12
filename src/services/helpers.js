import { redirect } from 'next/navigation'

export function BatGrave() {
	console.log('go ahead Bruce!')
	redirect('/login')
	return
}

export const WhatsAppUrl =
	'https://wa.me/+584124363214?text=Hola%20Favor%20mas%20informacion'

export function newSku(code, id, price_base, stock, tags, category) {
	id = id.substring(0, 15)
	//const tag = tags.toString().replace(/,/g, '-').toLowerCase() ${tag}-
	const sku = `${category}-${stock}XZ${price_base}-${code.toLowerCase()}-${id}`
	sku.substring(sku.length - 1) === '-'
		? sku.substring(0, sku.length - 1)
		: sku
	return sku
}

//TODO Serial & barcode

export function deltaPrice(price_base, delta) {
	if (typeof delta !== 'number') return 'delta should be a number'
	if (1 > delta > 100) return price_base //. Should be a error?
	const newDelta = delta / 100
	return Number(price_base) * (1 + newDelta)
}

const IMAGE_BANNER = [
	'/v2/banners/Banner_ALARMAS.png',
	'/v2/banners/Banner_CCTV.png',
	'/v2/banners/Banner_CERCO.png',
]

export function imgBanner(IMG) {
	const imgCCTV = 4
	const imgALARM = 7
	const RND = Number(IMG) || Math.floor(Math.random() * 10)
	if (RND <= imgCCTV) {
		return IMAGE_BANNER[1]
	} else if (RND >= imgALARM) {
		return IMAGE_BANNER[2]
	} else {
		return IMAGE_BANNER[0]
	}
}
