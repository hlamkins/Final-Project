import React from 'react';
import NavBar from '../components/NavBar'
import HomeContent from '../components/home-content'

function Home(props) {
  return (
    <div className="Home">
      <HomeContent {...props}/>
      

    </div>
  );
}

export default Home;
