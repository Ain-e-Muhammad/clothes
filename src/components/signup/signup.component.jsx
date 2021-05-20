import React, {useState} from 'react'

import FormInput from '../form-input/forminput.component'
import CustomButton from '../custom-button/custom-button.component'
import './signup.styles.scss'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName:'',
        email: '',
        password:'',
        confirmPassword:''
    })

    const{displayName,email,password,confirmPassword}= userCredentials
        

    const handleSubmit= async(event) =>{
        event.preventDefault()
        if(password !== confirmPassword){
            alert("Passwords dont match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})
            setUserCredentials({
                    displayName:'',
                    email: '',
                    password:'',
                    confirmPassword:''
            })
        }catch(err){
            console.log(err)
        }
    }

    const handleChange = (event) =>{
        const{name,value} = event.target
        setUserCredentials({
            ...userCredentials,
            [name]: value
        })
    }

    return ( 
        <div className = "sign-ip">
            <h1>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form  className = "sign-up-form" onSubmit={handleSubmit}>
                <FormInput label="Display Name" name= 'displayName' type ='text' handleChange={handleChange} value={displayName} required />    
                <FormInput label="Email" name= 'email' type ='email' handleChange={handleChange} value={email} required />
                <FormInput label="Password" name="password" type ="password" value={password} handleChange={handleChange} required />
                <FormInput label="Confirm Password" name="confirmPassword" type ="password" value={confirmPassword} handleChange={handleChange} required />
                
                <CustomButton type="submit">
                    SIGN UP
                </CustomButton>
            </form>
        </div>
    );

}
 
export default SignUp;