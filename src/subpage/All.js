import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer.js"
import GameList from "../components/GameList.js"
import Header from "../components/Header.js"
import { allDataChange } from "../store.js"
import { getAllData } from "../util/GetAjax.js"

const All = ()=>{

    const allData = useSelector(state=> state.allData)

    const dispatch = useDispatch()
    
    useEffect(()=>{
       getAllData().then(res=>dispatch(allDataChange(res)))
    },[])

    return(
        <div>
            <Header/>
            <GameList gameData={allData} gameTitle={'모든 게임'} />
            <Footer/>
        </div>
    )
}
export default All