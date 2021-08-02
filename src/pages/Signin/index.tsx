import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1> GoBarber</h1>
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>

      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background>x</Background>
  </Container>
);

export default SignIn;