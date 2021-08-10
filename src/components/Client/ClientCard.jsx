import React from 'react'
import { removeClient } from '../../store/clients';
import { useDispatch } from 'react-redux'
import {CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink} from '../../style/Card'
import UpdateClientModal from './UpdateClientModal';

export default function ClientCard(props) {
  const dispatch = useDispatch();

  return (
    <CardWrapper> 
      <CardHeading>{props.name}</CardHeading>
      <CardBody>
        <CardFieldset>
          <CardLink href={`/show/cards/client/${ props.id }/projects`}>Go to Projects</CardLink>
        </CardFieldset>
        <CardFieldset>
          <UpdateClientModal id= {props.id}/>
        </CardFieldset>
        <CardFieldset>
          <CardButton onClick={() => 
            dispatch(removeClient({id: props.id}))} type="button">
            Delete Client
          </CardButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>   
  );
}
