import jsonPlaceholder from '../apis/jsonPlaceholder';

//definfing a function that returnts a function
export const fetchPosts = () => async dispatch =>  {
  const response = await jsonPlaceholder.get('/posts');

 dispatch ({
     type: 'FETCH_POSTS',
     payload: response
    });
};

// We coust use this as well... but we wont
export const selectPost = () => {
    return{
        type: 'SELECT_POST'
    }
}

// Breaks the roles of making an action creator
//  
// export const fetchPosts = async () => {

//     const responce = await jsonPlaceholder.get('/posts');
    
//     return {
//         type: 'FETCH_POSTS',
//         payload: responce
//     };
//    };



// Version 2
//export const fetchPosts = () => {
// return function( dispatch, getState) {
//     const promise =   jsonPlaceholder.get('/posts');

// return {
//     type: 'FETCH_POSTS',
//     payload: promise
// };
// }
// };
