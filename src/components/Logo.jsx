import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href='jet-city-logo.png'>
                <img src={logo} width="50" height="50" alt="jet city I.T. logo" />
            </Wrapper>
        )
    }
}

export default Logo