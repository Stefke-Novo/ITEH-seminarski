import React from 'react'
import "./CategoryCard.css"
import {Link} from "react-router-dom"
function CategoryCard({slug,name,description}) {
    return (
        <div className='categoryCard'>
            <div className='categoryBox'>
                <div className='categoryImgBx'>
                    <img src="" alt="" />
                </div>
                <div className='categoryContentBx'>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <button >
                            <Link to={`${slug}`}>Detaljnije</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
