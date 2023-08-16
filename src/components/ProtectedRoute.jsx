import { Navigate, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";


const ProtectedRoute = ({ isAuthenticated }) => {

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )

}
export default ProtectedRoute;