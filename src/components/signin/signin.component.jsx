import React, { useState } from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/forminput.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {toggleLogin} from '../../redux/login/login.actions'

const SignIn = ({toggleLogin, history}) => {
    
    const[userCredentials, setCredentials] = useState({email:'', password:''})
    const{email, password} = userCredentials
    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        try{
            await auth.signInWithEmailAndPassword(email,password)
            setCredentials({email:'', password:''})
            toggleLogin()
            history.push('/shop')
        }catch(err){
            console.log(err)
        }

        setCredentials({email:'', password:''})
    }

    const handleChange= (event) => {
        const{value, name} = event.target
        setCredentials({ ...userCredentials, [name]: value})
    }

    return ( 
        <div className = "sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" name= 'email' type ='email' handleChange={handleChange} value={email} required />
                <FormInput label="Password" name="password" type ="password" value={password} handleChange={handleChange} required />
            
                <CustomButton type="submit">
                    SIGN IN
                </CustomButton>

                <CustomButton onClick={signInWithGoogle}>
                    SIGN IN WITH GOOGLE
                </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleLogin: () => dispatch(toggleLogin())
})
 
export default connect(null, mapDispatchToProps)(SignIn);