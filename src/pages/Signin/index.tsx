import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1> GoBarber</h1>
      <form>
        <h1>Faça seu login</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>

      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
