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

class WorkstationInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project_id: this.props.match.params.id,
            name: '',
            origin: '',
            destination: '',
            comments: '',
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

    handleChangeInputComments = async event => {
        const comments = event.target.value
        this.setState({ comments })
    }

    handleUpdateWorkstation = async () => {
        const project_id = this.props.match.params.id
        const { name, origin, destination, comments } = this.state
        const payload = { name, origin, destination, comments, project_id }

        await api.createWorkstation(payload).then(res => {
            window.alert(`Workstation created successfully`)
            this.setState({
                project_id: this.props.match.params.id,
                name: '',
                origin: '',
                destination: '',
                comments:'',
            })
        })
    }

    render() {
        const { name, origin, destination, comments } = this.state
        return (
            <Wrapper>
                <Title>Create Workstation</Title>

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
                <Label>Comments: </Label>
                <InputText
                    type="text"
                    value={comments}
                    onChange={this.handleChangeInputComments}
                />

                <Button onClick={this.handleUpdateWorkstation}>Create Workstation</Button>
                <CancelButton href={'/client/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default WorkstationInsert