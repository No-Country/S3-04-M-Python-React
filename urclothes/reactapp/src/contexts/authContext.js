import React, { createContext, useState, useCallback, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {provider} from '../components/firebase/firebase';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth';

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
    const [user, setUser ] = useState('');
    console.log(user)

    //! Estan creados las funciones y disponible para registro y login de usuarios 
    //! con email y contraseña
    //TODO: pero no reciben ninguna informacion del usuario hay que pasar los datos 
    //TODO: del usuario.
    const registroEmailyPassword = useCallback(function(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    });
    const loginEmailyPassword = useCallback(function(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true);
    })

    // funcion para registro con google 
    const loginGoogle = useCallback(function() {
        signInWithPopup(auth, provider).then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setIsAuthenticated(true) 
            setUToken(token)
            window.localStorage.setItem(uToken, true);
            setUserName(user.displayName);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email; // error.customData.email
            const credential = GoogleAuthProvider.credentialFromError(error);
            // auth.credentialFromError(error)
            console.log(errorCode, errorMessage, email, credential);
        });

        //! borrar esta seccion del codigo
        // setIsAuthenticated(true) 
        // window.localStorage.setItem(uToken, true);
    }, []);

    //? Login con Facebook es similar al de Google lo que se necesita 
    //TODO: es un codigo KEY
    const loginFacebook = useCallback(function() {
        setIsAuthenticated(true)
    }, []);

    // Funcion de logout de todas las cuentas registradas.
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


    // Para tomar los datos del usuario Nombre, email, etc.
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        if (currentUser) {
            setIsAuthenticated(true)
            setUserName(currentUser.displayName)
        }
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    
        

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