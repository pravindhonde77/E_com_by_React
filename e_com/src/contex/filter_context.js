import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontex";
import reducer from "../reducer/filterReducer"
const FilterContext = createContext()

const initialState = {
   filter_products: [],
   all_products: [],
   grid_view: true,
   sorting_value: "lowest",

   filters: {
      text: "",
      category: "all",
      company: "all",
      color:"all",
   }
}

export const FilterContextProvider = ({ children }) => {

   const { products } = useProductContext()
   //   console.log(products);

   const [state, dispatch] = useReducer(reducer, initialState)


   useEffect(() => {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })

   }, [products])

   // to set the grid view
   const setGridView = () => {
      return dispatch({ type: "SET_GRID_VIEW" })
   }

   // to set the list view
   const setListView = () => {
      return dispatch({ type: "SET_LIST_VIEW" })
   }

   //sorting Function
   const sorting = (event) => {
      let userValue = event.target.value
      dispatch({ type: "GET_SORT_VALUE", payload: userValue })
   }

   //update the left filter values
   const updateFilterValue = (event) => {
      let name = event.target.name;
      let value = event.target.value

      return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } })
   }

   //to sort the product
   useEffect(() => {
      dispatch({ type: "FILTER_PRODUCTS" })
      dispatch({ type: "SORTING_PRODUCTS" })
   }, [products, state.sorting_value, state.filters])


   return (
      <FilterContext.Provider value={{
         ...state,
         setGridView,
         setListView,
         sorting,
         updateFilterValue,
      }}>
         {children}

      </FilterContext.Provider>
   )
}

export const useFilterContext = () => {
   return useContext(FilterContext)
}