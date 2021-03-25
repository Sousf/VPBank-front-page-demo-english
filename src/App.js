import React from "react";
import logo from "./Images/logo.png";
import topright from "./asset/bgTopRight.png";
import sub1 from "./asset/sub1.png";
import sub2 from "./asset/sub2.png";
import sub3 from "./asset/sub3.png";
import $ from "jquery";
import "./App.css";
import star from "./asset/star.png";
import step1 from "./asset/step1.png";
import step2 from "./asset/step2.png";
import step3 from "./asset/step3.png";
import step4 from "./asset/step4.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: "dasdad"
    };
  }
  render() {
    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
          $(".navbar").css("background-color", "#28B463");
        } else {
          $(".navbar").css("background-color", "transparent");
        }
      });
    });
    return (
      <div className="wrapper">
        <div className="top">
          <div className="pic-topright">
            <img src={topright} />
          </div>
          <div className="navbar">
            <ul>
              <li className="logo">
                <img src={logo} />
              </li>
              <li className="products right-stuff">
                <a>Our Products</a>
              </li>
              <li className="howto-signup right-stuff">
                <a>How To Sign Up</a>
              </li>
              <li>
                <button className="signup right-stuff">Sign Up Now</button>
              </li>
            </ul>
          </div>
          <div className="main-text">
            <div className="heading-1">
              <h1>Choose from our products</h1>
            </div>
            <div className="main-desc">
              <p>
                Instead of going to a bank, You can sign up online for free and
                receive: Your transaction account, 1 ATM card and our Internet
                Banking Service.
              </p>
            </div>
            <button className="main-text-button mybtn">Sign Up Now!</button>
          </div>
        </div>

        <div className="second-nav">
          <ul>
            <li>
              <img src={sub1} />
              <p className="sub-text">Free Online Sign Ups</p>
            </li>
            <li>
              <img src={sub2} />
              <p className="sub-text">
                Receive our 3 in 1 Product when you Sign Up for the first time
              </p>
            </li>
            <li>
              <img src={sub3} />
              <p className="sub-text"> Free Online Transactions</p>
            </li>
          </ul>
        </div>
        <div className="info-table">
          <h1 className="info-heading">Our 3 in 1 Product</h1>
          <p className="info-p">Find out about Our Products' Usages</p>
          <div className="table-wrapper">
            <div className="content bgTaikhoan"></div>
            <div className="content bgTaikhoan-info info">
              <ul>
                <li className="header">
                  <h3>Your Bank Account</h3>
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
              </ul>
            </div>
            <div className="online-vpbank content info">
              <ul>
                <li className="header">
                  <h3>Online VPBank Services</h3>
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere.
                </li>
                <li>
                  <img src={star} /> Top Up your account balance
                </li>
              </ul>
            </div>
            <div className="content bgVpbankOnline"></div>
            <div className="content bgATM"></div>
            <div className="content bgATM-info info">
              <ul>
                <li className="header">
                  <h3>Online VPBank Services</h3>
                </li>
                <li>
                  <img src={star} />
                  Top Up your account balance and use it anytime, anywhere. Our
                  Top Up services is available at every VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance and use it
                  anytime, anywhere. Our Top Up services is available at every
                  VPBank branches
                </li>
                <li>
                  <img src={star} /> Top Up your account balance
                </li>
              </ul>
            </div>
          </div>
          <div className="table-foot">
            <h1>
              Sign Up and Receive Our TKTT Product at a VPBANK branch near you
            </h1>
            <button className="mybtn table-btn">Sign Up Now</button>
          </div>
        </div>
        <div className="signup-TKTT">
          <h1>4 Steps To Receiving your TKTT</h1>
          <div className="stepwrap">
            <div className=" steps step1">
              <img src={step1} />
              <h3>Step 1</h3>
              <p>Sign Up</p>
            </div>
            <div className="line"></div>
            <div className="steps step2">
              <img src={step2} />
              <h3>Step 2</h3>
              <p>Fill out the Required Information</p>
            </div>
            <div className="line"></div>
            <div className="steps step3">
              <img src={step3} />
              <h3>Step 3</h3>
              <p>Verify your Account</p>
            </div>
            <div className="line"></div>
            <div className="steps step4">
              <img src={step4} />
              <h3>Step 4</h3>
              <p>
                Receive and Activate Our Services at a near by VPBank branch
              </p>
            </div>
          </div>
          <button className="mybtn">Sign Up Now</button>
        </div>
      </div>
    );
  }
}

export default App;
