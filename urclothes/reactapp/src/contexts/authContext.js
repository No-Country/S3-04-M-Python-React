import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import {provider} from '../components/firebase/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const MY_AUTH_APP_KEY = 'MY_AUTH_APP_KEY';

export const AuthContext = createContext();

//Firebase
const auth = getAuth();

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        window.localStorage.getItem(MY_AUTH_APP_KEY) ?? false
        );
    const [uToken, setUToken] = useState('');
    const [userName, setUserName] = useState('');

    const loginGoogle = useCallback(function() {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token);
            console.log(user);
            setIsAuthenticated(true) 
            setUToken(token)
            window.localStorage.setItem(uToken, true);
            setUserName(user.displayName);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = auth.credentialFromError(error);
    
            console.log(errorCode, errorMessage, email, credential);
        });

        //! borrar esta seccion del codigo
        // setIsAuthenticated(true) 
        // window.localStorage.setItem(uToken, true);
    }, []);

    const loginFacebook = useCallback(function() {
        setIsAuthenticated(true)
    }, []);

    const logout = useCallback(function() {
        signOut(auth).then(() => {
            window.localStorage.removeItem(uToken);
            setIsAuthenticated(false) 
            console.log('logout');
        }).catch(error => {
            console.log(error);
        })

        //! borrar esta seccion del codigo
        // window.localStorage.removeItem(uToken);
        // setIsAuthenticated(false) 
    }, []);

    const value = useMemo(
        () => ({
            loginGoogle, 
            logout,
            isAuthenticated,
            userName,
            loginFacebook
        }),[ loginGoogle, logout, isAuthenticated, userName, loginFacebook]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext);
}