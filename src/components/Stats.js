import React,{Component} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import {Line} from 'react-chartjs-2'

class Stats extends Component{

    state={data: 0,title:''}

    componentDidMount(){
        this.renderStat()
    }

    renderStat = async ()=>{
       const response =  await axios.get('http://localhost:5000/countries/stats/'+this.props.match.params.FL)
       this.setState({title: response.data[0].info.title})
       delete response.data[0].info
       this.setState({data: response.data[0]})
       console.log(this.state.data,this.state.title)
    }

    renderChart = (data) => {
        return  (
                 <div style={{height:'100vh',width:'88vw'}} >
                     < Line data = {data} /> 
                 </div>
                 )
     }

    render(){
        if(this.state.data){
            return(
                <div> 
                    <Sidebar/>
                        <div className="pusher">
                            {this.renderChart({
                                labels: Object.keys(this.state.data),
                                datasets: [{
                                label: `${this.state.title} Corona Virus Cases Stats`,
                                borderColor: 'grey',
                                data: Object.values(this.state.data),
                                }],
                                options:{
                                    maintainAspectRatio: false
                                },
                                height:500,
                                width:700
                            })}
                        </div>
                    </div>
            )
        }
        return(
            <div></div>
        )
    }
}

export default Stats