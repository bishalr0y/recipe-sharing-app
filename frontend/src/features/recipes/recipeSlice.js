import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import recipeService from "./recipeService"
const initialState = {
    recipes: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new recipe
export const createRecipe = createAsyncThunk('/recipes/create', async (recipeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.createRecipe(recipeData, token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})

// Get user goals
export const getRecipes = createAsyncThunk('recipes/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.getRecipes(token)
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete recipe
export const deleteRecipe = createAsyncThunk(
    'recipes/delete',
    async (id, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await recipeService.deleteRecipe(id, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )
  

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRecipe.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createRecipe.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes.push(action.payload) //push new recipe

            })
            .addCase(createRecipe.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })

            
            .addCase(getRecipes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes = action.payload

            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload

            })


            .addCase(deleteRecipe.pending, (state) => {
                state.isLoading = true
              })
              .addCase(deleteRecipe.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.recipes = state.recipes.filter(
                  (recipe) => recipe._id !== action.payload.id
                )
              })
              .addCase(deleteRecipe.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
              })
    }
})


export const {reset} = recipeSlice.actions
export default recipeSlice.reducer