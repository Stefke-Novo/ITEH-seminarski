import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
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
        axios.get("/sanctum/csrf-cookie").then(response => {
        axios.post(`/api/add-genre`,data).then(res=>{
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
    <div className="container-fluid px-4">
      <h1 className="mt-4">Add Genre</h1>
      <form onSubmit={submitGenre} id="genre_form">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="form-group mb-3">
              <label>Slug</label>
              <input type="text" name="slug" onChange={handleInput} value={genreInput.slug} className="form-control" />
              <span>{genreInput.error_list.slug}</span>
            </div>
            <div className="form-group mb-3">
              <label>Name</label>
              <input type="text" name="name" onChange={handleInput} value={genreInput.name} className="form-control" />
              <span>{genreInput.error_list.name}</span>
            </div>
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea name="description" onChange={handleInput} value={genreInput.description} className="form-control" />
              <span>{genreInput.error_list.description}</span>
            </div>
            <div className="form-group mb-3">
              <label>Status</label>
              <input type="checkbox" name="status" onChange={handleInput} value={genreInput.status}/>
              <span>{genreInput.error_list.status}</span>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
      </form>
    </div>
  );
}

export default AddGenre;
