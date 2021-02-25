import React,{Component} from 'react'
import '../stylings/main.css'
import RegisterForm from './forms/RegisterForm'
import {createUser} from '../actions/index'
import {connect} from 'react-redux'

class Register extends Component{

    onFormSubmit = (formValues) =>{
        this.props.createUser(formValues)
    }

    render(){
        return(
            <div className="main ui grid">
                <div className="ui middle aligned center aligned grid four column wide">
                    <div className="column">
                        <h2 className="ui grey image header">
                        <div style={{textShadow: '5px 5px  10px grey'}} className="content">
                            Sign up to Account
                        </div>
                        </h2>
                            <RegisterForm onSubmit={this.onFormSubmit}/>
                        <div className="ui message">
                            Already Have Account? <a style={{color:'grey',textShadow: '2px 2px  10px grey'}} href="/">Login</a>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default connect(null,{createUser: createUser})(Register)