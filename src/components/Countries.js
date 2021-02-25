import React,{Component} from 'react'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'

class Countries extends Component{

    renderList(){

        const list = ["AF", "AL", "DZ", "AO", "AR", "AM", "AU", "AT", "AZ", "BS", "BD", "BY", "BE", "BZ", "BJ",
                 "BT", "BO", "BA", "BW", "BR", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CF", "TD", "CL", 
                 "CN", "CO", "CG", "CD", "CR", "CI", "HR", "CU", "CY", "CZ", "DK", "DJ", "DO", "EC", "EG", 
                 "SV", "GQ", "ER", "EE", "ET", "FK", "FJ", "FI", "FR", "GF", "TF", "GA", "GM", "GE", "DE", 
                 "GH", "GR", "GL", "GT", "GN", "GW", "GY", "HT", "HN", "HU", "IS", "IN", "ID", "IQ", "IE", 
                 "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", 
                 "LR", "LY", "LT", "LU", "MK", "MG", "MW", "MY", "ML", "MR", "MX", "MD", "MN", "ME", "MA",
                 "MZ", "MM", "NA", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NO", "OM", "PK", "PS", "PA",
                 "PG", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RO", "RW", "SA", "SN", "RS", "SL",
                 "SK", "SI", "SB", "SO", "ZA", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY",
                 "TW", "TJ", "TZ", "TH", "TL", "TG", "TT", "TN", "TR", "TM", "UG", "UA", "GB", "US", "UY",
                 "UZ", "VU", "VE", "EH", "YE", "ZM", "ZW", "SG", "HK", "CD", "IR", "KP", "RU",
                 "AE", "VN"]

        return(
            list.map((country,index) => {
                const icon = `${country.toLowerCase()} flag`
                const statsLink = `/countries/stats/${country}`
                const timelineLink = `/countries/timeline/${country}`
                return(
                    <div key={index} className="item">  
                            <div className="ui celled horizontal list">
                                <div style={{width:"28vw"}} className="item">    
                                <i className={icon}></i> 
                                            {country}
                            </div>
                            <Link  to={statsLink} style={{width:"28vw"}} className="item">Country Status</Link>
                            <Link to={timelineLink} style={{width:"28vw"}} className="item">Country Timeline</Link>
                        </div>
                    </div>
                )
            })
        )
    }

    render(){
            return(
                <div>
                    <Sidebar/>
                    <div className="pusher">
                        <div className="ui placeholder segment" style={{marginRight:"150px",height:"auto"}}>
                            <div className="ui icon header">
                                <i className="flag outline icon"></i>
                                List Of Countries
                            </div>
                            <div className="ui middle aligned divided list">  
                                <div className='item'></div>       
                               {this.renderList()}
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        
    }
}

export default Countries