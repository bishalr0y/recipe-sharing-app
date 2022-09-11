import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import RecipeForm from "../components/RecipeForm"
import Spinner from '../components/Spinner'
import { getRecipes, reset } from '../features/recipes/recipeSlice'
import RecipeItem from '../components/RecipeItem'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user} = useSelector((state) => state.auth)
  const {recipes, isLoading, isError, message} = useSelector((state) => state.recipes)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if(!user) {
      navigate('/login')
    }

    
    dispatch(getRecipes())
    
    // return () => {
    //   dispatch(reset())
    // }

  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
         <p>Recipes Feed</p>
      </section>
      <RecipeForm /> 

        <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>No recipes to display</h3>
        )}
      </section> 
    </>
  )
}

export default Dashboard