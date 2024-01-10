import { createSlice ,nanoid } from "@reduxjs/toolkit";

// nanoid => generate the unique id.

const initialState = {
    todos:[{id:1,text:"hello world"}]
}

// slices is big version of the reducers.

export const todoSlice = createSlice({
    name:"todos"
    ,initialState,
    reducers:{
    //  contains  Property or functions.
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
                // payLoad is also an object.
                // state -> initialState -> we get the todos  array.
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
    // In contextApi we only declare a function without defination but here we define it.
    }
})

// here we export two parts of the slices.
// 1. reducers
// 2. actions


export const {addTodo,removeTodo} = todoSlice.actions


export const todoReducer =  todoSlice.reducer