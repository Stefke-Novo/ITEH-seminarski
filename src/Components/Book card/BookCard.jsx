import React from 'react'
import "./BookCard.css"
import {Link} from "react-router-dom"
function BookCard({name,description,slug,image,url}) {
    return (
        <div className='bookCard'>
            <div className='bookBox'>
                <div className='bookImgBx'>
                    <img src={`http://localhost:8000/${image}`} alt="" />
                </div>
                <div className='bookContentBx'>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <button><Link to={`${url}/${slug}`}>Detaljnije</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
