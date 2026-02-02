import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Summary from './pages/Summary';
import UserDashboard from './pages/UserDashboard';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password_reset" element={<PasswordReset />} />
            <Route path="/user_dashboard" element={<UserDashboard />} />
            <Route path="/admin_dashboard" element={<AdminDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/summary" element={<Summary />} />
        </Routes>
    );
}

export default App;
