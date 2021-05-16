import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ClientUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleUpdateClient = async () => {
        const { id, name } = this.state
        const payload = { name }

        await api.updateClientById(id, payload).then(res => {
            window.alert(`Client updated successfully`)
            this.setState({
                name: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const client = await api.getClientById(id)

        this.setState({
            name: client.data.data.name
        })
    }

    render() {
        const { name } = this.state
        return (
            <Wrapper>
                <Title>Create Client</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Button onClick={this.handleUpdateClient}>Update Client</Button>
                <CancelButton href={'/client/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ClientUpdate