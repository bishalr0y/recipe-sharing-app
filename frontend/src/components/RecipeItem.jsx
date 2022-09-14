import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipes/recipeSlice'

function RecipeItem({ recipe }) {
  const dispatch = useDispatch()

  return (
    <div className='recipe'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2>Name📛: {recipe.title}</h2>
      <h3>Ingredients✅: {recipe.ingredients}</h3>
      <h3>Calories🔥: {recipe.calories}</h3>
      <button onClick={() => dispatch(deleteRecipe(recipe._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default RecipeItem