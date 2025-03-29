import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/common/Home";
import { RootLayout } from "./components/layout/MainLayout";
import NotFound from "./pages/common/NotFound";
import Category from "./pages/product/Category";
import ProductById from "./pages/product/ProductById";
import Products from "./pages/product/Product";
import SignUp from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import { CheckAuth } from "./components/layout/CheckAuth";
import { useAppDispatch, useTypedSelector } from "./store/store";
import { useEffect } from "react";
import { checkAuth, setAuthenticated } from "./store/auth/authSlice";
import Loading from "./components/app-ui/Loading";
import Cart from "./pages/user/Cart";
import Favorite from "./pages/user/Favorite";
import Profile from "./pages/user/Profile";
import Success from "./pages/payment/Success";
import Cancel from "./pages/payment/Cancel";
import Orders from "./pages/user/Orders";
import PasswordResetPage from "./pages/auth/ResetPassword";

function App() {
  const { isAuthenticated, isLoading, user } = useTypedSelector(
    (state) => state.auth
  );
  const location = useLocation();
  const dispatch = useAppDispatch();

  const from = location.state?.from || "/";

  useEffect(() => {
    if (user === null) {
      dispatch(setAuthenticated(false));
    } else {
      dispatch(checkAuth());
    }
  }, [dispatch, user]);
  if (isLoading) return <Loading />;

  return (
    <Routes>
      {/* Protected Routes - Wrapped with CheckAuth */}
      <Route
        element={
          <CheckAuth isAuthenticated={isAuthenticated} redirectPath={from} />
        }
      >
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:id" element={<ProductById />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="user" element={<Profile />} />
          <Route path="orders" element={<Orders />} />

          {/* Public Routes */}
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Route>

      <Route element={<RootLayout />}>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
