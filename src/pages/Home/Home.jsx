import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () =>{
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>Página Inicial</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/profile">Usuario</Link>
            </li>
          </ul>
        </nav>
      </main>

      <Footer />
    </div>
  );
}

export default Home;