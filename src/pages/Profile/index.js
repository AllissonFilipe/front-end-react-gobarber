import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '../../store/modules/user/actions';

import AvatarInput from './AvatarInput'

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
            <AvatarInput name="avatar_id"/>

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