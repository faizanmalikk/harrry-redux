import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../store/actionCreators'
function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector(state => state.amount)
  const {withdrawMoney , depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className='container mt-4'>
        <h2>Buy this shoes</h2>
        <button className='btn btn-primary mx-1' onClick={()=>{withdrawMoney(100)}}>-</button> 
        <span>Add to cart</span>
         <button className='btn btn-primary mx-1' onClick={()=>{depositMoney(100)}} >+</button>
    </div>
  )
}

export default Shop