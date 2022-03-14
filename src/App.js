import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Assignment from "./pages/Assignment";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  const [btcPrice, SetBtcPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBtcPrice() {
      let res = await fetch("https://blockchain.info/ticker");
      let data = await res.json();
      SetBtcPrice(data);
      console.log(data);
    }

    fetchBtcPrice();
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <CustomNavbar />

      {loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home data={btcPrice} />} />
          <Route path="task" element={<Assignment />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
