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

class UpdateWorkstation extends Component {
    updateUser = event => {
        event.preventDefault()
        console.log(this.props.id)
        window.location.href = `/workstation/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteWorkstation extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the workstation ${this.props.id} permanently?`,
            )
        ) {
            api.deleteWorkstationById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class AddMonitor extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/monitor/create/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Add Monitor</Add>
    }
}
class ListMonitors extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/monitor/list/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Show Monitors</Add>
    }
}
class WorkstationList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            workstations: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getWorkstationsByProject(this.props.match.params.id).then(workstations => {
            this.setState({
                workstations: workstations.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { workstations, isLoading } = this.state
        console.log('TCL: WorkstationList -> render -> workstations', workstations)
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Origin',
                accessor: 'origin',
            },
            {
                Header: 'Destination',
                accessor: 'destination',
            },
            {
                Header: 'Comments',
                accessor: 'comments',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(workstations) {
                    return (
                        <span>
                            <ListMonitors id={workstations.original._id} />
                        </span>
                    )
                },
            }, 
            {
                Header: '',
                accessor: '',
                Cell: function(workstations) {
                    return (
                        <span>
                            <AddMonitor id={workstations.original._id} />
                        </span>
                    )
                },
            },            
            {
                Header: '',
                accessor: '',
                Cell: function(workstations) {
                    return (
                        <UpdateWorkstation id={workstations.original._id} />
                    )
                },
            },
            {
                Header: ``,
                accessor: '',
                Cell: function(workstations) {
                    return (
                        <DeleteWorkstation id={workstations.original._id} />
                    )
                },
            },
        ]

        let showTable = true
        if (!workstations.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={workstations}
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

export default WorkstationList