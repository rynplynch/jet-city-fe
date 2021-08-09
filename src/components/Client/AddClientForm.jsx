import React from 'react'
import { useDispatch } from 'react-redux'
import Form from './Form'
import moment from 'moment';
import { addClient } from '../../store/clients';

export default function AddClientForm() {
    const dispatch = useDispatch();
    
    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addClient({
            name: event.target.name.value,
            startTime: moment().format('2021-07-03'),
            endTime: moment().format('2021-07-03')
        }))
    }

    return (
        <Form onSubmit={onSubmit}> </Form>
    )
}
