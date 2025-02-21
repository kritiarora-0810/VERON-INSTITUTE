import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/carouselll/App';
import Footer from '../components/Footer/Footer';
import CollegeGrid from '../components/CollegeGrid/CollegeGrid';
import AdmissionBanner from '../components/AdmissionBanner/AdmissionBanner';
import Testimonial from '../components/Testimonial/Testimonial';
import CollegeCards from '../components/CollegeCards/CollegeCards';

function HomePage() {
  return (
    <>
    <Navbar />
    <Carousel />
    <CollegeCards />
    <AdmissionBanner />
    <Testimonial />
    <Footer />
    </>
  );
}

export default HomePage;