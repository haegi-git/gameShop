import { useSelector } from "react-redux"
import Header from "../components/Header"

const Payment = ()=>{
    const payItem = useSelector(state=>state.pay)

    if(payItem.length >= 1){
        return(
            <div>
                <Header/>
    
                {payItem.map((a,i)=>{
                    return (
                        <div className="payData">
                            <h3>{a.id}아이디</h3>
                            <h3>{a.title}타이틀</h3>
                            <h3>{a.price}가격</h3>
                            <h3>{a.genre}장르</h3>
                            <h3>{a.count}갯수</h3>
                        </div>
                    )
                })}
    
                <h1>결제창은 구현하지않았습니다.</h1>
                
            </div>
        )
    }else{
        return(
            <div>
                <h3>{payItem.title} 타이틀</h3>
                <h3>{payItem.price} 가격</h3>
                <h3>{payItem.genre} 장르</h3>
                <h3>{payItem.count} 갯수</h3>
            </div>
        )
    }
    
}
export default Payment