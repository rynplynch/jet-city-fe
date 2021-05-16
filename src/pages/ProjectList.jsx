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

class UpdateProject extends Component {
    updateUser = event => {
        event.preventDefault()
        console.log(this.props.id)
        window.location.href = `/project/update/${this.props.id}`
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
                `Do you want to delete the project ${this.props.id} permanently?`,
            )
        ) {
            api.deleteProjectById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class AddWorkstation extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/workstation/create/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Add Workstation</Add>
    }
}
class ListWorkstations extends Component{
    addUser = event => {
        event.preventDefault()
        window.location.href = `/workstation/list/${this.props.id}`
    }

    render(){
        return <Add onClick={this.addUser}>Show Workstations</Add>
    }
}
class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getProjectsByClient(this.props.match.params.id).then(projects => {
            this.setState({
                projects: projects.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { projects, isLoading } = this.state
        console.log('TCL: ProjectsList -> render -> projects', projects)
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Start Time',
                accessor: 'startTime',
            },
            {
                Header: 'End Time',
                accessor: 'endTime',
            },
            {
                Header: 'Address',
                accessor: 'address',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(projects) {
                    return (
                        <span>
                            <ListWorkstations id={projects.original._id} />
                        </span>
                    )
                },
            }, 
            {
                Header: '',
                accessor: '',
                Cell: function(projects) {
                    return (
                        <span>
                            <AddWorkstation id={projects.original._id} />
                        </span>
                    )
                },
            },            
            {
                Header: '',
                accessor: '',
                Cell: function(projects) {
                    return (
                        <UpdateProject id={projects.original._id} />
                    )
                },
            },
            {
                Header: ``,
                accessor: '',
                Cell: function(projects) {
                    return (
                        <DeleteClient id={projects.original._id} />
                    )
                },
            },
        ]

        let showTable = true
        if (!projects.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={projects}
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

export default ProjectList