import React,{Component} from 'react'
import '../stylings/main.css'
import {connect} from 'react-redux'
import {fetchUser,loginUser} from '../actions/index'
import LoginForm from './forms/LoginForm'

class Main extends Component{

    onFormSubmit = async (formValues) =>{
        await this.props.loginUser(formValues)
        this.props.fetchUser(localStorage.getItem('token'))
    }

    render(){
        return(
            <div className="main ui grid">
                <div className="ui middle aligned center aligned grid four column wide">
                    <div className="column">
                        <h2 className="ui teal image header">
                        <div style={{textShadow: '5px 5px  10px teal'}} className="content">
                            Log-in to your account
                        </div>
                        </h2>
                        <LoginForm onSubmit={this.onFormSubmit}/>
                        <div className="ui message">
                        New to us ? <a style={{color:'teal',textShadow: '3px 3px  10px teal'}} href="/Register">Register</a>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {token: state.users.token}
}

export default connect(mapStateToProps,{fetchUser: fetchUser,loginUser:loginUser})(Main)