import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartData from '../Data'
import { addToCart } from '../redux/actions/actions';

const Products = () => {


    const dispatch=useDispatch();

  return (
    <>
        <div className="container mt-5" id='Products'>
              <div className="row">
                  {
                      CartData.map((item)=>{
                        return <div className="col-md-4 mb-5">
                            <div className="card bg-light p-1 mx-auto" style={{ width: "20rem"}}>
                                <img src={item.gallery} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h1 className="card-title">{item.brand}</h1>
                                    <p className="card-text">{item.title}</p>
                                    <p className="card-text">₹{item.price}</p>
                                    <button onClick={()=>dispatch(addToCart(item))} className='btn btn-primary w-75 p-1'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                      })
                  }
              </div>
        </div>
    </>
  )
}

export default Products
