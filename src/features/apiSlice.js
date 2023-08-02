

import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    apiData:{}
}

const DataSlice = createSlice({
    initialState,
    name:'apiDataSlice',
    reducers:{
        addData:(state,{payload})=>{
            state.apiData = payload
        }
    }
})

export const {addData} = DataSlice.actions;

export default DataSlice.reducer;