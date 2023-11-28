import { createSlice } from "@reduxjs/toolkit"

 

const Slice=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
            return [...state, {id:Date.now(),text:action.payload}];
        },
        deletetodo:(state,action)=>{ 
            return state.filter((todo)=> todo.id !==action.payload);
        },
        edittodo:(state,action)=>{
            return state.map((todo)=>
            todo.id ===action.payload.id ?{...todo,text:action.payload.text}:todo );
        }

    }
}  
);
 export const {addtodo,deletetodo,edittodo}=Slice.actions;
export default Slice.reducer;