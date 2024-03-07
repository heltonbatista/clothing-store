import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Athentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I'm the shop page</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Athentication />} />
      </Route>
    </Routes>
  );
};

export default App;
