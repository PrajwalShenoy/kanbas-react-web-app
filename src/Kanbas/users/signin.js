import * as client from './client.js';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Signin() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        // navigate('../Account');
        console.log("User signed in");
        console.log(user);
        navigate('/Kanbas/Account');
        const redirectedUrl = window.location.href;
        console.log("Redirected to:", redirectedUrl);
        console.log("Redirected to Account");
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "400px" }}>
            <h1>Signin</h1>
            <input type="text" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            <button onClick={signin}>Signin</button>
            <Link to="../signup">Sign Up</Link>
        </div>
    );
}

export default Signin;