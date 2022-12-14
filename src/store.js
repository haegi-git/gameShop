import { configureStore, createSlice } from '@reduxjs/toolkit'

let puzzelData = createSlice({
    name : 'puzzelData',
    initialState : [{}],
      reducers : {
        puzzelDataChange(state,action){
            return state = action.payload
        }
      }
})

let simulationData = createSlice({
    name : 'simulationData',
    initialState : [{}],
    reducers : {
        simulationDataChange(state,action){
            return state = action.payload
        }
    }
})

let survivalData = createSlice({
    name : 'survivalData',
    initialState : [{}],
    reducers : {
        survivalDataChange(state,action){
            return state = action.payload
        }
    }
})

let allData = createSlice({
    name : 'allData',
    initialState : [{}],
    reducers : {
        allDataChange(state,action){
            return state = action.payload
        }
    }
})

let bestData = createSlice({
    name : 'bestData',
    initialState : [{}],
    reducers : {
        bestDataChange(state,action){
            return state = action.payload
        }
    }
})

let limit = createSlice({
    name : 'limit',
    initialState : 5,
    reducers : {
        selectValue(state,action){
            return state = action.payload
        }
    }
})

let page = createSlice({
    name : 'page',
    initialState : 1,
    reducers : {
        setPage(state,action){
           return state = action.payload
        }
    }
})

let total = createSlice({
    name : 'total',
    initialState : 0,
    reducers : {
        setTotal(state,action){
           return state = action.payload
        }
    }
})

let targetGame = createSlice({
    name : 'targetGame',
    initialState : {},
    reducers : {
        setTargetGame(state,action){
            return state = action.payload
        },
        countUp(state,action){
            state.count = state.count + action.payload
        },
        countDown(state,action){
            if(state.count > 1){
                state.count = state.count - action.payload
            }else{
                alert('최소 수량입니다.')
            }
        },
    }
})

let cartItem = createSlice({
    name : 'cartItem',
    initialState : [],
    reducers : {
        addItem(state,action){
            state = state.push(action.payload)
        },
        delItem(state,action){
            return state = state.filter((ele)=>ele.id !== action.payload);
        }
    }
})

let pay = createSlice({
    name : 'pay',
    initialState : [],
    reducers : {
        getPayItem(state,action){
            return state = action.payload
        }
    }
})

export default configureStore({
	reducer: { 
        puzzelData : puzzelData.reducer,
        simulationData : simulationData.reducer,
        survivalData : survivalData.reducer,
        limit : limit.reducer,
        page : page.reducer,
        total : total.reducer,
        allData : allData.reducer,
        targetGame : targetGame.reducer,
        cartItem : cartItem.reducer,
        pay : pay.reducer,
        bestData : bestData.reducer
     }
})


export const { puzzelDataChange } = puzzelData.actions;
export const { simulationDataChange} = simulationData.actions;
export const { survivalDataChange} = survivalData.actions;
export const { selectValue } = limit.actions;
export const { setPage } = page.actions;
export const { setTotal} = total.actions;
export const { allDataChange} = allData.actions;
export const { setTargetGame,countUp,countDown,priceUp} = targetGame.actions;
export const { addItem,delItem } = cartItem.actions;
export const { getPayItem} = pay.actions;
export const { bestDataChange} = bestData.actions;