import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadWorkstationsOfProject } from '../../store/workstations';
import { CardContainer } from '../../style/GlobalStyles';
import WorkstationCard from './WorkstationCard';
import {useParams} from 'react-router-dom'

export default function Projects() {
    const dispatch = useDispatch();
    const workstations = useSelector(state => state.entities.workstations.list);
    const project_id = useParams().id

    useEffect(() => {
        dispatch(loadWorkstationsOfProject({id:project_id}));
    }, []);

    var elements=[];
    
    for(var i=0; i<workstations.length; i++){
        elements.push(<WorkstationCard key={i} workstation = {workstations[i]}/>)
    }

    return <CardContainer>{elements}</CardContainer>
}
