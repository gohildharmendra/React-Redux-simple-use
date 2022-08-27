import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
    const balance = useSelector(state=>state.amount)
  return (
    <div className='container my-3 text-center'>
    <h2>Deposit / Withdraw Money</h2>
    <button className="btn btn-danger mx-2" onClick={ balance>0?()=>{withdrawMoney(100)}:0}>-</button>
    <span>Update Balance</span>
    <button className="btn btn-success mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    <br/><br/>
    <span>Your Balance: <strong>{balance}</strong></span>
    {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    <span>Update Balance</span>
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    */}
    </div>
  )
}

export default Shop