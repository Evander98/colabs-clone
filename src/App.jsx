import "./styles/style.scss";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Services } from "./pages/Services";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
