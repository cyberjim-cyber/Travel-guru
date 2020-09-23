import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import star from '../../Images/icons/star_1_.png'

const Details = (props) => {
    const {title, feature, details, rating, price, image} = props.data

    return (
        <div>
            <MDBRow className="m-3 pb-100">
                <MDBCol className="col-5">
                    <div>
                        <img src={image} height="160" width="220" style={{borderRadius:'10px'}} alt="" />
                    </div>
                </MDBCol>
                <MDBCol  className="col-7 ">
                    <b>{title}</b> <br/>
                    <small  className="text-muted">{feature}</small> <br/>
                    <small  className="text-muted">{details}</small> <br/>
                    <span>
                        <img src={star} height="10" alt="" />&nbsp;
                        <small>{rating}</small> 
                    </span> <br/>
                    <span><b>${price}/</b></span><span style={{color: 'red',fontSize:'25px '}} className="text-muted">night</span>
                    <br/>
                   
                  </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Details;