import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {

    }

    return <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome Completo"/>
            <Input name="email" type="email" placeholder="Seu Endereço de Email"/>

            <hr />

            <Input type="password" name="oldPassword" placeholder="Sua Senha Atual"/>
            <Input type="password" name="password" placeholder="Nova Senha"/>
            <Input type="password" name="confirmPassowrd" placeholder="Confirmação de Senha"/>

            <button type="submit">Atualizar Perfil</button>
        </Form>

        <button type="button">Sair do GoBarber</button>
    </Container>;
}