import Header from "../components/Header"
import {Outlet,Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { puzzelDataChange, simulationDataChange, survivalDataChange } from "../store"

const Games = ()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/simulation.json')
        .then((res)=>{
            dispatch(simulationDataChange(res.data))
        })

        axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/survival.json')
        .then((res)=>{
            dispatch(survivalDataChange(res.data))
        })

        axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/puzzel.json')
        .then((res)=>{
            dispatch(puzzelDataChange(res.data))
        })
    },[])
    
    return(
        <div className="Games">
            <Header/>

            <h1 className="between_title">게임 목록</h1>

            <div className="Games_category">
                <Link to='/games/all'>모든 게임</Link>
                <Link to='/games/puzzel'>퍼즐 게임</Link>
                <Link to='/games/simulation'>시뮬레이션 게임</Link>
                <Link to='/games/survival'>생존 게임</Link>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Games