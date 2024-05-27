import React from "react";
import "./home.scss";
import heropng from "../../assets/hero.png";
import Products from "../../components/product/Products";
import three from "../../assets/three.png";
import img from '../../assets/mn.png';

function Home() {
  return (
    <div>
      <div className="hero container">
        <div className="hero-text">
          <h2>Mobile</h2>
          <h1>Backcover</h1>
          <h1>Tempered Glass</h1>
          <button className="shop-button">Shop all !</button>
        </div>
        <div className="hero-image">
          <img src={heropng} alt="Mobile Backcover and Tempered Glass" />
        </div>
      </div>
      <div className="products">
        <Products />
      </div>
      <div className="about-us container">
        <div className="about-icon">I</div>
        <p className="about-title">about us</p>
        <h2>
          If you’re looking for a Premium Quality <br />
          Tempered Glass or Back-cover for <br />
          your Device
        </h2>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="about__img container">
        <img src={three} alt="" />
      </div>
      <div className="ad-card container">
        <div className="content">
          <h1>Shop Premium Tempered Glass in wholesale Price!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="price">LKR: 289</div>
          <button className="shop-button">Shop Tempered Glass</button>
        </div>
        <div className="image-container">
          <img src={img} alt="Tempered Glass" />
        </div>
      </div>
      <div className="why-choose-us-section-container container">
        <div className="why-choose-us-icon">I</div>
        <p className="why-choose-us-title">Why Choose Us</p>
        <div className="why-choose-us-benefits">
          <div className="why-choose-us-benefit">
            <div className="why-choose-us-benefit-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="why-choose-us-benefit">
            <div className="why-choose-us-benefit-icon">💰</div>
            <h3>Cheap Price</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div className="why-choose-us-benefit">
            <div className="why-choose-us-benefit-icon">🔒</div>
            <h3>Premium Quality</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
