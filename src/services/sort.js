function ordenarProductos(array, parametro, orden = 'ascendente') {
	return array.sort((a, b) => {
		if (orden === 'ascendente') {
			if (a[parametro] < b[parametro]) return -1
			if (a[parametro] > b[parametro]) return 1
			return 0
		} else {
			if (a[parametro] > b[parametro]) return -1
			if (a[parametro] < b[parametro]) return 1
			return 0
		}
	})
}

export default ordenarProductos
