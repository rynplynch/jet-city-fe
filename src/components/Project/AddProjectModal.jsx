import React from 'react'
import { useDispatch } from 'react-redux'
import {ModalContainer} from './ModalContainer';
import moment from 'moment'
import { addProject } from '../../store/projects';
import {useParams} from 'react-router-dom'

export default function AddProjectModal() {
    const dispatch = useDispatch();
    const client_id = useParams().id

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addProject({
            name: event.target.name.value,
            client_id: client_id
        }))
    }

    return (
        <ModalContainer triggerText='Add Project' onSubmit ={ onSubmit }/>
    )
}