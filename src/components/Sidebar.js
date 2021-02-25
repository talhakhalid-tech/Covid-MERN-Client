import React,{Component} from 'react'
import pic from '../assets/aron-visuals-bZZp1PmHI0E-unsplash.jpg'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/index'

class Sidebar extends Component{

    componentDidMount(){
        this.props.fetchUser(localStorage.getItem('token'))
    }

    onLogoutClick = () =>{
        localStorage.removeItem('token')
    }
    render(){
        if(this.props.user[0]){
         return(
            <div className="ui labeled icon visible thin inverted left vertical sidebar menu">
                    <a href="/admin" className="item">
                        <img alt="me" src={pic} style={{borderRadius:'100%', height:"85px",width:"85px"}} />
                        <p style={{ textAlign:'center', marginTop:"7px"}}>{this.props.user[0].name}</p>
                    </a>
                    <a href="/dashboard" className="item">
                        <i className="chart line icon"></i>
                            Dashboard
                    </a>
                    <a href='/countries' className="item">
                        <i className="flag icon"></i>
                            Patient Stats By Countries
                    </a>
                    <a href='/' onClick={this.onLogoutClick} className="item">
                        <i className="user circle icon"></i>
                            Logout
                    </a>
            </div>
            )
        }
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{user: Object.values(state.users)}
}

export default connect(mapStateToProps,{fetchUser:fetchUser})(Sidebar)