export class Usuario {

	constructor(
		public id: number,
		public nombreUsuario:string,
		public email:string,
		public password:string
		){}
	getUsuario():string{
		return this.nombreUsuario;
	}
}
