import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import Homepage from "./Pages/Homepage"
import AuthCallbackPage from "./Pages/AuthCallbackPage"
import UserProfilePage from "./Pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ManageRestaurantPage from "./Pages/ManageRestaurantPage"

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Layout showHero><Homepage /></Layout>} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
          <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage /></Layout>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes
