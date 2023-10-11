import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { loginUser } from '../api'


export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}


const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState('iddle')
    const [error, setError] = React.useState(null)
    const message =useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        loginUser(loginFormData)
        .then(data =>{
            navigate('/host',{ replace: true })
        } 
            )
        .catch(err =>setError(err))
        .finally(()=>setStatus('iddle'))
        
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  return (
    <div>
    <h1>Sign in to your account</h1>
    {message && <h2 className="text-red-500">{message}</h2>}
    {error && <h3 className="text-red-500">{error.message}</h3>}
    <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </form>
      
    </div>
  )
}

export default Login
