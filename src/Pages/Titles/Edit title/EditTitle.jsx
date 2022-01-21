import React,{useEffect,useState} from 'react';
import "./EditTitle.css";
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory,Link } from 'react-router-dom';
function EditTitle(props) {

  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);
  const [error, setError] = useState([]);
  const [genrelist, setGenrelist] = useState([]);
  const [titleInput, setTitle] = useState({
    genre_id: "",
    slug: "",
    name: "",
    description: "",
    print:"",
    author: "",
    publisher: "",
    rating: "",
    price: "",
  });

  const handleImage = (e) => {
    e.persist();
    setImage({ image: e.target.files[0] });
    document.getElementById("editTitleImage").alt="picture is uploaded";
  };
  const handleInput = (e) => {
    e.persist();
    setTitle({ ...titleInput, [e.target.name]: e.target.value });
  };

  const [allcheckbox, setAllcheckbox] = useState([]);
  const handleCheckbox = (e) => {
    e.persist();
    setAllcheckbox({ ...allcheckbox, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    document.title = "BestReads | Edit Title";

    axios.get(`http://localhost:8000/api/all-genre`).then((res) => {
      if (res.data.status === 200) {
        setGenrelist(res.data.genre);
      }
      setLoading(false);
    });

    const title_id = props.match.params.id;
    axios.get(`http://localhost:8000/api/edit-title/${title_id}`).then((res) => {
      if (res.data.status === 200) {
        setTitle(res.data.title);
        setAllcheckbox(res.data.title);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("/admin/show-title");
      }
      setLoading(false);
    });
  }, [props.match.params.id, history]);

  const updateTitle = (e) => {
    e.preventDefault();
    const title_id = props.match.params.id;

    const formData = new FormData();
    formData.append("image", image.image);
    formData.append("genre_id", titleInput.genre_id);
    formData.append("slug", titleInput.slug);
    formData.append("name", titleInput.name);
    formData.append("description", titleInput.description);

    formData.append("author", titleInput.author);
    formData.append("publisher", titleInput.publisher);
    formData.append("rating", titleInput.rating);
    formData.append("price", titleInput.price);

    formData.append("featured", allcheckbox.featured ? "1" : "0");
    formData.append("popular", allcheckbox.popular ? "1" : "0");
    formData.append("status", allcheckbox.status ? "1" : "0");

    axios.post(`http://localhost:8000/api/update-title/${title_id}`, formData).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);
        history.push("http://localhost:8000/admin/show-title");
      } else if (res.data.status === 422) {
        swal("All fields must be filled", "", "warning");
        setError(res.data.errors);
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        history.push("http://localhost:8000/admin/show-title");
      }
    });
  };

  if (loading) {
    return <h4>Loading title data...</h4>;
  }
  return (
    <div id="editTitlePage">
    <div className="editTitleCard">
      <div className="editTitleHeader">
        <h1 className="editTitleHeaderTitle">Edit Title</h1>
      </div>
      <form onSubmit={updateTitle} id="editTitleForm">
          <div id='editTitleContent' >
            {/* Home Tab Fields */}
            <div className='editTitleColumn'>
                <div className="editTitleField">
                  <div>
                    <label>Select Genre</label>
                    <select name="genre_id" onChange={handleInput} value={titleInput.genre_id} >
                      <option>-- Select Genre --</option>
                      {genrelist.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>);})}
                    </select>
                  </div>
                  <span className="text-danger">{error.genre_id}</span>
                </div>
                <div className="editTitleField">
                  <div>
                    <label>Slug</label>
                    <input type="text" name="slug" onChange={handleInput} value={titleInput.slug}/>
                  </div>
                  <span className="text-danger">{error.slug}</span>
                </div>
                <div className="editTitleField">
                  <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInput} value={titleInput.name}/>
                  </div>
                  <span className="text-danger">{error.name}</span>
                </div>
                <div className="editTitleField" id='editTitleDescription'>
                  <div>
                  <label>Description</label>
                  <textarea name="description" onChange={handleInput} value={titleInput.description} />
                  </div>
                </div>
              {/* Details Tab Fields */}
                <div className="editTitleField">
                  <div>
                    <label>Author</label>
                    <input type="text" name="author" onChange={handleInput} value={titleInput.author}/>
                  </div>
                  <span className="text-danger">{error.author}</span>
                </div>
                <div className="editTitleField">
                  <div>
                    <label>Price</label>
                    <input type="text" name="price" onChange={handleInput} value={titleInput.price}/>
                  </div>
                  <span className="text-danger">{error.price}</span>
                </div>
                <div className="editTitleField">
                  <div>
                    <label>Rating</label>
                    <input type="text"  name="rating" onChange={handleInput} value={titleInput.rating}/>
                  </div>
                  <span className="text-danger">{error.rating}</span>
                </div>
                <div className="editTitleField">
                  <div>
                    <label>Publisher</label>
                    <input type="text" name="publisher" onChange={handleInput} value={titleInput.publisher} />
                  </div>
                  <span className="text-danger">{error.publisher}</span>
                </div>
              </div>
             <div className='editTitleColumn'>
               <div id='editTitleImg'>
               <img id="editTitleImage" src={`http://localhost:8000/${titleInput.image}`} alt=""/>
               </div>
              <div className="editTitleField">
                  <div id='editTitleImageField'>
                    <label>Image</label>
                    <input type="file" name="image" onChange={handleImage}/>
                  </div>
                </div>
                <div className="editTitleField1">
                  <div>
                    <label>Featured</label>
                    <input type="checkbox" name="featured" onChange={handleCheckbox} defaultChecked={allcheckbox.featured === 1 ? true : false} />
                  </div>
                </div>
                <div className="editTitleField1">
                 <div>
                  <label>Popular</label>
                    <input type="checkbox" name="popular" onChange={handleCheckbox} defaultChecked={allcheckbox.popular === 1 ? true : false}  />
                 </div>
                </div>
                <div className="editTitleField1">
                  <div>
                    <label>Status</label>
                    <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked={allcheckbox.status === 1 ? true : false}  />
                  </div>
                </div>
          </div>
        </div>
        <div id='editTitleBtns'>
          <Link to="/admin/show-title"> Back</Link>
          <button type="submit">Update </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default EditTitle;
