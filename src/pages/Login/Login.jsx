
import Footer from '../../components/Footer/Footer'
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <main style={{ flex: 1, padding: '2rem' }}>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}