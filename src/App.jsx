import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom"
import { useContext } from "react"

// PAGES & COMPONENTS
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"

// UTILS
import ScrollTop from "./utils/ScrollTop"
import { AppContext } from "./contexts/AppContext"

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinner />
  }
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
