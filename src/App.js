import { useState } from "react";
import About from "./pages/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#252933";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "success")
    }

    else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#252933";
      showAlert("Light mode has been enabled", "success")
    }

  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
