import React from 'react'
import { 
     useLoaderData, 
    //   useNavigate ,
      useNavigation,
    Form,
    redirect,
    useActionData

} from 'react-router-dom'
import { loginUser } from '../api'


export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"
    
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        // const res= redirect("/host")
        const res = redirect(pathname)
        res.body= true
        return res
    }
    catch(err){
       return err.message
    }

}
const Login = () => {
    // const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    // const [status, setStatus] = React.useState('iddle')
    // const [error, setError] = React.useState(null)
    const errorMessage = useActionData()
    const message =useLoaderData()
    const navigation = useNavigation()
    //  const navigate = useNavigate()

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setStatus('submitting')
    //     setError(null)
    //    loginUser(loginFormData)
    //      .then(data =>{
    //         navigate('/host',{ replace: true })
    //     } 
    //         )
    //     //  .catch(err =>setError(err))
    //      .finally(()=>setStatus('iddle'))
        
    //  }

    //  function handleChange(e) {
    //      const { name, value } = e.target
    //      setLoginFormData(prev => ({
    //          ...prev,
    //          [name]: value
    //      }))
    //  }
  return (
    <div>
    <h1>Sign in to your account</h1>
     {message && <h2 className="text-red-500">{message}</h2>}
    {/* {error && <h3 className="text-red-500">{error.message}</h3>}  */}
    {errorMessage && <h3 className="text-red-500">{errorMessage}</h3>}
    <Form method='post' className="login-form">
                <input
                    name="email"
                    // onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    // value={loginFormData.email}
                />
                <input
                    name="password"
                    // onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    // value={loginFormData.password}
                />
                {/* <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button> */}
                  <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
      
    </div>
  )
}

export default Login
