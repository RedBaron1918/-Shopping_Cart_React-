import {Routes, Route} from 'react-router';
import {Container} from 'react-bootstrap';
import Store from './pages/Store.jsx';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Cart/>
    <Container className='mb-4'>

        <Routes>
            <Route path="/" element={<Store />} />
            <Route path="/about" element={<About />} />
        </Routes>

    </Container>
    </>
  )
}

export default App