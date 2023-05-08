import React from 'react'
import { useAuth } from '../auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const { user, login, logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <div>
            Welcome {user}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile