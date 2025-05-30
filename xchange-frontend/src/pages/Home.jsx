import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold mb-4">Welcome to XChange!</h1>
    <Link to="/post" className="bg-blue-600 text-white px-4 py-2 rounded">
      Post a New Listing
    </Link>
  </div>
);

export default Home;
