import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Add = styled.div`
    color: #ef9b09;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateClient extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/client/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteClient extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the client ${this.props.id} permanently?`,
            )
        ) {
            api.deleteClientById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class AddProject extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/project/create/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Add Project</Add>
    }
}

class ListProjects extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/project/list/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Show Projects</Add>
    }
}

class ClientList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllClients().then(clients => {
            this.setState({
                clients: clients.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { clients, isLoading } = this.state
        console.log('TCL: ClientsList -> render -> clients', clients)

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <ListProjects id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <AddProject id={props.original._id} />
                        </span>
                    )
                },
            },            
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteClient id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateClient id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!clients.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={clients}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ClientList