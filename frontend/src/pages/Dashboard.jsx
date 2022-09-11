import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import RecipeForm from "../components/RecipeForm"
import Spinner from '../components/Spinner'
import { getRecipes, reset } from '../features/recipes/recipeSlice'

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

    //dispatch(getRecipes())
    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch, recipes])

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
    </>
  )
}

export default Dashboard