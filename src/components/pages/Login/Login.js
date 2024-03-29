import { useState } from 'react';
import "./Login.css"
import Button from '../../common/Button/Button';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs('')
  }
  return (
    <div>
      <h1 className='login-heading'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className='form-group' >
            <label className='input-label' htmlFor="username"><b>Enter Username</b></label>
            <input className='input-field' type="text"
              placeholder="Enter Username"
              id="username"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              required></input>
          </div>
          <div className='form-group'>
            <label className='input-label' htmlFor="password"><b>Enter Password</b></label>
            <input className='input-field' type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              required></input>
          </div>
          <div className='form-group'>
            <Button type="submit" buttonName="Login" />
          </div>
        </div>
      </form>
    </div>);
}

export default Login;