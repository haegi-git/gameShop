import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import GameList from "../components/GameList"
import Header from "../components/Header"
import { simulationDataChange } from "../store"
import { getSimulationData } from "../util/GetAjax"

const Simulation = ()=>{
    const dispatch = useDispatch()
    let simulationData = useSelector(state=>state.simulationData)
    useEffect(()=>{
        getSimulationData().then(res => dispatch(simulationDataChange(res)))
    },[])
    
    return(
        <div>
            <Header/>
        <GameList gameData={simulationData} gameTitle={'시뮬레이션 게임'}/>
        <Footer/>
        </div>
    )
}
export default Simulation