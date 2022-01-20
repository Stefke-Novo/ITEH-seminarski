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
        history.push("http://localhost:8000/admin/show-title");
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
    <div className="container-fluid px-4">
    <div className="card mt-4">
      <div className="card-header">
        <h1 className="mt-4">Edit Title</h1>
        <form
          encType="multipart/form-data"
          onSubmit={updateTitle}
          id="title_form"
        >
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="details-tab"
                data-bs-toggle="tab"
                data-bs-target="#details"
                type="button"
                role="tab"
                aria-controls="details"
                aria-selected="false"
              >
                Details
              </button>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              {/* Home Tab Fields */}
              <div className="form-group mb-3">
                <label>Select Genre</label>
                <select
                  name="genre_id"
                  onChange={handleInput}
                  value={titleInput.genre_id}
                  className="form-control"
                >
                  <option>-- Select Genre --</option>
                  {genrelist.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <span className="text-danger">{error.genre_id}</span>
              </div>
              <div className="form-group mb-3">
                <label>Slug</label>
                <input
                  type="text"
                  name="slug"
                  onChange={handleInput}
                  value={titleInput.slug}
                  className="form-control"
                />
                <span className="text-danger">{error.slug}</span>
              </div>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={titleInput.name}
                  className="form-control"
                />
                <span className="text-danger">{error.name}</span>
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <textarea
                  name="description"
                  onChange={handleInput}
                  value={titleInput.description}
                  className="form-control"
                />
              </div>
            </div>

            <div
              className="tab-pane card-body border fade"
              id="details"
              role="tabpanel"
              aria-labelledby="details-tab"
            >
              <div className="row">
                {/* Details Tab Fields */}

                <div className="col-md-4 form-group mb-3">
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    onChange={handleInput}
                    value={titleInput.author}
                    className="form-control"
                  />
                  <span className="text-danger">{error.author}</span>
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Price</label>
                  <input
                    type="text"
                    name="price"
                    onChange={handleInput}
                    value={titleInput.price}
                    className="form-control"
                  />
                  <span className="text-danger">{error.price}</span>
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Rating</label>
                  <input
                    type="text"
                    name="rating"
                    onChange={handleInput}
                    value={titleInput.rating}
                    className="form-control"
                  />
                  <span className="text-danger">{error.rating}</span>
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Publisher</label>
                  <input
                    type="text"
                    name="publisher"
                    onChange={handleInput}
                    value={titleInput.publisher}
                    className="form-control"
                  />
                  <span className="text-danger">{error.publisher}</span>
                </div>
                <div className="col-md-8 form-group mb-3">
                  <label>Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImage}
                    className="form-control"
                  />
                  <img
                    src={`http://localhost:8000/${titleInput.image}`}
                    alt=""
                    width="50px"
                  />
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Featured</label>
                  <input
                    type="checkbox"
                    name="featured"
                    onChange={handleCheckbox}
                    defaultChecked={allcheckbox.featured === 1 ? true : false}
                    className="w-50 h-50"
                  />
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Popular</label>
                  <input
                    type="checkbox"
                    name="popular"
                    onChange={handleCheckbox}
                    defaultChecked={allcheckbox.popular === 1 ? true : false}
                    className="w-50 h-50"
                  />
                </div>
                <div className="col-md-4 form-group mb-3">
                  <label>Status</label>
                  <input
                    type="checkbox"
                    name="status"
                    onChange={handleCheckbox}
                    defaultChecked={allcheckbox.status === 1 ? true : false}
                    className="w-50 h-50"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/admin/show-title"
            className="btn btn-primary mb-3 px-4 float-start"
          >
            Back
          </Link>
          <button type="submit" className="btn btn-primary px-4 float-end">
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default EditTitle;
