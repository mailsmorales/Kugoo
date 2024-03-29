import { Route, Routes } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
