import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/client/list" className="nav-link">
                                List Clients
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/client/create" className="nav-link">
                                Create Client
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links