import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cart_length=useSelector(state=>[...new Set(state.CartReducer.cart)]);

    return (
        <>
            <div className="container-fluid bg-dark" id="Navbar">
                <div className="container">
                    <div className="row align-items-center  ">
                        <div className="col-md-6 text-center">
                            <NavLink to="/">Products</NavLink>
                        </div>
                        <div className="col-md-6 mt-1 mb-3 text-center">
                            <NavLink to="/cart">
                                <Badge badgeContent={cart_length.length} color="primary">
                                    <BsFillCartFill />
                                </Badge>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
