export const ContactFormReducer = (state, action) => {
    switch (action.type) {
        case 'FORM_OPEN':
            return {
                ...state,
                expanded: true
            };
        case 'FORM_CLOSE':
            return {
                ...state,
                expanded: false
            };
        default:
            return state;
    }
}