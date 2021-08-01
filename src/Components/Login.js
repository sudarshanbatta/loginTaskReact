import React,{useEffect,useState} from 'react'
import UserName from './UserName';
import Button from './Button';
import Password from './Password';
import { useFormik } from 'formik';
import SimpleCard from './SimpleCard';
import { useDispatch,useSelector } from 'react-redux';
import { getLoginUser } from '../Redux/Actions';
import { useHistory } from 'react-router';
import './Login.css';
import userAvatar from '../assets/images/user.png'

const AuthUser ={
    username:'hruday@gmail.com',
    password:'hruday123'
}
const Login = () => {
    const [ error, setError] = useState('')
    const {user} = useSelector((state) => state.usersData);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getLoginUser(AuthUser))
    },[]);

    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = values =>{
        if(values.email===user.username && values.password===user.password){
           history.push('/employeeList')
        }else{
           setError('Username or Password Incorrect')
        }
       
    }
    const validate = values => {
        let errors = {}
        
        if (!values.email) {
            errors.email = 'Email Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter valid email'
        }
        if(!values.password){
            errors.password='Password Required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div>
            <SimpleCard className="formContainer">
                <div className="user-icon">
                    <img src={userAvatar} alt="User Logo" height="70px" width="70px"/>
                </div>
            <h3 className="title"> User Login </h3>
            <form  onSubmit={formik.handleSubmit}>
                <UserName
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={formik.values.email}
                    onValueChange={formik.handleChange}
                    onInputBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                    <span className="input-feedback">{formik.errors.email}</span>
                )}
                <br/><br/>
                <Password
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onValueChange={formik.handleChange}
                    onInputBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                    <div className="input-feedback">{formik.errors.password}</div>
                )}
                <Button buttonType="submit" />
            </form>
            {error &&  (
                    <div className="error-format">{error}</div>
                )}
            </SimpleCard>
        </div>

    );
}
export default Login
