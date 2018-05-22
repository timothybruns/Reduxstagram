// reducer takes in action (info about what happened) & 
// a copy of the current state

function comments(state = [], action) {
    console.log(state, action);
    return state;
}

export default comments;