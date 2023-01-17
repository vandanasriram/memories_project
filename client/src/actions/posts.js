import * as api from '../api';




//ACTION CREATORS are functions that create an action which returns an action and a payload. with thunk, you can specify async functions as follows

//async(dispatch) => represents async thunk

export const getPosts =()=> async(dispatch) =>{

try {
    const {data} = await api.fetchPosts();
    dispatch({type : 'FETCH_ALL', payload : data})
} catch (error) {
    console.log(error.message)
}

   
}