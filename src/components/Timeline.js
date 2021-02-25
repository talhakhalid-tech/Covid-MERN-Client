import React,{Component} from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import {Line} from 'react-chartjs-2'

class Timeline extends Component{
    state={data: 0,title:'',chart: 'NDC'}

    componentDidMount(){
        this.renderStat()
    }

    renderStat = async ()=>{
       const response =  await axios.get('http://localhost:5000/countries/timeline/'+this.props.match.params.FL)
       this.setState({title: response.data.countrytimelinedata[0].info.title})
       delete response.data.countrytimelinedata
       delete response.data.timelineitems[0].stat
       this.setState({data: response.data.timelineitems[0]})
    }

    renderChart = (data) => {
        return (
                <div style={{height:'100vh',width:'88vw'}} >
                     < Line data = {data} /> 
                 </div>
                 )
    }

    datasets = (Arr) =>{
        const new_daily_cases = Arr.map(element => {
            return element.new_daily_cases
        })
        const new_daily_deaths = Arr.map(element => {
            return element.new_daily_deaths
        })
        const total_cases = Arr.map(element => {
            return element.total_cases
        })
        const total_recoveries = Arr.map(element => {
            return element.total_recoveries
        })
        const total_deaths = Arr.map(element => {
            return element.total_deaths
        })

        return{new_daily_cases,new_daily_deaths,total_cases,total_recoveries,total_deaths}

    }

    onNDCclick = () =>{
        this.setState({chart: 'NDC'})
    }
    
    onNDDclick = () =>{
        this.setState({chart: 'NDD'})
    }

    onTCclick = () => {
        this.setState({chart: 'TC'})
    }

    onTRclick = () => {
        this.setState({chart: 'TR'})
    }

    onTDclick = () => {
        this.setState({chart: 'TD'})
    }

    renderSidebar = () =>{
        return(
            <div className="ui  visible thin bottom sidebar menu">
                <button onClick={this.onNDCclick} style={{borderWidth: '0',width:'20vw'}}  className="item">
                    <i className="chart line icon"></i>
                    New Daily Cases Timeline
                </button>
                <button onClick={this.onNDDclick} style={{borderWidth: '0',width:'20vw'}}  className="item">
                    <i className="chart line icon"></i>
                    New Daily Deaths Timeline
                </button>
                <button onClick={this.onTCclick} style={{borderWidth: '0',width:'20vw'}}  className="item">
                    <i className="chart line icon"></i>
                    Total Cases Timeline
                </button>
                <button onClick={this.onTRclick} style={{borderWidth: '0',width:'20vw'}}  className="item">
                    <i className="chart line icon"></i>
                    Total Recoveries Timeline
                </button>
                <button onClick={this.onTDclick} style={{borderWidth: '0',width:'20vw'}}  className="item">
                    <i className="chart line icon"></i>
                    Total Deaths Timeline
                </button>
            </div>
        )
    }

    renderGraph = (Data,text) => {
        return(
            <div> 
                <Sidebar/>
                    <div className="pusher">
                        {this.renderChart({
                            labels: Object.keys(this.state.data),
                            datasets: [{
                            label: `${this.state.title} Corona Virus ${text} Timeline`,
                            borderColor: 'grey',
                            data: Data
                            }],
                            options:{
                                maintainAspectRatio: false
                            },
                            height:500,
                            width:700
                        })}
                    </div>
                    {this.renderSidebar()}
            </div>
        )
    }

    render(){
        if(this.state.data){
            const Arr = Object.values(this.state.data)
            const Data = this.datasets(Arr)
            if(this.state.chart === 'NDC'){
                return this.renderGraph(Data.new_daily_cases,'New Daily Cases')
            } else if(this.state.chart === 'NDD'){
                return this.renderGraph(Data.new_daily_deaths,'New Daily Deaths')
            } else if(this.state.chart === 'TC'){
                return this.renderGraph(Data.total_cases,'Total Cases')
            }else if(this.state.chart === 'TR'){
                return this.renderGraph(Data.total_recoveries,'Total Recoveries')
            }else if(this.state.chart === 'TD'){
                return this.renderGraph(Data.total_deaths,'Total Deaths')
            }
        }
        return(
            <div></div>
        )
    }
}

export default Timeline