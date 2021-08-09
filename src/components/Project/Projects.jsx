import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProjectsOfClient } from '../../store/projects';
import {CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink} from '../../style/Card'
import { Container } from '../../style/GlobalStyles';
import ProjectCard from './ProjectCard';
import {useParams} from 'react-router-dom'

export default function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.entities.projects.list);
    const clientId = useParams()

    useEffect(() => {
        dispatch(loadProjectsOfClient(clientId.id));
    }, []);

    var elements=[];

    for(var i=0; i<projects.length; i++){
        elements.push(<ProjectCard key={i} name={projects[i].name} _id={projects[i]._id}/>)
    }

    return <Container>{elements}</Container>
}
