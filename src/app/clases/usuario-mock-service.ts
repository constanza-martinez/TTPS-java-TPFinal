export class UsuarioMockService {

    usuarios = [];

    public agregarUsuario(usuario){
        this.usuarios.push(usuario);
        console.log(JSON.stringify(this.usuarios));
    }

	
}
