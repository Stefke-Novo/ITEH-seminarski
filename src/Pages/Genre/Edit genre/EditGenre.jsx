import React,{useState,useEffect} from 'react';
import "./EditGenre.css"
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory,Link,useRouteMatch} from 'react-router-dom';
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
    <div className="container px-4">
    <form onSubmit={updateGenre}>
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
        <span className="text-danger">{error.slug}</span>
      </div>
      <div className="form-group mb-3">
        <label>Name</label>
        <input type="text" name="name" onChange={handleInput} value={genreInput.name} className="form-control" />
        <span className="text-danger">{error.name}</span>
      </div>
      <div className="form-group mb-3">
        <label>Description</label>
        <textarea name="description" onChange={handleInput} value={genreInput.description} className="form-control" />
      </div>
      <div className="form-group mb-3">
        <label>Status</label>
        <input type="checkbox" name="status" onChange={handleInput} value={genreInput.status}/>
        <span className="text-danger">{error.status}</span>
      </div>
    </div>
</div>
<Link to="/admin/show-genre" className="btn btn-primary mb-3 px-4 float-start">Back</Link>

<button type="submit" className="btn btn-primary px-4 float-end">Update</button>
</form>
  </div>
  );
}

export default EditGenre;
