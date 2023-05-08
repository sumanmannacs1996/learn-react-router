import React, { useState } from 'react'
import { useAuth } from '../auth'
import { useNavigate, useLocation } from 'react-router-dom'

function Login() {
    const [name, setName] = useState('')
    const { user, login, logout } = useAuth()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const navigate = useNavigate()
    const handleLogin = () => {
        login(name)
        navigate(redirectPath, { replace: true })
    }
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login