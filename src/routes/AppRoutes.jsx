import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import Login from '../pages/auth/login';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthLayout />} >
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;
