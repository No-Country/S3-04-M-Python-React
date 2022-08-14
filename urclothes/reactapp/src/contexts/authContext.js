import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';

const MY_AUTH_APP_KEY = 'MY_AUTH_APP_KEY';

export const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        window.localStorage.getItem(MY_AUTH_APP_KEY) ?? false
        );

    const login = useCallback(function() {
        window.localStorage.setItem(MY_AUTH_APP_KEY, true);
        setIsAuthenticated(true) 
    }, []);

    const logout = useCallback(function() {
        window.localStorage.removeItem(MY_AUTH_APP_KEY);
        setIsAuthenticated(false) 
    }, []);

    const value = useMemo(
        () => ({
            login, 
            logout,
            isAuthenticated
        }),[ login, logout, isAuthenticated]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext);
}