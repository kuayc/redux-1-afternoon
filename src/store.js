import { createStore } from "redux";

const initialState = {
  name: "",
  category: "",
  authorFirst: "",
  authorLast: "",
  ingredients: [],
  instructions: [],
  recipes: [],
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST = "UPDATE_FIRST";
export const UPDATE_LAST = "UPDATE_LAST";
export const ADD_INGREDIENT = "UPDATE_INGREDIENT_LIST";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const RESET_INPUT = "RESET_INPUT";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    case UPDATE_FIRST:
      return {
        ...state,
        authFirst: payload,
      };
    case UPDATE_LAST:
      return {
        ...state,
        authLast: payload,
      };
    case ADD_INGREDIENT:
      const newIngredient = [...state.ingredients, payload];
      return {
        ...state,
        ingredients: newIngredient,
      };
    case ADD_INSTRUCTION:
      const newInstruction = [...state.instructions, payload];
      return {
        ...state,
        instructions: newInstruction,
      };
    case CREATE_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions,
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions,
      };
      const newRecipes = [...state.recipes, recipe];
      return {
        ...state,
        recipes: newRecipes,
      };
    default:
      return state;
  }
}

export default createStore(reducer);
