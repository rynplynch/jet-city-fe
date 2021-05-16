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

class WorkstationUpdate extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            name: '',
            origin: '',
            destination: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputOrigin = async event => {
        const origin = event.target.value
        this.setState({ origin })
    }

    handleChangeInputDestination = async event => {
        const destination = event.target.value
        this.setState({ destination })
    }

    handleUpdateWorkstation = async () => {
        const { id, name, origin, destination} = this.state
        const payload = { name, origin, destination }
        console.log(id)
        await api.updateWorkstationById(id, payload).then(res => {
            window.alert(`Workstation updated successfully`)
            this.setState({
                name: '',
                origin: '',
                destination: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const workstation = await api.getWorkstationById(id)
        this.setState({
            name: workstation.data.data.name,
            origin: workstation.data.data.origin,
            destination: workstation.data.data.destination,
        })
    }

    render() {
        const { name, origin, destination } = this.state
        return (
            <Wrapper>
                <Title>Update Workstation</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Origin: </Label>
                <InputText
                    type="text"
                    value={origin}
                    onChange={this.handleChangeInputOrigin}
                />
                <Label>Destination: </Label>
                <InputText
                    type="text"
                    value={destination}
                    onChange={this.handleChangeInputDestination}
                />

                <Button onClick={this.handleUpdateWorkstation}>Update Workstation</Button>
                <CancelButton href={'/client/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default WorkstationUpdate