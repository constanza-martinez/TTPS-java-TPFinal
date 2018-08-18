export class Proyecto {

	constructor(
		public id: number,
		public nombre:string,
		public fechaInicio:string,
		public fechaFinalizacion:string,
		public propietarioID?:string
	){}
}