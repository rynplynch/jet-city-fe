import React, { Component } from 'react'
import { Clients, AddClientModal } from '../components/Client'
import {Container, CardContainer} from '../style/GlobalStyles';

export default function ClientPage() {
    return (
        
        <Container> 
            <AddClientModal/>
            <Clients/>
        </Container>
    )
}
