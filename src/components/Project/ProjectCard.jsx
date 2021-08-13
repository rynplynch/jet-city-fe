import React from 'react'
import {CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink} from '../../style/Card'
import { removeProject } from '../../store/projects'
import { useDispatch } from 'react-redux'

export default function ProjectCard(props) {
  const dispatch = useDispatch();

  return (
    <CardWrapper> 
      <CardHeading>{props.name}</CardHeading>
      <CardBody>
        <CardFieldset>
          <CardLink href={`/show/cards/client/${ props.id }/projects`}>Go to Workstations</CardLink>
        </CardFieldset>
        <CardFieldset>
          <CardButton onClick={() => 
            dispatch(removeProject({id: props.id}))} type="button">
            Delete Project
          </CardButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>   
  );
}
