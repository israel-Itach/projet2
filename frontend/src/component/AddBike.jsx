import React, { useState } from "react";
import "./AddBike.css";

function AddBike({ addBike }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/bike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          image_url,
        }),
      });

      const data = await response.json();
      addBike(data);
      console.log(data);
      setName("");
      setDescription("");
      setImageUrl("");
      alert("התווספו אופניים חדשות");
      // console.log(  /* id, */ name, description, image_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddBike">
      <h2>Add a new bike</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="form-textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="image_url">
            Image URL:
          </label>
          <input className="form-input" type="text" id="image_url" value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <button className="form-submit" type="submit">
          Add Bike
        </button>
      </form>
    </div>
  );
}

export default AddBike;
