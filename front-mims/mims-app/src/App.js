import Inventario from './Pages/Inventario';
import './App.css';
import Container from 'react-bootstrap/Container';
import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Layout>
      <Container>
        <Routes>
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/locaciones" element={<Inventario />} />
          <Route path="/tipos-de-joya" element={<Inventario />} />
          <Route path="/joyas" element={<Inventario />} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
