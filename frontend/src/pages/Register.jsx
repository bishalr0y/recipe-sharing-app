import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)


    useEffect(( )=> {
        if(isError) {
            toast.error(message)
        }

        // if registered or logged in
        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset)
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Passwords donot match')
        } else {
            const userData = {
                name, 
                email, 
                password
            }
            console.log(userData)
            dispatch(register(userData))
        }
    } 

    if(isLoading) {
        return <Spinner />
    }

    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type='text' className='formControl' id='name' name='name' value={name} placeholder='Enter your name' onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type='email' className='formControl' id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type='password' className='formControl' id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange}/>
                </div>
                <div className="form-group">
                    <input type='password' className='formControl' id='password2' name='password2' value={password2} placeholder='Confirm password' onChange={onChange}/>
                </div>

                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Submit
                    </button>
                </div>
               
            </form>
        </section>
    </>
  )
}

export default Register