import React from 'react'
import { useDispatch } from 'react-redux'
import {ModalContainer} from './ModalContainer';
import { addWorkstation } from '../../store/workstations';
import {useParams} from 'react-router-dom'

export default function AddWorkstationModal() {
    const dispatch = useDispatch();
    const project_id = useParams().id

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addWorkstation({
            name: event.target.name.value,
            project_id: project_id
        }))
    }

    return (
        <ModalContainer triggerText='Add Workstation' onSubmit ={ onSubmit }/>
    )
}