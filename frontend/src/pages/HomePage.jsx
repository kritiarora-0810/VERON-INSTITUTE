import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/carouselll/App';
import Footer from '../components/Footer/Footer';
import CollegeGrid from '../components/CollegeGrid/CollegeGrid';

function HomePage() {
  return (
    <>
    <Navbar />
    <Carousel />
    <CollegeGrid />
    <Footer />
      {/* <div className="h-screen w-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1400/1*WoEu5XEHEwYFcDkbl1A3Bw.jpeg)"}}></div> */}
    </>
  );
}

export default HomePage;