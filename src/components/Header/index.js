import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';
import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>Allisson Filipe</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img  src="" alt=""/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}