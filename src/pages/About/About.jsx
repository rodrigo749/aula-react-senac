import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>Sobre</h1>
        <p>Olá.<br />Como vai?</p>
      </main>

      <Footer />
    </div>
  );
}