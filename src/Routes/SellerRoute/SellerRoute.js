import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loader from "../../Loader/Loader";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;