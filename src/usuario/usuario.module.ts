import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
/**
 * Todo module temos que passar um objeto, mesmo que seja vazio.
 * Criamos um modulo de usuraio, para agrupar todas as informações de usuario,
 * referente a usuario vai ficar encapsulado dentro desse module e agrupado.
 */

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository],
})
export class UsuarioModule {}
