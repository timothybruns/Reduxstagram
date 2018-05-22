// reducer takes in action (info about what happened) & 
// a copy of the current state

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
        console.log('i likessss')
        const i = action.index;
        return[
            ...state.slice(0,i), // before update
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // after update
        ]

        default: 
            return state;
    }
}

export default posts;