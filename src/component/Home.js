import React, {useEffect} from 'react';
import banner from './resource/banner.png'
import './style.css';
import {
    Link
  } from "react-router-dom";
import fakeData from './fakeData';
import HomeCard from './HomeCard';

const Home = () => {
    console.log(fakeData)
    return (
        <>
        <div className="container">
            <div className="row mb-5 justify-content-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <h3 className="">Welcome to Rest Countries</h3>
                    <h5 className="">Rest Countries is a open source API</h5>
                    
                    <Link to="/countries">
                        <button className="btn btn-outline-dark btn-sm mx-auto">
                            <span className="font-weight-bold">Check</span>
                        </button>
                    </Link>
                    
                </div>

                <div >
                    <img className="home-bg" src={banner} />
                </div>
            </div>
            
            <div className="mb-5">
                <h4 className="text-center mb-3">About Us</h4>
                <p className="text-justify mx-auto" style={{width:"96%",maxWidth:"890px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>

            <div className="row justify-content-center align-items-center">
                 {
                     fakeData.map(key=> <HomeCard data={key} />)
                 }
            </div>

        </div>

         
        </>
    );
};

export default Home;