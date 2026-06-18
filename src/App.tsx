import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CartProvider } from "./context/CartContext";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<CartPage />} path="/koszyk" />
            <Route element={<PrivacyPage />} path="/polityka-prywatnosci" />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
