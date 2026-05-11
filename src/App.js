import './App.css';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RoutesApp from './Routes.jsx';

function App() {
  let content;
  let isLoggedIn = true;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div className="App">
      <RoutesApp />
      <header>
        <h1>Hello, React!</h1>
        <div>
          {content}
        </div>
      </header>
    </div>
  );
}

export default App;
