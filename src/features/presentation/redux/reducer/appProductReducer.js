const appProductReducer = (state, action) => {
    state.product = action.payload.product;
    state.price = action.payload.price;
}


export default appProductReducer;