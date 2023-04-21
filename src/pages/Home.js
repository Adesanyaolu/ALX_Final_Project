import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Sidebar from '../Layout/Sidebar'
import '../css/Home.css'
import chef_oluwatobi from '../Recipe_images/chef_oluwatobi.jpg'
import chef_Benerdetta from '../Recipe_images/chef_Benerdetta.jpg'
import chef_Fang from '../Recipe_images/chef_Fang.jpg'
import chef_pie from '../Recipe_images/chef_pie.JPG'
import search  from '../Recipe_images/search.svg'
import voice_search_icon   from '../Recipe_images/voice_search_icon.svg'
import Desi_Dinner from '../Recipe_images/Desi_Dinner.jpg'
import Parmesan_and_Garlic_Recipe from '../Recipe_images/Parmesan_and_Garlic_Recipe.jpg'
import Curry_Recipe from '../Recipe_images/Curry_Recipe.jpg'
import Pizza from '../Recipe_images/Pizza.jpg'


function Home() {
  return(
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
        Welcome to Recipe
      </h1>  
       <h2 className="hero-subtitle">
       We offer the best recipee in the world with our top notch chefs!
       </h2>     
      <div className='middle-section'>
        <input className='search-bar' type='text' placeholder='Search' />
        <button className='search-button'>
          <img className='search-icon' src={search} alt=''/>
          <div className='tooltip'>Search</div>
        </button>
        <button className='voice-search-button'>
          <img className='voice-search-icon' src={voice_search_icon} alt=''/>
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

    {/* Recipe Preview Start */}
<section className='video-grid'>
  <div className='video-preview'>
    <div className='thumbnail-row'>
    <div> <img className='thumbnail' src={Desi_Dinner } alt=''/></div>
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
    <div> <img className='thumbnail' src={Parmesan_and_Garlic_Recipe} alt=''/></div>
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
    <div> <img className='thumbnail' src={Curry_Recipe} alt=''/></div>
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
    <div> <img className='thumbnail' src={ Pizza} alt=''/></div>
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

 {/* Chef Preview Start */}
 <div className='preview-title'>
      <h3>Meeet Our Chef</h3>
    </div>
<section className='video-grid'>
  <div className='video-preview'>
    <div className='thumbnail-row'>
    <div> <img className='thumbnail' src={chef_oluwatobi} alt=''/></div>
    </div>
    <div className='video-info-grid'>
      <div className='video-info'>
        <h2 className='video-title'>
        Chef Oluwatobi
        </h2>
      </div>
    </div>
  </div>
  {/* Second preview */}
  <div className='video-preview'>
    <div className='thumbnail-row'>
    <div> <img className='thumbnail' src={chef_Benerdetta} alt=''/></div>
    </div>
    <div className='video-info-grid'>
      <div className='video-info'>
        <h2 className='video-title'>
        Chef Benerdetta
        </h2>
      </div>
    </div>
  </div>
  {/* 3 preview */}
  <div className='video-preview'>
    <div className='thumbnail-row'>
    <div> <img className='thumbnail' src={chef_Fang} alt=''/></div>
    </div>
    <div className='video-info-grid'>
      <div className='video-info'>
        <h2 className='video-title'>
        Chef Fang
        </h2>
      </div>
    </div>
  </div>
  {/* 4th preview */}
  <div className='video-preview'>
    <div className='thumbnail-row'>
    <div> <img className='thumbnail' src={chef_pie} alt=''/></div>
    </div>
    <div className='video-info-grid'>
      <div className='video-info'>
        <h2 className='video-title'>
        Chef pie
        </h2>
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
  )
}
export default Home