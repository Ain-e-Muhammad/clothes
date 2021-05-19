import React, { Component } from 'react';
import './signin.styles.scss'
import FormInput from '../form-input/forminput.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {toggleLogin} from '../../redux/login/login.actions'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const{email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'', password:''})
            this.props.toggleLogin()
            this.props.history.push('/shop')
        }catch(err){
            console.log(err)
        }

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
                    <FormInput label="Email" name= 'email' type ='email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput label="Password" name="password" type ="password" value={this.state.password} handleChange={this.handleChange} required />
                
                    <CustomButton type="submit">
                        SIGN IN
                    </CustomButton>

                    <CustomButton onClick={signInWithGoogle}>
                        SIGN IN WITH GOOGLE
                    </CustomButton>
                </form>
            </div>
         );
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleLogin: () => dispatch(toggleLogin())
})
 
export default connect(null, mapDispatchToProps)(SignIn);