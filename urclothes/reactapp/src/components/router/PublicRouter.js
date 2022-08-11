import {Navigate, Outlet} from 'react-router';
import {useAuthContext} from '../../contexts/authContext';
import {HOME} from '../../config/routes/path';

export default function PublicRouter() {
    const {isAuthenticated} = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={HOME}/>
    }

    
    return <Outlet />
}