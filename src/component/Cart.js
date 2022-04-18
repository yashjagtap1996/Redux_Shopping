import React,{useState,useEffect} from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/actions';

const Cart = () => {

    const cart_item=useSelector(state=>[...new Set(state.CartReducer.cart)])
    console.log(cart_item);
    const dispatch=useDispatch();

    const [gettotal,setgetTotal]=useState(0)
    

    useEffect(()=>{
        const total = () => {
            let price = 0
            cart_item.map((e) => {
                return price = price + e.price
            })
            setgetTotal(price)
        }
        total();
    })


  return (
    <>  
    {cart_item.length === 0 ? 
            <>
            <h1 className='text-center mt-4 text-info'>No Item Added!</h1>
            <div className="text-center">
                <img src="images/empty.gif" alt="" />
            </div>
            </>                                                        
            :
              <div className="container mt-5 bg-light border border-1 p-5" id="Cart">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                      <h1>Total:₹{gettotal}</h1>
                      
                      <button type="button" class="btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          CheckOut
                      </button>

                      
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title display-6" id="exampleModalLabel">Total:₹{gettotal}</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      {
                                          cart_item.map((e,i)=>{
                                              return <ul className='list-unstyled'>
                                                  <li>{i+1}) {e.title}</li>
                                              </ul>
                                          })
                                      }
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn-lg btn-secondary"  data-bs-dismiss="modal">Proceed</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  <div className="row">
                      {
                          cart_item.map((item) => {
                              return <div className="col-md-12 mb-5 bg-secondary d-flex flex-column flex-md-row align-items-center justify-content-around border border-dark rounded-md-pill" key={item.id}>
                                  <div className="photo">
                                      <img src={item.gallery} alt="" />
                                  </div>
                                  <div className="brand text-center">
                                      <h1>BRAND</h1>
                                      <p className='text-light'>{item.brand}</p>
                                  </div>
                                  <div className="title text-center">
                                      <h1>Phone</h1>
                                      <p className='text-light'>{item.title}</p>
                                  </div>
                                  <div className="price text-center">
                                      <h1>Price</h1>
                                      <p className='text-light'>₹{item.price}</p>
                                  </div>
                                  <div className="trash">
                                      <FaTrash onClick={() => dispatch(removeFromCart(item.id))} className='mb-4 text-danger trash' title='Delete' />
                                  </div>
                              </div>
                          })
                      }

                  </div>
              </div>
    }
        
    </>
  )
}

export default Cart
