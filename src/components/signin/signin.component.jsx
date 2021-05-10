import React, { Component } from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/forminput.component'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange= (event) => {
        const{value, name} = event.target
        this.setState({[name]: value})
    }

    render() { 
        return ( 
            <div className = "sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name= 'email' type ='email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput label="password" name="password" type ="password" value={this.state.password} handleChange={this.handleChange} required />
                
                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
         );
    }
}
 
export default SignIn;