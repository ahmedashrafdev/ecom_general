

export const state = () => ({
    errMsg: null,
    errCode: null,
    mobileCateghoriesModal : false,
    mobileFiltersModal : false,
    mobileOrdersModal : false,
    mobilePointsModal : false,
    mobileAddressesModal : false,
    mobileWishlistModal:false,
    qtys: [
        1,2,3,4,5,6,7,8,9,10
    ],
    weights: [
       .25 , .5 , .75 , 1,
       1.25 , 1.5 , 1.75 ,2,
       2.25 , 2.5 , 2.75 , 3,
       3.25 ,3.5 , 3.75 , 4,
       4.25 , 4.5 , 4.75 , 5,
       5.25 , 5.5 , 5.75 , 6,
       6.25 , 6.5 , 6.75 , 7,
       7.25 , 7.5 , 7.75 , 8,
       8.25 , 8.5 , 8.75 , 9,
       9.25 , 9.5 , 9.75 , 10,
       10.25 , 10.5 , 10.75 , 11,
       11.25 , 11.5 , 11.75 , 12,
       12.25 , 12.5 , 12.75 , 13,
       13.25 , 13.5 , 13.75 , 14,
       14.25 , 14.5 , 14.75 , 15,
       15.25 , 15.5 , 15.75 , 16,
       16.25 , 16.5 , 16.75 , 17,
       17.25 , 17.5 , 17.75 , 18,
       18.25 , 18.5 , 18.75 , 19,
       19.25 , 19.5 , 19.75 , 20,
    ]

});

export const mutations = {
    setErrMsg(state, payload) {
        state.errMsg = payload;
    },
    mobileOrdersModal(state, payload)
    {
        state.mobileOrdersModal = payload
    },
    
    mobilePointsModal(state, payload)
    {
        state.mobilePointsModal = payload
    },
    
    mobileAddressesModal(state, payload)
    {
        state.mobileAddressesModal = payload
    },
    
    mobileFiltersModal(state, payload) {
        state.mobileFiltersModal = payload;
    },
    mobileCategoriesModal(state, payload) {
        state.mobileCateghoriesModal = payload;
    },
    mobileWishlistModal(state, payload) {
        state.mobileWishlistModal = payload;
    },
    setErrCode(state, payload) {
        state.errCode = payload;
    }
};

export const getters = {
    errMsg: state => {
        return state.errMsg
    },
    mobileOrdersModal: state => {
        return state.mobileOrdersModal
    },
    mobilePointsModal: state => {
        return state.mobilePointsModal
    },
    mobileAddressesModal: state => {
        return state.mobileAddressesModal
    },
    mobileWishlistModal: state => {
        return state.mobileWishlistModal
    },
    mobileCateghoriesModal: state => {
        return state.mobileCateghoriesModal
    },
    mobileFiltersModal: state => {
        return state.mobileFiltersModal
    },
    qtys : state => {
        return state.qtys
    },
    weights: state => {
       return  state.weights
    },
    errCode: state => {
        return state.errCode
    }
}