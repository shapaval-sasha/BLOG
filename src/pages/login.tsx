import React, { useState } from 'react';
import LoginPass from '../components/auth/LoginPass';
import { Link } from 'react-router-dom';

const Login = () => {
  const [sms, setSms] = useState(false);

  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Login</h3>

        <LoginPass />

        <small className="row my-2 text-primary" style={{ cursor: 'pointer' }}>
          <span className="col-6">
            <Link to="/forgot_password">Forgot password?</Link>
          </span>

          <span className="col-6 text-end" onClick={()=>{setSms(!sms)}}>
            {sms ? 'Sign in with password' : 'Sign in with SMS'}
          </span>
        </small>

        <p>
          You do not have account?
          <Link to='/register' style={{color:'red'}}>
          {` Register now`}
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
