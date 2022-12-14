import axios from "axios"

const getSimulationData = async () =>{
    const simulationData = await axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/simulation.json')
    return simulationData.data
}

const getPuzzelData = async () =>{
    const puzzelData = await axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/puzzel.json')
    return puzzelData.data
}

const getSurvivalData = async () =>{
    const survivalData = await axios('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/survival.json')
    return survivalData.data

}

const getAllData = async ()=>{
    const simulationData = await axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/simulation.json')
    const puzzelData = await axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/puzzel.json')
    const survivalData = await axios('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/survival.json')
    
    const allData = [...simulationData.data,...puzzelData.data,...survivalData.data]
    return allData
    
}

const getBestData = async ()=>{
    const bestData = await  axios.get('https://raw.githubusercontent.com/haegi-git/GameShopData/main/gamedata/best.json')
    return bestData.data
}

export {
    getSimulationData,
    getPuzzelData,
    getSurvivalData,
    getAllData,
    getBestData
}