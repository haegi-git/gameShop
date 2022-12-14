import { useDispatch, useSelector } from "react-redux"
import Header from "../components/Header"

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { delItem, getPayItem } from "../store";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = ()=>{
    const cartItem = useSelector(state=>state.cartItem)
    
    const itemTotal = ()=>{
        if(cartItem.length >= 1){
        
            const priceArr = cartItem.map((a,i)=>{
                return a.price
            })
            const itemTotal = priceArr.reduce((a,b)=> a+b)
            return itemTotal
            }else{
                return 0
            }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const payPost = ()=>{
        if(cartItem.length >= 1){
            dispatch(getPayItem(cartItem))
            navigate('/payment')
        }else{
            alert('장바구니가 비어있음')
        }
    }
    
    return(
        <div>
            <Header/>
            <div className="cart_container">
                
            <div className="cart_left">
                <Table className="table">
                    <thead>
                        <tr>
                            <th colSpan={2}>상품</th>
                            <th>수량</th>
                            <th>가격</th>
                            <th>삭제</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItem.map((a,i)=>{
                            return(
                                <tr key={i} >
                                    <td><img src={a.img}/></td>
                                    <td className="cart_text">{a.title}</td>
                                    <td className="cart_text">{a.count}</td>
                                    <td className="cart_text">{a.price}</td>
                                    <td className="cart_del cart_text">
                                        <button className="del_btn"
                                        onClick={()=>{
                                            dispatch(delItem(a.id))
                                        }}>X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>

            <div className="cart_right">
                        <h3>Total Item</h3>
                        {cartItem.map((a,i)=>{
                            return(
                                <p key={i} className="cart_price">{a.title}의 가격{a.price}원</p>
                            )
                        })}
                        <div className="total">
                            <h4>Total : {itemTotal()}원</h4>
                            <button className="buy_btn" onClick={payPost}>구매하기</button>
                        </div>
            </div>

            </div>
        </div>
    )
}
export default Cart