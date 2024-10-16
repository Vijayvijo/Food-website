import React, { useState, createContext, useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

// AuthContext to manage authentication state
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccessMessage('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    login(); // Call login function from context
    alert('Login successful!');
    setEmail('');
    setPassword('');
    setError('');
    setSuccessMessage('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    alert('Sign Up successful!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccessMessage('');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setSuccessMessage('A reset password link has been sent to your email.');
    setForgotPassword(false);
    setShowResetPassword(true);
    setEmail('');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword) {
      setError('Please enter a new password');
      return;
    }
    alert('Password has been reset successfully!');
    setNewPassword('');
    setShowResetPassword(false);
    setIsLogin(true);
  };

  return (
    <div className="login-body">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="login-box">
                  {forgotPassword ? (
                    <form onSubmit={handleForgotPassword}>
                      <h2 className="text-center">Forgot Password</h2>
                      {error && <div className="alert alert-danger">{error}</div>}
                      {successMessage && <div className="alert alert-success">{successMessage}</div>}
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control forgot-password-input"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block mt-3">
                        Send Reset Link
                      </button>
                      <div className="text-center mt-3">
                        <button type="button" className="btn btn-link p-0" onClick={() => setForgotPassword(false)}>
                          Back to Login
                        </button>
                      </div>
                    </form>
                  ) : showResetPassword ? (
                    <form onSubmit={handleResetPassword}>
                      <h2 className="text-center">Reset Password</h2>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                          type="password"
                          className="form-control reset-password-input"
                          id="newPassword"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block mt-3">
                        Reset Password
                      </button>
                      <div className="text-center mt-3">
                        <button type="button" className="btn btn-link p-0" onClick={() => setShowResetPassword(false)}>
                          Back to Login
                        </button>
                      </div>
                    </form>
                  ) : isAuthenticated ? (
                    <div className="text-center">
                      <h2>Welcome!</h2>
                      <button className="btn btn-danger" onClick={logout}>
                        Logout
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={isLogin ? handleLogin : handleSignUp}>
                      <h2 className="text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                      {error && <div className="alert alert-danger">{error}</div>}
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control email-input"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control password-input"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {!isLogin && (
                        <div className="form-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            type="password"
                            className="form-control confirm-password-input"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                      )}
                      <div className="text-center mt-3">
                        <button type="submit" className="btn btn-primary btn-block mt-3">
                          {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <button type="button" className="btn btn-link p-0 float-right" onClick={() => setForgotPassword(true)}>
                          Forgot Password?
                        </button>
                      </div>
                      <p className="text-center mt-2">OR</p>
                      <div className="text-center mt-3">
                        <button className="btn btn-outline-danger btn-block mt-2">
                          <FaGoogle className="mr-2" /> {isLogin ? 'Login with Google' : 'Sign Up with Google'}
                        </button>
                      </div>
                      <div className="text-center mt-3">
                        <p>
                          {isLogin ? "Don't have an account?" : "Already have an account?"}
                          <button type="button" className="btn btn-link p-0" onClick={handleToggle}>
                            {isLogin ? ' Sign Up' : ' Login'}
                          </button>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
