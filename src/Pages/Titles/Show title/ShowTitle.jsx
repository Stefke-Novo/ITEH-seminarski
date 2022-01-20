import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ShowTitle.css"
function ShowTitle() {

  const[loading,setLoading]=useState(true);
const[titlelist,setTitlelist]=useState([]);

useEffect(()=>{

    document.title='BestReads | Titles';
        axios.get(`http://localhost:8000/api/show-title`).then(res=>{
            if(res.data.status===200){
                setTitlelist(res.data.title);
            }
            setLoading(false);
        });
},[]);

// const deleteTitle=(e,id)=>{
//     e.preventDefault();
//     const clicked=e.currentTarget;
//     clicked.innerText="Deleting";
//     axios.delete(`/api/delete-title/${id}`).then(res=>{
//         if(res.data.status===200){
//             swal("Success",res.data.message,"success");
//             clicked.closest('tr').remove();
//         }else if(res.data.status===404){
//             swal("Success",res.data.message,"success");
//             clicked.innerText="Delete";
//         }
//     });
// }

var titleStatus='';
var showtitle_HTMLTABLE="";
if(loading){
    return <h4>Loading titles...</h4>
}else{
    showtitle_HTMLTABLE=titlelist.map((item)=>{
        if(item.status=='0'){
            titleStatus='Shown';
        }else if(item.status=='1'){
            titleStatus='Hidden';
        }
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.genre.name}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td><img src={`http://localhost:8000/${item.image}`} width="50px"alt={item.name}/></td>
                <td>
                    <Link to={`edit-title/${item.id}`} className="btn btn-success btn-sm=">Edit</Link>
                </td>
                <td>
                    {/* <button type="button" onClick={(e)=>deleteTitle(e,item.id)} className="btn btn-danger btn-sm=">Delete</button> */}
                    {titleStatus}
                </td>
            </tr>
        )
    });
}

  return (
  <div className="container px-4 mt-3">
       
  <div className="card">
  <div className="card-header">
        <h4>Title List
            <Link to="/admin/add-title" className="btn btn-primary btn-sm float-end">Add Title</Link>
        </h4>
  </div>
  <div className="card-body">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Genre</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {showtitle_HTMLTABLE}
            </tbody>
        </table>
        </div>
  </div>
</div>
</div>
    );
}

export default ShowTitle;
