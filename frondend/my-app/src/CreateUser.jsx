import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [id, setid] = useState("");
  const [ModelName, setModelName] = useState("");
  const [Price, setPrice] = useState("");
  const [Brand, setBrand] = useState("");
  const [Size, setSize] = useState("");
const navigate= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { id, ModelName , Brand , Price , Size})
      .then((result) => {console.log(result)
      navigate('/')

      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Tv showroom</h2>
          <div className="mb-2">
            <label htmlFor="id">id</label>
            <input
              type="text"
              id="id"
              placeholder="Enter ID"
              className="form-control"
              value={id}
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="ModelName">ModelName</label>
            <input
              type="ModelName"
              id="ModelName"
              placeholder="Enter ModelName"
              className="form-control"
              value={ModelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Brand">Brand</label>
            <input
              type="Brand"
              id="Brand"
              placeholder="Enter Brand"
              className="form-control"
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>


          <div className="mb-2">
            <label htmlFor="Price">Price</label>
            <input
              type="Price"
              id="Price"
              placeholder="Enter Price"
              className="form-control"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>


          <div className="mb-2">
            <label htmlFor="Size">Size</label>
            <input
              type="text"
              id="Size"
              placeholder="Enter Size"
              className="form-control"
              value={Size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
