var initialState = {
    musteriId: '211324',
    tckn:'121541511'
   
};

export default function reducerMusteri(state = initialState, action) {
    switch (action.type) {
        case 'UpdateId':
            return Object.assign({}, state, { musteriId: action.payload.musteriId });
        case 'UpdateTC':
                return Object.assign({}, state, { tckn: action.payload.tckn });
        default:
            return state;
    }
}