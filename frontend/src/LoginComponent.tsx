import {Transition} from '@uirouter/react';
import React, {useState} from 'react';
import {authorize} from "./AuthService";
import './LoginComponent.css';

export function Login(props: { transition: Transition }) {
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");

    let auth = async function () {
        let response = await authorize(login, password);
        if (response) {
            const {stateService} = props.transition.router;
            stateService.go("home");
        }
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="username" className="field" value={login}
                       onChange={e => setLogin(e.target.value)}/>
                <input type="password" placeholder="password" className="field" value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <input type="button" value="login" className="btn" onClick={auth}/>
            </form>
        </div>
    );
}
