import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://ecommerce-p96d.onrender.com/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="d-flex search-form"
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          style={{
            borderRadius: "10rem",
            width: "25rem",
          }}
          className="form-control me-2 search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid white",
            color: "black",
          }}
          className="btn btn-outline-success"
          type="submit"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
