import React from 'react'
import { useDispatch } from 'react-redux'
import { updateProject } from '../../store/projects';
import { ModalContainer } from './ModalContainer';

export default function UpdateProjectModal(props) {
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(updateProject({
            id: props.id,
            name: event.target.name.value
        }))
    }

    return (
        <ModalContainer triggerText='Update Project' onSubmit ={ onSubmit }/>
    )
}