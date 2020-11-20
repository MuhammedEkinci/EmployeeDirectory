import React from "react";
import "./style.css";

function SearchForm({onSearch, searchPerson}) {
    return(
        <form>
            <div className="form-group">
                <label htmlFor="search">Search an Employee: </label>
                <input 
                    className="form-control"
                    name="search"
                    type="text"
                    placeholder="Search Employee name!"
                    id="search"
                />
            </div>
        </form>
    );
}

export default SearchForm;