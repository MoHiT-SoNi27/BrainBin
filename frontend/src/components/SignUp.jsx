import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    const navigate = useNavigate();

    const handleSubit = async (e)=>{
        e.preventDefault();
        const reapose = await fetch("http://localhost:5000/api/auth/createuser", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });

        const json = await reapose.json();
        console.log(json);
        //save the auth token and redirect
        localStorage.setItem('token', json.authToken);
        navigate("/");
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    };

  return (
    <div>
      <form onSubmit={handleSubit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name" name="name" value={credentials.name} aria-describedby="emailHelp" onChange={onChange}></input>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} required></input>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} minLength={5} required></input>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
