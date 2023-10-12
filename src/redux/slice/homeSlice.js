import { createSlice } from "@reduxjs/toolkit";
import { categorias } from "../../data/categorias";
import { products } from "../../data/products";

const homeSlice = createSlice({
    
    name: "home",
    
    initialState: {
        allCategories: categorias,
        allProducts: products,
        categoryPressed: "",
        productsFilterByCategory: [],
        productSelected: {},
    },
    
    reducers: {
        setCategory: (state, action) => {
            state.categoryPressed = action.payload;

            state.productsFilterByCategory = state.allProducts.filter(
                (el) => el.category === state.categoryPressed
            );
        },

        setProductSelected: (state, action) => {
            state.productSelected = action.payload;
        },

    },
});

export const { setCategory, setProductSelected } = homeSlice.actions;

export default homeSlice.reducer; 

