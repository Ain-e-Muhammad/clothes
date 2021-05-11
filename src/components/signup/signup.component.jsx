import React, {Component} from 'react'

import FormInput from '../form-input/forminput.component'
import CustomButton from '../custom-button/custom-button.component'
import './signup.styles.scss'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

class signup extends Component {
    constructor(){
        super()
        this.state={
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit= async(event) =>{
        event.preventDefault()
        const{displayName,email,password,confirmPassword}= this.state
        if(password !== confirmPassword){
            alert("Passwords dont match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                    displayName:'',
                    email: '',
                    password:'',
                    confirmPassword:''
            })
        }catch(err){
            console.log(err)
        }
    }

    handleChange = (event) =>{
        const{name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() { 
        const{displayName,email,password,confirmPassword}= this.state
        return ( 
            <div className = "sign-ip">
                <h1>I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form  className = "sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" name= 'displayName' type ='text' handleChange={this.handleChange} value={displayName} required />    
                    <FormInput label="Email" name= 'email' type ='email' handleChange={this.handleChange} value={email} required />
                    <FormInput label="Password" name="password" type ="password" value={password} handleChange={this.handleChange} required />
                    <FormInput label="Confirm Password" name="confirmPassword" type ="password" value={confirmPassword} handleChange={this.handleChange} required />
                    
                    <CustomButton type="submit">
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        );
    }
}
 
export default signup;