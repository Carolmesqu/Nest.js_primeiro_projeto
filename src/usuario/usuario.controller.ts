/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UsuarioRepository } from './usuario.repository';

/**
 * Todo controller em Nest.js é decorado com um controller,
 * usar o controller nos permite criar uma rota para usuarios.
 * Como não passamos nenhum parametro, essa rota vai ser a raiz
 * da aplicação.
 */

@Controller('/usuarios')
export class UsuarioController {
  /**
   * Vamos criar um método, um método com async pra podermos
   * trabalhar com promises, estamos utilizando o decorator
   * Post pra receber os dados e utlizamos o decorator Body
   * dessa forma conseguimos mandar dados da rota usuario e
   * receber eles atraves do body
   */

  constructor(
    private usuarioRepository: UsuarioRepository
    ) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario) {
    
  this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  //Metodo para listar usuarios
  @Get()
  async listaUsuarios() {
  return this.usuarioRepository.listar();
  }
}
