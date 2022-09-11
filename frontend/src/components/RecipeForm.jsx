import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createRecipe} from '../features/recipes/recipeSlice'

const RecipeForm = () => {

    const [text, setText] = useState({
        title: '',
        ingredients: '',
        calories: ''
    })

    const dispatch = useDispatch()

    const {title, ingredients, calories} = text

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createRecipe(text))
        setText({
            title: '',
            ingredients: '',
            calories: ''
        })
    }

    const onChange = (e) => {
        setText((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor='text'>
                        Recipe Name
                    </label>
                    <input type="text" name='title' value={title} onChange={onChange}/>
                    <label htmlFor='text'>
                        Ingredients
                    </label>
                    <input type="text" name='ingredients' value={ingredients} onChange={onChange}/>
                    <label htmlFor='number'>
                        Calories
                    </label>
                    <input type="number" name='calories' value={calories} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type='submit'>
                        Add recipe
                    </button>
                </div>
            </form>
        </section>
  )
}

export default RecipeForm