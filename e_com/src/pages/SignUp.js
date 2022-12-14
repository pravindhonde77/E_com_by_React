import React, { useState } from 'react'
import "../styles/Signup.css"
import { useDispatch } from "react-redux";
import { signUpRequest } from '../redux/Auth/action';
import { useNavigate } from 'react-router-dom';





const initState = {
    name: "",
    email: '',
    password: '',
    mobile: "",
}

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [data, setData] = useState(initState);
    const { name, email, password, mobile } = data


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(
            {
                ...data,
                [name]: value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(initState)
        dispatch(signUpRequest(data))
        navigate("/login")
        // console.log(data)
    }

    return (
        <div className="box" style={{ marginTop: 30 }}>
            <div className="outerDiv">
                <div className="innerDiv">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <h3><strong style={{ fontSize: 25 }}> Create Your Account</strong></h3>
                        <div className="formInputgroup">
                            <input
                                type="text"
                                className="formInput"
                                placeholder="Nick Name"
                                onChange={handleChange}
                                name="name"
                                value={name}

                            />
                        </div>
                        <div className="formInputgroup">
                            <input
                                type="email"
                                className="formInput"
                                placeholder="Email address"
                                onChange={handleChange}
                                name="email"

                            />
                        </div>
                        <div className="formInputgroup">
                            <input
                                type="password"
                                className="formInput"
                                placeholder=" Password"
                                onChange={handleChange}
                                name="password"

                            />
                        </div>
                        <div className="formInputgroup">
                            <input
                                type="number"
                                className="formInput"
                                placeholder="Enter mobile number"
                                onChange={handleChange}
                                name="mobile"


                            />
                        </div>

                        <br />
                        <button type="submit" className="s">
                            <strong> Create Account</strong>

                        </button>
                        {/* <Link to="/login">
                            <p className="hint" >
                                Already Registered login ?
                            </p></Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp