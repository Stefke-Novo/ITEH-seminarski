import React, { Component } from 'react'
import "./Collection.css"
import axios from "axios"
import { Link, Switch,Route } from 'react-router-dom'
import Category from '../../Components/Category/Category'
class Collection extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8000/api/show-genre").then((res)=>{
            this.setState({data:res.data.genre});
        });
    }
    render(){
    return (
        <>
        <div>
            <h1>Colleciton</h1>
            <div>
                {this.state.data.map((data)=>(
                    <div key={data.id}>
                        <h1><Link to={`/collection/${data.slug}`}>{data.name}</Link></h1>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
                <Route path="/collection/:slug">
                    <Category categories={this.state.data} path={"/collection"}/>
                </Route>
        </div>
        </>
    )
    }
}

export default Collection
