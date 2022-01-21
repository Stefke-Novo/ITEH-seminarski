import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
import "./AddGenre.css";
function AddGenre() {
  const history=useHistory();
    const[genreInput,setGenre]=useState({
        slug: '',
        name: '',
        description: '',
        status: '',
        error_list:[],
    });

    const handleInput=(e)=>{
        e.persist();
        setGenre({...genreInput,[e.target.name]: e.target.value});
    }

    document.title='BestReads | New Genre';
    const submitGenre=(e)=>{
        e.preventDefault();
        const data={
            slug:genreInput.slug,
            name:genreInput.name,
            description:genreInput.description,
            status:genreInput.status,
        }
        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(response => {
        axios.post(`http://localhost:8000/api/add-genre`,data).then(res=>{
            if(res.data.status===200){
                swal("Success","Genre Added Successfully","success");
                history.push("/admin/dashboard");
            }else if(res.data.status===400){
                setGenre({...genreInput,error_list:res.data.errors});
            }
        });
    });
    }
  return( 
    <div className="addGenrePage">
      <form onSubmit={submitGenre} id="addGenreForm">
        <h1>Add genre</h1>
            <div className="addGenreRow">
              <div>
              <label>Slug</label>
              <input type="text" name="slug" onChange={handleInput} value={genreInput.slug} className="addGenreLabel" />
              </div>
              <small>{genreInput.error_list.slug}</small>
            </div>
            <div className="addGenreRow">
              <div>
              <label>Name</label>
              <input type="text" name="name" onChange={handleInput} value={genreInput.name} className="addGenreLabel" />
              </div>
              <small>{genreInput.error_list.name}</small>
            </div>
            <div>
              <div id='addGenreDescription'>
              <label>Description</label>
              <textarea name="description" onChange={handleInput} value={genreInput.description} className="addGenreLabel" />
              </div>
              <small>{genreInput.error_list.description}</small>
            </div>
            <div className="addGenreStatus">
              <label>Status</label>
              <input type="checkbox" name="status" onChange={handleInput} value={genreInput.status}/>
              <small>{genreInput.error_list.status}</small>
            </div>
        <button type="submit" className="addGenreBtn2">Submit</button>
      </form>
    </div>
  );
}

export default AddGenre;
