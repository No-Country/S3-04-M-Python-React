import React, {useReducer, createContext, useContext} from 'react';

const initialState = {
    latitud: null,
    longitud: null,
    showDestiny: false
}

const ClothesContext = createContext(initialState);

export const useClothesContext = () => {
    const context = useContext(ClothesContext);
    return context;
}

const clothesReducer = (state, action) => {
    const {type, value} = action;
    switch (type) {
        case "SET_LAT":
            return{
                ...state,
                latitud: value
            };
            
        case "SET_LNG":
            return{
                ...state,
                longitud: value
            };
        case "SET_SHOW_DESTINY":
            return{
                ...state,
                showDestiny: value
            };
        default: 
        return state; 
    }
        

}

export const ClothesProvider = ({children}) => {
    const [state, dispatch] = useReducer(clothesReducer, initialState);

    const values = {
        dispatch,
        latitud: state.latitud,
        longitud: state.longitud,
        showDestiny: state.showDestiny
    }
    
    return(
        <ClothesContext.Provider value ={values}>{children}</ClothesContext.Provider>
    )
}


