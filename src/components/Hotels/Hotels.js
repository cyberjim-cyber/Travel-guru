import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import { useParams } from 'react-router-dom';
import HotelData from '../../FakeData/Hotels.json';


import Place from '../../FakeData/Place.json';
import './Hotels.css'
import Details from '../Details/Details';

const Hotels = () => {
    const { name } = useParams(); //selected place
    const data = [...HotelData] // all hotels
    const place = [...Place]; // all 4 place

    const selectedPlace = place.find(each => each.name === name);
    const hotels = data.filter( each => each.place === name)

   
    return (
        <div>
            <MDBContainer>
            <MDBRow style={{ backgroundColor: 'white' }}>
              
                <MDBCol className="col-7">
                    <div className="m-3">
                        <h4><strong>Stay in {name}</strong></h4> <br/> 
                    </div>
                    {
                        hotels.map(each => <Details key={each.id} data={each}></Details>)
                    }
                </MDBCol>
                
            </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Hotels;