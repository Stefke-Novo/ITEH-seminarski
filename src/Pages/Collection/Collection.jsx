import React, { Component } from 'react'
import "./Collection.css"
import axios from "axios"
import { Link, Switch,Route } from 'react-router-dom'
import Category from '../../Components/Category/Category'
import CategoryCard from '../../Components/Category card/CategoryCard'
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
        <div id='collectionPage'>
            <h1>Colleciton</h1>
            <div id='categoryList'>
                {this.state.data.map((data)=>(
                    <CategoryCard key={data.id} slug={`/collection/${data.slug}`} name={data.name} description={data.description}/>
                ))}
            </div>
                <Route path="/collection/:slug">
                    <Category path={"/collection"}/>
                </Route>
        </div>
        </>
    )
    }
}

export default Collection
