import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import _ from 'lodash'

class RegisterForm extends Component{

    renderField = ({input,icon,type,placeholder}) =>{
        return(
            <div className="field">
                <div className="ui left icon input">
                    <i className={icon}></i>
                    <input {...input} type={type} placeholder={placeholder} autoComplete="off" required/>
                </div>
            </div>
        )
    }

    onFormSubmit = (formValues) =>{
        if(formValues.password === formValues.Cpassword){
            this.props.onSubmit(_.pick(formValues,'name','password','email','age'))
        } else {
            alert("Both password must match!!!")
        }
    }

    render(){
        return(
            <form className="ui large form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field name="name" type='text' icon="user circle icon" placeholder="UserName" component={this.renderField}/>
                <Field name="email" type='text' icon="user icon" placeholder="Email Address" component={this.renderField}/>
                <Field name="password" type='password' icon="lock icon" placeholder="Password" component={this.renderField}/>
                <Field name="Cpassword" type='password' icon="lock icon" placeholder="Confirm Password" component={this.renderField}/>
                <Field name="age" type='number' icon="calendar outline icon" placeholder="Age" component={this.renderField}/>
                <button className="ui fluid large grey submit button">Sign Up</button>
                <div className="ui error message">               
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'RegisterForm'
})(RegisterForm)


