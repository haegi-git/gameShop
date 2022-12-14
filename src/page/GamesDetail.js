import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addItem, allDataChange, countDown, countUp, getPayItem, setTargetGame, } from "../store";
import { getAllData } from "../util/GetAjax";

// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'

const GamesDetail = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch()
    const allData = useSelector(state=>state.allData)
    const targetGame = useSelector(state=>state.targetGame)
    const cartItem = useSelector(state=>state.cartItem)
    const navigate = useNavigate()
    useEffect(()=>{
        getAllData().then(res=>dispatch(allDataChange(res)))
        getAllData().then(
            res => dispatch(setTargetGame(res.find((ele)=> parseInt(ele.id) === parseInt(id))))
            )
        
    },[])
    
    
    const up = ()=>{
        dispatch(countUp(1))
    }
    const down = ()=>{
        dispatch(countDown(1))
    }

    const addCart = ()=>{
        const overlap = cartItem.find((ele)=> parseInt(ele.id) === parseInt(id))
        if(overlap){
            alert('이미 장바구니에 들어갔다')
        }else{
            const xptmxm = {...targetGame, price : targetGame.count * targetGame.price}
            dispatch(addItem(xptmxm))
        }
    }

    const pay = ()=>{
        navigate('/payment');
        const xptmxm = {...targetGame, price : targetGame.count * targetGame.price}
        dispatch(getPayItem(xptmxm))
    }
    
    if(allData.length > 1){
        return(
            <div>
            <Header/>
            <div className="Detail">
                
                <div className="Detail_left">
                    <div className="Detail_imgbox">
                    <img src={targetGame.img} alt='상품이미지'/>
                    </div>
                </div>
                <div className="Detail_right">
                    <div className="Detail_intro">
                    <h3 className="Detail_genre">{targetGame.genre}</h3>
                    <h3 className="Detail_title">{targetGame.title}</h3>

                    <form className="Detail_form">
                    <FontAwesomeIcon className="icon" icon={faChevronUp}
                    onClick={()=>{
                        up();
                    }} />
                    <h3>{targetGame.count} 수량</h3>
                    <FontAwesomeIcon className="icon" icon={faChevronDown}
                    onClick={down} />
                    </form>
                    <h4 className="Detail_price">{targetGame.price * targetGame.count}원</h4>

                    <button className="Detail_btn" onClick={addCart}>장바구니 담기</button>
                    <button className="Detail_btn" onClick={pay}>바로 구매하기</button>
                    <p className="Detail_text">
                        포폴용겸 공부용으로 만든사이트이기에<br/>
                        주문해도 결제는 어차피 안됩니다.
                    </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }    
}
export default GamesDetail