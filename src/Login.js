import React from 'react'

function Login(props) {
    const { email, 
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError } = props;

    return (
        <section className='login'>
            <div className="loginContainer">
                <label>Email</label>
                <input 
                type="text" 
                autofocus="true" required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="errorMessage">{emailError}</p>
                <label>Password</label>
                <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <p className="errorMessage">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have na account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
