import React, { Component } from 'react'
import { logIn } from '../services/auth'

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            isError: false,
            errorMsg: ''
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isError: false,
            errorMsg: ''
        })
    }

    onSignIn = (event) => {
        event.preventDefault()

        const { history, setUser } = this.props
        logIn(this.state)
            .then(res => setUser(res.user))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({
                    isError: true,
                    errorMsg:'Invalid Credentials',
                    userName: '',
                    password: ''
                })
            })

    }

    renderError = () => {
        const toggleForm = this.state.isError ? 'danger' : ''
        if(this.state.isError) {
            return (
                <button type='submit' className={toggleForm}>
                    {this.state.errorMsg}
                </button>
            )
        } else {
            return <button type='submit' className='login-button'>Sign In</button>
        }
    }

    render() {
        const { userName, password } = this.state

        return (
        
            <div className='row'>
                <div className='form-container' id='login'>
                    <div className='sign-in'>
                        <h2 className='signInTitle'>SIGN IN</h2>
                    </div>

                    <form className='placeholder-login' onSubmit={this.onSignIn}>
                        <label>Username</label>
                        <input
                            required
                            type='text'
                            name='userName'
                            value={userName}
                            placeholder='Enter Username'
                            onChange={this.handleChange}
                        />
                        <label>Password</label>
                        <input
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Enter Password'
                            onChange={this.handleChange}
                        />
                        {this.renderError()}
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn
