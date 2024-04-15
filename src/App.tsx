import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./components/home/home"
import Morning from "./components/morning/morning"
import Salat from "./components/salat/salat"
import Night from "./components/night/night"
import Sleep from "./components/sleep/sleep"
import AdkarContextProvider from "./context"

function App() {
  return <AdkarContextProvider>
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/morning" element = {<Morning />} />
        <Route path="/night" element = {<Night />} />
        <Route path="/salat" element = {<Salat />} />
        <Route path="/sleep" element = {<Sleep />} />
      </Routes>
    </Router>
  </AdkarContextProvider>
}

export default App
