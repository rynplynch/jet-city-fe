import React from 'react'
import { AddWorkstationModal, Workstations } from '../components/Workstation'
import {Container} from '../style/GlobalStyles';

export default function ProjectPage() {
    return (
        <Container> 
            <AddWorkstationModal/>
            <Workstations/>
        </Container>
    )
}
