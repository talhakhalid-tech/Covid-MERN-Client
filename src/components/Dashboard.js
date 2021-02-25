import React,{Component} from 'react'
import Sidebar from './Sidebar'
import {Line} from 'react-chartjs-2';
import axios from 'axios'


class Dashboard extends Component{

    state = {data: 0}

    renderChart = (data) => {
       return  (
                <div style={{height:'100vh',width:'88vw'}} >
                    < Line data = {data} /> 
                </div>
                )
    }

    componentDidMount(){
        this.getData()
    }

    getData = async () =>{
        try{
            const response = await axios.get('http://localhost:5000/corona/global/stats')
            delete response.data[0].source
            this.setState({data: response.data})
        }catch(e){
            console.log(e)
        }
    }

    render(){
        if(this.state.data){
            return(
                <div> 
                    <Sidebar/>
                    <div className="pusher">
                        {this.renderChart({
                            labels: Object.keys(this.state.data[0]),
                            datasets: [{
                            label: "Global Corona Virus Cases Stats",
                            borderColor: 'grey',
                            data: Object.values(this.state.data[0]),
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

export default Dashboard