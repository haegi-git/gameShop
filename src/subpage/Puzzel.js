import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import GameList from "../components/GameList"
import Header from "../components/Header"
import { puzzelDataChange } from "../store"
import { getPuzzelData } from "../util/GetAjax"

const Puzzel = ()=>{
    let puzzelData = useSelector(state=>state.puzzelData)
    const dispatch = useDispatch()
    useEffect(()=>{
        getPuzzelData().then(res=> dispatch(puzzelDataChange(res)))
    },[])
    return(
        <div>
            <Header/>
            <GameList gameData={puzzelData} gameTitle={'퍼즐 게임'}/>
            <Footer/>
        </div>
    )
}
export default Puzzel