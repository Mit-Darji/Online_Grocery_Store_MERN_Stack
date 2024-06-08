import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title="All Categories">
  <div className="container mt-5">
    <div className="row">
      {categories.map((c) => (
        <div className="col-md-3 mb-4" key={c._id}>
          <div className="category-card">
            <Link to={`/category/${c.slug}`} className="btn btn-primary">
              
              <div className="category-info">
                <h4>{c.name}</h4>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</Layout>

  );
};

export default Categories;
