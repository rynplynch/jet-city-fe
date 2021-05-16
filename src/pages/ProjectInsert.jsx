import React, { Component } from 'react'
import api from '../api/index'

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

class ProjectInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            client_id: this.props.match.params.id,
            name: '',
            startTime: '',
            endTime: '',
            address: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputStartTime = async event => {
        const startTime = event.target.value
        this.setState({ startTime })
    }

    handleChangeInputEndTime = async event => {
        const endTime = event.target.value
        this.setState({ endTime })
    }

    handleChangeInputAddress = async event => {
        const address = event.target.value
        this.setState({ address })
    }

    handleUpdateProject = async () => {
        const client_id = this.props.match.params.id
        const { name, startTime, endTime, address } = this.state
        console.log(client_id)
        const payload = { name, startTime, endTime, address, client_id }

        await api.createProject(payload).then(res => {
            window.alert(`Project created successfully`)
            this.setState({
                name: '',
                startTime: '',
                endTime: '',
                address: '',
                client_id: '',
            })
        })
    }

    render() {
        const { name, startTime, endTime, address } = this.state
        return (
            <Wrapper>
                <Title>Create Project</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Start Time: </Label>
                <InputText
                    type="text"
                    value={startTime}
                    onChange={this.handleChangeInputStartTime}
                />

                <Label>End Time: </Label>
                <InputText
                    type="text"
                    value={endTime}
                    onChange={this.handleChangeInputEndTime}
                />

                <Label>Address: </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />
                <Button onClick={this.handleUpdateProject}>Create Project</Button>
                <CancelButton href={'/client/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProjectInsert