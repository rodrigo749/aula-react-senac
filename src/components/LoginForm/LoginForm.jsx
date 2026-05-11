import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <div className="login-header">
          <span className="login-icon" aria-hidden="true">🌟</span>
          <h1 className="login-title">MyApp</h1>
          <p className="login-subtitle">Entre na sua conta</p>
        </div>

        <div className="login-field">
          <label htmlFor="usuario" className="login-label">Usuário</label>
          <input
            id="usuario"
            type="text"
            className="login-input"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <div className="login-field">
          <label htmlFor="senha" className="login-label">Senha</label>
          <div className="login-input-wrapper">
            <input
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              className="login-input"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="login-toggle-senha"
              onClick={() => setMostrarSenha((v) => !v)}
              aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              {mostrarSenha ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button type="submit" className="login-btn">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;