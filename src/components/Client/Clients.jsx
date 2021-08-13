import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadClients } from '../../store/clients';
import {CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink} from '../../style/Card'
import { CardContainer } from '../../style/GlobalStyles';
import ClientCard from './ClientCard'

export default function Clients() {
    const dispatch = useDispatch();
    const clients = useSelector(state => state.entities.clients.list);

    useEffect(() => {
        dispatch(loadClients());
    }, []);

    var elements=[];

    for(var i=0; i<clients.length; i++){
        // elements.push(<ClientCard key={i} client_id={clients[i]._id}/>)
        elements.push(<ClientCard key={i} name={clients[i].name} id={clients[i].id}/>)
    }

    return <CardContainer>{elements}</CardContainer>
}
