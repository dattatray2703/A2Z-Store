import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment  from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
       <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
                lorer sdfdf   fg   fgg  dfgfg sfas sfs sf sfasf
                sf fsf fasf gsgsf srfgrfr fgasdsf sdgdg dggstg 
                f s agsddgsdg  dgdsgg gerfg dfgsdfg dgdsg dggstg
                dafgd dgsdg dghsdg.
            </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow />
                <div className="text">pimpri chinchwad colege of engg pune-121233</div>
            </div>
            <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone-3434 44 2424</div>
            </div>
            <div className="c-item">
                <FaEnvelope />
                <div className="text">email: datta@123.com</div>
            </div>
            </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">wireless earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projector</span>
            </div>
        <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms and Conditions</span>
            <span className="text">Contact Us</span>
            </div>
       </div>
       <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                A2ZSTORE 2023 CREATED BY DATTA    copyright
            </div>
            <img src={Payment} alt=""/>
        </div>
       </div>
    </footer>;
};

export default Footer;
