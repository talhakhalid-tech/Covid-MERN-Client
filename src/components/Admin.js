import React,{Component} from 'react'
import pic from '../assets/aron-visuals-bZZp1PmHI0E-unsplash.jpg'
import {connect} from 'react-redux'
import {fetchUser, updateUser,deleteUser} from '../actions/index'
import AdminForm from './forms/AdminForm'
import _ from 'lodash'
import Sidebar from './Sidebar'

class Admin extends Component{

    componentDidMount(){
        this.props.fetchUser(localStorage.getItem('token'))
    }

    onFormSubmit = (formValues) =>{
        this.props.updateUser(formValues,localStorage.getItem('token'))
        alert('Profile Updated Successfully!!!')
        window.location.reload(true)
    }

    onButtonClick = () =>{
        this.props.deleteUser(localStorage.getItem('token'))
    }

    renderProfile = () =>{
        if(this.props.user[0]){
            return (
                <div className="ui placeholder segment" style={{marginRight:"150px",height:'100vh'}}>
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider"></div>
                        <div className="middle aligned row">
                        <div className="column">
                        <div className="ui icon header">
                                <img alt="Avatar" src={pic} style={{height:"300px",width:"300px",borderRadius:"100%"}} /><br/>
                                <p style={{marginTop:"30px",fontSize:"30px"}}>User's Avatar</p>
                        </div>
                        </div>
                        <div className="column">
                                    <AdminForm 
                                        initialValues={_.pick(this.props.user[0],'name','email','age')}
                                        onSubmit={this.onFormSubmit}
                                            />
                                    <div className="item" style={{marginTop:'10px'}}>
                                        <button onClick={this.onButtonClick} className="ui fluid negative button">Delete Profile</button>
                                    </div>
                        </div>
                        </div>
                    </div>
                    </div>
            )
        }
        return <div></div>
    }

    render(){
        return(
            <div> 
                <Sidebar/>
                <div className=" pusher">
                    {this.renderProfile()}
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) =>{
    return {user: Object.values(state.users)}
}

export default connect(mapStateToProp,{fetchUser: fetchUser,updateUser: updateUser,deleteUser: deleteUser})(Admin)