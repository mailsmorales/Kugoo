import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { Layout } from "./components/Layout/Layout";
import { ServicePage } from "./Pages/ServicePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="service" element={<ServicePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
