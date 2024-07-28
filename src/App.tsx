import { Routes, Route } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./pages/Home"
import AddCustomerPage from "./pages/AddCustomer"
import CustomersListPage from "./pages/CustomersList"
import FavoritesPage from "./pages/Favorites"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
        <Route path="/customers" element={<CustomersListPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  )
}

export default App
