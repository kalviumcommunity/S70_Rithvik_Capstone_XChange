import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api, { updateListing, deleteListing } from "../utils/api";

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    api.get(`/listings/${id}`)
      .then(res => {
        setListing(res.data);
        setForm({ title: res.data.title, description: res.data.description });
      })
      .catch(() => setListing(null));
  }, [id]);

  // Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateListing(id, form);
    setEditMode(false);
    // Reload details
    const res = await api.get(`/listings/${id}`);
    setListing(res.data);
  };

  // Delete
  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      await deleteListing(id);
      navigate("/");
    }
  };

  if (!listing) return <div>Loading...</div>;

  return (
    <div className="p-8 max-w-xl mx-auto">
      {editMode ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            className="border p-2 w-full"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            className="border p-2 w-full"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" className="ml-2" onClick={() => setEditMode(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
          <div className="mb-4">{listing.description}</div>
          <button className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded" onClick={() => setEditMode(true)}>
            Edit
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default ListingDetail;
