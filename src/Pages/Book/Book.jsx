import React,{useState,useEffect} from 'react';
import "./Book.css";
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory,Link} from "react-router-dom"
function Book({match}) {
  const history=useHistory();
    const [loading,setLoading]=useState(true);
    const [title,settitle]=useState([]);
    const [genre,setGenre]=useState([]);

    const titleCount=title.length;

    useEffect(()=>{
        const title_slug=match.params.slug;
        console.log(match.params.slug);
        console.log("title_slug: "+title_slug);
        axios.get(`http://localhost:8000/api/get-title/${title_slug}`).then(res=>{
          console.log("res.data: "+res.data);
            if(res.data.status===200){
                settitle(res.data.title_data.title);
                setGenre(res.data.title_data.genre);
                setLoading(false);
                console.log("res: "+res);
            }
            else if(res.data.status===400){
                swal("Warning",res.data.message,"error");
            }
            else if(res.data.status===404){
                history.push('/collections');
                swal("Warning",res.data.message,"error");
            }
        });
    },[match.params.slug,history]);
    if(loading){
        return(<h4>Loading genres...</h4>)
    }else{
        var showtitleList='';
        if(titleCount){
        showtitleList=title.map((item,idx)=>{
            return(
            <div className="col-md-3" key={idx}>
                <div className="card">
                    <Link to={`/collections/${item.genre.slug}/${item.slug}`}>
                        <img src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.name}></img>
                    </Link>
                    <div className="card-body">
                        <Link to={`/collections/${item.genre.slug}/${item.slug}`}>
                    <h5 className='text-dark'>{item.name}</h5>
                    </Link>
                    </div>
                </div>
            </div>
            )
        });
        }else{
            <div className="col-md-12">
                <h4>No Titles for {genre.name}</h4>
            </div>
        }
      }
  return (
  <div id='bookPage'>
      <h1>Book</h1>
      <Link to={`${match.url}`}>Back
      </Link>
  </div>
  );
}

export default Book;
