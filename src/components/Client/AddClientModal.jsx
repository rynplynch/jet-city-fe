import React from 'react'
import { useDispatch } from 'react-redux'
import { addClient } from '../../store/clients';
import {ModalContainer} from './ModalContainer';
import moment from 'moment'

export default function AddClientModal() {
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addClient({
            name: event.target.name.value
        }))
    }

    return (
        <ModalContainer triggerText='Add Client' onSubmit ={ onSubmit }/>
    )
}