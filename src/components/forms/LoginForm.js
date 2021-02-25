import React,{Component} from 'react'
import {reduxForm,Field} from 'redux-form'

class LoginForm extends Component{

    renderField = ({input,icon,placeholder,type}) => {
        return(
            <div className="field">
                    <div className="ui left icon input">
                            <i className={icon}></i>
                        <input {...input} type={type} placeholder={placeholder} autoComplete="off" required/>
                    </div>
            </div>
        )
    }

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render(){
        return(
            <form className="ui large form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name='email' component={this.renderField} icon="user icon" type="text" placeholder="E-mail address" />
                <Field name='password' component={this.renderField} icon="lock icon" type="password" placeholder="Password" />
                <button className="ui fluid large teal submit button">Login</button>
                <div className="ui error message">

                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(LoginForm)