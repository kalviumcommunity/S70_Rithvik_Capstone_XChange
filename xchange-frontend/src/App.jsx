import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingDetail from "./pages/ListingDetail";
import EditListing from "./pages/EditListing";


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/:id" element={<ListingDetail />} />
      <Route path="/listing/:id/edit" element={<EditListing />} />

    </Routes>
  </Router>
);

export default App;
