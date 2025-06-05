
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
function App() {
 
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />         {/* shows Home on '/' */}
     {/* shows About on '/about' */}
      </Routes>
    </Router>
   </>
  )
}

export default App
