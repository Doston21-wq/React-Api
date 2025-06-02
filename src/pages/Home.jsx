import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setCocktails(response.data.drinks || []);
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
    }
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="form-input search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn" type="submit">
          <FiSearch />
        </button>
      </form>

      <div className="results">
        {cocktails.map((drink) => (
          <div key={drink.idDrink} className="card">
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="card-img"
            />
            <h2 className="card-title">{drink.strDrink}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
