export class Proyecto {

	constructor(
		public id: number,
		public nombre:string,
		public fechaInicio:string,
		public fechaFinalizacion:string,
		public propietarioID?:string
	){}

	setNombre(nombre){
		this.nombre = nombre;
	}

	setFechaInicio(fechaInicio){
		this.fechaInicio = fechaInicio;
	}

	setFechaFinalizacion(fechaFinalizacion){
		this.fechaFinalizacion = fechaFinalizacion;
	}
}