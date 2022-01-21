import React,{useEffect,useState} from 'react'
import "./Category.css"
import {useRouteMatch,Link, Route} from "react-router-dom"
import axios from "axios"
import BookCard from '../Book card/BookCard';
import Book from '../../Pages/Book/Book';
function Category({path}) {
    const [titles,setTitles]=useState([]);
    const [category,setCategory]=useState({});
    let route = useRouteMatch();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/get-title/${route.params.slug}`).then(
        (res)=>{setTitles(res.data.title_data.title);
        setCategory(res.data.title_data.genre);    
    });
    }, []);
    return (
        <div className='category'>
            <p>{category.name}</p>
            <div id='bookList'>
                {titles.map((title)=>(
                    <BookCard key={title.id} name={title.name} description={title.description} slug={title.slug} image={title.image} url={route.url}/>
                ))}
            </div>
            <Link to={`${path}`}>Back</Link>
            <Route path="/collection/:slug/:slug" component={Book}>
            </Route>
        </div>
    )
}

export default Category
