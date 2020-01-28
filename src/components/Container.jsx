import React, { Component } from 'react'
import Routes from '../routes'
import Header from '../screens/Header'


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    //methods
    setUser = user => this.setState({ user })
    clearUser = () => this.setState({ user: null })

    render() {
        const { user} = this.state
        return (
            <>
                <Header user={user} />
                <main className='container'>
                    <Routes
                        user={user}
                        setUser={this.setUser}
                        clearUser={this.clearUser}
                    />
                </main>
            </>
        )
    }

    
}

