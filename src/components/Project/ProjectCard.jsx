import React from 'react'
import { CardHeading, CardWrapper, CardButton, CardFieldset, CardBody, CardLink, CardHeader } from '../../style/Card'
import UpdateProjectModal from './UpdateProjectModal'
import { removeProject } from '../../store/projects'
import { useDispatch } from 'react-redux'

export default function ProjectCard(props) {
  const dispatch = useDispatch();

  return (
    <CardWrapper> 
      <CardHeader>{props.name}</CardHeader>
      <CardBody>
        <CardFieldset>
          <CardLink href={`/show/cards/project/workstations/${ props.id }`}>Go to Workstations</CardLink>

          <UpdateProjectModal id= {props.id}/>

          <CardButton onClick={() => 
            dispatch(removeProject({id: props.id}))} type="button">
            Delete Project
          </CardButton>
        </CardFieldset>
      </CardBody>
    </CardWrapper>   
  );
}
