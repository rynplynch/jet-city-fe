import React from 'react'
import { removeClient } from '../../store/clients';
import { useDispatch } from 'react-redux'
import {CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink, CardHeader} from '../../style/Card'
import UpdateClientModal from './UpdateClientModal';

export default function ClientCard(props) {
  const dispatch = useDispatch();

  return (
    <CardWrapper> 
      <CardHeader>{props.name}</CardHeader>
      <CardBody>
        <CardLink href={`/show/cards/client/projects/${ props.id }`}>Go to Projects</CardLink>
        <UpdateClientModal id= {props.id}/>
        <CardButton onClick={() => dispatch(removeClient({id: props.id}))} type="button">
          Delete Client
        </CardButton>
      </CardBody>
    </CardWrapper>   
  );
}
