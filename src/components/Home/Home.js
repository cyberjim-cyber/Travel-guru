import { MDBBtn, MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import './Home.css'
import coxsbazar1 from '../../Images/coxsbazar1.jpg';
import sajek from '../../Images/sajek.png';

import sreemongol from '../../Images/sreemongol.png'
import Place from '../../FakeData/Place.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const place = [...Place]
    console.log(place)
    const [value, setValue] = useState(place[0]);
    const placeClick = (id) => {
        setValue(place[id]);
    };

    return (
        <div>
            <MDBRow >
                {/* ----- Home left side */}
                <MDBCol className="col-md-5">
                    <div style={{ color: 'white', height: '250px' }} className=" mt-5">
                        <h1 className="name"><strong className="name-style">{value.name}</strong></h1> <br/>
                        <p className="details">{value.details}</p>
                    </div>
                    <br />
                    <Link to={`/travel/${value.id}`}><MDBBtn className="ml-5" >Booking now <MDBIcon  /></MDBBtn></Link>
                </MDBCol>
                {/* --------right side */}
                <MDBCol className="col-md-7">
                    <div className="d-flex flex-nowrap m-5 place-div">
                        
                        {/* ------ place 1 */}
                        <button onClick={() => placeClick(1)} className="place-btn">
                            <img src={sajek} className="place-card" alt="" />
                            <div class="carousel-caption">
                                <h4>Sajek Valy</h4>
                            </div>
                        </button>
                        {/* ------ place 2 */}
                        <button onClick={() => placeClick(2)} className="place-btn">
                            <img src={sreemongol} className="place-card" alt="" />
                            <div class="carousel-caption">
                                <h4>Sreemangal</h4>
                            </div>
                        </button>
                        {/* ------ place 3 */}
                        <button onClick={() => placeClick(3)} className="place-btn">
                            <img src={coxsbazar1} className="place-card" alt="" />
                            <div class="carousel-caption">
                                <h4>Cox's Bazar</h4>
                            </div>
                        </button>
                    </div>

                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Home;