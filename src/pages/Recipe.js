import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
import '../css/Home.css'
import search from '../Recipe_images/search.svg'
import voice_search_icon from '../Recipe_images/voice_search_icon.svg'
import Burger_Recipe from '../Recipe_images/Burger_Recipe.jpg'
import Easy_Fish_Recipes from '../Recipe_images/Easy_Fish_Recipes.jpg'
import chef_French_Recipe from '../Recipe_images/French_Recipe.jpg'
import Gourment_Salmon_Recipes from '../Recipe_images/Gourment_Salmon_Recipes.jpg'
import High_Energy_Recipes from '../Recipe_images/High_Energy_Recipes.jpg'
import Italian_Shrimp_Recipe from '../Recipe_images/Italian_Shrimp_Recipe.jpg'
// import Onion_Soup_Recipe from '../Recipe_images/Onion_Soup_Recipe.jpg'
import Lasagna_Recipe from '../Recipe_images/Lasagna_Recipe.jpg'
import Desi_Dinner from '../Recipe_images/Desi_Dinner.jpg'
import Parmesan_and_Garlic_Recipe from '../Recipe_images/Parmesan_and_Garlic_Recipe.jpg'
import Curry_Recipe from '../Recipe_images/Curry_Recipe.jpg'
import Pizza from '../Recipe_images/Pizza.jpg'


function Home() {
  return (
    <div className='body-page'>
      {/* Nav Start */}
      <div>
        <Navbar />
      </div>
      {/* Nav End */}

      {/* Hero Start */}
      <div>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Looking For Recipe?
            </h1>
            <h2 className="hero-subtitle">
              Explore Through Our Wide Range Of Recipes
            </h2>
            <div className='middle-section'>
              <input className='search-bar' type='text' placeholder='Search' />
              <button className='search-button'>
                <img className='search-icon' src={search} alt='' />
                <div className='tooltip'>Search</div>
              </button>
              <button className='voice-search-button'>
                <img className='voice-search-icon' src={voice_search_icon} alt='' />
                <div className='tooltip'>Search with your voice</div>
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* Hero End */}

      {/* sideBar */}
      <div>
        <Sidebar />
      </div>

      {/* Recipe Section 1 Preview Start */}
      <section className='video-grid'>
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Desi_Dinner} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Desi_Dinner
              </h2>
            </div>
          </div>
        </div>
        {/* Second preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Parmesan_and_Garlic_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Parmesan and Garlic Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 3 preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Curry_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Curry Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 4th preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Pizza} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Pizza
              </h2>
            </div>
          </div>
        </div>
      </section>


      {/* Recipe Section 2 Preview Start */}
      <section className='video-grid'>
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Burger_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Burger Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* Second preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Easy_Fish_Recipes} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Easy Fish Recipes
              </h2>
            </div>
          </div>
        </div>
        {/* 3 preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={chef_French_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                chef French Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 4th preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Gourment_Salmon_Recipes} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Gourment Salmon Recipes
              </h2>
            </div>
          </div>
        </div>
      </section>


      {/* Recipe Section 3 Preview Start */}
      <section className='video-grid'>
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={High_Energy_Recipes} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                High Energy Recipes
              </h2>
            </div>
          </div>
        </div>
        {/* Second preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Parmesan_and_Garlic_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Parmesan and Garlic Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 3 preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Italian_Shrimp_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Italian Shrimp Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 4th preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Lasagna_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Lasagna Recipe
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Section 4 Preview Start */}
      <section className='video-grid'>
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Desi_Dinner} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Desi_Dinner
              </h2>
            </div>
          </div>
        </div>
        {/* Second preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Parmesan_and_Garlic_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Parmesan and Garlic Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 3 preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Curry_Recipe} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Curry Recipe
              </h2>
            </div>
          </div>
        </div>
        {/* 4th preview */}
        <div className='video-preview'>
          <div className='thumbnail-row'>
            <div> <img className='thumbnail' src={Pizza} alt='' /></div>
          </div>
          <div className='video-info-grid'>
            <div className='video-info'>
              <h2 className='video-title'>
                Pizza
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  )
}
export default Home