var initialState = {
    hesapId: '121515',
    ekNoo: '1234',
  
};

export default function reducerHesap(state = initialState, action) {
    switch (action.type) {
        case 'UpdatehesapId':
            return Object.assign({}, state, { hesapId: action.payload.hesapId });
        case 'UpdateekNo':
            return Object.assign({}, state, { ekNoo: action.payload.ekNoo });
        
        
        default:
            return state;
    }
}