import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
function ShowGenre() {
  const[loading,setLoading]=useState(true);
  const[genrelist,setGenrelist]=useState([]);
  useEffect(()=>{
    document.title='BeastReads | Genres';
        axios.get(`http://localhost:8000/api/show-genre`).then(res=>{
            if(res.data.status===200){
                setGenrelist(res.data.genre);
            }
            setLoading(false);
        });
},[]);

const deleteGenre=(e,id)=>{
    e.preventDefault();
    const clicked=e.currentTarget;
    clicked.innerText="Deleting";
    axios.delete(`/api/delete-genre/${id}`).then(res=>{
        if(res.data.status===200){
            swal("Success",res.data.message,"success");
            clicked.closest('tr').remove();
        }else if(res.data.status===404){
            swal("Success",res.data.message,"success");
            clicked.innerText="Delete";
        }
    });
}

var showgenre_HTMLTABLE="";
if(loading){
    return <h4>Loading genre...</h4>
}else{
    showgenre_HTMLTABLE=genrelist.map((item)=>{
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.slug}</td>
                <td>{item.status}</td>
                <td>
                    <Link to={`edit-genre/${item.id}`} className="btn btn-success btn-sm=">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={(e)=>deleteGenre(e,item.id)} className="btn btn-danger btn-sm=">Delete</button>
                </td>
            </tr>
        )
    });
}
  return (
    <div className="container px-4">
       
          <div className="card mt-4">
          <div className="vard-header">
                <h4>Genre List
                    <Link to="/admin/add-genre" className="btn btn-primary btn-sm float-end">Add Genre</Link>
                </h4>
          </div>
          <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {showgenre_HTMLTABLE}
                    </tbody>
                </table>
          </div>
      </div>
    </div>
  );
}

export default ShowGenre;
