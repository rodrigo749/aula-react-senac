
import Footer from '../../components/Footer/Footer';

export default function Login() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <main style={{ flex: 1, padding: '2rem' }}>
        <h1>Login</h1>
        <p>Olá.<br />Como vai?</p>
      </main>

      <Footer />
    </div>
  );
}