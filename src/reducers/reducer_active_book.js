// only for state this reducer is responsible for, not app state

export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}
