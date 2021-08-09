import React from 'react'
import { Projects, AddProjectModal } from '../components/Project'
import {Container} from '../style/GlobalStyles';

export default function ProjectPage() {
    return (
        <Container> 
            <AddProjectModal/>
            <Projects/>
        </Container>
    )
}
