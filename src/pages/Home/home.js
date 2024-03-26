import React from 'react';
import './home.css'
import Topbar from '../../components/Topbar/topbar'
import About from '../../components/About/about';
import Product from '../../components/Product/product';
import Package from '../../components/Package/package';
import Service from '../../components/Service/service';
import Review from '../../components/Review/review';
import Post from '../../components/Post/post';
// import Contact from '../../components/Contact/contact'
import Footer from '../../components/Footer/footer';
import Subscription from '../../subcomponents/Subscription/subscription';
import Client from '../../subcomponents/Client/client';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <Topbar />
        <About />
        <Product />
        <Package />
        <Service />
        <Review />
        <Post />
        <Subscription />
        <Client />
      </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;