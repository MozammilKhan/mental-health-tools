import React, { useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/login';
import Activitytracker from './components/activity_tracker';
import DysfunctionalThoughts from './components/dysfunctional_thoughts';
import ActivationMethods from './components/self-activation_methods';
import {SessionContext, getSessionCookie} from "./session";


function App() {
    const [session, setSession] = useState(getSessionCookie());
    useEffect(
        () => {
            setSession(getSessionCookie());
        },
        []
    );
    return (
        <SessionContext.Provider value={session}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/methods" component={ActivationMethods}/>
                    <Route path="/activitytracker" component={Activitytracker}/>
                    <Route path="/thoughts" component={DysfunctionalThoughts}/>
                </div>
            </BrowserRouter>
        </SessionContext.Provider>

    );
}

export default App;
