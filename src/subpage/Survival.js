import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import GameList from "../components/GameList"
import Header from "../components/Header"
import { survivalDataChange } from "../store"
import { getSurvivalData } from "../util/GetAjax"

const Survival = ()=>{
    let survivalData = useSelector(state=>state.survivalData)
    const dispatch = useDispatch()
    useEffect(()=>{
        getSurvivalData().then(res=>dispatch(survivalDataChange(res)))
    },[])
    return(
        <div>
            <Header/>
            <GameList gameData={survivalData} gameTitle={'생존 게임'}/>
            <Footer/>
        </div>
    )
}
export default Survival