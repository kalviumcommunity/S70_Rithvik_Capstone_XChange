import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getListingById, updateListing } from "../utils/api";

const EditListing = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", description: "", category: "", location: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getListingById(id).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await updateListing(id, form);
    setLoading(false);
    navigate(`/listing/${id}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Edit Listing</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="p-2 border rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="p-2 border rounded" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required className="p-2 border rounded" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required className="p-2 border rounded" />
        <button className="bg-green-600 text-white py-2 rounded" type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Listing"}
        </button>
      </form>
    </div>
  );
};

export default EditListing;
