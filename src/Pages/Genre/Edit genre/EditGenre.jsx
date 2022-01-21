import React,{useState,useEffect} from 'react';
import "./EditGenre.css"
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory,Link,useRouteMatch} from 'react-router-dom';
import "./EditGenre.css";
function EditGenre(props) {
  const history=useHistory();
    const[loading,setLoading]=useState(true);
    const[genreInput,setGenre]=useState({});
    const [error,setError]=useState([]);
    const route=useRouteMatch();
    console.log(route);

    useEffect(()=>{
      document.title='BestReads | Edit Genre';
        const genre_id=props.match.params.id;
        axios.get(`http://localhost:8000/api/edit-genre/${genre_id}`).then(res=>{
           if(res.data.status===200){
               setGenre(res.data.genre);
           }else if(res.data.status===404){
                swal("Error",res.data.message,"error");
                history.push('/admin/show-genre');
           }
           setLoading(false);
        });
},[route.params.id,history]);

    const handleInput=(e)=>{
        e.persist();
        setGenre({...genreInput,[e.target.name]: e.target.value});
    }

    const updateGenre=(e)=>{
        e.preventDefault();

        const genre_id=route.params.id;
        const data=genreInput;
        axios.put(`http://localhost:8000/api/update-genre/${genre_id}`,data).then(res=>{
            if(res.data.status===200){
                swal("Success",res.data.message,"success");
                setError([]);
                history.push('http://localhost:8000/admin/show-genre');
            }else if(res.data.status===422){
                swal("All fields must be filled","","warning");
                setError(res.data.errors);
            }else if(res.data.status===404){
                swal("Error",res.data.message,"error");
                history.push('http://localhost:8000/admin/show-genre');
            }
        });
    }

    if(loading){
        return <h4>Loading genre data...</h4>
    }


  return (
    <div className="editGenrePage">
      <form onSubmit={updateGenre} id='editGenreForm'>
        <div id='editGenreFields' >
          <h1>Edit Genre</h1>
          <div className='editGenreField' >
            <div>
              <label>Slug</label>
              <input type="text" name="slug" onChange={handleInput} value={genreInput.slug}  />
            </div>
            <span >{error.slug}</span>
          </div>
          <div className='editGenreField'>
            <div>
              <label>Name</label>
              <input type="text" name="name" onChange={handleInput} value={genreInput.name}  />
            </div>
            <span >{error.name}</span>
          </div>
          <div className='editGenreField'>
            <div>
              <label>Description</label>
              <textarea name="description" onChange={handleInput} value={genreInput.description}  />
            </div>
          </div>
          <div className='editGenreField1'>
            <label>Status</label>
            <input type="checkbox" name="status" onChange={handleInput} value={genreInput.status}/>
            <span >{error.status}</span>
          </div>
        </div>
        <div id='editGenreBtns'>
          <button type="submit" >Update</button>
          <Link to="/admin/show-genre" >Back</Link>
        </div>
      </form>
    </div>
  );
}

export default EditGenre;
