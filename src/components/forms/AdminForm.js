import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import _ from 'lodash'

class AdminForm extends Component{

    renderField = ({input,icon,type,placeholder}) =>{
        return(<div className="item">
            <div className="content">
                <div  className="header">
                    <i className={icon}></i>
                        <div className="ui icon input">
                            <input {...input} type={type} placeholder={placeholder} autoComplete="off"/>
                            <i className="ui pencil link icon" ></i>
                        </div>
                </div>
            </div>
        </div>
        )
    }

    onFormSubmit = (formValues) =>{
        if(formValues.password){
            if(formValues.password === formValues.Cpassword){
                this.props.onSubmit(_.pick(formValues,'name','email','password','age'))
            } else {
                alert('Both Password must Match!!!')
            }
        } else {
            this.props.onSubmit(formValues)
        }
    }

    render(){
        return(
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <div className="ui items">
                    <div className="item" style={{marginBottom:"30px"}}>
                        <div className="content">
                            <div className="header">
                                <p style={{fontSize:"30px"}}>User's Profile Information</p>
                            </div>
                        </div>
                    </div>
                    <Field name='name' component={this.renderField} icon="big user circle icon" type="text" placeholder="name"/>
                    <Field name='email' component={this.renderField} icon="big user icon" type="text" placeholder="Email Address"/>
                    <Field name='password' component={this.renderField} icon="big lock circle icon" type="password" placeholder="New Password"/>
                    <Field name='Cpassword' component={this.renderField} icon="big lock circle icon" type="password" placeholder="Confirm New Password"/>
                    <Field name='age' component={this.renderField} icon="big calendar outline icon" type="number" placeholder="Age"/>
                    <div className="item">
                        <button className="ui fluid black button">Save Changes</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'AdminForm'
})(AdminForm)