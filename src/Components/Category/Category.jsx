import React from 'react'
import "./Category.css"
import {useRouteMatch,Link,Route} from "react-router-dom"
function Category({categories,path}) {
    //let {path,url}=useRouteMatch();
    //var category=categories.filter(category=>category.slug===match.patams.slug);
    let route = useRouteMatch();
    console.log(categories);
    console.log(route);
    let category=categories.filter(category=>category.slug===route.params.slug);
    console.log(category);
    console.log(path);
    //console.log(category);
    return (
        <div className='category'>
            <h1>{category[0].name} </h1>
            <p>{category[0].description}</p>
            <Link to={`${path}`}>Back</Link>
        </div>
    )
}

export default Category
