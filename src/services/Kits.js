export class Alarma {
	constructor() {
		this.marca = ['dsc', 'paradox', 'honeywell', 'ts']
		this.central = [
			'sp4000',
			'sp7000',
			'MG5050',
			'EVO192',
			'Power1832',
			'Power1864',
		]
		this.teclado = ['k636', 'k10H', 'k32LCD', 'PC5550']
		this.power = 'T40VA'
		this.batery = ['12V-4A', '12V-7A', '12V-12A']
		this.sensorInterno = ['NV5', 'LC200', 'DG75', '460', '476']
		this.sensorExterno = ['DG85', 'NV780MX']
		this.sensorApertura = ['CM', 'CM-SP', 'SM']
		this.sirena = ['S20W', 'S30W', 'S30W-RC']
		this.wire = ['22AWG-4H', 'CAT5e']
	}
}

export class Camara {
	constructor() {
		this.marca = ['hikvision', 'dahua']
		this.tipo = ['bullet', 'domo', 'ptz']
		this.resolucion = ['2MP', '4MP', '8MP']
		this.lente = ['2.8mm', '4mm', '6mm']
	}

	setCamara(cant, marca, resolucion, lente) {
		return {
			cant: cant,
			marca: this.marca.find((m) => m === marca) ?? 'ts',
			resolucion: this.resolucion.find((r) => r === resolucion) ?? '2MP',
			lente: this.lente.find((l) => l === lente) ?? '',
		}
	}

	setBullet(cant, marca, resolucion, lente) {
		let specs = this.setCamara(cant, marca, resolucion, lente)
		return {
			tipo: 'bullet',
			cant: specs.cant,
			marca: specs.marca,
			resolucion: specs.resolucion,
			lente: specs.lente,
		}
	}

	setDomo(cant, marca, resolucion, lente) {
		let specs = this.setCamara(cant, marca, resolucion, lente)
		return {
			tipo: 'domo',
			cant: specs.cant,
			marca: specs.marca,
			resolucion: specs.resolucion,
			lente: specs.lente,
		}
	}
}

const Camaras = new Camara()

const Bullets2 = Camaras.setBullet(2, 'dahua', '2MP', '2.8mm')
const Domo4 = Camaras.setDomo(4, 'hikvision', '4MP')

//? console.log({ Bullets2, Domo4 })

export class SecurityKit {
	constructor() {
		this.kitParadoxSP4000 = {
			marca: 'paradox',
			central: 'sp4000',
			teclado: 'k636',
			power: 't40va',
			batery: '12v-4a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		this.kitParadoxSP7000 = {
			marca: 'paradox',
			central: 'sp7000',
			teclado: 'k10H',
			power: 't40va',
			batery: '12v-4a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		this.kitParadoxMG5050 = {
			marca: 'paradox',
			central: 'MG5050',
			teclado: 'k10H',
			power: 't40va',
			batery: '12v-4a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		this.kitParadoxEVO192 = {
			marca: 'paradox',
			central: 'EVO192',
			teclado: 'k32LCD',
			power: 't40va',
			batery: '12v-7a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		this.kitDSCPower1832 = {
			marca: 'dsc',
			central: 'power1832',
			teclado: 'pc5550',
			power: 't40va',
			batery: '12v-4a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		this.kitDSCPower1864 = {
			marca: 'dsc',
			central: 'power1864',
			teclado: 'pc5550',
			power: 't40va',
			batery: '12v-4a',
			sirena: 's30w',
			wire: '22AWG-4H',
		}
		//. CCTV
		this.kitHikVision4ch = {
			cant: 4,
			marca: 'hikvision',
			wire: 'cat5e',
			power: 'p-1A',
			xvr: 'x-4ch',
			disco: '1TB',
			vb: 'vb1ch',
		}
		this.kitHikVision8ch = {
			cant: 8,
			marca: 'hikvision',
			wire: 'cat5e',
			power: 'p-1A',
			xvr: 'x-8ch',
			disco: '1TB',
			vb: 'vb1ch',
		}
		this.kitHikVision16ch = {
			cant: 16,
			marca: 'hikvision',
			wire: 'cat5e',
			power: 'p-1A',
			xvr: 'x-16ch',
			disco: '1TB',
			vb: 'vb1ch',
		}
	}

	kitParadoxSP4000() {
		return this.kitParadoxSP4000
	}

	kitParadoxSP7000() {
		return this.kitParadoxSP7000
	}

	kitParadoxMG5050() {
		return this.kitParadoxMG5050
	}

	kitParadoxEVO192() {
		return this.kitParadoxEVO192
	}
	kitDSCPower1832() {
		return this.kitDSCPower1832
	}
	kitDSCPower1864() {
		this.kitDSCPower1832
	}
	kitHikVision4ch() {
		return this.kitHikVision4ch
	}
	kitHikVision8ch() {
		return this.kitHikVision8ch
	}
	kitHikVision16ch() {
		return this.kitHikVision16ch
	}
}
