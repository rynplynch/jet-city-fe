import React from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../store/clients';
import {ModalContainer} from './ModalContainer';

export default function UpdateClientModal(props) {
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(updateClient({
            id: props.id,
            name: event.target.name.value
        }))
    }

    return (
        <ModalContainer triggerText='Update Client' onSubmit ={ onSubmit }/>
    )
}