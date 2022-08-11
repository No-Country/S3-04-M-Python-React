import {Navigate, Outlet} from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';
import {LOGIN} from '../../config/routes/path';

export default function PrivateRouter() {
    const {isAuthenticated} = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN}/>
    } 

    
    return <Outlet />
}