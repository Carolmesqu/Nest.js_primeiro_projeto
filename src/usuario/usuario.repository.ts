/* eslint-disable prettier/prettier */
/**
 * Nós vamos utilizar esse repositorio pra salvar os dados que recebemos do
 * usuario controller, no momento vamos salvar os dados do usuario na
 * na memoria, em um array.
 * Um provider no Nest.js é qualquer classe que esteja decorada com @Injectable.
 */

import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private usuarios = [];

    
    //Criamos o metodo salvar, que recebe um usuario e pega esse usuario, o post no controller usa esse metodo  
    async salvar(usuario) {
        this.usuarios.push(usuario);        
    }

    //Metodo para listar, o get no controller vai usar esse metodo
    async listar() {
        return this.usuarios;
    }
}