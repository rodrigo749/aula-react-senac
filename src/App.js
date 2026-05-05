import './App.css';
import MyButton from './components/Button/Button.jsx';
import AboutPage from './components/About/About.jsx';
import Profile from './components/Profile/Profile.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

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
      <header className="App-header">
        <h1>Hello, React!</h1>
        <div>
          {content}
        </div>
        <Profile />
        <MyButton />
        <AboutPage />
      </header>
    </div>
  );
}

export default App;
