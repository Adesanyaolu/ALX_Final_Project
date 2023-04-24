import React, { useState, useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Sidebar from "../Layout/Sidebar";
import "../css/Home.css";
import chef_oluwatobi from "../Recipe_images/chef_oluwatobi.jpg";
import chef_Benerdetta from "../Recipe_images/chef_Benerdetta.jpg";
import chef_Fang from "../Recipe_images/chef_Fang.jpg";
import chef_pie from "../Recipe_images/chef_pie.JPG";
import search from "../Recipe_images/search.svg";
import voice_search_icon from "../Recipe_images/voice_search_icon.svg";

function Home() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=9ca45d705d214743a89f1fac63a25095`
    );
    setSearchResults(response.data.results);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };


  useEffect(() => {
    const API_KEY = "9ca45d705d214743a89f1fac63a25095";
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=6`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  return (
    <div className="body-page">
      
      {/* Nav Start */}
      <div>
        <Navbar />
      </div>
      {/* Nav End */}
      {/* Hero Start */}
      <div>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Recipe</h1>
            <h2 className="hero-subtitle">
              We offer the best recipee in the world with our top notch chefs!
            </h2>
            <form className="middle-section" onSubmit={handleSearch}>
              <input className="search-bar" type="text"
              placeholder="Search for a recipe"
              value={query}
              onChange={handleInputChange}></input>
              <button className="search-button">
                <img className="search-icon" src={search} alt="" />
                <div className="tooltip">Search</div>
              </button>
              <button className="voice-search-button">
                <img
                  className="voice-search-icon"
                  src={voice_search_icon}
                  alt=""
                />
                <div className="tooltip">Search with your voice</div>
              </button>
            </form>
          </div>
        </section>
      </div>
      {/* Hero End */}

      {/* sideBar */}
      <div>
        <Sidebar />
      </div>

       {/* Search result */}
        <div className="video-preview">
        {loading ? <p>Loading...</p> : <div className="video-grid">
          {searchResults.map((result) => (
          <div key={result.id}>
             <a className="video-title" href={`https://api.spoonacular.com/recipes/${result.id}/information?apiKey=9ca45d705d214743a89f1fac63a25095`}>
              <img className="thumbnail" src={result.image} alt={result.title} />
              {result.title}
            </a>
          </div>
        ))}
          </div>}
          
        </div>
         
      {/* Recipe Preview Start */}
      <div className="preview-title">
        <h3>Popular Recipes</h3>
      </div>
      
      <section className="video-grid">
        {/* From Spoonacular   */}
          <div className="video-preview">
            <div>
              {recipes.map((recipe) => (
                < div key={recipe.id}>
                  <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
                    <img className="thumbnail" src={recipe.image} alt={recipe.title} />
                    <p className="video-title">{recipe.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Second column  */}
           <div className="video-preview">
           <div>
          {recipes.map((recipe) => (
            < div key={recipe.id}>
            <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
              <img className="thumbnail" src={recipe.image} alt={recipe.title} />
              <p className="video-title">{recipe.title}</p>
            </a>
            </div>
             ))}
      </div>
          </div>
            {/* Third column  */}
          <div className="video-preview">
              <div>
            {recipes.map((recipe) => (
              < div key={recipe.id}>
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
                  <img className="thumbnail" src={recipe.image} alt={recipe.title} />
                  <p className="video-title">{recipe.title}</p>
                </a>
              </div>
            ))}
          </div>
          </div>
              {/* Fourth Column  */}
          <div className="video-preview">
              <div>
                {recipes.map((recipe) => (
                  < div key={recipe.id}>
                    <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
                      <img className="thumbnail" src={recipe.image} alt={recipe.title} />
                      <p className="video-title">{recipe.title}</p>
                    </a>
                  </div>
                ))}
              </div>
          </div>
        
      </section>

      {/* Chef Preview Start */}
      <div className="preview-title">
        <h3>Meeet Our Chef</h3>
      </div>
      <section className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <div>
              {" "}
              <img className="thumbnail" src={chef_oluwatobi} alt="" />
            </div>
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <h2 className="video-title">Chef Oluwatobi</h2>
            </div>
          </div>
        </div>
        {/* Second preview */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <div>
              {" "}
              <img className="thumbnail" src={chef_Benerdetta} alt="" />
            </div>
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <h2 className="video-title">Chef Benerdetta</h2>
            </div>
          </div>
        </div>
        {/* 3 preview */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <div>
              {" "}
              <img className="thumbnail" src={chef_Fang} alt="" />
            </div>
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <h2 className="video-title">Chef Fang</h2>
            </div>
          </div>
        </div>
        {/* 4th preview */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <div>
              {" "}
              <img className="thumbnail" src={chef_pie} alt="" />
            </div>
          </div>
          <div className="video-info-grid">
            <div className="video-info">
              <h2 className="video-title">Chef pie</h2>
            </div>
          </div>
        </div>
      </section>


      {/*  1st testimonia Section */}
      {/* <section className='testimonia-section'>
    <div className='testimonia-title'>
      <h3>Testimonia</h3>
    </div>
    <div className='testimonia-info'>
    <div> <img className='thumbnail' src={chef_oluwatobi} alt=''/></div>
    <p className='testimonia-text'>
      The recipe and chef are top notch mmmcm the man 
      that has all that can be taugt of will be here today to see me
      with all her family members
    </p>
    <div> <img className='thumbnail' src={chef_oluwatobi} alt=''/></div>
    <p className='testimonia-text'>
      The recipe and chef are top notch mmmcm the man 
      that has all that can be taugt of will be here today to see me
      with all her family members
    </p>

    </div>
    
   </section> */}
      {/* footer Start */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
