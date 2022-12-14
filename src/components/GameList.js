import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "./Pagination"
import { selectValue, setTotal } from "../store"
import { Link } from "react-router-dom"

const GameList = (props)=>{

    let limit = useSelector(state => state.limit)
    let page = useSelector(state => state.page)
    const dispatch = useDispatch()
    const offset = (page - 1) * limit;
    useEffect(()=>{
        if(props.gameData.length > 5){
            dispatch(setTotal(props.gameData.length))
        }
    },[props.gameData])
    return(
        <div className="GameContainer">
            <h1 className="Game_Title">{props.gameTitle}</h1>
            <div className="Game_Sort">
                <select type="number" value={limit} onChange={(e)=>{
                    dispatch(selectValue(Number(e.target.value)))
                }}>
                    <option value='5'>5개씩 보기</option>
                    <option value='10'>10개씩 보기</option>
                    <option value='15'>15개씩 보기</option>
                </select>
            </div>
            <div className="Game_List">
                {props.gameData.slice(offset, offset + limit).map((a,i)=>{
                    return(
                        <Link className="Game_text" to={`/gamesdetail/${a.id}`} key={i}>
                        <div className="Game_Item">
                            <img src={a.img}/>
                            <h3>{a.title}</h3>
                            <p>{a.price}원</p>
                        </div>
                        </Link>
                    )
                })}
            </div>

            <footer>
                <Pagination/>
            </footer>

        </div>
    )
}
export default React.memo(GameList)