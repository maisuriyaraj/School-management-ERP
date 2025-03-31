import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthLayout />} >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
};

export default AppRoutes;
